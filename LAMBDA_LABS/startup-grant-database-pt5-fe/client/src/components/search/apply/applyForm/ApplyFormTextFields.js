import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import ApplySuccessModal from "../applyForm/ApplySuccessModal";
import ApplyFailModal from "../applyForm/ApplyFailModal";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 400
    }
  }
}));

let ApplyFormTextFields = props => {
  const classes = useStyles();
  const [value, setValue] = useState({
    worthy_because: "",
    spending_plans: "",
    mission_statement: ""
  });
  const [modal, setModal] = useState(0);

  const handleChange = event => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  // parseInt of grant id

  let user_id = parseInt(localStorage.getItem("id"));
  let newGrantId = parseInt(props.grant_id);

  const handleSubmit = event => {
    event.preventDefault();
    const data = {
      user_id: user_id,
      grant_id: newGrantId,
      ...value,
      created_at: new Date(),
      status: 1
    };

    axios
      .post(`${process.env.REACT_APP_API}/api/applications`, data)
      .then(res => {
        setModal(1);
      })
      .catch(err => {
        setModal(2);
        console.log(err);
      });

    console.log(data, "data");
  };

  return (
    <div className="container2">
      <h1>Apply for this application</h1>
      <form
        className={classes.root}
        noValidate
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <div>
          <h3>Why do you deserve this grant? </h3>
          <TextField
            id="outlined-textarea"
            value={value.worthy_because}
            onChange={handleChange}
            name="worthy_because"
            label=""
            placeholder=""
            multiline
            rows="3"
            variant="outlined"
          />
          <br></br>
          <h3>What would you do with the money?</h3>
          <TextField
            id="outlined-textarea"
            value={value.spending_plans}
            onChange={handleChange}
            name="spending_plans"
            label=""
            placeholder=""
            multiline
            rows="3"
            variant="outlined"
          />
          <br></br>
          <h3>Tell us more about your business</h3>
          <TextField
            id="outlined-textarea"
            value={value.mission_statement}
            onChange={handleChange}
            name="mission_statement"
            label=""
            placeholder=""
            multiline
            rows="3"
            variant="outlined"
          />
          <br></br>
          <br></br>

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
          {modal === 1 ? (
            <ApplySuccessModal />
          ) : modal === 2 ? (
            <ApplyFailModal />
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
};

export default ApplyFormTextFields;
