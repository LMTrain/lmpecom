import React from "react";
import "./style.css";
import { Button } from 'reactstrap';


// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) { 
  if (props.memberId === undefined) {

  }
  return (
   <>
      
      <span>
        <form className="search">
          
          <div className="search-form-group">
            <label htmlFor="search"></label>
            <input
              value={props.appSearch || props.search}
              onChange={props.apphandleInputChange || props.handleInputChange}
              // onChange={props.setSearch}
              name="search"          
              type="text"
              className="form-control"
              placeholder="Search for an item or product"
              id="search"
            />
            <span>
              <button 
                type="submit" 
                onClick={props.apphandleFormSubmit || props.handleFormSubmit} 
                className="btn btn-success">
                <span><i className="fa fa-search"></i></span>
              </button>
            </span>
          </div>          
          { props.memberId === undefined ? null :
            <>
              <div className="menu-bar">
                <Button type="submit" onClick={props.signOut}color="info" size="sm">Sign Out</Button>{" "}
                <Button type="submit" onClick={() => props.backToSearch()} color="info" size="sm">Add items</Button>{" "}
                <Button type="submit" onClick={props.renderRedirect} color="info" size="sm" >Cart</Button>  
              </div>         
            </>
          }
          
        </form>
      </span>
    
    
  </>
  );
}

export default SearchForm;
