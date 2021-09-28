import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addRoom } from '../../actions/index';
import styled from 'styled-components';

const Div = styled.div`
  transition: 5s ease-in;
  .button {
    padding-left: 24%;
    padding-top: 2%;
    button {
      padding: 10px 24px;
      margin-bottom: 16px;
      background-color: #2c2f33;
      border: none;
      border-radius: 3px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      font-family: 'Nunito', sans-serif;
      font-size: 0.875rem;
      font-weight: 600;
      color: #ffffff;
      transition: 0.25s;
      cursor: pointer;
    }
  }
  label {
    display: flex;
    flex-direction: column;
    margin: 16px auto 4px;
    font-size: 1rem;
    font-weight: 500;
    color: #ffffff;
    width: 52%;
  }

  input {
    padding: 10px;
    background-color: #2c2f33;
    border: none;
    border-radius: 3px;
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: #ffffff;

    ::placeholder {
      color: dimgray;
    }
  }
  textarea {
    min-height: 44px;
    min-width: 100%;
    max-width: 100%;
    height: 288px;
    padding: 10px;
    background-color: #2c2f33;
    border: none;
    border-radius: 3px;
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: #ffffff;
  }
  .submit-button {
    padding-left: 24%;
    button {
      padding: 10px 24px;
      margin-top: 16px;
      margin-left: 5px;
      background: linear-gradient(to right, #0084ff, #0099ff);
      border: none;
      border-radius: 3px;
      font-family: 'Nunito', sans-serif;
      font-size: 0.875rem;
      font-weight: 600;
      color: #ffffff;
      cursor: pointer;
      transition: 0.25s;

      :hover {
        opacity: 0.5;
      }
    }
  }
`;

const CreateRooms = (props) => {
  const [formDropdown, setFormDropdown] = useState(false);
  const [input, setInput] = useState({
    name: '',
    icon: '',
    banner_image: '',
    description: '',
  });
  const [error, setError] = useState({
    checkbox: '',
    name: '',
    icon: '',
    banner_image: '',
    description: '',
  });

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (input.name === '') {
      setError({
        checkbox: 'Please input a name',
        name: '',
        icon: '',
        banner_image: '',
        description: '',
      });
    } else if (input.description === '') {
      setError({
        checkbox: 'Please input a description',
        name: '',
        icon: '',
        banner_image: '',
        description: '',
      });
    } else if (input.icon === '') {
      setError({
        checkbox: 'Please input an icon',
        name: '',
        icon: '',
        banner_image: '',
        description: '',
      });
    } else if (input.banner_image === '') {
      setError({
        checkbox: 'Please input a banner image',
        name: '',
        icon: '',
        banner_image: '',
        description: '',
      });
    } else {
      setError({
        checkbox: '',
        name: '',
        icon: '',
        banner_image: '',
        description: '',
      });
      props.addRoom(
        input.name,
        input.icon,
        input.banner_image,
        input.description
      );
      setInput({
        name: '',
        icon: '',
        banner_image: '',
        description: '',
      });
      setFormDropdown(false);
    }
  };

  return (
    <Div>
      <div className="button">
        <button
          onClick={(e) => {
            e.preventDefault();
            setFormDropdown(!formDropdown);
          }}
        >
          + Create a room
        </button>
      </div>
      {formDropdown && (
        <form autoComplete="off" className="form-dropdown">
          <label className="label">
            Add Room
            <input
              type="text"
              name="name"
              onChange={onChange}
              value={input.name}
            />
            {error.name && <p className="error">{error.name}</p>}
          </label>
          <label className="label">
            Icon
            <input
              type="text"
              name="icon"
              onChange={onChange}
              value={input.icon}
            />
          </label>
          <label className="label">
            Banner
            <input
              type="text"
              name="banner_image"
              onChange={onChange}
              value={input.banner_image}
            />
          </label>
          <label className="room-description">
            Description
            <textarea
              type="text"
              name="description"
              onChange={onChange}
              value={input.description}
            />
          </label>
          <div className="submit-button">
            <button onClick={onSubmit}>Submit</button>
          </div>
        </form>
      )}
    </Div>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, { addRoom })(CreateRooms);
