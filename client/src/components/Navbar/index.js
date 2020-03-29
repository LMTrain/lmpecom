import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item

function Navbar(props) {
   console.log("THIS IS PROPS IN NAVBAR =>", props)
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
              onChange={props.setSearch}                             
              name="search" 
              width="1800px"         
              type="text"
              className="form-control"
              placeholder="Type an item to buy"
              id="search"
            />
            <span>
              <button 
                type="submit" 
                onClick={props.submit} 
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
          <div style={{ fontSize: 20, color: "white", marginRight: 60 }}>
            <b>{props.membername}</b>
          </div>           
          <div className="menu-bar">
            <Button type="submit" onClick={props.renderRedirect} color="info" size="sm" >Cart</Button>  
            <Button type="submit" onClick={props.signOut}color="info" size="sm">Sign Out</Button>{" "}                
          </div>            
        </>
      }
    </nav>
  );
}

export default Navbar;
