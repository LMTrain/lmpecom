import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <Link className="navbar-brand" to="/">
        LM Pecom
      </Link>
      <span>
        <form className="search">          
          <div className="search-form-group">
            <label htmlFor="search"></label>
            <input
              value={props.search}
              onChange={props.handleInputChange}                             
              name="search"                   
              type="text"
              className="form-control"
              placeholder="Type an item to buy"
              id="search"
            />
            <span>
              <button 
                type="submit"
                onClick={props.handleFormSubmit}
                className="btn btn-success">
                <span><i className="fa fa-search"></i></span>
              </button>
            </span>
          </div>
        </form>
      </span>
      { props.userName === undefined || props.userName === null  ?
        <>            
          <div>
            <ul className="navbar-nav">                  
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
        </>           
        :          
        <>
        <ul className="navbar-nav">
          <li className="nav-item"> 
          
            <Link to="/search" className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}><b>{props.membername}</b></Link>
               
          </li>
          <li className="nav-item">
            <Link className="getstarted-in-nav"
              to="/cart"
              className={window.location.pathname === "/Cart" ? "nav-link active" : "nav-link"}
            >
              Cart
            </Link>
          </li>         
          <li className="nav-item">
            <Link className="getstarted-in-nav"
              to="/signout"
              className={window.location.pathname === "/Signout" ? "nav-link active" : "nav-link"}
            >
              Sign Out
            </Link>
          </li>
        </ul>
        </>
      }
    </nav>
  );
}

export default Navbar;
