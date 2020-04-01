import React, { Component } from "react";
import "./style.css";
import API from "../utils/API";
import { Card, Button, Row, Col} from 'reactstrap';
import CartDetails from "../components/CartDetails";
import DetailModal from "../components/Modals"


var mId ="";
var allUsersCarts = [];

class Cart extends Component {
    state = {
    cart: {},
    userCarts: [],
    itemCarts: [],
    useritemCartsCount: 0,
    showCart: [],
    detailsItemCart: [],
    showCartItemDetail: false,    
    showitemCarts: true,
    qty: 0,
    itemId: "",
    memberId: this.props.memberId,
    setModal: false,
    isOpen: false   
  };
 
  componentWillMount() { 
    mId = this.state.memberId    
    this.loadCarts();
  }

  loadCarts = () => {
    API.getCarts()
      .then(res => {        
        this.setState({ cart: res.data })
        
        allUsersCarts = [...res.data]        
        this.setState({itemCarts: [allUsersCarts]})        
        // console.log("THIS IS MID", mId)
        let cartsFind = [];
        var useritemCarts = 0;
        for (let i = 0;  i < allUsersCarts.length; i++) {      
          if (allUsersCarts[i].memberId === mId) {
              cartsFind.push(allUsersCarts[i])
              useritemCarts = useritemCarts + 1;            
              this.setState({userCarts:cartsFind, 
                            useritemCartsCount: useritemCarts,
                            showCartState: false,
                            showitemCarts: true
                          })
            }
          } 
      }
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const qty = event.target.name;
    const value = event.target.value;  
    this.setState({
      [qty]: value
    });   
  };

  handleFormSubmit = event => {   
    event.preventDefault();
    console.log(event)
    this.setState({qty: this.state.qty});
    this.addQty()
  };

  cartItemDetailsSubmit = (id) => {  
    // Find the id in the state
    const usercart = this.state.userCarts.find((cart) => cart._id === id);
    // console.log("THIS IS FAVDATAIL", usercart) 
    this.setState({showCart: [usercart], 
                  detailsItemCart: [usercart],
                  itemId: id, 
                  showCartItemDetail: true,
                  showitemCarts: true,
                  setModal: true,
                  redirect: true
                })
          
  };

  backToCart = () => {
    this.setState({showCartItemDetail: false}) 
    this.loadCarts();
  }

  addQty = (id) => {
    console.log(this.state.qty)
    console.log(this.state.itemId)  
    let cartQty = this.state.qty
    API.updateCart({
      _id: this.state.itemId,
      qty: cartQty      
    })
      .then(res => {console.log(res)})
      .catch(err => console.log(err)); 
  };

  
  editQty = (id) => {
    const cartQty = this.state.cart.find((cartQty) => cartQty._id === id);  
    console.log("FAV cart", cartQty)
    
    
  }
  
  deleteCart = id => {
    console.log(id)
    API.deleteCart(id)
      .then(res => this.loadCarts())
      .catch(err => console.log(err));
  };  
  
  

  render() { 
    function truncateString(str, num) {    
      if (str.length > num && num > 3) {
              return str.slice(0, (num - 3)) + '...';
          } else if (str.length > num && num <= 3) {
              return str.slice(0, num) + '...';
          } else {
          return str;
      }    
    }
    const {useritemCartsCount, showCartItemDetail, showCart, showitemCarts, itemId, userCarts, setModal} = this.state;
    return (
      <div>
          { showitemCarts === true ?
            <Row>
              <Card className="cart-item-display">
                <h5 className="text-center">Cart Items</h5> 
                  {showitemCarts === true &&
                  userCarts.length ? (                          
                    <div className="cart-row-display">
                        {this.state.userCarts.map(cart => (
                          <Row key={cart._id} md="3"> 
                            <Col md="10">                                
                              {/* <span onClick={() => this.loaditemCarts(cart._id)}> */}
                              <div className="cart-card" onClick={() => this.cartItemDetailsSubmit(cart._id)} title="See Details"> 
                                <DetailModal
                                  note={this.state.qty}
                                  handleFormSubmit={this.handleFormSubmit}
                                  handleInputChange={this.handleInputChange}  
                                  showCart={showCart}
                                  itemId={itemId} 
                                  cartSubmit={this.cartSubmit} 
                                  backToCart={this.backToCart}
                                  addQty={this.addQty} 
                                  memberId={this.state.memberId}
                                ></DetailModal>                  
                                <div className="cart-img-container">
                                  <img className="cart-image"
                                    alt={cart.item} width="40" height="80"
                                    src={cart.thumbnail}
                                  />
                                </div>
                                <div style={{ color: "black", marginTop: 5, gap: -5}}>
                                  <p>{cart.item}</p>
                                  <p>${cart.price} </p> 
                                  <p> <b>QTY :</b> {cart.qty} <b style={{ color: "white"}}>____</b>{" "}<b>Rating :</b> {cart.rating}</p>
                                  <p><b>Desc :</b>  {cart.description = truncateString(cart.description, 180)}</p>
                                </div>                                    
                              </div>       
                            </Col>
                            <Col md="2">
                            <span className="delete-button">
                              <Button onClick={() => this.deleteCart(cart._id)} color="danger" size="sm"><b>X</b></Button>                              
                            </span>
                            </Col>                 
                          </Row>
                        ))
                      }
                    </div>
                  ) 
                      : showCartItemDetail === false &&
                        showitemCarts === true &&
                        useritemCartsCount === 0 ?
                        (<div>
                          <h5>No item(s) in your Cart</h5>                              
                        </div>
                      ) : null                
                  }
              </Card>
            </Row> : null
          }
          {/* { 
            showCartItemDetail === true ? 
              <CartDetails
                note={this.state.qty}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}  
                showCart={showCart}
                itemId={itemId} 
                cartSubmit={this.cartSubmit} 
                backToCart={this.backToCart}
                addQty={this.addQty} 
                memberId={this.state.memberId}
              /> : null 
          }  */}
        
      </div>
    );
  }
}
        
               

export default Cart;





