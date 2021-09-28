import React from 'react';
import '../../styles/desktop/Desktop-Header.scss';

export const DesktopHeader = () => {
	return (
		<div className='desktop-header-container'>
			<h1 className='desktop-main-header'>Welcome to EnCon!</h1>
			<p className='desktop-main-title'>Track your energy usage and spending</p>
		</div>
	);
};
