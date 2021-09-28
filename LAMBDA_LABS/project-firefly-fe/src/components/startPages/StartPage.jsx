import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './StartPage.scss';
import WelcomeToFirefly from '../../assets/WelcomeToFireflyWithoutFirefly.svg';
import StaticFirefly from '../../assets/index1.svg';

class LoggedInStartPage extends React.Component {
	render() {
		return (
			<div className='start-container'>
				<div className='top-bar'>
					<Link to='/signin' onClick={() => localStorage.removeItem('token')} className='top-bar-button'>
						<i className='fa fa-home' aria-hidden='true'></i>
					</Link>

					<Link to='/profile' className='top-bar-button'>
						<i className='fa fa-user-alt' />
					</Link>
				</div>
				<div className='logo-box'>
					<div className='static-fly'>
						<img src={StaticFirefly} alt='Firefly' className='static-firefly' />
					</div>
					<img
						src={WelcomeToFirefly}
						alt='WelcomeToFirefly'
						className='static-image'
					/>
				</div>
				<div className='button-container'>
					<button className='start-btn'>
						Start
					</button>
				</div>
			</div>
		);
	}
}

export default withRouter(LoggedInStartPage);
