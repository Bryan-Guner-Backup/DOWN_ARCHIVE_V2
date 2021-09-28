// Import react and any dependencies necessary 
import React from 'react'
import Tutorial1 from '../../assets/tutorial-images/Step3Tutorial-1.png'
import Tutorial2 from '../../assets/tutorial-images/Step3Tutorial-2.png'

// Styles
import '../../styles/index.scss'
// import './tutorial.scss'

export const Tutorial = (props) => {

  return (
    <div className = 'container'>
      <h1>Step 3: How It Works</h1>
      {/* <img src = {progressBar} alt = '' /> */}
      <div className = 'contentContainer'>
        <div className = 'cardContainer'>
          <div className = 'tutorialCard'>
            <h2 className = 'cardTitle'>Access My Account</h2>
            <i className="fas fa-arrow-alt-down downArrow" aria-hidden="true"></i>
            <img src = {Tutorial1} alt = '' className = 'tutorialImage' />
          </div>
          <div className = 'tutorialCard'>
            <h2 className = 'cardTitle'>Manage Account</h2>
            <img src = {Tutorial2} alt = '' className = 'tutorialImage' />
            <ul>
              <li>Manage Profiles</li>
              <li>Update Account Information</li>
              <li>Manage Payment Information</li>
            </ul>
          </div>
          <div className = 'tutorialCard'>
            <h2 className = 'cardTitle'>Start Our Adventure</h2>
            <img src = {Tutorial2} alt = '' className = 'tutorialImage' />
            <i className="fas fa-arrow-alt-up upArrow" aria-hidden="true"></i>
          </div>
        </div>
        <div className = 'btnContainer'>
          <div className = 'rowContainer'>
            <button onClick = {() => {props.history.push('/')}} className = 'whiteGreen'><span>Back</span></button>
            <button onClick = {() => {props.history.push('/profile')}} className = 'greenWhite'><span>Get Started</span></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tutorial;