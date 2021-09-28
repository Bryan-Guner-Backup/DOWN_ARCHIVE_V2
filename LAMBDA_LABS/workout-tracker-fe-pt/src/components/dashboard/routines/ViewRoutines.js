import React, { Component } from "react";
import { axiosWithAuth } from "../../authentication/axiosWithAuth";
import {
  CardContent,
  CardTitle,
  CardDescription,
  WorkoutLength,
} from "../workouts/style";
import NavigationBar from "../../navigationbar/navigationbar";
import MobileNav from "../../mobilenav/MobileNav";
import styled from "styled-components";
import {
  EditButton,
  EditIcon,
  ExitButton,
  Header,
  MainContainer,
  MainContent,
  RoutineTitle,
  CardBody,
  Body, RemoveButton, BigDelButton,
} from "./style";

export default class ViewRoutines extends Component {
  constructor(props) {
    super(props);

    this.state = {
      routines: [],
      edit: false,
      editRoutine: {},
    };
  }

  componentDidMount() {
    this.getRoutines();
  }

  getRoutines() {
    axiosWithAuth()
      .get("/api/routines")
      .then((res) => {
        console.log(res);
        this.setState({
          ...this.state,
          routines: Object.values(res.data.message),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleEdit(data) {
    this.setState({ ...this.state, edit: true, editRoutine: data });
  }

  removeWorkout(data) {
    axiosWithAuth()
      .post(`api/routines/workout/${this.state.editRoutine.id}`, {
        workout_id: data.id,
      })
      .then((res) => {
        console.log(res);
        this.getRoutines();
        this.setState({ ...this.state, edit: false, editRoutine: {} });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  exitEdit() {
    this.setState({ ...this.state, edit: false, editRoutine: {} });
  }

  deleteRoutine() {
    axiosWithAuth()
      .delete(`api/routines/${this.state.editRoutine.id}`)
      .then((res) => {
        this.getRoutines();
        this.setState({ ...this.state, edit: false, editRoutine: {} });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  showEdit() {
    return (
      <>
        <Background>
          <Change>
            <div
              style={{
                display: "flex",
                width: "50%",
              }}
            >
              <span style={{ textAlign: "center", width: "100%" }}></span>
              <MainContent>
                <CardContent>
                  <button
                    onClick={() => this.exitEdit()}
                    style={{ width: "100%",marginRight: "90%", marginBottom: "1rem", border: "none", background: "#277fe5", padding: "0.5rem", color: "white", borderRadius: "0.5rem", cursor: "pointer"}}
                  >
                    Close
                  </button>
                  {/*<span>*/}
                  {/*  <h1>{this.state.editRoutine.routine_title} </h1>*/}
                  {/*</span>*/}
                  {this.state.editRoutine.workout.map((res) => (
                    <CardBody style={{ margin: "1rem auto" }} key="id">
                      <CardTitle>{res.workout_title}</CardTitle>
                      <CardDescription>
                        <p>{res.workout_description}</p>
                        <WorkoutLength>{res.workout_length}</WorkoutLength>
                      </CardDescription>
                      <RemoveButton onClick={() => this.removeWorkout(res)}>
                        <EditIcon src="https://img.icons8.com/material-outlined/24/000000/filled-trash.png"/>
                      </RemoveButton>
                    </CardBody>
                  ))}
                  <hr style={{ width: "100%", visibility: "hidden" }} />
                  <BigDelButton onClick={() => this.deleteRoutine()}>
                    Delete Routine
                  </BigDelButton>
                </CardContent>
              </MainContent>
            </div>
          </Change>
        </Background>
      </>
    );
  }

  render() {
    return (
      <>
        <MobileNav />
        <div style={{display: 'flex'}}>
        <NavigationBar />
        <MainContainer>
          <div>
          <Header>
            <h1> Explore Your Routines</h1>
          </Header>
          {this.state.routines.map((data) => (
            <>
              <Body>
                <RoutineTitle>{data.routine_title} </RoutineTitle>
                <MainContent>
                  {data.workout.map((res) => (
                    <CardBody key="id">
                      <EditButton onClick={() => this.handleEdit(data)}>
                        <EditIcon src="https://img.icons8.com/windows/64/000000/edit-property.png" />{" "}
                      </EditButton>
                      <CardTitle>{res.workout_title}</CardTitle>
                      <CardDescription>
                        <p>{res.workout_description}</p>
                        <WorkoutLength>{res.workout_length}</WorkoutLength>
                      </CardDescription>
                    </CardBody>
                  ))}
                </MainContent>
              </Body>
            </>
          ))}
          {this.state.edit ? this.showEdit() : null}
          </div>
        </MainContainer>
        </div>
      </>
    );
  }
}

const Background = styled.div`
  position: fixed;
  z-index: 2;
  background-color: gray;
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0.1rem;
  opacity: .95;
`;
const Change = styled.div`
  display: flex;
  position: fixed;
  z-index: 3;
  width: 100%;
  height: 100vh;
  top: 0;
`;
