import React from 'react';
import './Usersignup.css';

class Usersignup extends React.Component{
    render(){
        return(
            <div>
                <div className="container">
        <div className="row">
            <div className="col text-center">
                <h1> Sign Up</h1>
            </div>
        </div>
        

    </div>

    <div className="container">
        <form>
            <div className="form-row">
                <div className="form-group col-md-9">
                    <label for="inputName"> Name </label>
                    <input type="text" className="form-control" id="inputName" placeholder="Enter your name"></input>
                </div> 

              <div className="form-group col-md-9">
                <label for="username">Username</label>
                   <div className="input-group">
                    <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input type="text" className="form-control" id="username" placeholder="Username" required></input>
              </div>
            </div>

                <div className="form-group col-md-9">
                    <label for="inputAuthorName"> Email-id </label>
                    <input type="email" className="form-control" id="inputAuthorName" placeholder="Enter your email-id"></input>
                </div>
                <div className="form-group col-md-9">
                    <label for="inputAuthorName"> Password </label>
                    <input type="password" className="form-control" id="inputAuthorName" placeholder="Enter your password"></input>
                </div>
                
            </div>
            

            
            <button type="submit" className="btn btn-primary"> Save </button>
        </form>

    </div>
 
            </div>
        );
    }
}
export default Usersignup;