import React from 'react';
import '../../styles/desktop/Desktop-Nav.scss';
import logo from '../../assets/EnCon-logo.png';
import { NavbarBrand, NavLink } from 'reactstrap';

export const DesktopNav = ({ loggedIn }) => {
	const logOut = () => {
		localStorage.removeItem('AUTH_TOKEN');
	};

	return (
		<div>
			<div className='desktop-nav-container'>
				<NavbarBrand href='/'>
					<img className='desktop-encon-logo' src={logo} alt='Logo' />
				</NavbarBrand>
				<div className='desktop-nav-link-container'>
					<NavLink className='desktop-nav-link' href='/'>
						Home
					</NavLink>
					<NavLink className='desktop-nav-link' href='/'>
						Help
					</NavLink>
					{loggedIn && localStorage.getItem('AUTH_TOKEN') !== null && (
						<NavLink className='desktop-nav-link' href='/profile'>
							Profile
						</NavLink>
					)}
					{loggedIn && localStorage.getItem('AUTH_TOKEN') !== null && (
						<NavLink className='desktop-nav-link' href='/' onClick={logOut}>
							Logout
						</NavLink>
					)}
				</div>
			</div>
		</div>
	);
};
