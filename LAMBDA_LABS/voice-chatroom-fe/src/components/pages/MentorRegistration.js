import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import '../../sass/mentorRegistration.scss'

import { registerMentor } from '../../actions/mentors'

import plus from '../assets/plus.png'

const MentorRegistration = () => {
    const {register, handleSubmit, watch, errors} = useForm();
    const [categoryNumber, setCategoryNumber] = useState(1)
    const currentUser = useSelector(state => state.authReducer)
    const dispatch = useDispatch()
    let history = useHistory()

    const addCategory = e => {
        e.preventDefault()
        setCategoryNumber(categoryNumber + 1)
    }

    const submitMentorRegistration = (values) => {
        const mentor = {
            mentor_id: currentUser.user.id,
            mentor_name: values.mentor_name,
            category_1: values.category_1,
            category_2: values.category_2,
            category_3: values.category_3,
            mentor_bio: values.mentor_bio
        }

        dispatch(registerMentor(mentor, currentUser.user.id))
        history.push('/dashboard')
    }

    return (
        <div className="mentorRegistration">Mentor Registration
            <form className="mentorRegisterForm" onSubmit={handleSubmit(submitMentorRegistration)}>
                <label>Mentor Name
                    <input
                        name="mentor_name"
                        ref={register({ required: true })}
                    />
                </label>
                {categoryNumber > 0 && <label>Mentor Category 1
                    <input
                        name="category_1"
                        ref={register({ required: true })}
                    />
                </label>}
                
                {categoryNumber > 1 && <label>Mentor Category 2
                    <input
                        name="category_2"
                        ref={register}
                    />
                </label>}
                {categoryNumber > 2 && <label>Mentor Category 3
                    <input
                        name="category_3"
                        ref={register}
                    />
                </label>}
                {categoryNumber < 3 && <label>
                    <div id="addCategory" onClick={addCategory}>
                        <img className="plus" src={plus} alt="plus sign" />
                        <p>add another category</p>
                    </div>
                </label>}
                <label>Bio
                    <textarea className="mentorBio"
                        type="text"
                        name="mentor_bio"
                        ref={register}
                    />
                </label>
                <input className="mentorRegisterSubmit"
                    type="submit"
                    value="Register"
                />
            </form>
        </div>
    )
}

export default MentorRegistration