import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

let ApplyButton = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link to={`/search/apply/${props.grant_id}`}>
        <Button variant="contained" color="primary">
          Apply Now!!
        </Button>
      </Link>
    </div>
  );
};

export default ApplyButton;
