// library imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode'
// non-library imports
import { signInThroughFirebase } from '../../firebase/firebase.utils.js';
import { validEmailRegex, validateForm } from '../../utils/formValidation'
import { UserContext } from '../../contexts/UserContext';
import passwordReveal from "../../assets/eye-solid.svg";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import nerdFirefly from '../../assets/WearingNerdGlasses.png'
// css and styling
import '../../styles/index.scss';

export default class Signin extends Component {
	//context api comes alive
	static contextType = UserContext

	state = {
		credentials: {
			email: '',
			password: '',
			keepLogged: false
		},
		errors: {
			email: '',
			password: '',
			finalCheck: ''
		},
		passwordReveal: false,
		isLoading: false
	}

	toggleReveal = (e) => {
		this.setState({...this.state, passwordReveal: !this.state.passwordReveal});
	}

	handleChange = e => {
		let { name, value, checked } = e.target;
		let errors = this.state.errors;
		//reset final check errors
		errors.finalCheck = ''

		// handle input validation here
		switch(name) {
			case 'email' :
				if (!value.length) errors.email = 'email is a required field';
				else if (validEmailRegex.test(value) === false) errors.email = 'email must be a valid email';
				else errors.email = '';
				break;
			case 'password' :
				if (!value.length) errors.password = 'password is a required field';
				else if (value.length < 8) errors.password = 'password must be at least 8 characters';
				else errors.password = '';
				break;
			case 'keepLogged':
				if (!checked) {
					value = false;
				} else {
					value = true;
				}
				break;
			default :
				break;
		}

		this.setState({
			errors,
			credentials: {
				...this.state.credentials,
				[name]: value
			}
		})
		// console.log(this.state.credentials)
	}

	onSubmit = e => {
		e.preventDefault()
		const { email, password } = this.state.credentials
		const user = { email: this.state.credentials.email, password: this.state.credentials.password }
		//if no error exists, make the request to the backend
		if (email && password && validateForm(this.state.errors)) {
			axios
			.post('https://infinite-meadow-87721.herokuapp.com/auth/login', user)
			.then(res => {
				//get decoded token information
				const decoded = jwtDecode(res.data.token)
				axios
				.get(`https://infinite-meadow-87721.herokuapp.com/users/${decoded.subject}`)
				.then(grabbedUser => {
					//since everything was successful, we'll store the token to localStorage now if checked
					if (this.state.credentials.keepLogged) localStorage.setItem('token', res.data.token)
					// put data into context
					this.context.setLoggedInUser(grabbedUser.data)
					//bring up the loading screen once everything is good
					this.setState({isLoading: true})
				})
				.then(() => {
					// this.props.history.push('/hub')
					// window.location.href = 'https://projectfirefly-production.netlify.com/'
					//push to the next page after at least 1 seconds
					setTimeout(() =>window.location.href = 'https://projectfirefly-production.netlify.com/', 1000);
				})
				.catch(err => this.setState({ errors: { ...this.state.errors, finalCheck: err.response.data.error } }))
			})
			.catch(err => this.setState({ errors: { ...this.state.errors, finalCheck: err.response.data.error } }));
		} else {
			//go through each property and set errors accordingly
			const errors = this.state.errors
			if (!email) errors.email = 'email is a required field';
			else if (validEmailRegex.test(email) === false) errors.email = 'email must be a valid email';
			if (!password) errors.password = 'password is a required field';
			else if (password.length < 8) errors.password = 'password must be at least 8 characters';
			this.setState({ errors: {...errors, finalCheck: 'missing required fields'} });
		}
	}

	render() {
		while (this.state.isLoading === true){
            // console.log('hi')
            return (<div className='loading'>Loading...</div>)
        }
		return (
			<div className='sign-in-page-container'>
				<h1 className='sign-in-header'>SIGN IN</h1>
				
				<div className='sign-in-forms'>
					<form onSubmit={this.onSubmit} className='sign-in-email' noValidate>
						<div className='form-input-container'>
							<label className='form-input-label'>
								Email
								<input
									type='email'
									name='email'
									// placeholder='E-mail'
									value={this.state.credentials.email}
									onChange={this.handleChange}
									className='form-input'
									required
								/>
							</label>
							<p className='form-input-error'>{this.state.errors.email}</p>

							<label className='form-input-label'>
								Password
								<div className='password-container'>
									<input
										type={this.state.passwordReveal ? 'text' : 'password'}
										name='password'
										// placeholder='Password'
										value={this.state.credentials.password}
										onChange={this.handleChange}
										required
										className='form-input'
									/>
									<img className='password-toggle' src={passwordReveal} alt='toggle password' onClick={(e) => this.toggleReveal(e)} />
								</div>
							</label>
							<p className='form-input-error'>{this.state.errors.password}</p>
						</div>

						<div className="checkbox-persist">
							<label className="checkbox-label">
								<input type="checkbox" name="keepLogged" id='keepLogged' value={this.state.keepLogged} onChange={this.handleChange} />
								<span className="checkmark" />
							</label>

							<label className='checkbox-question' htmlFor='keepLogged'>Keep me signed in</label>
						</div>

						<button
							className='sign-in-button'
							type='submit'
							name='signin_submit'
						>
							SIGN IN
						</button>
						<p className='form-input-error'>{this.state.errors.finalCheck}</p>

						<div className='sign-in-automatic mobile'>
							<div className='firebase-buttons mobile'>
								<button onClick={() => signInThroughFirebase('google', this.props.history, this.context)} className='social-sign-in google'>
									<img className='button-img' src={google} alt='sign in with google' /> SIGN IN WITH GOOGLE
								</button>

								<button onClick={() => signInThroughFirebase('facebook', this.props.history, this.context)} className='social-sign-in facebook'>
									<img className='button-img' src={facebook} alt='sign in with facebook' /> SIGN IN WITH FACEBOOK
								</button>
							</div>
						</div>

						<Link to='/signup' className='sign-in-redirect'>Need an account? Sign up now!</Link>
					</form>

					<h2 className='sign-in-or'>OR</h2>

					<div className='sign-in-automatic'>
						<div className='firebase-buttons'>
							<button onClick={() => signInThroughFirebase('google', this.props.history, this.context)} className='social-sign-in google'>
								<img className='button-img' src={google} alt='sign up with google' /> SIGN IN WITH GOOGLE
							</button>

							<button onClick={() => signInThroughFirebase('facebook', this.props.history, this.context)} className='social-sign-in facebook'>
								<img className='button-img' src={facebook} alt='sign up with facebook' /> SIGN IN WITH FACEBOOK
							</button>
						</div>
						
						<img className='nerd-firefly' src={nerdFirefly} alt='Firefly wearing glasses'/>
					</div>
				</div>
			</div>
		)
	}
}
