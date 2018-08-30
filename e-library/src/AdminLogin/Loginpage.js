import React from 'react';
import './Loginpage.css';

class Login extends React.Component{
    render(){
        return(
            <div className="body">
             <div className="main">
                <form className="container">
                    <h1 className="heads">Admin Login</h1>
                    <label>User name</label>
                    <input type="name" placeholder="Enter your Name" className="inp" required></input>
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" className="inp" required></input>
                    <button className="btn1 btn-primary">Login</button>
                </form>
              </div>
            </div>
        );
    }
}

export default Login;