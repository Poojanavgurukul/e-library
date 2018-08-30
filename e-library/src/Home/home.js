import React from 'react';
import './home.css';


class Home extends React.Component{
    
    render(){
        return(
            <div>
                <div className="heading">
                    <i className="fa fa-book"></i>
                    <h1 className="headtext">E-Book Library</h1>
                </div>
                <div className="image">
                    <button className="btn btn-primary">Admin</button>
                    <button className="btn btn-primary">User</button>
                </div>
            </div>
        );
    }
}

export default Home;