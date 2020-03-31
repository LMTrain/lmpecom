import React, { Component} from "react";
import "./style.css";
import { Card, Row, Col} from 'reactstrap';

function truncateString(str, num) {    
  if (str.length > num && num > 3) {
          return str.slice(0, (num - 3)) + '...';
      } else if (str.length > num && num <= 3) {
          return str.slice(0, num) + '...';
      } else {
      return str;
  }    
}


var mId ="";
var allUsersSavedItems = [];
class SavedItems extends Component { 
  state = {
    savedItems: {},
    userSavedItems: [],
    savedItemCart: [],
    useritemSavedCount: 0,
    showCartItemDetail: false,    
    showitemCarts: true,
    memberId: this.props.memberId,
    isOpen: false   
  };
 

  componentWillMount() { 
    mId = this.state.memberId    
    this.loadSavedItems();
  }

  loadSavedItems = () => {
    API.getSavedItems()
      .then(res => {        
        this.setState({ savedItems: res.data })
        
        allUsersSavedItems = [...res.data]        
        this.setState({savedItemCart: [allUsersSavedItems]})        
        // console.log("THIS IS MID", mId)
        let itemsFind = [];
        var useritemSaved = 0;
        for (let i = 0;  i < allUsersSavedItems.length; i++) {      
          if (allUsersSavedItems[i].memberId === mId) {
              itemsFind.push(allUsersSavedItems[i])
              useritemSaved = useritemSaved + 1;            
              this.setState({userSavedItems:itemsFind, 
                            useritemSavedCount: useritemSaved,
                            showCartState: false,
                            showitemCarts: true
                          })
            }
          } 
      }
      )
      .catch(err => console.log(err));
  };

  savedItemDetailsSubmit = (id) => {  
    // Find the id in the state
    const usercart = this.state.userSavedItems.find((cart) => cart._id === id);
    // console.log("THIS IS FAVDATAIL", usercart) 
    this.setState({showCart: [usercart], 
                  detailsItemCart: [usercart],
                  itemId: id, 
                  showCartItemDetail: true,
                  showitemCarts: false,
                  redirect: true
                })
          
  };

  render() {
    const {useritemSavedCount, userSavedItems} = this.state
    return (             
      <Row>
        <Card className="item-display">
          <div className = "item-row-display">
            { userSavedItems.length ? 
            ( <div>
              {userSavedItems.map(result => (   
                  <Col key={result.itemId} md="3">
                    <div className="item-card">
                      <div className="img-container" onClick={() => props.handleDetailsSubmit(result.itemId)} title="See Details">                
                        <img 
                            key={result.itemId} 
                            alt={result.name} width="120" height="160" className="img-fluid" 
                            src={result.largeImage == null ? 'https://lmtrain.github.io/lm-images/assets/images/books5.jpg' : result.largeImage} />
                      </div>                  
                      <div className="content" onClick={() => props.handleDetailsSubmit(result.itemId)} title="See Details">
                        <p>{result.name = truncateString(result.name, 40)}</p>
                        <b>Rating :</b> {result.customerRating} {useritemSavedCount}
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
              ))
              } 

              </div>
              
            ) 
              : useritemSavedCount === 0 ?
                (<div>
                  <h5>You have to Saved items</h5>
                </div>
              ) : null
          }         
        </Card>
      </Row>    
    );
    
  }
}



export default SavedItems;
