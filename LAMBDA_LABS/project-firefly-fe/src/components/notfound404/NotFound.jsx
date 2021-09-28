import React from 'react'
import './NotFound.scss'

export default function NotFound(props) {
	return (
		<div className='error'>
			<h1>404</h1>
			<p>It's not you; it's us...</p>
			<p className='smaller'>
				The page you have requested was not found. We have dispatched a team of
				highly trained monkeys to solve it.
			</p>
			<div>
				<button className='cta-button' onClick={() => props.history.push('/')}>Home</button>		
			</div>
		</div>
	)
}
