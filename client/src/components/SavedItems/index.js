import React, { Component} from "react";
import "./style.css";
import { Card, Row, Col} from 'reactstrap';
import API from "../../utils/API"



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
    console.log("THIS IS MID IN SAVED =>", mId) 
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
            { userSavedItems.length ?  (
              <div>,
              {userSavedItems.map(result => (   
                  <Col key={result.itemId} md="3">
                    <div className="item-card">
                      <div className="img-container" onClick={() => this.savedItemDetailsSubmit(result._id)} title="See Details">                
                        <img 
                            key={result._id} 
                            alt={result.item} width="120" height="160" className="img-fluid" 
                            src={result.thumbnail == null ? 'https://lmtrain.github.io/lm-images/assets/images/books5.jpg' : result.thumbnail} />
                      </div>                  
                      <div className="content" onClick={() => this.savedItemDetailsSubmit(result.itemId)} title="See Details">
                        <p>{result.item} </p>
                        <b>Rating :</b> {result.rating} {useritemSavedCount}
                        <p><b>${result.price}</b></p>
                      </div>                              
                      <div className="result-card-button">                   
                        { this.state.memberId === null || this.state.memberId === undefined ? [] :
                          <>
                            <p onClick={() => this.cartSubmit(result.itemId)}>Buy</p>
                            <p style={{ color: "white"}}> Add</p>
                
                            <p onClick={() => this.deleteSavedItems(result.itemId)}>Delete </p>
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
          </div>
        </Card>
      </Row>    
    );
    
  }
}



export default SavedItems;
