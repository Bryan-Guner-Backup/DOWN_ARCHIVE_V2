import React, { useState } from 'react';
import { Login } from '../../components/mobile/Login.js';
import { Register } from '../../components/mobile/Register.js';
import '../../styles/desktop/Desktop-Login-Register.scss';

import { TabContent, TabPane, NavLink, Nav, Card, Col } from 'reactstrap';
import classnames from 'classnames';

export const LoginRegister = () => {
	const [activeTab, setActiveTab] = useState('1');
	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};
	return (
		<div className='desktop-login-reg-container'>
			<Nav pills style={{ padding: '1rem' }}>
				<NavLink
					style={{ borderRadius: '1.25rem' }}
					className={classnames({ active: activeTab === '1' })}
					onClick={() => {
						toggle('1');
					}}
				>
					<h1 className='desktop-register-tab'>Register</h1>
				</NavLink>
				<NavLink
					style={{ borderRadius: '1.25rem' }}
					className={classnames({ active: activeTab === '2' })}
					onClick={() => {
						toggle('2');
					}}
				>
					<h1 className='desktop-login-tab'>Sign In</h1>
				</NavLink>
			</Nav>
			<TabContent activeTab={activeTab}>
				<TabPane tabId='1'>
					<Col xl='13'>
						<Card className='desktop-register-card' style={{ border: 'none' }}>
							<Register />
						</Card>
					</Col>
				</TabPane>

				<TabPane tabId='2'>
					<Col xl='13'>
						<Card className='desktop-login-card' style={{ border: 'none' }}>
							<Login />
						</Card>
					</Col>
				</TabPane>
			</TabContent>
		</div>
	);
};
