import React from 'react'
import Paper from '@material-ui/core/Paper'

function RecommendedConnections (props) {
  return (

    <div className="rec-connect" data-test="connections">
      <div data-test="second-wrapper">
        <Paper className="paper" elevation={1}>
          <h1 className="container-header" data-test="my-connections">
          Recommended Connections
          </h1>
          <p className="container-body">Cards go here</p>
        </Paper>
      </div>
    </div>
  )
}

export default RecommendedConnections
