import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const config = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const backend = process.env.REACT_APP_BACKEND_URL

//Initialize firebase authorization with specific config
firebase.initializeApp(config);

//Create auth shorthand
const auth = firebase.auth();

//Providers supported
const googleProvider = new firebase.auth.GoogleAuthProvider().setCustomParameters({ prompt: 'select_account' });
const facebookProvider = new firebase.auth.FacebookAuthProvider();

//Register via Firebase through a specific provider
export const signUpThroughFirebase = (providerChosen, history, context) => {
	//This provider will level up to a named one, pending button clicked
	let provider;

	//Set up switch statement to allow other types of sign ins down the road
	switch(providerChosen) {
		case 'google' :
			provider = googleProvider;
			break;
		case 'facebook' :
			provider = facebookProvider;
			break;
		default :
			alert('Provider not supported.');
			break;
	};

	//Use Firebase function to create a popup of specific provider's login
	auth.signInWithPopup(provider)
	.then(result => {
		//If it works, get the idToken from that login for verification use
		auth.currentUser.getIdToken(true)
		.then(idToken => {
			//If it works, send over token to the backend via header
			axios.get(`${backend}/auth/firebase/register`, {headers: {"token": idToken}})
			.then(res => {
				// put data into context
				context.setLoggedInUser(res.data)
				history.push('/account')
			})
			.catch(err => alert('There was an error with registering the email.'));
		})
		.catch(err => alert('There was an error retrieving a verification token from Firebase.'));
	})
	.catch(err => alert('There was an error with the login popup.'));
}

//Login via Firebase with a specific provider
export const signInThroughFirebase = (providerChosen, history, context) => {
	//This provider will level up to a named one, pending button clicked
	let provider;

	//Set up switch statement to allow other types of sign ins down the road
	switch(providerChosen) {
		case 'google' :
			provider = googleProvider;
			break;
		case 'facebook' :
			provider = facebookProvider;
			break;
		default :
			alert('Provider not supported.');
			break;
	};

	//Use Firebase function to create a popup of specific provider's login
	auth.signInWithPopup(provider)
	.then(result => {
		//If it works, get the idToken from that login for verification use
		auth.currentUser.getIdToken(true)
		.then(idToken => {
			//If it works, send over token to the backend via header
			axios.get(`${backend}/auth/firebase/login`, {headers: {"token": idToken}})
			.then(res => {
				//get decoded token information
				const decoded = jwtDecode(res.data.token)
				axios.get(`https://infinite-meadow-87721.herokuapp.com/users/${decoded.subject}`)
				.then(grabbedUser => {
					//since everything was successful, we'll store the token to localStorage now
					localStorage.setItem('token', res.data.token)
					// put data into context
					context.setLoggedInUser(grabbedUser.data)
					// history.push('/hub')
					window.location.href = 'https://projectfirefly-production.netlify.com/'
				})
				.catch(err => alert('There was an error retrieving the user information.'));
			})
			.catch(err => alert('There was an error authenticating the user.'));
		})
		.catch(err => alert('There was an error retrieving a verification token from Firebase.'));
	})
	.catch(err => alert('There was an error with the login popup.'));
}