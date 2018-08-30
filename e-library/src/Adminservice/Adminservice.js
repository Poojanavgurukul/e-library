import React from 'react';
import './Adminservice.css';

class Adminservice  extends React.Component{
    render(){
        return(
            <div>
                <div className="images">
                    <div className="main2">
                        <p className="content">For Admin Use</p>
                    </div>
                    <div className="main">
                        <button className="btn2 btn-primary">Add Books</button>
                        <button className="btn2 btn-danger">Delete Books</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Adminservice;