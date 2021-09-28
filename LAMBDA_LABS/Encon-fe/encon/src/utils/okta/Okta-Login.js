// import React from 'react';
// import { useOktaAuth } from '@okta/okta-react';
// import { LoginWidget } from './Okta-Login-Widget.js';
// import { Redirect } from 'react-router-dom';

// export const OktaLogin = ({ baseUrl }) => {
// 	const { authService, authState } = useOktaAuth();

// 	baseUrl = 'https://dev-208626.okta.com';

// 	const onSuccess = async (res) => {
// 		authService.login('/profile');
// 		authService.redirect({
// 			sessionToken: res.session.token,
// 		});
// 	};

// 	return authState.isAuthenticated ? (
// 		<Redirect to='/profile' />
// 	) : (
// 		<div>
// 			<LoginWidget
// 				baseUrl='https://dev-208626.okta.com'
// 				onSuccess={onSuccess}
// 			/>
// 		</div>
// 	);
// };
