
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import '../../sass/mentorRegistration.scss'

import { editMentor, getAMentor } from '../../actions/mentors'

import plus from '../assets/plus.png'

const MentorProfile = () => {

    const {register, handleSubmit, watch, errors} = useForm();
    const [categoryNumber, setCategoryNumber] = useState(1)
    const currentUser = useSelector((state) => state.authReducer.user);
    const mentors = useSelector(state => state.mentorReducer.mentors)
    const [currentMentor, setCurrentMentor] = useState(() => {
        const mentor = mentors.find(i => i.mentor_id == currentUser.id);
        return mentor
      })
    const dispatch = useDispatch()
    let history = useHistory()

    const addCategory = e => {
        e.preventDefault()
        setCategoryNumber(categoryNumber + 1)
    }

    const EditMentor = (values) => {
        const mentor = {
            mentor_name: values.mentor_name,
            category_1: values.category_1,
            category_2: values.category_2,
            category_3: values.category_3,
            mentor_bio: values.mentor_bio
        }

        dispatch(editMentor(currentMentor.id, mentor))
        history.push('/dashboard')
    }

    return (
        <div className="mentorRegistration">
            <form className="mentorRegisterForm" onSubmit={handleSubmit(EditMentor)}>
                <label>Mentor Name
                    <input
                        name="mentor_name"
                        defaultValue={currentMentor.mentor_name}
                        ref={register({ required: true })}
                    />
                </label>
                {categoryNumber > 0 && <label>Mentor Category 1
                    <input
                        name="category_1"
                        defaultValue={currentMentor.category_1}
                        ref={register({ required: true })}
                    />
                </label>}
                
                {categoryNumber > 1 && <label>Mentor Category 2
                    <input
                        name="category_2"
                        defaultValue={currentMentor.category_2}
                        ref={register}
                    />
                </label>}
                {categoryNumber > 2 && <label>Mentor Category 3
                    <input
                        name="category_3"
                        defaultValue={currentMentor.category_3}
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
                        defaultValue={currentMentor.mentor_bio}
                        ref={register}
                    />
                </label>
                <input className="mentorRegisterSubmit"
                    type="submit"
                    value="Save Changes"
                />
            </form>
        </div>
    )
}

export default MentorProfile