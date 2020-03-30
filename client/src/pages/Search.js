import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchResults from "../components/SearchResults";
import ItemDetails from "../components/ItemDetails";
// import BookDetailModal from "../components/Modals";
import Cart from "./Cart";
import dataSet from "./db.json";
import { Redirect } from "react-router-dom";




var userArray = []
var membername = ""
var userName =""
var usertheme = "";
var divStyle = {};
var redirectOption = " "

class Search extends Component {
  
  state = {
    user: [],
    search: "",
    favMessage:"",
    userDivStyle: {},
    id: "",
    userName: this.props.currentUser,
    memberName: this.props.membername,     
    items: this.props.Items,
    error: "",
    showItem: [],
    detailsItem: [],
    showItemImage: this.props.showItemImage,
    showItemState: this.props.showItemState,  
    showCartItems: this.props.showCartItems,
    showItemDetail: false,  
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
    divStyle = {
      color: userArray[0].colorDb,
      textAlign: userArray[0].textalignDb,
      fontSize: userArray[0].divfontsizeDb,
      fontFamily: userArray[0].fontfamilyDb,      
    };
    this.setState({userDivStyle: divStyle})
    this.props.setTheme(id)    
  }
 
  handleInputChange = (e) =>{   
    this.setState({search: e.target.value});   
  }

  handleFormSubmit = (e) => {    
    e.preventDefault();
    var app = this;
    var results = dataSet.filter(item => {
      return item.name.toLowerCase().indexOf(app.state.search.toLowerCase()) !== -1;
    })
    app.setState({ items: results, 
                    showItemImage: false,
                    showItemState: false, 
                    showCartItems: false 
                  });    
  } 
  
  
  signOut = () => {
    this.setState({ redirect: true})
    if (this.state.redirect) {       
      return <Redirect to='/' />
    }
  };
  

  handleDetailsSubmit = (id) => {  
    // Find the id in the state    
    const item = this.state.items.find((item) => item.itemId === id);    
    this.setState({showItem: [item], 
                  detailsItem: [item], 
                  showItemDetail: true, 
                  showItemImage: false,                  
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

  // showUsersCart = () => {
  //   this.setState({showCartItems: true, 
  //                   showItemImage: false,
  //                   showSearchForm: false, 
  //                   showItemState: false
  //                 });
  // };

   
  cartSubmit = (id) => {    
    const item = this.props.Items.find((item) => item.itemId === id);  
    this.setState({showItem: [item], 
                    showCartItems: false, 
                    showItemImage: false,                  
                    showItemState: false
                  })
                  
     if (item.largeImage === undefined) {
      var itemThumbnail = 'https://lmtrain.github.io/lm-images/assets/images/books5.jpg'
    } else {     
      itemThumbnail = String(item.largeImage)
    }

    if (item.shortDescription === undefined) {
      var itemDescription = 'This item does not have a description'
    } else {
      itemDescription = String(item.shortDescription)
    }
    
    // let itemDescription = String(item.shortDescription)
    let itemId = String(item.itemId)    
    let itemName = String(item.name)    
    let itemPrice = Number(item.salePrice)
    let itemLink = String(item.productUrl)
    let itemQty = 1
    let itemRating = String(item.customerRating)
    let currentUser = String(this.props.currentUser)
  

    // function truncateString(str, num) {    
    //   if (str.length > num && num > 3) {
    //           return str.slice(0, (num - 3)) + '...';
    //       } else if (str.length > num && num <= 3) {
    //           return str.slice(0, num) + '...';
    //       } else {
    //       return str;
    //   }    
    // }
     
    // itemDescription = truncateString(itemDescription, 1780);
    

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

  backToSearch = () => {
    this.setState({showCartItems: false, 
                    showItemImage: false,
                    showSearchForm: true, 
                    showItemState: false
                  });
  };

  
 
  render() {   
    const {showItem, showItemImage, showItemDetail, 
            showCartItems, showSearchForm, userDivStyle,
          } = this.state
    
    return (      
      <div>        
          <Container style={{ marginTop: 60, minHeight: "100%", width: "100%" }}>
          { this.props.currentUser ?
            <div style={divStyle}><b> Welcome {membername}!</b></div>: null
          }
                               
            { this.props.showItemState === true ?             
              
                <SearchResults 
                  items={this.props.Items === undefined ? null : this.props.Items}
                  cartSubmit={this.cartSubmit}         
                  handleDetailsSubmit={this.handleDetailsSubmit}
                  memberId={this.props.currentUser}
                  userDivStyle={userDivStyle}          
                /> : null 
            }

            {showItemImage === false && 
             showItemDetail === true && 
             showCartItems === false &&
              showSearchForm === false ? 
                <ItemDetails 
                 showItem={showItem} 
                  cartSubmit={this.cartSubmit} 
                  backToSearch={this.backToSearch} 
                  memberId={this.props.currentUser}
                  userDivStyle={userDivStyle}
                /> : null 
            }            
                     
          {this.props.showCartItems === true ? 
              <Cart
                memberId={this.props.currentUser}
                backToSearch={this.backToSearch} 
                renderRedirect={this.renderRedirect}
                handleDetailsSubmit={this.handleDetailsSubmit}
                signOut={this.signOut}
                userDivStyle={userDivStyle}
              /> : null
          }
          </Container>
         
      </div>
      
    );
  }
}

export default Search;
