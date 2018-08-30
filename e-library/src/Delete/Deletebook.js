import React from 'react';
import './Deletebook.css';

class Deletebook extends React.Component{
    render(){
        return(
            <div>
                <div className="container">
        <div className="row">
            <div className="col text-center">
                <h1> Delete Book</h1>
            </div>
        </div>
    </div>

    <div className="container">
        <form>
            <div className="form-row">
                <div className="form-group col-md-9">
                    <label for="inputName"> Book Name </label>
                    <input type="text" className="form-control" id="inputName" placeholder="Enter book name here"></input>
                </div> 
                <div className="form-group col-md-9">
                    <label for="inputAuthorName"> Author Name </label>
                    <input type="tel" className="form-control" id="inputAuthorName" placeholder="Enter author name here"></input>
                </div>
                <div className="form-group col-md-9">
                    <label for="inputAuthorName"> Book Id </label>
                    <input type="tel" className="form-control" id="inputAuthorName" placeholder="Enter book id"></input>
                </div>
                
            </div>
            

            
            <button type="submit" className="btn btn-primary"> Save </button>
        </form>

    </div>

            </div>
        );
    }
}
export default Deletebook;