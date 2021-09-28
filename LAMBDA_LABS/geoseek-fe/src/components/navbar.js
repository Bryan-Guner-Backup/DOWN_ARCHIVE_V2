import React, { useEffect } from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'
import '../Logo.css'

const Nav = styled.div`
border-bottom: 3px solid black;
background-color: #30364a;
display: flex;
align-items: center;
justify-content: space-between;
height: 100px;
@media(max-width: 1190px){
  height: 250px;
  display: flex;
  flex-direction: column;
  flex wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
}
@media(max-width: 900px){
  height: 500px;
}
  div {   margin-right: 2%;  } 
  
  .button {
    margin: 0px 25px;
    font-size: 1.5rem;
    width: 150px;
    height: 50px;
    border-radius: 10px;
    background-color:#FF69B4;
    border: none;
    color: white;
    text-align: center;
    font-size: 20px;
    transition: 0.3s;
    text-decoration: none;
    cursor: pointer;
    padding:10px; 
    // opacity: 0.6;
    // transition: opacity .55s ease-in-out;
    // -moz-transition: opacity .55s ease-in-out;
    // -webkit-transition: opacity .55s ease-in-out;
   :hover {
       opacity: 1.0;
       transition: opacity .55s ease-in-out;
       -moz-transition: opacity .55s ease-in-out;
       -webkit-transition: opacity .55s ease-in-out;
       background-color:#C66DB2;
       //border: 2px solid black;
   }
} 
.link {   
  margin: 10px;
  padding: 10px;
  text-decoration: none;
  outline: none;
  font-size: 25px;
  color: #FF69B4;
  :hover {
    opacity: 1.0;
    transition: opacity .55s ease-in-out;
    -moz-transition: opacity .55s ease-in-out;
    -webkit-transition: opacity .55s ease-in-out;
    color: white;
  }
  }
  `
const ButonContainer = styled.div`
@media(max-width: 900px){
  height:300px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  
  .button{
    height: 35px;
    width: 300px;
  }
}
`

function NavBar (props) {

  const logOut = (e) => {
		e.preventDefault();
		localStorage.removeItem("token");
		window.location.reload('/');
  };
  
  let navLinks;
  if(localStorage.getItem('token')){
    navLinks=(
      <ButonContainer>
           <a className='button' href='/Map'>Map</a>
           <a className='button' href='/UserDash'>Dashboard</a>
           <a className='button' href='/CreateGem'>Create a Gem</a>
           <a className='button' href='/ViewGem' >View Gems</a>
           <a onClick={logOut} className='button' href='/'>Log Out</a>
      </ButonContainer>
    )
  }else{
    navLinks=(
      <ButonContainer>
        <a className='button' href='/Map'>Map</a>
        <Link className='button' to='/Register'>Register</Link>
        <Link className='button' to='/Login'>Log In</Link>
        <a className='button' href='/ViewGem'>View Gems</a>
      </ButonContainer>
    )
  }
  return (
    <Nav>
        <div>
          <Link to='/' className="sign">
            <span className="fast-flicker">g</span>
            <span>eos</span>
            <span className="flicker">e</span>
            <span>ek</span>
          </Link>
        </div>
        {navLinks}
    </Nav>
        
  );
};
export default NavBar;