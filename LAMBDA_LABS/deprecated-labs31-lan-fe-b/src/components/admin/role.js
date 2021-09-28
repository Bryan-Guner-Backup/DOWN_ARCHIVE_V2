import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { putRole, deleteRole } from '../../actions';
import binLogo from '../../img/bx-trash.svg';
import { BiTrash } from 'react-icons/bi';


const Role = (props) => {
  const [input, setInput] = useState({
    name: props.role.role_name,
    permissions: {
      UU: props.role.UU,
      UC: props.role.UC,
      UD: props.role.UD,
      PCU: props.role.PCU,
      PCD: props.role.PCD,
      RC: props.role.RC,
      RU: props.role.RU,
      RD: props.role.RD,
    },
  });
  const [error, setError] = useState({
    name: '',
    server: '',
  });
  const [successMessage, setSucceessMessage] = useState('');
  // const [editActive, setEditActive] = useState(false);
  const [editSuccess, setEditSuccess] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [editsPending, setEditsPending] = useState(false);

  useEffect(() => {
    if (
      props.role.role_name === 'admin' ||
      props.role.role_name === 'moderator' ||
      props.role.role_name === 'alumni'
    ) {
      setIsDisabled(true);
    }
  });

  // clear error messages after 5 seconds
  const timeoutError = () => {
    // setDeleteSuccess(false);
    return setTimeout(() => {
      setError({
        name: '',
        server: '',
      });
    }, 4500);
  };

  const timeoutSuccess = () => {
    return setTimeout(() => {
      setSucceessMessage('');
      setDeleteSuccess(false);
      setEditSuccess(false);
      setEditsPending(false);
      props.setSuccessCount(props.successCount + 1);
    }, 4500);
  };

  const onChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setEditsPending(true);
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
    setEditsPending(true);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (input.name === '') {
      setError({
        name: 'Please enter a role name',
        server: '',
      });
      setSucceessMessage('');
      timeoutError();
    } else {
      setError({
        name: '',
        server: '',
      });
      props
        .putRole(input, props.role.id)
        .then((response) => {
          console.log(response);
          // props.setSuccessCount(props.successCount + 1)
          setEditSuccess(true);
          setSucceessMessage(
            `Role "${props.role.role_name}" has been successfully updated.`
          );
          timeoutSuccess();
        })
        .catch((error) => {
          console.log(error);
          setError({
            name: '',
            server: 'There was an error updating this role',
          });
          timeoutError();
        });
    }
  };

  const onDelete = (event) => {
    event.preventDefault();
    props
      .deleteRole(props.role.id)
      .then((response) => {
        console.log(response);
        setSucceessMessage(
          `Role "${props.role.role_name}" has been successfully deleted.`
        );
        setDeleteSuccess(true);
        timeoutSuccess();
      })
      .catch((error) => {
        console.log(error);
        setError({
          name: '',
          server: 'There was an error deleting this role',
        });
      });
  };

  return (
    <>
      <div className="role">
        <form autoComplete="off" spellCheck="false" onSubmit={onSubmit}>
          <div className="role-title-bar">
            <h3 className={isDisabled && 'disabled'}>{props.role.role_name}</h3>
            <div className="buttons">
              {editsPending && (
                <a href="#" className={editSuccess ? "save-button success" : "save-button"} onClick={onSubmit}>
                  Save
                </a>
              )}
              {!isDisabled && (
                <a href="#" className="trash-button" onClick={onDelete}>
                  <BiTrash />
                </a>
              )}
            </div>
          </div>
          <label htmlFor="name" className={isDisabled && 'disabled'}>
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter a role name"
            value={input.name}
            onChange={onChange}
            disabled={isDisabled}
            className="role-name-input"
            id="name"
          />
          {error.name && <p className="error">{error.name}</p>}
          <div className="role-body">
            <div className="checkboxes">
              <div className="check-col">
                <div className="checkbox-container">
                  <input
                    name="UU"
                    type="checkbox"
                    checked={input.permissions.UU}
                    onChange={onCheck}
                    disabled={isDisabled}
                    id="UU"
                  />
                  <label htmlFor="UU">User Update</label>
                </div>
                <div className="checkbox-container">
                  <input
                    name="UC"
                    type="checkbox"
                    checked={input.permissions.UC}
                    onChange={onCheck}
                    disabled={isDisabled}
                    id="UC"
                  />
                  <label htmlFor="UC">User Create</label>
                </div>
                <div className="checkbox-container">
                  <input
                    name="UD"
                    type="checkbox"
                    checked={input.permissions.UD}
                    onChange={onCheck}
                    disabled={isDisabled}
                    id="UD"
                  />
                  <label htmlFor="UD">User Delete</label>
                </div>
                <div className="checkbox-container">
                  <input
                    name="PCU"
                    type="checkbox"
                    checked={input.permissions.PCU}
                    onChange={onCheck}
                    disabled={isDisabled}
                    id="PCU"
                  />
                  <label htmlFor="PCU">Post/Comment Update</label>
                </div>
              </div>
              <div className="check-col">
                <div className="checkbox-container">
                  <input
                    name="PCD"
                    type="checkbox"
                    checked={input.permissions.PCD}
                    onChange={onCheck}
                    disabled={isDisabled}
                    id="PCD"
                  />
                  <label htmlFor="PCD">Post/Comment Delete</label>
                </div>
                <div className="checkbox-container">
                  <input
                    name="RC"
                    type="checkbox"
                    checked={input.permissions.RC}
                    onChange={onCheck}
                    disabled={isDisabled}
                    id="RC"
                  />
                  <label htmlFor="RC">Room Create</label>
                </div>
                <div className="checkbox-container">
                  <input
                    name="RU"
                    type="checkbox"
                    checked={input.permissions.RU}
                    onChange={onCheck}
                    disabled={isDisabled}
                    id="RU"
                  />
                  <label htmlFor="RU">Room Update</label>
                </div>
                <div className="checkbox-container">
                  <input
                    name="RD"
                    type="checkbox"
                    checked={input.permissions.RD}
                    onChange={onCheck}
                    disabled={isDisabled}
                    id="RD"
                  />
                  <label htmlFor="RD">Room Delete</label>
                </div>
              </div>
            </div>
            <div className="buttons">
              {/* <button
                type="button"
                disabled={isDisabled}
                className={deleteSuccess ? 'edit-role success' : 'edit-role'}
                onClick={onDelete}
              >
                Delete
              </button> */}
            </div>
          </div>

          <div className="messages">
            {error.server && <p className="error">{error.server}</p>}
            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default connect(null, { putRole, deleteRole })(Role);
