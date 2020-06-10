import React, { Component } from "react";
import API from "../utils/API";
import SearchResults from "../components/SearchResults";
// import Cart from "./Cart";
import { Redirect } from "react-router-dom";
import SavedItems from "./SearchedItems";
import { Row, Container} from 'reactstrap';




var userArray = []
var membername = ""
var userName =""
var usertheme = "";
var divStyle = {};
class Search extends Component {
  
  state = {
    user: [],
    search: "",
    favMessage:"",
    userDivStyle: {},
    id: "",
    userName: this.props.currentUser,
    memberName: this.props.membername,     
    // items: this.props.Items,
    error: "",
    showItem: [],
    detailsItem: [],
    showItemImage: this.props.showItemImage,
    showItemState: this.props.showItemState,  
    showCartItems: this.props.showCartItems,
    showItemDetail: false, 
    showSearchItem: false, 
    redirect: false,
  };

  
  componentWillMount() {          
    this.loadUserData();   
  }

  loadUserData = () => {
    this.setState({
      userName: this.props.currentUser
    })
    userName = this.state.userName
  
    const currentAccount = {     
      userName,          
    }
    this.loadAPIgetUser(currentAccount.userName);
  }

  loadAPIgetUser = (id) => {    
    const app = this;
    id = userName  
    API.getUser({      
      userName: userName,               
    })
    .then(function(res){
      return new Promise(function(resolve, reject){
        app.setState({ user: res.data })
        resolve(true);
      })
    }).then(function(){
      userArray = [...app.state.user]
      usertheme = userArray[0].userTheme
      membername = userArray[0].memberName     
      app.userTheme(usertheme);
    })
    .catch(err => console.log(err));
  }

  userTheme = (id) => { 
    this.props.setTheme(id)
    divStyle = {
      color: userArray[0].colorDb,
      textAlign: userArray[0].textalignDb,
      fontSize: userArray[0].divfontsizeDb,
      fontFamily: userArray[0].fontfamilyDb,      
    };
    this.setState({userDivStyle: divStyle})    
    this.props.divStyle(divStyle)   
  }
 
  
  
  signOut = () => {
    this.setState({ redirect: true})
    if (this.state.redirect) {       
      return <Redirect to='/' />
    }
  };
  

  handleDetailsSubmit = (id) => {  
    // Find the id in the state    
    const item = this.props.Items.find((item) => item.itemId === id);    
    this.setState({showItem: [item], 
                  detailsItem: [item], 
                  showItemDetail: true,
                  showCartItems: false,
                  redirect: true
                })
          
  };
  

  renderRedirect = () => {
    this.setState({showItemState: false,
                    showItemImage: true,
                    showCartItems: false,
                    showSearchForm: true,
                  });
    
    this.showFavoriteBooks();
  };

  addItemToSaveForLater = (id) => {
    const item = this.props.Items.find((item) => item.itemId === id);  
    this.setState({showItem: [item], 
                    showCartItems: false,
                    showItemState: false
                  })
    let itemThumbnail = String(item.largeImage)
    let itemDescription = String(item.shortDescription)
    let itemId = String(item.itemId)    
    let itemName = String(item.name)    
    let itemPrice = Number(item.salePrice)
    let itemLink = String(item.productUrl)    
    let itemRating = String(item.customerRating)
    let currentUser = String(this.props.currentUser)
    
    API.SavedItems({
      itemid: itemId,
      memberId: currentUser,
      item: itemName,
      price: itemPrice,
      link: itemLink,
      thumbnail: itemThumbnail,
      description: itemDescription,
      rating: itemRating,          
    })
      .then(res => {console.log(res)})
      .catch(err => console.log(err)); 
  };

   
  cartSubmit = (id) => {    
    const item = this.props.Items.find((item) => item.itemId === id);  
    this.setState({showItem: [item], 
                    showCartItems: false,
                    showItemState: false
                  })
                  
    //  if (item.largeImage === undefined) {
    //   var itemThumbnail = 'https://lmtrain.github.io/lm-images/assets/images/books5.jpg'
    // } else {     
    //   itemThumbnail = String(item.largeImage)
    // }

    // if (item.shortDescription === undefined) {
    //   var itemDescription = 'This item does not have a description'
    // } else {
    //   itemDescription = String(item.shortDescription)
    // }
    
    let itemThumbnail = String(item.largeImage)
    let itemDescription = String(item.shortDescription)
    let itemId = String(item.itemId)    
    let itemName = String(item.name)    
    let itemPrice = Number(item.salePrice)
    let itemLink = String(item.productUrl)
    let itemQty = 1
    let itemRating = String(item.customerRating)
    let currentUser = String(this.props.currentUser)
  

     
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
    
      this.backToSearch();
  };

  backToSearch = () => {
    this.setState({showCartItems: false,                    
                    showSearchItem: true,
                    showItemDetail: false
                  });
  };

  
  render() {   
    const {showItem, showSearchItem,
            userDivStyle,
          } = this.state
   
    
    return (      
      <div>        
        <Container style={{ marginTop: 120, minHeight: "100%", width: "100%" }}>
          <Row>
            <div style={{ marginLeft: 500 }}>
              { this.props.currentUser ?
                <div style={divStyle}><b style={{marginLeft: -350}}> Welcome {membername}!</b></div>: null
              }
            </div>
          </Row>
          <Row>
            {
              <SavedItems memberId={this.props.currentUser}/>
            }

            { this.props.showItemState === true || showSearchItem === true?             
              
              <SearchResults 
                items={this.props.Items}
                showItem={showItem} 
                cartSubmit={this.cartSubmit} 
                addItemToSaveForLater={this.addItemToSaveForLater}        
                handleDetailsSubmit={this.handleDetailsSubmit}
                memberId={this.props.currentUser}
                userDivStyle={userDivStyle}          
              /> : null 
            }
          </Row>
        </Container>         
      </div>
    );
  }
}

export default Search;
