// library imports
import React, { useState, useEffect } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import axios from 'axios'
import jwtDecode from 'jwt-decode'
// route components
import Signin from '../components/signin/Signin';
import Signup from '../components/signup/Signup';
import Profile from '../components/profile/Profile';
import AccountInfo from '../components/accountInfo/AccountInfo';
import ContactForm from '../components/contact/ContactForm';
import Hub from '../components/hub/Hub';
import StripeParent from '../components/stripe/StripeParent/StripeParent';
import NotFound from '../components/notfound404/NotFound.jsx';
import Tutorial from '../components/tutorial/Tutorial.jsx';
import StartPage from '../components/startPages/StartPage.jsx';
import LoggedOutStartPage from '../components/startPages/LoggedOutStartPage.jsx';
// context api
import { UserContext } from '../contexts/UserContext';

// initialize google analytics using history to track page changes
ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
const browserHistory = createBrowserHistory();
browserHistory.listen((location, action) => {
	ReactGA.pageview(location.pathname + location.search);
}, []);

const Routers = ({ location }) => {
	const currentKey = location.pathname.split('/')[1] || '/';
	const timeout = { enter: 1300, exit: 200 };
	const [loggedInUser, setLoggedInUser] = useState({});

	// populate the user context if token exists
	useEffect(() => {
		if (localStorage.getItem('token')) {
			const decoded = jwtDecode(localStorage.getItem('token'))
			axios
			.get(`https://infinite-meadow-87721.herokuapp.com/users/${decoded.subject}`)
			.then(res => setLoggedInUser(res.data))
			.catch(err => console.log('There was an error verifying the stored token.'))
		}
	}, [])

	// will only run once to grab initial page start and will run again for hard refreshes; all other tracking for page changes occurs innately
	useEffect(() => {
		ReactGA.pageview(window.location.pathName + window.location.search);
	}, []);

	return (
		<>
			<section className='page-main-inner'>
				<UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
					<Switch location={location}>
						<Route path='/' exact component={localStorage.getItem('token') ? StartPage : LoggedOutStartPage} />
						{/* <Route path='/' exact component={Signup} /> */}
						<Route path='/signup' exact component={Signup} />
						<Route path='/signin' exact component={Signin} />
						<Route path='/hub' exact component={Hub} />
						<Route path='/account' exact component={AccountInfo} />
						<Route path='/contact' component={ContactForm} />
						{/* <Route path='/loggedinstartpage' component={StartPage} />
						<Route path='/loggedoutstartpage' component={LoggedOutStartPage} /> */}
						<Route path='/profile' component={Profile} />
						<Route path='/stripe' component={StripeParent} />
						<Route path='/tutorial' component={Tutorial} />
						<Route path='*' component={NotFound} />
					</Switch>
				</UserContext.Provider>
			</section>
		</>
	);
};

export default withRouter(Routers);
