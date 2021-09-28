import React from 'react'
import Paper from '@material-ui/core/Paper'
import SwipeTabsRequests from './SwipeTabsRequests'

function ConnectionRequests (props) {
  return (

    <div className="connection-req" data-test="connections">
      <div data-test="second-wrapper">
        <Paper className="paper" elevation={1}>
          <h1 className="container-header" data-test="my-connections">
          Connection Requests ({props.sumRequests})
          </h1>
          <SwipeTabsRequests/>
        </Paper>
      </div>
    </div>
  )
}

export default ConnectionRequests
