import React, { Component } from "react";
import "./style.css";
import API from "../utils/API";
import Container from "../components/Container";
import { Card, CardHeader, CardBody, Button, Row, Col} from 'reactstrap';
import CartDetails from "../components/CartDetails";
import { Link } from "react-router-dom";




var mId ="";
var allUsersCarts = [];
// var useritemCarts = 0,
class Cart extends Component {
    state = {
    cart: {},
    userCarts: [],
    itemCarts: [],
    useritemCartsCount: 0,
    showCart: [],
    detailsItemCart: [],
    showCartState: false,    
    showitemCarts: true,
    qty: 0,
    itemId: "",
    memberId: this.props.memberId,
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

  // handleInputChange = event => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   this.setState({
  //     [name]: value
  //   });
  // };

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
                  showCartState: true,
                  showitemCarts: false,
                  redirect: true
                })
          
  };

  backToFav = () => {   
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
    const {useritemCartsCount, showCartState, showCart, showitemCarts, itemId} = this.state;
    return (
      <div>
        <Container style={{ marginTop: 50 }}>

            <Row>
              <Col ms="12">
                <h3 className="text-center">Cart Items</h3> 
              </Col>
            </Row>
          <Row> 
            <Container> 
              <Row>
                <Col className="fav-menu-bar">
                  <Button onClick={this.props.renderRedirect} color="info" size="sm"><b>{useritemCartsCount}</b>{" "}Carts</Button>{" "}    
                  <Button onClick={() => this.props.backToSearch()} color="info" size="sm">Add More items</Button>{" "}
                  <Link to="/"><Button type="submit" color="info" size="sm">Sign Out</Button></Link>
                </Col>
              </Row>
              { 
                showCartState === true &&
                showitemCarts !== true ? 
                  <CartDetails
                    note={this.state.qty}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}  
                    showCart={showCart}
                    itemId={itemId} 
                    cartSubmit={this.cartSubmit} 
                    backToFav={this.backToFav}
                    addQty={this.addQty} 
                    memberId={this.state.memberId}
                  /> : [] 
              }       
              {showCartState === false &&
              showitemCarts === true &&
              this.state.userCarts.length ? (
                <div className="cart-row-display">
                  {this.state.userCarts.map(cart => (
                    <Col key={cart._id} md="3">                  
                      {/* <span onClick={() => this.loaditemCarts(cart._id)}> */}
                        <Card className="cart-card">                    
                          <CardHeader className="cart-card-header">
                            <Row>
                              <Col md="10">
                                <b>Name :</b> {cart.item = truncateString(cart.item, 40)}
                              </Col>
                              <Col md="2">
                                <span className="delete-button">
                                  <span onClick={() => this.deleteCart(cart._id)}><b>X</b></span>                              
                                </span>
                              </Col>
                            </Row>                            
                          </CardHeader>
                              <div className="cart-img-container" onClick={() => this.cartItemDetailsSubmit(cart._id)} title="See Details">
                              <img
                                alt={cart.item} width="140" height="180"
                                src={cart.thumbnail}
                            />
                          </div>
                          <CardBody className="content"> 
                            <b>Price :</b>{" "}{cart.price}                     
                            <b>QTY :</b> {cart.qty}
                            <b>Rating :</b> {cart.rating}
                            <b>Desc :</b>  {cart.description = truncateString(cart.description, 80)}
                          </CardBody>                                                                
                        </Card>       
                    </Col>
                  ))
                }
              </div>
              ) 
                : showCartState === false &&
                  showitemCarts === true &&
                  this.state.useritemCartsCount === 0 ?
                  (<div>
                    <h5>No item(s) in your Cart</h5>
                    <Button type="submit" onClick={() => this.props.backToSearch()} color="info" size="sm">Add More Item</Button>{" "}
                  </div>
                ) : []
              
            }
            </Container>
          </Row>      
        </Container>
      </div>
    );
  }
}
        
               

export default Cart;





