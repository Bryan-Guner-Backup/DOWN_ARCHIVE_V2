import React from 'react'
import Paper from '@material-ui/core/Paper'
import SwipeTabsConnections from './SwipeTabsConnections'

export default function Connections (props) {
  // console.log('connection props', props)
  return (
    <div className="connections" data-test="connections">
      <div data-test="second-wrapper">
        <Paper className="paper" elevation={1} data-test="paper">
          <h1 className="container-header" data-test="my-connections">My Connections ({props.sumConnections})</h1>
          <div>
            <SwipeTabsConnections />
          </div>
        </Paper>
      </div>
    </div>
  )
};
