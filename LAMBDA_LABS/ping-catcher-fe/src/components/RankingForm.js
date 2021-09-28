import React, { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  makeStyles,
  Container,
} from "@material-ui/core";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import Axios from "axios";
import { useForm } from "react-hook-form";

//material UI
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

//default data for formState
const defaultState = {
  text_includes: "",
  even_type: "",
  from_user: "",
  from_team: "",
  from_channel: "",
  start_time: "",
  end_time: "",
  nickname: "",
};
//prop drilled state
function RankingForm({ slackState }) {
  const [formState, setFormState] = useState(defaultState);
  const onChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const classes = useStyles();
  const { register, handleSubmit } = useForm();

  return (
    //materialUI
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <BookmarkIcon />
        </Avatar>

        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit((data) => {
            Axios.post(
              "https://ping-catcher-be.herokuapp.com/metaEvent/newSubscription",
              data
            )
              //deletes previously filled form data after submitting
              .then((res) => setFormState(defaultState))
              .catch((err) => console.log("error posting", err));
          })}
        >
          <TextField
            inputRef={register}
            onChange={onChange}
            value={formState.nickname}
            name="nickname"
            variant="outlined"
            margin="normal"
            id="nickname"
            type="nickname"
            placeholder="Nickname"
            autoComplete="TIncludes"
            autoFocus
          />
          <TextField
            inputRef={register}
            onChange={onChange}
            value={formState.text_includes}
            name="text_includes"
            variant="outlined"
            margin="normal"
            placeholder="Text Includes"
            type="text_includes"
            id="text_includes"
            autoComplete="TIncludes"
          />

          <TextField
            inputRef={register}
            onChange={onChange}
            value={formState.event_type}
            variant="outlined"
            margin="normal"
            id="event_type"
            placeholder="Event Type"
            name="event_type"
          />
          <TextField
            inputRef={register}
            onChange={onChange}
            value={formState.from_user}
            variant="outlined"
            margin="normal"
            id="from_user"
            placeholder="From User"
            name="from_user"
          />
          <TextField
            inputRef={register}
            onChange={onChange}
            value={formState.from_team}
            variant="outlined"
            margin="normal"
            id="from_team"
            placeholder="From Team"
            name="from_team"
          />
          <TextField
            inputRef={register}
            onChange={onChange}
            value={formState.from_channel}
            variant="outlined"
            margin="normal"
            id="from_channel"
            placeholder="From Channel"
            name="from_channel"
          />
          <TextField
            inputRef={register}
            onChange={onChange}
            value={formState.start_time}
            variant="outlined"
            margin="normal"
            id="start_time"
            placeholder="Start Time"
            label="Start Time"
            name="start_time"
            type="time"
          />
          <TextField
            inputRef={register}
            onChange={onChange}
            value={formState.end_time}
            variant="outlined"
            margin="normal"
            id="end_time"
            placeholder="End Time"
            label="End Time"
            name="end_time"
            type="time"
          />
          <TextField
            inputRef={register}
            name="slackUser"
            variant="outlined"
            margin="normal"
            id="slackUser"
            type="slackUser"
            //slack user id after token verification
            value={slackState.authed_user.id}
            placeholder="slackUser"
            autoComplete="TIncludes"
            autoFocus
            style={{ visibility: "hidden" }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
export default RankingForm;