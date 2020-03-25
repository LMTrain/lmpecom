import React from "react";
import "./style.css";
import { Card, Row, Col} from 'reactstrap';

function truncateString(str, num) {    
  if (str.length > num && num > 3) {
          return str.slice(0, (num - 3)) + '...';
      } else if (str.length > num && num <= 3) {
          return str.slice(0, num) + '...';
      } else {
      return str;
  }    
}

function SearchResults(props) {
 
  return (
             
    <Row>
      <Card className="item-display">
        <div className = "item-row-display">         
          {props.items.map(result => (   
            <Col key={result.itemId} md="3">
              <div className="item-card">
                <div className="img-container">                
                  <img 
                      key={result.itemId} 
                      alt={result.name} width="120" height="180" className="img-fluid" 
                      src={result.largeImage == null ? 'https://lmtrain.github.io/lm-images/assets/images/books5.jpg' : result.largeImage} />
                </div>                  
                <div className="content">
                  <p>{result.name = truncateString(result.name, 40)}</p>
                  <b>Rating :</b> {result.customerRating}
                  <p><b>${result.salePrice}</b></p>
                </div>                                   
                <div>                
                  <p onClick={() => props.handleDetailsSubmit(result.itemId)}>Details</p>
                </div>
                <div className="card-button">
                  {/* <button id={result.etag} type="submit" onClick={() => props.cartSubmit(result.id)} className="btn btn-success">Add to Favorite</button> */}
                  { props.memberId === null || props.memberId === undefined ? [] :
                    <>
                      <p  
                        onClick={() => props.cartSubmit(result.itemId)}>Add to Cart
                      </p>
                      <p    
                        onClick={() => props.addItemToSaveForLater(result.itemId)}>Save For Later
                      </p>
                    </>
                  }
                </div>
              </div>               
            </Col>
          ))} 
        </div>
      </Card>
    </Row>    
  );
  
}



export default SearchResults;
