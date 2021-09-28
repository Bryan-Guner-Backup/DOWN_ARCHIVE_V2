import React, { useState } from 'react'
import techs from './RoomTechs'
import Header from '../header/Header'
import Footer from '../footer/Footer'

function RoomSelect ({ history }) {
  const myUserId = localStorage.getItem('id')
  const defaultUser = {
    user_id: myUserId,
    room_name: '',
    room_id: ''
  }
  const [user, setUser] = useState(defaultUser)

  const arrayHandler = (e) => {
    e.preventDefault()
    const arrID = Number(e.target.value)
    techs.map((item) => {
      if (item.id === arrID) {
        console.log(item)
        setUser({
          ...user,
          room_name: item.name,
          room_id: item.id
        })
      }
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    user.user_id &&
      user.room_name &&
      user.room_id &&
      history.push(
        `/chatroom/${user.user_id}/${user.room_name}/${user.room_id}`
      )
    setUser(defaultUser)
  }

  return (
    <div>
      <Header />
      <form className="signin-form" onSubmit={submitHandler}>
        <label className="label">Join a Room</label>
        <br />
        <select className="input-form" onChange={arrayHandler}>
          {techs.map((item, index) => {
            return (
              <option name={item.name} value={Number(item.id)} key={index}>
                {item.name}
              </option>
            )
          })}
        </select>
        <button className="btn" type="submit">
          Sign In
        </button>
      </form>
      <Footer />
    </div>
  )
}

export default RoomSelect
