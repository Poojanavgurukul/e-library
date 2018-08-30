import React from 'react'
import './UserLogin.css';

class  Userlogin extends React.Component{
    render(){
        return(
            <div className="body">
             <div className="main">
                <form className="container">
                    <h1 className="heads">User Login</h1>
                    <label>User name</label>
                    <input type="name" placeholder="Enter your Name" className="inp" required></input>
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" className="inp" required></input>
                    <span className="text">Not Registered?<strong>SignUp</strong></span>
                    <button className="btn1 btn-primary">Login</button>
                </form>
              </div>
            </div>
        );
    }
}
export default Userlogin;