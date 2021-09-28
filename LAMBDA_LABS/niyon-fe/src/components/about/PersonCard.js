import React from 'react'
import teamMembers from './TeamMembers'

const PersonCard = (props) => {
  return (
    <div className="person" data-test="person-container">
      {teamMembers.map((teamMember, index) => {
        return (
          <div key={index} data-test="person-image-container">
            <a href={teamMember.link}>
              <img
                className="img2, personImg"
                src={teamMember.src}
                alt="Niyon Team Members"
              />
            </a>
            <h2>{teamMember.name}</h2>
            <p>{teamMember.position}</p>
          </div>
        )
      })}
    </div>
  )
}

export default PersonCard
