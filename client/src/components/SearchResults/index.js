import React from "react";
import "./style.css";
import { Card, Row, Col} from 'reactstrap';
import SearchedModal from "../SearchedModal"

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
      <Card className="card-item-display">
        <div className = "item-row-display">         
          {props.items.map(result => (   
            <Col key={result.itemId} md="3">
              <div className="item-card">
                <div className="img-container" onClick={() => props.handleDetailsSubmit(result.itemId)} title="See Details">                
                  <img 
                      key={result.itemId} 
                      alt={result.name} width="120" height="160" className="img-fluid" 
                      src={result.largeImage} />
                </div>                  
                <div className="content" onClick={() => props.handleDetailsSubmit(result.itemId)} title="See Details">
                <SearchedModal 
                  showItem={props.showItem} 
                  cartSubmit={props.cartSubmit}                  
                  memberId={props.memberId}
                  
                />
                  <p>{result.name = truncateString(result.name, 40)}</p>
                  <b>Rating :</b> {result.customerRating}
                  <p><b>${result.salePrice}</b></p>
                </div>
                           
                  <div className="result-card-button">                   
                    { props.memberId === null || props.memberId === undefined ? [] :
                      <>
                        <p onClick={() => props.cartSubmit(result.itemId)}>Buy</p>
                        <p style={{ color: "white"}}> Add</p>
            
                        <p onClick={() => props.addItemToSaveForLater(result.itemId)}>Save </p>
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
