/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'

export default function diet(props) {

    return (
        <>
            <h2>Food: {props.data.food_name}</h2>
            <ul>
                <li>Calories: {props.data.food_calories}</li>
                <li>Carbs: {props.data.food_carbs}</li>
                <li>Fat: {props.data.food_fat}</li>
                <li>Fiber: {props.data.food_fiber}</li>
                <li>Protien: {props.data.food_protien}</li>
            </ul>
            <p>{props.data.meal_notes}</p>
        </>
    )
}
