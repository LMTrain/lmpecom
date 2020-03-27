import React, {Component} from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import ItemsInAbout from "../components/ItemsInAbout";
import deals from "../pages/deals.json"



var shuffleData = ""
var ShuffledDatas = []

class About extends Component  {
  state = {
    deals,
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
    return (
      <div>
        <Container style={{ marginTop: 50 }}>
        <Row>
          <Col size="md-12" style={{ marginTop: 55 }}>
            <h3> A Personalized e-Commerce StoreFront</h3>
          </Col>
        <Hero style={{ marginTop: 30 }}/>
        </Row>
        <Card >
          <Row>
            <Col size="md-12">
              <h3>Todays Deal</h3>
            </Col>
          </Row>
          
          <Row>
            <Col size="md-12">
              <ItemsInAbout handleShuffleClick={this.shuffle} deals={this.state.deals}/>
            </Col>
          </Row>
        </Card>
        </Container>
      </div>
    );

  }
}

export default About;
