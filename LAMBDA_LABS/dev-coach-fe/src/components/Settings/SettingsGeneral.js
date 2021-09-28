import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import Notification from '../Notifications/Notification';

import StyledSettings from './SettingsStyles';

export function SettingsGeneral(props) {
  const {
    user,
    updateUserInfo,
    success,
    error,
    showErrorMessage,
    showSuccessMessage,
    closeMessage,
    handleCancel,
  } = props;

  const initialUserInfo = {
    first_name: user && user.first_name,
    last_name: user && user.last_name,
    email: user && user.email,
    password: '',
    confirm_password: '',
    avatar_url: user && user.avatar_url,
    linkedin: user && user.linkedin,
    github: user && user.github,
    location: user && user.location,
    hourly_rate: user && user.hourly_rate,
    role_id: user && user.role_id,
  };

  const [userInfo, setUserInfo] = useState(initialUserInfo);

  const handleChange = e => {
    const { value, name } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    updateUserInfo(
      { ...userInfo, oldEmail: user.email },
      showErrorMessage,
      showSuccessMessage,
      closeMessage,
      user.id,
    );
  };

  return (
    <StyledSettings className='setting-container'>
      <div className='paper'>
        <form className='form' noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                size='small'
                variant='outlined'
                fullWidth
                name='location'
                label='Location'
                type='string'
                placeholder={userInfo.location}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                size='small'
                variant='outlined'
                fullWidth
                id='linkedin'
                name='linkedin'
                label='Linkedin'
                placeholder={userInfo.linkedin}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                size='small'
                autoComplete='github'
                variant='outlined'
                fullWidth
                name='github'
                type='url'
                id='github'
                label='GitHub'
                placeholder={
                  userInfo.github ? userInfo.github : 'GitHub'
                }
                onChange={handleChange}
              />
            </Grid>
            {(user.role_id && user.role_id) === 2 ? (
              <Grid item xs={12}>
                <TextField
                  size='small'
                  variant='outlined'
                  fullWidth
                  name='hourly_rate'
                  type='url'
                  id='hourly_rate'
                  label='Hourly Rate'
                  placeholder={userInfo.hourly_rate}
                  onChange={handleChange}
                />
              </Grid>
            ) : null}
          </Grid>

          <div className='button'>
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleSubmit}>Save Changes</button>
          </div>
        </form>
      </div>
      <Notification
        onClose={closeMessage}
        variant='success'
        message='your profile has been updated successfully'
        open={success}
      />

      <Notification
        onClose={closeMessage}
        variant='error'
        message='unable to update user profile'
        open={error}
      />
    </StyledSettings>
  );
}
