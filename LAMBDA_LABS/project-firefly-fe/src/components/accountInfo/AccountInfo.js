import React, { Component } from 'react'

import axios from 'axios'
import { UserContext } from '../../contexts/UserContext'

export default class AccountInfo extends Component {
    static contextType = UserContext

    state = {
        userId: '',
        credentials: {
            first_name: '',
            last_name: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        },
        isLoading: false
    }
    //check for first name
    handleChange = e => {
        if (this.state.credentials.first_name.length <= 1) {
            let element = document.getElementById("pTag")
            element.classList.remove("hidden")
        }
        if (this.state.credentials.first_name.length > 1) {
            let element = document.getElementById("pTag")
            element.classList.add("hidden")
        }
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
        // console.log('statehere', this.props)
    }

    //check length for last name
    handleChange2 = e => {
        if (this.state.credentials.last_name.length <= 1) {
            let element = document.getElementById("pTag2")
            element.classList.remove("hidden2")
        }
        if (this.state.credentials.last_name.length > 1) {
            let element = document.getElementById("pTag2")
            element.classList.add("hidden2")
        }
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
        // console.log('statehere', this.state)
    }

    //check length for address
    handleChange3 = e => {
        if (this.state.credentials.address.length <= 1) {
            let element = document.getElementById("pTag3")
            element.classList.remove("hidden3")
        }
        if (this.state.credentials.address.length > 1) {
            let element = document.getElementById("pTag3")
            element.classList.add("hidden3")
        }
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
        // console.log('statehere', this.state)
    }

    //for city
    handleChange4 = e => {
        if (this.state.credentials.city.length <= 1) {
            let element = document.getElementById("pTag4")
            element.classList.remove("hidden4")
        }
        if (this.state.credentials.city.length > 1) {
            let element = document.getElementById("pTag4")
            element.classList.add("hidden4")
        }
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
        // console.log('statehere', this.state)
    }


    //for state of residence
    handleChange5 = e => {
        if (this.state.credentials.state.length <= 1) {
            let element = document.getElementById("pTag5")
            element.classList.remove("hidden5")
        }
        if (this.state.credentials.state.length > 1) {
            let element = document.getElementById("pTag5")
            element.classList.add("hidden5")
        }
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
        // console.log('statehere', this.state)
    }

    //for zip
    handleChange6 = e => {
        if (this.state.credentials.zip.length <= 1) {
            let element = document.getElementById("pTag6")
            element.classList.remove("hidden6")
        }
        if (this.state.credentials.zip.length > 1) {
            let element = document.getElementById("pTag6")
            element.classList.add("hidden6")
        }
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
        // console.log('statehere', this.state)
    }

    onSubmit = (e) => {
        e.preventDefault()
        const userChange = this.state.credentials
        axios.put(`https://infinite-meadow-87721.herokuapp.com/users/${this.context.loggedInUser._id}`, userChange)
            .then(res => {
                // console.log(res)
                this.context.setLoggedInUser(res.data);
                
                this.setState({ isLoading: true })
            })
            .then(() => this.props.history.push('/stripe'))
            .catch(err => {
                // console.log(err)
                alert('There was error submitting the information.')
                // this.props.history.push('/');
            })
    }

    textCheck = (e) => {

        if (this.state.credentials.first_name.length > 0 &&
            this.state.credentials.last_name.length > 0 &&
            this.state.credentials.address.length > 0 &&
            this.state.credentials.city.length > 0 &&
            this.state.credentials.state.length > 0 &&
            this.state.credentials.zip.length > 0
        ) {
            let element = document.getElementById("form")
            element.classList.add("buttonChange")
        }
    }
    // handleChange2()
    render() {
        if (this.state.isLoading == true) {
            // console.log('hi')
            return (<div className='loading'>Loading...</div>)
        }
        return (
            <div className='accountInfo' onChange={this.textCheck}>
                <h1>STEP 1: ACCOUNT INFORMATION</h1>

                <form className='form' onSubmit={this.onSubmit}>
                    <div className='flexStart'>
                        <div className='inputColumn width2'>
                            <label className='formLabel'>First Name</label>
                            <input
                                className='inputStyle width3'
                                type='text'
                                name='first_name'
                                value={this.state.credentials.first_name}
                                onChange={this.handleChange}
                            />
                            <p id='pTag' className='required hidden'>*Required</p>
                        </div>
                        <div className='inputColumn width2'>
                            <label className='formLabel'>Last Name</label>
                            <input
                                className='inputStyle width3'
                                type='text'
                                name='last_name'
                                value={this.state.credentials.last_name}
                                onChange={this.handleChange2}
                            />
                            <p id='pTag2' className='required hidden2'>*Required</p>
                        </div>
                    </div>

                    <div className='flexStart width'>
                        <div className='inputColumn width'>
                            <label className='formLabel'>Address</label>
                            <input
                                className='inputStyle width'
                                type='text'
                                name='address'
                                value={this.state.credentials.address}
                                onChange={this.handleChange3}
                            />
                            <p id='pTag3' className='required hidden3'>*Required</p>
                        </div>
                    </div>

                    <div className='flexStart width'>
                        <div className='inputColumn width'>
                            <label className='formLabel'>City</label>
                            <input
                                className='inputStyle width'
                                type='text'
                                name='city'
                                value={this.state.credentials.city}
                                onChange={this.handleChange4}

                            />
                            <p id='pTag4' className='required hidden4'>*Required</p>
                        </div>
                    </div>

                    <div className='flexStart'>
                        <div className='inputColumn width2'>
                            <label className='formLabel'>State</label>
                            <input
                                className='inputStyle width3'
                                type='text'
                                name='state'
                                value={this.state.credentials.state}
                                onChange={this.handleChange5}
                            />
                            <p id='pTag5' className='required hidden5'>*Required</p>
                        </div>
                        <div className='inputColumn width2'>
                            <label className='formLabel'>Zip Code</label>
                            <input
                                className='inputStyle width3'
                                type='text'
                                name='zip'
                                value={this.state.credentials.zip}
                                onChange={this.handleChange6}
                            />
                            <p id='pTag6' className='required hidden6'>*Required</p>
                        </div>
                    </div>

                    <div className='buttonSpace width'>
                        <button id='form' className='buttonStyle' type='submit'>Next</button>
                    </div>
                </form>
            </div>
        )
    }
}

