import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
    // height: 300
  }
}));

let ApplyFormBackground = props => {
  const classes = useStyles();

  return <Paper className={classes.root}>{props.children}</Paper>;
};

export default ApplyFormBackground;
