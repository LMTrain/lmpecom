import React from "react";
import "./style.css";


// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) { 
  
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
      </form>
    </span>
    
    
  </>
  );
}

export default SearchForm;
