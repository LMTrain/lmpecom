import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';

const DetailModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
          <ul className="list-group search-cartItems">
          {props.showCart.map(cartItem => (          
            <li key={cartItem._id} className="list-group-item">
              <ModalHeader toggle={toggle}><b>{cartItem.item}</b></ModalHeader>
              <ModalBody>
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
                  
                  </Row>
                <br></br>
                <p> {cartItem.item}</p>
                <p> ${cartItem.price}</p>
                <p><b>Rating :</b> {cartItem.rating}</p>
                <p><b>Description :</b> {cartItem.description}</p>  
              </ModalBody>        
            </li>        
          ))}      
            {/* <ModalFooter>
              <Button color="info" size="sm" onClick={props.handleFormSubmit}>Add</Button>{' '}
              <Button color="info" size="sm" onClick={toggle}>Close</Button>
            </ModalFooter> */}
        </ul>                
      </Modal>
    </div>
  );
}

export default DetailModal;