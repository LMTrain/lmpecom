import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
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
              // onChange={props.setSearch}
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
                // onClick={props.submit}
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
          <div className="signin-menu-bar">
            <b>{props.membername}</b> 
          </div>
          <div className="signin-menu-bar">
            <Link 
              to="/cart"
              className={window.location.pathname === "/getstarted" ? "nav-link active" : "nav-link"}
              >
                Cart
            </Link>
            <Link 
                to="/getstarted"
                className={window.location.pathname === "/getstarted" ? "nav-link active" : "nav-link"}
              >
                  Sign Out
            </Link>
            {/* onClick={props.renderRedirect} color="info" size="sm" >Cart  
            <Button type="submit" onClick={props.signOut}color="info" size="sm">Sign Out</Button>{" "}                 */}
          </div>            
        </>
      }
    </nav>
  );
}

export default Navbar;
