import React from "react";
import "./style.css";
import { Button } from 'reactstrap';


// Using the datalist element we can create autofill suggestions based on the props.breeds array
function UserForm(props) {
  return (
    <div className="card card-body">
      <div id="message"></div>
      <h5>Create Account</h5>
        <form className="form-groups">
          <div className="form-group">
            <label htmlFor="membername"></label>
            <input
              value={props.membername}
              onChange={props.handleInputChange}
              name="membername"
              type="text"
              className="form-control" 
              placeholder="Enter Your Name"
              id="membername"
              />
          </div>
          <div className="form-group">
            <label htmlFor="memberemail"></label>
            <input 
              value={props.memberemail}
              onChange={props.handleInputChange}
              name="memberemail"
              type="text"
              className="form-control"  
              placeholder="Email"
              id="memberemail"
              />
          </div>
          <div className="form-group">
            <label htmlFor="memberpassword"></label>
            <input
              value={props.memberpassword}
              onChange={props.handleInputChange}
              name="memberpassword"
              type="password" 
              className="form-control" 
              placeholder="Password"
              id="memberpassword" 
              />
          </div>
          <div className="form-group">
            <label id="confirmpassword"></label>
            <input
              value={props.confirmpassword}
              onChange={props.handleInputChange}
              name="confirmpassword"
              type="password" 
              className="form-control" 
              placeholder="Confirm Password"
              id="confirmpassword" 
              />
          </div>
        </form>
        <div className="getstarted">
          <span>
            <Button 
              type="submit" onClick={props.handleFormSubmit} color="info" size="sm">Sign Up
            </Button>        
            <p>Have An Account? <a href="/Signin/">Sign On</a></p>
          </span>
        </div>
    </div>
  );
}

export default UserForm;
