import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
  CircularProgress
} from '@material-ui/core';

import axios from 'axios';

const useStyles = makeStyles(() => ({
  root: {},
  card: {
    width: '50%',
    margin: '0 2%'
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
}));

const AccountDetails = props => {
  const { className, ...rest } = props;

  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    organization_name: '',
    email: ''
  });

  const classes = useStyles();

  const id = localStorage.getItem('id');

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/api/users/${id}`)
      .then(res => {
        // console.log('User data', res.data.accountData[0]);
        setForm(res.data.accountData[0]);
      })
      .catch(err => {
        console.error(err.message);
      });
  }, []);

  const handleChange = name => event => {
    setForm({
      ...form,
      [name]: event.target.value
    });
  };

  //onBlur

  const states = [
    {
      value: 'alabama',
      label: 'Alabama'
    },
    {
      value: 'alaska',
      label: 'Alaska'
    },
    {
      value: 'Arizona',
      label: 'Arizona'
    },
    {
      value: 'Arkansas',
      label: 'Arkansas'
    },
    {
      value: 'California',
      label: 'California'
    },
    {
      value: 'Colorado',
      label: 'Colorado'
    },
    {
      value: 'Connecticut',
      label: 'Connecticut'
    },
    {
      value: 'Delaware',
      label: 'Delaware'
    },
    {
      value: 'Florida',
      label: 'Florida'
    },
    {
      value: 'Georgia',
      label: 'Georgia'
    },
    {
      value: "Hawai'i",
      label: "Hawai'i"
    },
    {
      value: 'Idaho',
      label: 'Idaho'
    },
    {
      value: 'Illinois',
      label: 'Illinois'
    },
    {
      value: 'Indiana',
      label: 'Indiana'
    },
    {
      value: 'Iowa',
      label: 'Iowa'
    },
    {
      value: 'Kansas',
      label: 'Kansas'
    },
    {
      value: 'Kentucky',
      label: 'Kentucky'
    },
    {
      value: 'Louisiana',
      label: 'Louisiana'
    },
    {
      value: 'Maine',
      label: 'Maine'
    },
    {
      value: 'Maryland',
      label: 'Maryland'
    },
    {
      value: 'Massachusetts',
      label: 'Massachusetts'
    },
    {
      value: 'Michigan',
      label: 'Michigan'
    },
    {
      value: 'Minnesota',
      label: 'Minnesota'
    },
    {
      value: 'Mississippi',
      label: 'Mississippi'
    },
    {
      value: 'Missouri',
      label: 'Missouri'
    },
    {
      value: 'Montana',
      label: 'Montana'
    },
    {
      value: 'Nebraska',
      label: 'Nebraska'
    },
    {
      value: 'Nevada',
      label: 'Nevada'
    },
    {
      value: 'New Hampshire',
      label: 'New Hampshire'
    },
    {
      value: 'New Jersey',
      label: 'New Jersey'
    },
    {
      value: 'New Mexico',
      label: 'New Mexico'
    },
    {
      value: 'New York',
      label: 'New York'
    },
    {
      value: 'North Carolina',
      label: 'North Carolina'
    },
    {
      value: 'North Dakota',
      label: 'North Dakota'
    },
    {
      value: 'Ohio',
      label: 'Ohio'
    },
    {
      value: 'Oklahoma',
      label: 'Oklahoma'
    },
    {
      value: 'Oregon',
      label: 'Oregon'
    },
    {
      value: 'Pennsylvania',
      label: 'Pennsylvania'
    },
    {
      value: 'Rhode Island',
      label: 'Rhode Island'
    },
    {
      value: 'South Carolina',
      label: 'South Carolina'
    },
    {
      value: 'South Dakota',
      label: 'South Dakota'
    },
    {
      value: 'Tennessee',
      label: 'Tennessee'
    },
    {
      value: 'Texas',
      label: 'Texas'
    },
    {
      value: 'Utah',
      label: 'Utah'
    },
    {
      value: 'Vermont',
      label: 'Vermont'
    },
    {
      value: 'Virginia',
      label: 'Virginia'
    },
    {
      value: 'Washington',
      label: 'Washington'
    },
    {
      value: 'West Virginia',
      label: 'West Virginia'
    },
    {
      value: 'Wisconsin',
      label: 'Wisconsin'
    },
    {
      value: 'Wyoming',
      label: 'Wyoming'
    },
    {
      value: 'District of Columbia',
      label: 'District of Columbia'
    },
    {
      value: 'American Samoa',
      label: 'American Samoa'
    },
    {
      value: 'Guam',
      label: 'Guam'
    },
    {
      value: 'Northern Mariana Islands',
      label: 'Northern Mariana Islands'
    },
    {
      value: 'Puerto Rico',
      label: 'Puerto Rico'
    },
    {
      value: 'US Virgin Islands',
      label: 'US Virgin Islands'
    }
  ];

  onsubmit = e => {
    axios
      .put(`${process.env.REACT_APP_API}/api/users/${id}`, form)
      .then(res => {
        // alert('your profile has been updated');
        // window.location.reload();
        console.log(res.data);
        props.history.push('/dashboard');
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  return (
    <Card {...rest} className={(classes.root, classes.card)}>
      <form autoComplete="off" noValidate>
        <CardHeader subheader="Edit current details:" title="My Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                margin="dense"
                name="firstName"
                onChange={handleChange('first_name')}
                required
                value={form.first_name}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Last name"
                margin="dense"
                name="lastName"
                onChange={handleChange('last_name')}
                required
                value={form.last_name}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                margin="dense"
                name="email"
                onChange={handleChange('email')}
                required
                value={form.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Company"
                margin="dense"
                name="company"
                onChange={handleChange('organization_name')}
                value={form.organization_name}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Select State"
                margin="dense"
                name="state"
                onChange={handleChange}
                required
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                value={form.state}
                variant="outlined"
              >
                {states.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Country"
                margin="dense"
                name="country"
                onChange={handleChange}
                required
                value={form.country}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions className={classes.actions}>
          <Button
            onClick={onsubmit}
            style={{ backgroundColor: '#2a87af', color: '#FFF' }}
            variant="contained"
          >
            Save details
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default AccountDetails;
