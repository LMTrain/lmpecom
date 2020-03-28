import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import ItemDetails from "../components/ItemDetails";
// import BookDetailModal from "../components/Modals";
import Cart from "./Cart";
import dataSet from "./db.json";
import { Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";




class Search extends Component {
  
  state = {
    search: "",
    favMessage:"",
    id: "",
    memberId: this.props.userName, 
    memberName: this.props.membername,     
    items: [],
    error: "",
    showItem: [],
    detailsItem: [],
    showItemState: false,
    showItemImage: true,
    showCartItems: false,
    showSearchForm: true,
    userNavBar: true,
    redirect: false,
  };


  navBarOption = (id) => {
    console.log("NAVBAR OPTION IN SEARCH", id)
    if (id === this.state.memberId) {
      console.log("YES ITS THE SAME USERNAME", this.state.memberName)
      this.setState({ userNavBar: true,
                      memberId: id,
                    })
    }else {
      console.log("IT IS NOT")
      this.setState({userNavBar: false})
    }
  };
    
  // searchForBooks = query => {
  //   API.search(query)
  //     .then(res => this.setState({ items: res.data.items }))         
  //     .catch(err => console.log(err));
  // };

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
  
   
  // handleFormSubmit = event => { 
  //   console.log("THIS IS event =>", this.state.event); 
  //   console.log("THIS IS search =>", this.state.search);   
  //   event.preventDefault();
  //   this.searchForItems(this.state.search);  
  //   this.setState({showItemImage: false,
  //                   showItemState: false, 
  //                   showCartItems: false
  //                 });
  // };

  signOut = () => {
    this.setState({ redirect: true})
    if (this.state.redirect) {       
      return <Redirect to='/' />
    }
  };
  // handleInputChange = event => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   this.setState({
  //     [name]: value
  //   });
  // };

 

  handleDetailsSubmit = (id) => {  
    // Find the id in the state    
    const item = this.state.items.find((item) => item.itemId === id);    
    this.setState({showItem: [item], 
                  detailsItem: [item], 
                  showItemState: true, 
                  showItemImage: false,
                  showSearchForm: false,
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

  showFavoriteBooks = () => {
    this.setState({showCartItems: true, 
                    showItemImage: false,
                    showSearchForm: false, 
                    showItemState: false
                  });
  };

  

  
  cartSubmit = (id) => {    
    const item = this.state.items.find((item) => item.itemId === id);  
    this.setState({showItem: [item], 
                    showCartItems: false, 
                    showItemImage: false,
                    showSearchForm: true, 
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
    let currentUser = String(this.state.memberId)
  

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
    const {showItemState, showItem, items, showItemImage, memberName, 
            showCartItems, showSearchForm, search, memberId, userNavBar,
          } = this.state
    
    return (      
      <div>        
          <Container style={{ marginTop: 100, minHeight: "100%", width: "100%" }}>
                      
            {/* {showItemImage === true && 
             showItemState === false && 
             showCartItems === false &&
              showSearchForm === true ? 
                <SearchForm
                  search={search}
                  handleFormSubmit={this.handleFormSubmit}
                  handleInputChange={this.handleInputChange} 
                  renderRedirect={this.renderRedirect}
                  backToSearch={this.backToSearch}
                  memberId={memberId}           
                /> : null
            }
            { !showItemState && 
              showCartItems === false &&
              showItemImage === false &&
              showSearchForm === true ?
              
                <SearchForm
                search={search}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange} 
                renderRedirect={this.renderRedirect}
                backToSearch={this.backToSearch}
                memberId={memberId}            
              /> : null
            } */}
                    
            { !showItemState && 
              showCartItems === false &&
              showItemImage === false &&
              showSearchForm === true ?
              
                <SearchResults 
                  items={items === undefined ? null : items}
                  cartSubmit={this.cartSubmit}         
                  handleDetailsSubmit={this.handleDetailsSubmit}
                  memberId={memberId}          
                /> : null 
            }

            {showItemImage === false && 
             showItemState === true && 
             showCartItems === false &&
              showSearchForm === false ? 
                <ItemDetails 
                 showItem={showItem} 
                  cartSubmit={this.cartSubmit} 
                  backToSearch={this.backToSearch} 
                  memberId={memberId}
                /> : null 
            }
            
            {/* {showItemImage === false ? [] : <SearchBookImage />}          */}
          
          {showItemImage === false && 
           showItemState === false && 
           showCartItems === true &&
            showSearchForm === false ? 
              <Cart
                memberId={memberId}
                backToSearch={this.backToSearch} 
                renderRedirect={this.renderRedirect}
                handleDetailsSubmit={this.handleDetailsSubmit}
                signOut={this.signOut}
              /> : null
          }
          </Container>
          { !userNavBar ? null : <Navbar 
            search={search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange} 
            renderRedirect={this.renderRedirect}
            backToSearch={this.backToSearch}
            userName={memberId}
            membername={memberName}
            navBarOption={this.navBarOption}
          />}

          {/* {memberId !== null || memberId !== undefined ? <Navbar 
            search={search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange} 
            renderRedirect={this.renderRedirect}
            backToSearch={this.backToSearch}
            userName={memberId}
            membername={memberName}
          /> } */}
          
      </div>
      
    );
  }
}

export default Search;
