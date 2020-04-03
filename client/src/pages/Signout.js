import React, {Component} from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import { Row, Container} from 'reactstrap';
import ItemsInAbout from "../components/ItemsInAbout";
import { Redirect } from "react-router-dom";



class Signout extends Component  {
  state = {   
    redirect: false,
  };

  componentWillMount() { 
    this.props.setTheme("theme0")
    this.props.saveMemberID(null, "")    
    this.setState({redirect: true})
  }

 

  render() { 
    if (this.state.redirect) {
      this.props.resetState();
      return <Redirect to='/' />
    }      
    return (
      <div>
        <Container style={{ marginTop: 120, minHeight: "100%", width: "100%" }}>
          <Row style={{color: "white", fontSize: 30, marginLeft: 150}}>          
            <h1> A Personalized e-Commerce StoreFront</h1>       
          </Row>
          <Row>
            <Hero />
            {/* <Card >
              <h3>Todays Deal</h3>
              <ItemsInAbout />
            </Card> */}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Signout;
