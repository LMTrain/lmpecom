import React, {Component} from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import { Row, Container} from 'reactstrap';
import ItemsInAbout from "../components/ItemsInAbout";
import deals from "../pages/deals.json";
import ItemDetails from "../components/ItemDetails";
import AboutSearchedResult from "../components/AboutSearchedResult";
import API from "../utils/API";


var shuffleData = ""
var ShuffledDatas = []

class About extends Component  {
  state = {
    deals,
    showSearchResult: this.props.showItemState,
    items: this.props.items,
    showItem: [],
    detailsItem: [],
    showItemsSearchInAbout: true,
    showItemDetailInAbout: false,
  };

 

  shuffle = () => {
    let dealsArray = [...this.state.deals];
    let dealsShuffled = [];    
    for (var i = 0;  i < this.state.deals.length; i++) {        
          shuffleData = dealsArray.splice(Math.floor(Math.random()*dealsArray.length));        
          dealsShuffled = [...dealsShuffled, ...shuffleData];
        }   
        ShuffledDatas.push(this.state.deals);
        // Set this.state.deals equal to the new deals array
      this.setState({ deals: dealsShuffled });  
  };

  handleDetailsSubmit = (id) => {  
    // Find the id in the state    
    const item = this.props.Items.find((item) => item.itemId === id);     
    this.setState({showItem: [item], 
                  detailsItem: [item], 
                  showItemDetailInAbout: true,
                  showItemsSearchInAbout: false,                 
                })
  }

  backToSearch = () => {
    this.setState({showItemDetailInAbout: false,                    
                    showItemsSearchInAbout: true,
                    showItemDetail: false
                  });
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
    let itemQty = 1
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
      qty: itemQty,     
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
  };

  render() { 
    const {deals, showItem, showItemsSearchInAbout, showItemDetailInAbout} = this.state   
    return (
      <div>
        <Container style={{ marginTop: 120, minHeight: "100%", width: "100%" }}>
          <Row style={{color: "white", fontSize: 30, marginLeft: 150}}>          
            { this.props.currentUser ?
              <h1 style={this.props.userDivStyle}> <b>A Personalized e-Commerce StoreFront</b></h1>: <h1> <b>A Personalized e-Commerce StoreFront</b></h1>
            }      
          </Row>
          <Row>
            <Hero />
              <>
                { this.props.itemsInAbout === true ?
                  <Card >
                    <h3>Todays Deal</h3>
                    <ItemsInAbout handleShuffleClick={this.shuffle} deals={deals}/>
                  </Card> : null}
              </>
              {  this.props.itemsInAbout === false && showItemsSearchInAbout === true ? 
                  <AboutSearchedResult 
                    items={this.props.Items}
                    cartSubmit={this.cartSubmit}  
                    handleDetailsSubmit={this.handleDetailsSubmit}
                    addItemToSaveForLater={this.addItemToSaveForLater}
                    memberId={this.props.currentUser} 
                  /> : null
            
              }
            <div>
              {  this.props.itemDetailInAbout === true || showItemDetailInAbout === true ?
                  <ItemDetails
                    showItem={showItem}
                    cartSubmit={this.cartSubmit}
                    backToSearch={this.backToSearch}
                    memberId={this.props.currentUser}
                /> : null 
              }          
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
