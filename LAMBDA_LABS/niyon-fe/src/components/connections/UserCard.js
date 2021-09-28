import React, { useContext, useState } from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import AddBoxIcon from '@material-ui/icons/AddBox'
import { UserContext } from '../../UserContext'
import { getUserCard } from '../apiStuff/axiosWithAuth'
import Popper from '@material-ui/core/Popper'

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
    textAlign: 'left',
    padding: '5px 10px'
  },
  paper: {
    border: '1px solid',
    borderRadius: '10px',
    height: '40px',
    width: '100px',
    backgroundColor: '#3f51b5'
  },
  popup: {
    textAlign: 'center',
    margin: 'auto 0',
    fontSize: 'medium',
    color: 'white',
    paddingTop: '8px'
  }
})

export default function UserCard (props) {
  const classes = useStyles()
  /*eslint-disable */
  const { user, setUser } = useContext(UserContext);
  const myRequests = user.myRequests;
  const id = window.localStorage.getItem("id");
  const payload =
    props.endpoint === "request"
      ? { mentor_id: props.value.id }
      : { status: true, rejected: false, userReq: props.value.id };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const popUpId = open ? "transitions-popper" : undefined;

  const handleRequest = (event) => {
    const endPoint  = props.endpoint
    // axiosWithAuth()
    //   .post(`/connection/${props.endpoint}/${id}`, payload)
    getUserCard(endPoint, id, payload)
      .then(
        (res) => console.log(res),
        setAnchorEl(anchorEl ? null : event.currentTarget)
      )
      .catch((err) => console.log(err));
  };

  return (
    <React.Fragment>
      {myRequests && (
        <Card className="userCard">
          <div className="avatar">
            <Avatar src="/broken-image.jpg" />
          </div>
          <div className={classes.root}>
            <Typography variant="h4" gutterBottom>
              {props.value.first_name} {props.value.last_name}
            </Typography>
            <Typography variant="h6" gutterBottom>
              <p>{props.value.location}</p>
            </Typography>
            <Typography variant="h6" gutterBottom>
              <p>{props.value.job_title}</p>
            </Typography>
          </div>
          <div className="addIcon">
            <AddBoxIcon
              onClick={handleRequest}
              style={{ color: "green" }}
              className="iconSize"
            ></AddBoxIcon>
            <Popper id={popUpId} open={open} anchorEl={anchorEl}>
              <div className={classes.paper}>
                <p className={classes.popup}>Success!</p>
              </div>
            </Popper>
          </div>
        </Card>
      )}
      {/* {!myRequests && <p>Loading....</p>} */}
    </React.Fragment>
  );
}
