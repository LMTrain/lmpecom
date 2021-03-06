import React, { Component } from "react";
import "./style.css";
import API from "../utils/API";
import { Card, CardText, CardBody, CardTitle, Button, Row, Col, Container} from 'reactstrap';
import DetailModal from "../components/Modals"


var mId ="";
var allUsersCarts = [];

class Cart extends Component {
    state = {
    cart: {},
    userCarts: [],
    itemCarts: [],
    useritemCartsCount: 0,
    totalItemsPrice: 0,
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
        var itemsPrice = 0;
        for (let i = 0;  i < allUsersCarts.length; i++) {      
          if (allUsersCarts[i].memberId === mId) {
              cartsFind.push(allUsersCarts[i])
              useritemCarts = useritemCarts + 1;          
              itemsPrice = itemsPrice +  allUsersCarts[i].price                
              this.setState({userCarts:cartsFind, 
                            useritemCartsCount: useritemCarts,
                            totalItemsPrice: itemsPrice.toFixed(2),
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
    this.setState({qty: this.state.qty});
    this.addQty()
  };

  cartItemDetailsSubmit = (id) => {  
    // Find the id in the state
    const usercart = this.state.userCarts.find((cart) => cart._id === id);  
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
    API.deleteCart(id)
      .then(res => this.loadCarts())
      .catch(err => console.log(err));
  };  

  checkout = () => {
    console.log ("CHECKING OUT")
  }
  
  

  render() { 
    const shortText = (text, maxLength = 180) => {
      if (!text) { return ' '}
      if (text.length <= maxLength) { return text }
    
      return text.substr(0, maxLength) + '...'
    } 
    const {useritemCartsCount, showCartItemDetail, showCart, showitemCarts, itemId, userCarts, memberId, totalItemsPrice} = this.state;
    return (
      <div>
        <Container style={{ marginTop: 120, minHeight: "100%", width: "100%" }}>
          <Row style={{marginLeft: -200}}>          
            { this.props.memberId ?
              <h1 style={this.props.userDivStyle}> <b>Cart</b></h1>: <h1> <b>Please Sign In to see your Cart</b></h1>
            }      
          </Row>
          { memberId !== null ?
            <Row>
              <Col md="10">              
                  <Card className="cart-item-display">
                    <span className="text-center">
                      <h5><b>Cart Items {" "}({useritemCartsCount}){" "}</b></h5>{" "}
                    </span>
        
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
                                      <p><b>{cart.item}</b></p>
                                      <p>${cart.price} </p> 
                                      <p> <b>QTY :</b> {cart.qty} <b style={{ color: "white"}}>____</b>{" "}<b>Rating :</b> {cart.rating}</p>
                                      <p><b>Desc :</b>{shortText(cart.description)}  </p>
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
                            <h3><b>Your Shopping Cart is empty</b></h3>                              
                          </div>
                        ) : null                
                    }
                </Card>
              </Col>
              <Col md="2">
                <Card className="checkout-card">
                  <CardBody>
                    <CardTitle><h3><b>Order Summary</b></h3></CardTitle>
                      <CardText className="card-Subtitle">
                        <p>Items ({useritemCartsCount}): ${totalItemsPrice}</p>
                        <p>Shipping & handling:</p>
                        <p>Total before tax:</p>
                        <p>Estimated tax to be collected: </p>
                        <br></br>
                        <br></br>
                        <h3><b>Order total: ${totalItemsPrice}</b></h3>
                      </CardText>                    
                    </CardBody>
                  <Button className="checkout-button" color="info" size="sm" onClick={() => this.checkout()}>Checkout</Button> 
                </Card>
              </Col>
            </Row> : null
          }
        </Container>        
      </div>
    );
  }
}
        
               

export default Cart;





