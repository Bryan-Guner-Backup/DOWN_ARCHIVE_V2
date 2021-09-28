// library imports
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
// non-library imports
import { signUpThroughFirebase } from '../../firebase/firebase.utils.js'
import { validEmailRegex, validateForm } from '../../utils/formValidation'
import { UserContext } from '../../contexts/UserContext'
import passwordReveal from '../../assets/eye-solid.svg'
import google from '../../assets/google.svg';
import facebook from '../../assets/facebook.svg';
import nerdFirefly from '../../assets/WearingNerdGlasses.png'
// css and styling
import '../../styles/index.scss'

export default class Signup extends Component {
	//context api comes alive
	static contextType = UserContext

	state = {
		credentials: {
			id: '',
			email: '',
			password: '',
			passwordCheck: '',
			tosCheck: false
		},
		errors: {
			email: '',
			password: '',
			passwordCheck: '',
			tosCheck: '',
			finalCheck: ''
		},
		passwordReveal: false,
		passwordConfirmReveal: false,
		isLoading: false
	}

	toggleReveal = (e, which) => {
		if (which)
			this.setState({
				...this.state,
				passwordConfirmReveal: !this.state.passwordConfirmReveal
			});
		else
			this.setState({
				...this.state,
				passwordReveal: !this.state.passwordReveal
			});
	};

	handleChange = e => {
		let { name, value, checked } = e.target;
		let errors = this.state.errors;
		//reset final check errors
		errors.finalCheck = ''

		// handle input validation here
		switch (name) {
			case 'email':
				if (!value.length) errors.email = 'email is a required field';
				else if (validEmailRegex.test(value) === false)
					errors.email = 'email must be a valid email';
				else errors.email = '';
				break;
			case 'password':
				if (!value.length) errors.password = 'password is a required field';
				else if (value.length < 8)
					errors.password = 'password must be at least 8 characters';
				else errors.password = '';
				break;
			case 'passwordCheck':
				if (this.state.credentials.password !== value)
					errors.passwordCheck = 'passwords do not match';
				else errors.passwordCheck = '';
				break;
			case 'tosCheck':
				if (!checked) {
					value = false;
					errors.tosCheck = 'terms and conditions must be accepted to continue';
				} else {
					value = true;
					errors.tosCheck = '';
				}
				break;
			default:
				break;
		}

		this.setState({
			errors,
			credentials: {
				...this.state.credentials,
				[name]: value
			}
		});
		// console.log(this.state.credentials)
	};

	onSubmit = e => {
		e.preventDefault();
		const { email, password, passwordCheck, tosCheck } = this.state.credentials;
		const user = {
			email: this.state.credentials.email,
			password: this.state.credentials.password
		};
		//if no error exists, make the request to the backend
		if (email && password && passwordCheck && tosCheck && validateForm(this.state.errors)) {
			axios
			.post('https://infinite-meadow-87721.herokuapp.com/auth/register', user)
			.then(res => {
				// put data into context
				this.context.setLoggedInUser(res.data.user)
				localStorage.setItem('token', res.data.token)
				//bring up the loading screen once everything is good
				this.setState({isLoading: true})
			})
			.then(() => {
				// this.props.history.push('/account')
				//push to the next page after at least 1 seconds
				console.log(this.context.loggedInUser); 
				setTimeout(() => this.props.history.push('/account'), 1000);
			})
			.catch(err => this.setState({ errors: { ...this.state.errors, finalCheck: err.response.data.error } }));
		} else {
			//go through each property and set errors accordingly
			const errors = this.state.errors
			if (!email) errors.email = 'email is a required field';
			else if (validEmailRegex.test(email) === false) errors.email = 'email must be a valid email';
			if (!password) errors.password = 'password is a required field';
			else if (password.length < 8) errors.password = 'password must be at least 8 characters';
			if (password !== passwordCheck) errors.passwordCheck = 'passwords do not match';
			if (!tosCheck) errors.tosCheck = 'terms and conditions must be accepted to continue';
			this.setState({ errors: {...errors, finalCheck: 'missing required fields'} });
		}
	};

	render() {
		if (this.state.isLoading === true){
            // console.log('hi')
            return (<div className='loading'>Loading...</div>)
        }
		return (
			<div className='sign-up-page-container'>
				<h1 className='sign-up-header'>SIGN UP</h1>
				
				<div className='sign-up-forms'>
					<form onSubmit={this.onSubmit} className='sign-up-email' noValidate>
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
									<img className='password-toggle' src={passwordReveal} alt='toggle password' onClick={(e) => this.toggleReveal(e, 0)} />
								</div>
							</label>
							<p className='form-input-error'>{this.state.errors.password}</p>

							<label className='form-input-label'>
								Confirm Password
								<div className='password-container'>
									<input
										type={this.state.passwordConfirmReveal ? 'text' : 'password'}
										name='passwordCheck'
										// placeholder='Retype password'
										value={this.state.credentials.passwordCheck}
										onChange={this.handleChange}
										required
										className='form-input'
									/>
									<img className='password-toggle' src={passwordReveal} alt='toggle password' onClick={(e) => this.toggleReveal(e, 1)} />
								</div>
							</label>
							<p className='form-input-error'>{this.state.errors.passwordCheck}</p>
						</div>

						<div className="checkbox-persist">
							<label className="checkbox-label">
								<input type="checkbox" name="tosCheck" id='tosCheck'  value={this.state.credentials.tosCheck} onChange={this.handleChange} />
								<span className="checkmark" />
							</label>

							<label className='checkbox-question' htmlFor='tosCheck'>I agree to the <Link to='/tos' className='tos-text-link'>Terms and Conditions</Link></label>
						</div>
						<p className='form-input-error'>{this.state.errors.tosCheck}</p>

						<button
							className='sign-up-button'
							type='submit'
							name='signup_submit'
						>
							SIGN UP
						</button>
						<p className='form-input-error'>{this.state.errors.finalCheck}</p>

						<div className='sign-up-automatic mobile'>
							<div className='firebase-buttons mobile'>
								<button onClick={() => signUpThroughFirebase('google', this.props.history, this.context)} className='social-sign-in google'>
									<img className='button-img' src={google} alt='sign up with google' /> SIGN IN WITH GOOGLE
								</button>

								<button onClick={() => signUpThroughFirebase('facebook', this.props.history, this.context)} className='social-sign-in facebook'>
									<img className='button-img' src={facebook} alt='sign up with facebook' /> SIGN IN WITH FACEBOOK
								</button>
							</div>
						</div>

						<Link to='/signin' className='sign-in-redirect'>I already have an account</Link>
					</form>

					<h2 className='sign-up-or'>OR</h2>
					
					<div className='sign-up-automatic'>
						<div className='firebase-buttons'>
							<button onClick={() => signUpThroughFirebase('google', this.props.history, this.context)} className='social-sign-in google'>
								<img className='button-img' src={google} alt='sign up with google' /> SIGN IN WITH GOOGLE
							</button>

							<button onClick={() => signUpThroughFirebase('facebook', this.props.history, this.context)} className='social-sign-in facebook'>
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
