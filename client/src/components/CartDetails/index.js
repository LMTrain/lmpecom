import React from "react";
import { Row, Col, Button} from 'reactstrap';
import "./style.css";



function CartDetails(props) {  
  return (
   
    <div>    
    <ul className="list-group search-cartItems">
      {props.showCart.map(cartItem => (          
        <li key={cartItem._id} className="list-group-item">
          <Row>
            <Col md="2">
              <img alt={cartItem.item} width="200" height="220" className="img-fluid" src={cartItem.thumbnail} /><span></span> 
            </Col>            
            <Col md="7">             
              <form className="qty">          
                <div className="qty-form-group">                  
                  <label htmlFor="qty"></label>                  
                  <input
                    value={props.qty}
                    onChange={props.handleInputChange}
                    name="qty"          
                    type="number"
                    className="qty-form-control"
                    placeholder="1"
                    id="qty"
                  />
                  <span> <b>QTY</b></span>
                  <span>
                    <Button type="submit" onClick={props.handleFormSubmit} color="info" size="sm"><span> Add</span></Button>
                   
                  </span>
                </div>          
              </form>
            </Col>
            <Col md="3">
              <span style={{ marginLeft: 80 }}><Button type="submit" onClick={() => props.backToCart()} color="danger" size="sm">close</Button>{" "}</span>
            </Col>
          </Row>
          <br></br>
          <p> {cartItem.item}</p>
          <p> ${cartItem.price}</p>
          <p><b>Rating :</b> {cartItem.rating}</p>
          <p><b>Description :</b> {cartItem.description}</p>          
        </li>        
      ))}      
    </ul>                
  </div>
  );
  
}



export default CartDetails;
