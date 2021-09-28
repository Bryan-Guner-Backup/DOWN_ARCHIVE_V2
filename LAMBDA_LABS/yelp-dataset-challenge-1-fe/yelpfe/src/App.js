import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './store/auth/PR';
import { connect } from "react-redux";
import { readInfo } from './store/actions';
import './App.css';

// components
import Header from './components/nav/Header';
import Footer from './components/nav/Footer'

import Login from './pages/Login';
import Register from './pages/Register';

import Dashboard from './pages/Dashboard';


const Home = () => {
  return(
    <div className="welcome-container">
      <h1>Welcome to Yelpie</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam voluptatibus maxime labore nostrum nulla in magnam excepturi quasi sapiente veritatis repudiandae amet ullam distinctio, quaerat rerum dignissimos tenetur nesciunt molestiae?</p>
    </div>
  )

}

class App extends Component {
  state = {
    userInfo: []
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
}

componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
    this.saveStateToLocalStorage();
}

  hydrateStateWithLocalStorage() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocalStorage() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  render() {
    return (
      <Router>
        {/* <GlobalStyle/> */}
        <div className='app-body'>
          <Header/>
          <>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/" component={Home} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </>
          <Footer/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state
  };
};

export default connect(
  mapStateToProps,
  {readInfo}
)(App);
