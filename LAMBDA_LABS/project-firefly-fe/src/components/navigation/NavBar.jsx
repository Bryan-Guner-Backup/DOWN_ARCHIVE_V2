import React, { Component } from 'react'
import { Link } from 'react-router-dom'
const Logo = require('../../assets/WearingNerdGlasses.png')

export default class NavBar extends Component {
   render() {
      return (
         <nav id="navigation">
            <div className='nav-left'>
               <span className="fire-logo"><img src={Logo} alt="Firefly Logo" style={{ width: '100px', marginTop: '-15px' }} /></span>
               <a href="/" className="logo">Project FireFly<span>&copy;</span></a>
            </div>
            <ul className="links">
               <li style={{ margin: '4px'}}><a className="fa fa-home fa-2x" style={{ color: 'white' }} href="/">&nbsp;</a></li>
               <li className="dropdown"><a href="/" className="trigger-drop">Links<i className="arrow"></i></a>
                  <ul className="drop">
                     <li><Link to="/contact" className='router-links'>Contact</Link></li>
                     <li><Link to="/blob" className='router-links'>Empty</Link></li>
                     <li><Link to="/sempty" className='router-links'>Empty</Link></li>
                     <li><Link to="/uei" className='router-links'>Empty</Link></li>
                  </ul>
               </li>
               <li className="dropdown"><a href="/" className="trigger-drop">Accounts<i className="arrow"></i></a>
                  <ul className="drop">
                     <li><Link to="/signin" className='router-links'>Sign&nbsp;In</Link></li>
                     <li><Link to="/slogin" className='router-links'>Sign&nbsp;Up</Link></li>
                     <li><Link to="/profile" className='router-links'>Profile</Link></li>
                     <li><Link to="/signout" className='router-links'>Sign&nbsp;Out</Link></li>
                  </ul>
               </li>
            </ul>
         </nav>
      )
   }
}











