import React from 'react';
import '../../styles/mobile/Calculator.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const Calculator = () => {
	/* Set State for each available input in the form and data from the promise */

	const [data, setData] = useState({});
	const [device, setDevice] = useState('');

	const valueChange = (event) => {
		setDevice(event.target.value);
	};
	const [location, setLocation] = useState({ value: 'Select' });
	const locationChange = (event) => {
		setLocation(event.target.value);
	};

	const [hours, setHours] = useState('');
	const hourChange = (event) => {
		setHours(event.target.value);
	};

	const [days, setDays] = useState('');
	const daysChange = (event) => {
		setDays(event.target.value);
	};

	/* useEffect watches the inputs change and adds it to the end of the data science api */

	useEffect(() => {
		const DAYS = `${days}`;
		const HOURS = `${hours}`;
		const STATE = `${location}`;
		const DEVICE = `${device}`;
		axios
			.get(
				`https://environment-2.eba-j6sk9zsp.us-east-1.elasticbeanstalk.com/${DEVICE}/${STATE}/${HOURS}/${DAYS}`
			)
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				console.log('wowowowow', err);
			});
	}, [days, device, hours, location]);

	return (
		<div>
			<h2 className='calc-banner'>Energy Calculator</h2>
			{/* Calculator Starts here and is a form itself */}
			<form className='calculator'>
				<h3 className='device-title'>Device</h3>
				{/* All the radio buttons begin here */}
				<div className='radio-buttons'>
					<label className='radio-label'>
						<input
							type='radio'
							name='device'
							onChange={valueChange}
							data-testid='desktop'
							value='Computer Desktop'
						/>
						<span>Desktop</span>
					</label>
					<label className='radio-label'>
						<input
							type='radio'
							name='device'
							onChange={valueChange}
							value='Washing Machine'
						/>
						<span>Washing Machine</span>
					</label>
					<label className='radio-label'>
						<input
							type='radio'
							name='device'
							onChange={valueChange}
							value='Refrigerator'
						/>
						<span>Refrigerator</span>
					</label>
					<label className='radio-label'>
						<input
							type='radio'
							name='device'
							onChange={valueChange}
							value='TV (55 in LED)'
						/>
						<span>TV</span>
					</label>
					<label className='radio-label'>
						<input
							type='radio'
							name='device'
							onChange={valueChange}
							value='Computer Laptop'
						/>
						<span>Laptop</span>
					</label>
				</div>
				{/* Radio Buttons end here */}
				{/* Location Input */}
				<h3 className='state'>
					State
					<select
						className='select-state'
						onChange={locationChange}
						value={location.value}
					>
						<option disabled selected value='Select'>
							Select
						</option>
						<option value='Alabama'>Alabama</option>
						<option value='Alaska'>Alaska</option>
						<option value='Arizona'>Arizona</option>
						<option value='Arkansas'>Arkansas</option>
						<option value='California'>California</option>
						<option value='Colorado'>Colorado</option>
						<option value='Connecticut'>Connecticut</option>
						<option value='Delaware'>Delaware</option>
						<option value='District Of Columbia'>District Of Columbia</option>
						<option value='Florida'>Florida</option>
						<option value='Georgia'>Georgia</option>
						<option value='Hawaii'>Hawaii</option>
						<option value='Idaho'>Idaho</option>
						<option value='Illinois'>Illinois</option>
						<option value='Indiana'>Indiana</option>
						<option value='Iowa'>Iowa</option>
						<option value='Kansas'>Kansas</option>
						<option value='Kentucky'>Kentucky</option>
						<option value='Louisiana'>Louisiana</option>
						<option value='Maine'>Maine</option>
						<option value='Maryland'>Maryland</option>
						<option value='Massachusetts'>Massachusetts</option>
						<option value='Michigan'>Michigan</option>
						<option value='Minnesota'>Minnesota</option>
						<option value='Mississippi'>Mississippi</option>
						<option value='Missouri'>Missouri</option>
						<option value='Montana'>Montana</option>
						<option value='Nebraska'>Nebraska</option>
						<option value='Nevada'>Nevada</option>
						<option value='New Hampshire'>New Hampshire</option>
						<option value='New Jersey'>New Jersey</option>
						<option value='New Mexico'>New Mexico</option>
						<option value='New York'>New York</option>
						<option value='North Carolina'>North Carolina</option>
						<option value='North Dakota'>North Dakota</option>
						<option value='Ohio'>Ohio</option>
						<option value='Oklahoma'>Oklahoma</option>
						<option value='Oregon'>Oregon</option>
						<option value='Pennsylvania'>Pennsylvania</option>
						<option value='Rhode Island'>Rhode Island</option>
						<option value='South Carolina'>South Carolina</option>
						<option value='South Dakota'>South Dakota</option>
						<option value='Tennessee'>Tennessee</option>
						<option value='Texas'>Texas</option>
						<option value='Utah'>Utah</option>
						<option value='Vermont'>Vermont</option>
						<option value='Virginia'>Virginia</option>
						<option value='Washington'>Washington</option>
						<option value='West Virginia'>West Virginia</option>
						<option value='Wisconsin'>Wisconsin</option>
						<option value='Wyoming '>Wyoming</option>
					</select>
				</h3>
				<h3 className='hourly-use'>Hourly Use</h3>
				{/* Hourly Use Container for Hours and Minutes */}
				<div className='daily-use'>
					<h3 className='divider'>
						<input
							type='integer'
							name='hours'
							onChange={hourChange}
							value={hours}
							data-testid='hourlyUse'
						/>
						Hours
					</h3>
				</div>
				<h3 className='weekly-use'>
					Days Per Week Used
					<input
						type='integer'
						onChange={daysChange}
						value={days}
						data-testid='daysPerWeek'
					/>
				</h3>
			</form>
			<div className='calc-output'>
				<div className='calc-below-border'>
					{/*use expression interpolation `${}` to insert output data once we connect to DS BE using axios*/}
					<div className='cost-container'>
						<h3>Cost Per Year:</h3>
						<p data-testid='costPerYear'>${data.cost_per_year}</p>
					</div>
					<div className='used-container'>
						<h3>Energy Used:</h3>
						<p data-testid='energyUsed'>{data.energy_used}kWh</p>
					</div>
				</div>
			</div>
			<section className='calc-login-register'>
				<p>
					Enjoyed using our calculator? Click below to keep track of your energy
					costs.
				</p>
				<Link className='app-buttons' to='/register'>
					Register
				</Link>
				<p>Already have an account? Login below</p>
				<Link className='app-buttons' to='/login'>
					Login
				</Link>
			</section>
		</div>
	);
};
