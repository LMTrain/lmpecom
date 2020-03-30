import React from "react";
import "./style.css";
import { Button} from 'reactstrap';



function Details(props) { 
  return (
   
    <div>
    
    <ul className="list-group search-itemDetails">  
      {props.showItem.map(itemDetail => (          
        <li key={itemDetail.itemId} className="list-group-item">
          <img alt={itemDetail.className} width="200" height="220" className="img-fluid" src={itemDetail.largeImage == null ? 'https://lmtrain.github.io/lm-images/assets/images/books5.jpg' : itemDetail.largeImage} /><span></span>
          <span style={{ marginLeft: 80 }}><Button type="submit" onClick={() => props.backToSearch()} color="danger" size="sm">Close</Button>{" "}</span> 
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
        </li>        
      ))}      
    </ul>                
  </div>
  );
  
}



export default Details;
