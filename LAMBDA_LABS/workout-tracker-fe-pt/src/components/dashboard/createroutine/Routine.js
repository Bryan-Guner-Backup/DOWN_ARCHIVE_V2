import React, { Component } from 'react';
import NavigationBar from '../../navigationbar/navigationbar';
import MobileNav from "../../mobilenav/MobileNav";
import {Container, FlexBox, Form, Submit, Add} from './style'
import {MainContent, CardContent, CardBody, CardTitle, CardDescription, WorkoutLength} from '../workouts/style';
import {axiosWithAuth} from '../../authentication/axiosWithAuth';

export default class Routine extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            workouts: [],
            addedWorkouts: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.addWorkout = this.addWorkout.bind(this);
        this.removeWorkout = this.removeWorkout.bind(this);
    }

    handleChange(event){
        const target = event.target.name;
        const value = event.target.value;

        this.setState({
            ...this.state,
            [target]: value
        })
    }

    handleSubmit(event){
        event.preventDefault();

        axiosWithAuth().post('api/routines', {
            routine_title: this.state.title
        })
        .then(async response =>{
            await Promise.all(this.state.addedWorkouts.map(data =>{
                console.log(data);
                axiosWithAuth().post(`api/routines/${response.data.message[0].id}`, {
                    workout_id: data.id
                })
                .then(res =>{
                    console.log(res);
                })
                .catch(err =>{
                    console.log(err);
                })
            console.log('Submission Success');
            }))
        })
        .catch(err =>{
            console.log(err);
        })
        .finally(() => {
            this.setState({
                title: ""
            })
        })
    }

    addWorkout(item, index){
        let workouts = this.state.workouts;
        let addedWorkouts = this.state.addedWorkouts;
        console.log('add')
        workouts.splice(index, 1);
        addedWorkouts.push(item);
        this.setState({...this.state,
            workouts: workouts,
            addedWorkouts: addedWorkouts
        })
    }

    removeWorkout(item, index){
        let workouts = this.state.workouts;
        let addedWorkouts = this.state.addedWorkouts;
        workouts.push(item);
        console.log('remove')
        addedWorkouts.splice(index, 1);
        this.setState({...this.state,
            workouts: workouts,
            addedWorkouts: addedWorkouts
        })
    }

    componentDidMount(){
        axiosWithAuth()
        .get(`api/workouts`)
        .then((response) => {
            console.log(response.data.message);
            this.setState({...this.state, workouts: response.data.message});
        })
        .catch((err) => {
            console.log("Error in ViewableWorkouts", err);
        });
    }
    
    render() {
        return (
            <FlexBox>
                <MobileNav />
                <NavigationBar />
                <Container >
                    <Form onSubmit={(e) => this.handleSubmit(e)}>
                        <label>
                            Title:
                            <input  
                                type="text"
                                name="title"
                                value={this.state.title}
                                onChange={this.handleChange}
                            />
                        </label>
                        <br/>
                        <MainContent>
                            <CardContent style={{justifyContent: 'center', padding: `${(this.state.addedWorkouts.length === 0 ?'0em' : '2em')}`}} >
                            {this.state.addedWorkouts.map((item, index) => {
                                return (
                                <CardBody key="id">
                                    <CardTitle>
                                        {item.workout_title}
                                    </CardTitle>
                                    <CardDescription>
                                        <p>{item.workout_description}</p>
                                        <WorkoutLength> 
                                            {item.workout_length}
                                        </WorkoutLength>
                                    </CardDescription>
                                    <Add type="button" onClick={() => this.removeWorkout(item, index)}> remove </Add>
                                </CardBody>
                                );
                            })}
                            </CardContent>
                        </MainContent>
                        <Submit type="submit" value="Submit" />
                        <MainContent>
                            <CardContent style={{justifyContent: 'center'}}>
                            {this.state.workouts.map((item, index) => {
                                return (
                                <CardBody key="id">
                                    <CardTitle>
                                        {item.workout_title}
                                    </CardTitle>
                                    <CardDescription>
                                        <p>{item.workout_description}</p>
                                        <WorkoutLength> 
                                            {item.workout_length}
                                        </WorkoutLength>
                                    </CardDescription>
                                    <Add type="button" onClick={() => this.addWorkout(item, index)}> Add </Add>
                                </CardBody>
                                );
                            })}
                            </CardContent>
                        </MainContent>
                    </Form>
                </Container>
            </FlexBox>
        )
    }
}
