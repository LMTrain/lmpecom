import React from "react";
import "./style.css";
import { Card, Row, Col} from 'reactstrap';



const shortText = (text, maxLength = 30) => {
  if (!text) { return ' '}
  if (text.length <= maxLength) { return text }

  return text.substr(0, maxLength) + '...'
} 

function AboutSearchedResult(props) {
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
                  
                  <p>{shortText(result.name)}</p>
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



export default AboutSearchedResult;
