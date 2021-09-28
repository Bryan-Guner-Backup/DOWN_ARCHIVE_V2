import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../store/actions';

class Register extends Component {
  state = {
    credentials: {
      username: '',
      password: '',
      role: '',
      name: '',
      phone: '',
      email: ''
    }
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.register(this.state.credentials).then(() => {
      this.props.history.push({
        pathname: '/login',
        state: {
          email: this.state.credentials.email,
          password: this.state.credentials.password
        }
      })
    })
  }

  render(){
      return(
          <div className="ui container">
            <h2>Registration Page</h2>
            <Link to="/login">Login here.</Link>
            <div className="ui placeholder segment">
              <form className="ui form" onSubmit={this.onSubmit}>
                <div className="field">
                  <label>Username</label>
                  <div className="ui left icon input">
                    <input
                      id="username"
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={this.state.credentials.username}
                      onChange={this.handleChange}
                    />
                    <i aria-hidden="true" className="user icon"></i>
                  </div>
                </div>
                <div className="field">
                  <label>Password</label>
                  <div className="ui left icon input">
                    <input 
                      id="password"
                      type="text"
                      name="password"
                      placeholder="Password"
                      value={this.state.credentials.password}
                      onChange={this.handleChange}
                    />
                    <i aria-hidden="true" className="user icon"></i>
                  </div>
                </div>
                <div className="field">
                  <label>Name</label>
                  <div className="ui left icon input">
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={this.state.credentials.name}
                      onChange={this.handleChange}
                    />
                    <i aria-hidden="true" className="building icon"></i>
                  </div>
                </div>
                 <div className="field">
                  <label>Phone</label>
                  <div className="ui left icon input">
                    <input 
                      id="phone"
                      type="phone"
                      name="phone"
                      placeholder="Phone"
                      value={this.state.credentials.phone}
                      onChange={this.handleChange}
                    />
                    <i aria-hidden="true" className="lock icon"></i>
                  </div>
                </div>
                <div className="field">
                  <label>Email</label>
                  <div className="ui left icon input">
                    <input 
                      id="email"
                      type="text"
                      name="email"
                      placeholder="Email Address"
                      value={this.state.credentials.email}
                      onChange={this.handleChange}
                    />
                    <i aria-hidden="true" className="address card icon"></i>
                  </div>
                </div>
               <button className="ui red button">Register</button>
              </form>
            </div>
          </div>
      )
  }
}

export default connect(
    null,
    { register }
  )(Register)