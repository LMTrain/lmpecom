import React from "react";
import {  Row, Col} from 'reactstrap';
import "./style.css";

const shortText = (text, maxLength = 30) => {
  if (!text) { return ' '}
  if (text.length <= maxLength) { return text }

  return text.substr(0, maxLength) + '...'
} 

function ItemsInAbout(props) { 
    return (
      <Row>
        <div className = "itemabout-row-display" >         
            {props.deals.map(result => (   
              <Col key={result.itemId} md="3">
                <div className="itemabout-card" onClick={() => props.handleShuffleClick()}>
                  <div className="imgabout-container">                
                    <img 
                        key={result.itemId} 
                        alt={result.name} width="120" height="160" className="img-fluid" 
                        src={result.largeImage}/>
                  </div>                  
                  <div className="content">
                    <p>{shortText(result.name)}</p>
                    <b>Rating :</b> {result.customerRating}
                    <p><b>${result.salePrice}</b></p>
                  </div>
                </div>               
              </Col>
            ))} 
          </div>
      </Row>
      
    );
    
  }
  
  export default ItemsInAbout;

