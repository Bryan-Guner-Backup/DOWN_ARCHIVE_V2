import React, { useState } from 'react';
import './App.scss';
import { PrivateRoute } from './utils/auth/PrivateRoute.js';
import { Route } from 'react-router-dom';
import { Navigation } from './components/mobile/Navigation.js';
import { LandingPage } from './components/mobile/Landing-Page.js';
import { LogoHeader } from './components/mobile/Logo-Header.js';
import { DesktopView } from './components/desktop/Desktop-View.js';
import MediaQuery from 'react-responsive';
import { UserContext } from './context/UserContext.js';
import { Register } from './components/mobile/Register';
import { Login } from './components/mobile/Login';
import { DesktopNav } from './components/desktop/Desktop-Nav.js';
import { Dashboard } from './components/mobile/Dashboard';
import { UserInput } from './components/mobile/UserInput';
import { DesktopHeader } from './components/desktop/Desktop-Header';

const App = () => {
	const user = useState({
		name: '',
		email: '',
		password: '',
		state: '',
	});

	return (
		<div className='App'>
			<UserContext.Provider value={{ user }}>
				<MediaQuery maxDeviceWidth={1025}>
					<Navigation loggedIn={true} />
				</MediaQuery>
				<LogoHeader />
				<Route exact path='/'>
					<MediaQuery minDeviceWidth={1025}>
						<DesktopNav loggedIn={true} />
						<DesktopHeader />
						<DesktopView />
					</MediaQuery>
					<MediaQuery maxDeviceWidth={1025}>
						<LandingPage />
					</MediaQuery>
				</Route>
				<Route path='/login'>
					<MediaQuery maxDeviceWidth={1025}>
						<Login />
					</MediaQuery>
				</Route>
				<Route path='/register'>
					<MediaQuery maxDeviceWidth={1025}>
						<Register />
					</MediaQuery>
				</Route>
				<PrivateRoute path='/userInput' component={UserInput} />
				<PrivateRoute path='/profile' component={Dashboard} />
			</UserContext.Provider>
		</div>
	);
};

export default App;
