import React from 'react'
import './footer.css'

const Footer = ({ title }) => {
  return (
    <footer data-testid="footer" className='footer'>
      <h1 data-testid="title" className='title'>{title}</h1>
    </footer>
  )
}

export default Footer
