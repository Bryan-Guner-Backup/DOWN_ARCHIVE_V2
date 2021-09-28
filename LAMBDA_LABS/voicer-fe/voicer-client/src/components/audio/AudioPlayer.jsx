import React, { useState } from 'react'
import { useTheme } from '@material-ui/core/styles'
import AttributeForm from './AttributeForm'

import useStyles from '../voice/VoiceStyle'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import MobileStepper from '@material-ui/core/MobileStepper'
import Button from '@material-ui/core/Button'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import Chip from '@material-ui/core/Chip'


const AudioPlayer = ({ samples, crud, reset }) => {
  const classes = useStyles()
  const theme = useTheme()

  const [sampleIndex, setSampleIndex] = useState(0)

  const handleNext = (e) => {
    e.preventDefault()
    setSampleIndex(sampleIndex + 1)} 

  const handleBack = (e) => {
    e.preventDefault()
    setSampleIndex(sampleIndex - 1)}

  console.log(samples)

  return(
    <Card className={classes.sampleCard} >

      {/* TITLE */}
      <Card classes={{ root: classes.sampleTitle }}>
        <Typography variant="body2" component="h3">
          {`${samples[sampleIndex].title}`}
        </Typography>
      </Card>

      {/* TAGS */}
      {!crud ?
        <CardContent className={classes.tags}>
          {samples[sampleIndex].tags[0] !== undefined && 
            samples[sampleIndex].tags.map(tag => (
              <Chip
                classes={{
                  root: classes.chip,
                  label: classes.chip,
                }}
                label={tag}
                key={tag}
                color='secondary'
              />
            ))
          }
        </CardContent>

        :

        <AttributeForm
          className={classes.tags}
          crud={crud}
          proptags={samples[sampleIndex].tags}
          id={samples[sampleIndex].id}
          reset={reset}
        />
      }

      <CardActions className={classes.controls}>

        {/* AUDIO CONTROLS */}
        <audio 
          src={samples[sampleIndex].s3_location}
          className={classes.player}
          preload="auto" 
          controls
          controlsList="nodownload"
        />

        {/* DOT STEPPER NAV */}
        <MobileStepper
          className={classes.stepper}
          variant={(samples.length < 10) ? "dots" : "progress"}
          steps={samples.length}
          position="static"
          activeStep={sampleIndex}

          nextButton={
            <Button
              classes={{
                root: classes.button,
                disabled: classes.disabled,
              }}
              size="small"
              onClick={handleNext}
              disabled={sampleIndex === (samples.length - 1)}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>}

          backButton={
            <Button
            classes={{
              root: classes.button,
              disabled: classes.disabled,
            }}
              size="small"
              onClick={handleBack}
              disabled={sampleIndex === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>}
        />
      </CardActions>
    </Card>
  )
}

export default AudioPlayer