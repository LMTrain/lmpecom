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
            <Col md="3">
              <span style={{ marginLeft: 80 }}><Button type="submit" onClick={() => props.backToFav()} color="info" size="sm">Back To Cart</Button>{" "}</span>
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
                    className="form-control"
                    placeholder="1"
                    id="qty"
                  />
                  <span>
                    <Button type="submit" onClick={props.handleFormSubmit} color="info" size="sm"><span> Add</span></Button>
                  </span>
                </div>          
              </form>
              <p><b>QTY:</b>{" "}{cartItem.qty}</p>
            </Col>
          </Row>          
          {/* <span style={{ marginLeft: 80 }}><button id={props.FavId} type="submit" onClick={() => props.addNote()} className="btn btn-success">Save Note</button>{" "}</span>   */}
          
          <br></br>
          <p><b>Name             :</b> {cartItem.item}</p>
          <p><b>Price         :</b> ${cartItem.price}</p>
          <p><b>Rating :</b> {cartItem.rating}</p>
          <p><b>Description :</b> {cartItem.description}</p>          
        </li>        
      ))}      
    </ul>                
  </div>
  );
  
}



export default CartDetails;
