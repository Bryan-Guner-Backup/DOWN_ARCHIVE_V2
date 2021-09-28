import React from 'react'
import Navbar from '../navbar/Navbar'
import PersonCard from './PersonCard'

function About (props) {
  return (
    <div>
      <Navbar />
      <div className="container" data-test="aboutUs-container">
        <h1>Meet the Crew</h1>
        <PersonCard />
      </div>
    </div>
  )
}

export default About
