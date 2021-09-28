import React from 'react'

const DashSettings = () => {
  return (
    <>
      <div style={{ marginLeft: '25%', marginTop: '5%' }}>
        <h1>Settings</h1>
        <h4>Dark Mode</h4>
        <p>
          Turn dark mode on or off or set to auto and it will go to dark mode at
          the time you set.
        </p>
        <h2>Services</h2>
        <h4>Slack</h4>
        <p>Ping Catcher will review your notifications from Slack</p>
        <h4>Discord</h4>
        <p>Ping Catcher will review your notifications from Discord</p>
        <h2>Colors</h2>
        <p>Set your notification colors</p>
        <p>important - red / green / yellow-magisty</p>
        <p>review - plum / pink / passion-orange</p>
      </div>
    </>
  )
}

export default DashSettings
