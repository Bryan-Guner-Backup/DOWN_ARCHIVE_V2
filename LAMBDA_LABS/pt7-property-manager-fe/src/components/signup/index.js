/*!
=========================================================
 * Property manager  Signup React - v1.0
=========================================================
 * Product Page:https://github.com/Lambda-School-Labs/pt7-property-manager-fe
 * Licensed under MIT (https://github.com/Lambda-School-Labs/pt7-property-manager-fe/blob/master/LICENSE)
 * Coded by Carlos Mitchell 
=========================================================
*/
import React, { useState, useContext} from "react";
import axios from "axios";
import "./SignUp.scss";
import userContext from "../../contexts/userContext";

const SignUp = (props) => {
	const {setUser}=useContext(userContext);
	const [register, setRegister] = useState({firstName:"",lastName:"",password:"",phoneNumber:"",email:"",});

	const handleChange = e => {
		setRegister({ ...register, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();

		axios.post("https://property-manager-be.herokuapp.com/auth/register", register)
			.then(res=>{ 
				//console.log(res.data.user); 
				//console.log(res.data.token); 
				sessionStorage.clear(); 
				sessionStorage.setItem('token', res.data.token); 
				sessionStorage.setItem('userID', res.data.user.id); 
				sessionStorage.setItem('firstName', res.data.user.firstName); 
				sessionStorage.setItem('lastName', res.data.user.lastName);
				sessionStorage.setItem('phoneNumber', res.data.user.phoneNumber);
				sessionStorage.setItem('role', res.data.user.role);
				sessionStorage.setItem('img', res.data.user.img); 
				setUser(res.data.user);
				props.history.push('/dashboard'); })
		document.getElementById('signUpForm').reset();
	};

	return (
		<>
		<div className='contactFormHolder main-content'>
		<h1>Create an Account</h1>
		<form id='signUpForm' className='contactForm'autoComplete="new-password" onSubmit={handleSubmit}>

		<label htmlFor='firstName'>First Name</label>
		<input 
		type="text"
		name="firstName"
		value={register.firstName}
		onChange={handleChange}
		placeholder={"First Name"}
		onFocus={e => (e.target.placeholder = "")}
		onBlur={e => (e.target.placeholder = "First Name")}
		className="First_Name" required autoFocus
		/>

		<label htmlFor='lastName'>Last Name</label>
		<input
		type="text"
		name="lastName"
		value={register.lastName}
		onChange={handleChange}
		placeholder={"Last Name"}
		onFocus={e => (e.target.placeholder = "")}
		onBlur={e => (e.target.placeholder = "Last Name")}
		className="Last_Name" required
		/>
		<label htmlFor='email'>Email</label>
		<input
		type="email"
		name="email"
		value={register.email}
		onChange={handleChange}
		placeholder={"Example@domain.com"}
		onFocus={e => (e.target.placeholder = "")}
		onBlur={e => (e.target.placeholder = "Example@domain.com")}
		className="email" required
		/>
		<label htmlFor='password'>Password</label>
		<input
		type="password"
		name="password"
		value={register.password}
		onChange={handleChange}
		placeholder={"Password"}
		onFocus={e => (e.target.placeholder = "")}
		onBlur={e => (e.target.placeholder = "Password")}
		className="password" required
		/>
		<label htmlFor='phoneNumber'>Phone Number</label>
		<input
		type="tel"
		name="phoneNumber"
		value={register.phoneNumber}
		onChange={handleChange}
		placeholder={"Phone Number"}
		onFocus={e => (e.target.placeholder = "")}
		onBlur={e => (e.target.placeholder = "Phone Number")}
		className="tel"
		/>
		<label style={{marginBottom:"20px"}} htmlFor='marital_status'>Are you a Renter or a Manager?</label>
		<div className="search_categories">
		<div className="select">
		<select
		type="checkbox"
		name="role"
		value={register.role}
		onChange={handleChange}
		className="inputField_checkbox" required
		>
		<option value="">Please choose one option</option>
		<option value="Renter">Renter</option>
		<option value="Manager">Manager</option>
		</select>
		</div>
		</div>
		<div className='buttonHolder'>
		<button className='cancelBtn' type='reset'>Cancel</button>
		<button className='submitBtn' type="submit" >Submit</button>
		</div>
		</form>
		</div>
		</>
	);
};

export default SignUp;
