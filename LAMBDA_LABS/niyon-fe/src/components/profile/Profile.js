import React, { useState, useContext } from 'react'
import { UserContext } from '../../UserContext'
import Select from 'react-select'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { technology } from './technologies'
import { location } from './location'
import { job } from './job'
import { saveProfile } from '../apiStuff/axiosWithAuth'
import TextField from '@material-ui/core/TextField'

function Profile (props) {
  const defaultState = {
    first_name: '',
    last_name: '',
    bio: '',
    job_title_id: 0,
    location_id: 0,
    techs: []
  }
  const { user, setUser } = useContext(UserContext)
  const [inputs, setInputs] = useState(defaultState)
  const id = window.localStorage.getItem('id')
  const technologies = technology
  const locations = location
  const jobs = job

  const handleOnSave = () => {
    saveProfile(id, inputs).then((res) => {
      if (res) {
        setUser({ ...res })
        window.location = '/home'
      }
    })
      .catch((err) => {
        console.log(err)
        setInputs(defaultState)
        setUser(defaultState)
      })
  }

  const handleTextFieldChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    })
  }

  const handleJobChange = (selectedItem) => {
    setInputs({
      ...inputs,
      job_title_id: selectedItem.value
    })
  }

  const handleLocationChange = (selectedItem) => {
    setInputs({
      ...inputs,
      location_id: selectedItem.value
    })
  }

  const handleTechChange = (selectedItem) => {
    const technologies = selectedItem.map((item) => item.value)
    setInputs({
      ...inputs,
      techs: technologies
    })
    setUser({
      ...inputs,
      techs: technologies
    })
  }

  let arrayFromContext = []

  const handleTechs = () => {
    if (user.techs) {
      arrayFromContext = technology.filter((item, index) => {
        if (user.techs.includes(index + 1)) {
          return item
        } else {
          return false
        }
      })
    }
  }

  handleTechs()

  return (
    <div>
      <Header />
      <div className="profile">
        <h1>User Profile</h1>
        <TextField
          defaultValue={user.first_name}
          id="outlined-basic1"
          variant="outlined"
          name="first_name"
          label="First Name"
          className="text-field"
          onChange={handleTextFieldChange}
        />
        <TextField
          defaultValue={user.last_name}
          id="outlined-basic2"
          variant="outlined"
          name="last_name"
          label="Last Name"
          className="text-field"
          onChange={handleTextFieldChange}
        />
        <TextField
          defaultValue={user.bio}
          id="outlined-multiline-static"
          label="Bio"
          multiline
          name="bio"
          rows={3}
          variant="outlined"
          className="text-field"
          onChange={handleTextFieldChange}
        />
        <h2>Job Title</h2>
        <Select
          defaultValue={[job[user.job_title_id - 1]]}
          name="job_title_id"
          options={jobs}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={handleJobChange}
        />
        <h2>Location</h2>
        <Select
          defaultValue={[location[user.location_id - 1]]}
          name="location_id"
          options={locations}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={handleLocationChange}
        />

        <h2>Technologies</h2>
        <Select
          defaultValue={arrayFromContext}
          isMulti
          name="techs"
          options={technologies}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={handleTechChange}
        />
        <button
          onClick={() => {
            handleOnSave()
          }}
        >
          Save
        </button>
      </div>
      <Footer value={1} />
    </div>
  )
}

export default Profile
