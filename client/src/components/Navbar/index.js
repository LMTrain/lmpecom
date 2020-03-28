import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "../SearchForm"
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
var option = ""
function Navbar(props) {
  console.log("NAVBAR", props.userName)
  if (props.userName === null || props.userName === undefined) {
     option = "from-search"
     console.log("OPTION", option)
  } else {
     option = props.userName
     console.log("OPTION", option)
  }
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <Link className="navbar-brand" to="/">
        <span onClick={() => props.navBarOption(option)}>LM Pecom</span>
      </Link>
        { props.userName !== undefined || props.userName === null  ? 
      
        ( <>
            <SearchForm 
              handleFormSubmit={props.handleFormSubmit}
              handleInputChange={props.handleInputChange} 
              renderRedirect={props.renderRedirect}
              memberId={props.userName}
              renderRedirect={props.renderRedirect}
            
             /> 
            <div style={{ fontSize: 20, color: "white", marginRight: 60 }}>
              <b>{props.membername}</b>
            </div>
          </>

        ) :
        
        <div>
          <ul className="navbar-nav">
          
          <SearchForm 
          //  appSearch={props.appSearch}
           apphandleFormSubmit={props.apphandleFormSubmit}
           apphandleInputChange={props.apphandleInputChange} 
          
          /> 
          
            
            {/* <li className="nav-item">
              <Link
                to="/search"
                className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
              >
                Search
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="getstarted-in-nav"
                to="/getstarted"
                className={window.location.pathname === "/getstarted" ? "nav-link active" : "nav-link"}
              >
                Get Started
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signin"
                className={window.location.pathname === "/signin" ? "nav-link active" : "nav-link"}
              >
                Sign In
              </Link>
              </li>             
          </ul>
        </div>
      }
    </nav>
  );
}

export default Navbar;
