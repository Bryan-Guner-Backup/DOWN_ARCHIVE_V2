import React from 'react'

export default function Workout(props) {
    return (
        <> 
            <h2>Workout: {props.data.workout_title}</h2>
            <h3>Workout Category: {props.data.workout_category}</h3>
            <h4>Workout Length: {props.data.workout_length}</h4>
            <p>{props.data.workout_description}</p>
        </>
    )
}
