import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './LoggedOutStartPage.scss';
import WelcomeToFirefly from '../../assets/WelcomeToFireflyWithoutFirefly.svg';
import StaticFirefly from '../../assets/index1.svg';

class LoggedOutStartPage extends React.Component {
	render() {
		return (
			<div className='unlogged-container'>
				<div className='logo-box2'>
					<div className='static-fly'>
						<img src={StaticFirefly} alt='Firefly' className='static-firefly' />
					</div>
					<img
						src={WelcomeToFirefly}
						alt='WelcomeToFirefly'
						className='static-image2'
					/>
				</div>
				<div className='button-container2'>
					<button className='start-btn'>
						Start
					</button>
					<button onClick={() => this.props.history.push('/signup')} className='start2-btn'>
						Create an account
					</button>
					<button onClick={() => this.props.history.push('/signin')} className='start2-btn'>
						I already have an account
					</button>
				</div>
			</div>
		);
	}
}

export default withRouter(LoggedOutStartPage);
