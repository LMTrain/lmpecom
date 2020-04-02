import React, { Component} from "react";
import "./style.css";
import { Card, Col} from 'reactstrap';
import API from "../utils/API";
import SavedItemModal from "../components/SavedItemModal";


var mId ="";
var allUsersSavedItems = [];
class SavedItems extends Component { 
  state = {
    savedItems: {},
    userSavedItems: [],
    savedItemCart: [],
    savedItemDetail: [],
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
        this.setState({savedItemDetail: [usercart], 
                    detailsItemCart: [usercart],
                    itemId: id, 
                    showCartItemDetail: true,
                    showitemCarts: false,
                    redirect: true
                    })
            
    };

    cartSubmit = (id) => {      
        const item = this.state.userSavedItems.find((item) => item._id === id); 
        
        this.setState({showItem: [item], 
                        showCartItems: false,
                        showItemState: false
                    })
        let itemThumbnail = String(item.thumbnail)
        let itemDescription = String(item.description)
        let itemId = String(item.itemid)    
        let itemName = String(item.item)    
        let itemPrice = Number(item.price)
        let itemLink = String(item.link)
        let itemQty = 1
        let itemRating = String(item.rating)
        let currentUser = String(this.state.memberId)
    

        API.saveCart({
        itemid: itemId,
        memberId: currentUser,
        item: itemName,
        price: itemPrice,
        link: itemLink,
        thumbnail: itemThumbnail,
        description: itemDescription,
        rating: itemRating,
        qty: itemQty,     
        })
        .then(res => {console.log(res)})
        .catch(err => console.log(err));  
        
    };


    deleteSavedItems = id => {       
        API.deleteSavedItem(id)
        .then(res => this.loadSavedItems())
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
    const {useritemSavedCount, userSavedItems, savedItemDetail} = this.state
    return (             
      <>
        <Card className="saved-card">
          {/* <div className = "saved-item-row-display"> */}
            { userSavedItems.length ?  (
              <div>
              {userSavedItems.map(result => (   
                  <span key={result._id} className="saved-item-row-display">
                    <Col md="col-5" className="saved-item-card">
                      <div className="saved-img-container" onClick={() => this.savedItemDetailsSubmit(result._id)} title="See Details">                
                        <img 
                            key={result._id} 
                            alt={result.item} width="120" height="160" className="img-fluid" 
                            src={result.thumbnail} />
                      </div>                  
                      <div className="content" onClick={() => this.savedItemDetailsSubmit(result._id)} title="See Details">
                        <SavedItemModal
                            showCart={savedItemDetail}
                        ></SavedItemModal>
                        <p>{result.item = truncateString(result.item, 40)} </p>
                        <b>Rating :</b> {result.rating} {useritemSavedCount}
                        <p><b>${result.price}</b></p>
                      </div>                              
                      <div className="saved-result-card-button">                   
                        { this.state.memberId === null || this.state.memberId === undefined ? [] :
                          <>
                            <p onClick={() => this.cartSubmit(result._id)}>Buy</p>
                            <p style={{ color: "white"}}> Add</p>
                
                            <p onClick={() => this.deleteSavedItems(result._id)}>Delete </p>
                          </>
                        }
                      </div>                        
                    </Col>               
                  </span>
              ))
              } 
              </div>
            )             
              : useritemSavedCount === 0 ?
                (<div>
                  <h5>You have no Saved items</h5>
                </div>
              ) : null
          }         
          {/* </div> */}
        </Card>
      </>
    );
    
  }
}



export default SavedItems;
