import React, {Component} from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import ItemsInAbout from "../components/ItemsInAbout";
import deals from "../pages/deals.json"
import SearchResults from "../components/SearchResults"



var shuffleData = ""
var ShuffledDatas = []

class About extends Component  {
  state = {
    deals,
    showSearchResult: this.props.showItemState,
    items: this.props.items
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

 
  render() {
    
    const {deals} = this.state
    return (
      <div>
        <Container style={{ marginTop: 40 }}>
        <Row>
          <Col size="md-12" style={{ marginTop: 50}}>
            <h2 style={{color: "white" }}> A Personalized e-Commerce StoreFront</h2>
          </Col>
        <Hero style={{ marginTop: 40 }}/>
        </Row>

        { this.props.itemsInAbout === false ?
          <Card >
          <Row>
            <Col size="md-12">
              <h3>Todays Deal</h3>
            </Col>
          </Row>
          
          <Row>
            <Col size="md-12">
                  <ItemsInAbout handleShuffleClick={this.shuffle} deals={deals}/>
            </Col>
          </Row>
        </Card> : null}

        { this.props.itemsInAbout === true ?
                  <SearchResults 
                  items={this.props.Items} 
                  memberId={this.props.currentUser} /> : null}
        </Container>
      </div>
    );

  }
}

export default About;
