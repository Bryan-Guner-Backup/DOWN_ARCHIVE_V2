import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import plus from "../assets/plus.png";

import { editUser } from "../../actions/users";

export default function UserProfile() {
 
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.authReducer.user);
  const [categoryNumber, setCategoryNumber] = useState(1);
  let history = useHistory();

  const addCategory = (e) => {
    e.preventDefault();
    setCategoryNumber(categoryNumber + 1);
  };

  const submitUserInfo = values => dispatch(editUser(currentUser.id, values)) 
  
  return (
    <div className="mentorRegistration">
      <form
        className="mentorRegisterForm"
        onSubmit={() => {
          submitUserInfo(values);
          history.push('/dashboard/calendar')
        }}
      >
        <label>
          First Name:
          <input
            type="text"
            defaultValue={currentUser.given_name}
            name="given_name"
            ref={register({ required: true, maxLength: 80 })}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            defaultValue={currentUser.family_name}
            name="family_name"
            ref={register({ required: true, maxLength: 100 })}
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            defaultValue={currentUser.username}
            name="username"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            defaultValue={currentUser.location}
            name="location"
            ref={register}
          />
        </label>
        <label>
          Bio:
          <textarea name="Bio" ref={register} />
        </label>
        {categoryNumber > 0 && (
          <label>
            Main Interest:
            <input
              name="interest_1"
              defaultValue={currentUser.interest_1}
              ref={register({ required: true })}
            />
          </label>
        )}
        {categoryNumber > 1 && (
          <label>
            Secondary Interest
            <input
              name="interest_2"
              defaultValue={currentUser.interest_2}
              ref={register}
            />
          </label>
        )}
        {categoryNumber > 2 && (
          <label>
            Third Interest
            <input
              name="interest_3"
              defaultValue={currentUser.interest_3}
              ref={register}
            />
          </label>
        )}
        {categoryNumber < 3 && (
          <label>
            <div id="addCategory" onClick={addCategory}>
              <img className="plus" src={plus} alt="plus sign" />
              <p>add another category</p>
            </div>
          </label>
        )}{" "}
        <input
          type="submit"
          className="mentorRegisterSubmit"
        />
      </form>
    </div>
  );
}

