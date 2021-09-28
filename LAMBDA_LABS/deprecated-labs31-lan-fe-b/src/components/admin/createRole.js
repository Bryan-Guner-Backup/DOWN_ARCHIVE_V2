import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postRole } from '../../actions';

const initRole = {
  name: '',
  permissions: {
    UU: false,
    UC: false,
    UD: false,
    PCU: false,
    PCD: false,
    RC: false,
    RU: false,
    RD: false,
  },
};

const CreateRole = (props) => {
  const [input, setInput] = useState(initRole);
  const [postSuccess, setPostSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState({
    name: '',
    server: '',
  });

  const onChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const onCheck = (event) => {
    let permissions = input.permissions;
    setInput({
      ...input,
      permissions: {
        ...permissions,
        [event.target.name]: event.target.checked,
      },
    });
  };

  const initializeInput = () => {
    setInput(initRole);
    setError({
      name: '',
      server: '',
    });
  };

  const initializeAll = () => {
    initializeInput();
    setSuccessMessage('');
    setPostSuccess(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (input.name === '') {
      setError({
        name: 'Please enter a role name',
        server: '',
      });
      setSuccessMessage('');
    } else {
      setError({
        name: '',
        server: '',
      });
      props
        .postRole(input)
        .then((response) => {
          console.log(response);
          setSuccessMessage(
            `Role "${input.name}" has been successfully created.`
          );
          initializeInput();
          // trigger fetchRoles
          props.setSuccessCount(props.successCount + 1);
          setPostSuccess(true);
        })
        .catch((error) => {
          console.log(error);
          setError({
            name: '',
            server: 'There was an error creating this role',
          });
        });
    }
  };

  const clearPostSuccess = () => {
    setPostSuccess(false);
    setSuccessMessage('');
  }

  return (
    <div className="create-role">
      <h3>Create A Role</h3>
      <form autoComplete="off" spellCheck="false" onSubmit={onSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter a role name"
          value={input.name}
          onChange={onChange}
        />
        {error.name && <p className="error">{error.name}</p>}
        <div className="checkboxes">
          <div className="check-col">
            <div className="checkbox-container">
              <input
                name="UU"
                type="checkbox"
                checked={input.permissions.UU}
                onChange={onCheck}
                className="checkbox"
              />
              <label>User Update</label>
            </div>
            <div className="checkbox-container">
              <input
                name="UC"
                type="checkbox"
                checked={input.permissions.UC}
                onChange={onCheck}
              />
              <label>User Create</label>
            </div>
            <div className="checkbox-container">
              <input
                name="UD"
                type="checkbox"
                checked={input.permissions.UD}
                onChange={onCheck}
              />
              <label>User Delete</label>
            </div>
            <div className="checkbox-container">
              <input
                name="PCU"
                type="checkbox"
                checked={input.permissions.PCU}
                onChange={onCheck}
              />
              <label>Post/Comment Update</label>
            </div>
          </div>
          <div className="check-col">
            <div className="checkbox-container">
              <input
                name="PCD"
                type="checkbox"
                checked={input.permissions.PCD}
                onChange={onCheck}
              />
              <label>Post/Comment Delete</label>
            </div>
            <div className="checkbox-container">
              <input
                name="RC"
                type="checkbox"
                checked={input.permissions.RC}
                onChange={onCheck}
              />
              <label>Room Create</label>
            </div>
            <div className="checkbox-container">
              <input
                name="RU"
                type="checkbox"
                checked={input.permissions.RU}
                onChange={onCheck}
              />
              <label>Room Update</label>
            </div>
            <div className="checkbox-container">
              <input
                name="RD"
                type="checkbox"
                checked={input.permissions.RD}
                onChange={onCheck}
              />
              <label>Room Delete</label>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button
            type="submit"
            className={postSuccess ? 'edit-role success' : 'edit-role'}
          >
            Submit
          </button>
          <button type="button" onClick={initializeAll} className="edit-role">
            Reset
          </button>
        </div>
        <div className="messages">
          {error.server && <p className="error">{error.server}</p>}
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
          {postSuccess && (
            <button className="ok-button" onClick={clearPostSuccess}>
              OK
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default connect(null, { postRole })(CreateRole);
