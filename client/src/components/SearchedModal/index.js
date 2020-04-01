import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';

const SearchedModal = (props) => {
  const {    
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="info" size="sm" onClick={toggle}>Details</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
            <ul className="list-group search-itemDetails">  
                {props.showItem.map(itemDetail => (           
                        <li key={itemDetail.itemId} className="list-group-item">
                        <ModalHeader toggle={toggle}><b>{itemDetail.name}</b></ModalHeader>
                        <ModalBody>
                        <img alt={itemDetail.className} width="200" height="220" className="img-fluid" src={itemDetail.largeImage == null ? 'https://lmtrain.github.io/lm-images/assets/images/books5.jpg' : itemDetail.largeImage} /><span></span>
                    
                    <span>            
                        { props.memberId === null || props.memberId === undefined ? "Sign In to Add items to your cart" :
                        <>
                            <Button  
                            id={itemDetail.itemId} type="submit" onClick={() => props.cartSubmit(itemDetail.itemId)} color="info" size="sm">Add to Cart
                            </Button>    
                        </>
                        }
                    </span>       
                    <br></br>
                    <p><b>Name             :</b> {itemDetail.name}</p>
                    <p><b>Price         :</b> ${itemDetail.salePrice}</p>
                    <p><b>Rating         :</b> {itemDetail.customerRating}</p>          
                    <p><b>Description :</b> {itemDetail.shortDescription}</p>          
                        </ModalBody>
                    </li>
                ))}      
            </ul>                
        </Modal>
    </div>
  );
}

export default SearchedModal;