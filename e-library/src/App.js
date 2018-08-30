import React, { Component } from 'react';
import Home from './Home/home.js';
import './App.css';
import Login from './AdminLogin/Loginpage.js';
import Userlogin from './UserLogin/UserLogin.js'
import Adminservice from './Adminservice/Adminservice.js';

class App extends Component {
  render() {                                      
    return (
      <div className="App">
      <Home /> 
      <Login />
      <Userlogin />
      <Adminservice />  
      </div>
    );
  }
}   

export default App;
