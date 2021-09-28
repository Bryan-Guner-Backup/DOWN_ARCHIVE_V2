import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../UserContext'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Select from 'react-select'
import { job } from '../profile/job'
import { location } from '../profile/location'
import { technology } from '../profile/technologies'
import { searchProfile } from '../apiStuff/axiosWithAuth'
import SwipeTabsJobTitle from './SwipeTabsJobTitle'
import SwipeTabsLocation from './SwipeTabsLocation'
import SwipeTabsTechnology from './SwipeTabsTechnology'

export function Search (props) {
  /*eslint-disable */
  const { user, setUser } = useContext(UserContext)
  const [profiles, setProfiles] = useState([])
  const [jobTitlesToDisplay, setJobTitlesToDisplay] = useState([])
  const [locationsToDisplay, setLocationsToDisplay] = useState([])
  const [technologiesToDisplay, setTechnologiesToDisplay] = useState([])
  const jobs = job
  const locations = location
  const technologies = technology

  const handleJobChange = (selectedItem) => {
    if (selectedItem) {
      const usersToDisplayByJobTitle = profiles.filter(
        (job) => job.job_title_id === selectedItem.value
      )
      setJobTitlesToDisplay(usersToDisplayByJobTitle)
    }
  }

  const handleLocationChange = (selectedItem) => {
    if (selectedItem) {
      const usersToDisplayByLocation = profiles.filter(
        (location) => location.location_id === selectedItem.value
      )
      setLocationsToDisplay(usersToDisplayByLocation)
    }
  }

  const handleTechChange = (selectedItem) => {
    if (selectedItem) {      
      const selectedTechStack = selectedItem.map(item => item.value)
      const usersWhoHaveSelectedTechs = []
         const mappingFunction = profiles.map(profile => {
        if (selectedTechStack.every(value => profile.techs.includes(value))) {
              usersWhoHaveSelectedTechs.push(profile)
          setTechnologiesToDisplay(usersWhoHaveSelectedTechs)
        }
      })     
    }
  };

  useEffect(() => {
    console.log('serach profile line 57')
    const apiCall = async () => {     
      await searchProfile()
      .then((res) => {
        if (res) {
          const data = res.data
          console.log('data line 65', data)
          setProfiles(data)
        }
      })
      .catch((err) => console.log(err))
      }
      apiCall()
  }, [])

  return (
    <div>
      <Header />
      <div className="search" data-test="search-container">
        <div>
          <h1 className="search-header">Search</h1>
          <h2 data-test="job-title">Job Title</h2>
          <Select
            name="job_title_id"
            options={jobs}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={handleJobChange}
            data-test="job-title-search"
          />
          <SwipeTabsJobTitle jobTitlesToDisplay={jobTitlesToDisplay} />
          {/* {jobTitlesToDisplay.map((profile) => (
            <div key={profile.id}>
              {profile.first_name}
              {profile.last_name}
              {profile.user_type}
              {profile.location}
            </div>
          ))} */}
          <h2>Location</h2>
          <Select
            name="location_id"
            options={locations}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={handleLocationChange}
          />
          <SwipeTabsLocation locationsToDisplay={locationsToDisplay} />
          {/* {locationsToDisplay.map((profile) => (
            <div key={profile.id}>
              {profile.first_name}
              {profile.last_name}
              {profile.user_type}
              {profile.location}
            </div>
          ))} */}
          <h2>Technologies</h2>
          <Select
            isMulti
            name="techs"
            options={technologies}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={handleTechChange}
          />
          <SwipeTabsTechnology technologiesToDisplay={technologiesToDisplay} />
        </div>
      </div>
      <Footer value={2} />
    </div>
  )
}

export default Search
