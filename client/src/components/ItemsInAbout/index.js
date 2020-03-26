import React from "react";
import {  Row, Col} from 'reactstrap';
import "./style.css";

function truncateString(str, num) {    
  if (str.length > num && num > 3) {
          return str.slice(0, (num - 3)) + '...';
      } else if (str.length > num && num <= 3) {
          return str.slice(0, num) + '...';
      } else {
      return str;
  }    
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
                        src={result.largeImage == null ? 'https://lmtrain.github.io/lm-images/assets/images/books5.jpg' : result.largeImage} />
                  </div>                  
                  <div className="content">
                    <p>{result.name = truncateString(result.name, 30)}</p>
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

