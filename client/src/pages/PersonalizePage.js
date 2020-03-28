import React, { Component } from "react";
import Container from "../components/Container";
import "./themestyle.css";
import Row from "../components/Row";
import Col from "../components/Col";
import { Redirect } from "react-router-dom";
import { Button } from 'reactstrap';


var divStyle = {}
var pStyle = {}
var mID = ""
class PersonalizePage extends Component {
  
  state = {   
    userThemes: ["theme0","theme1", "theme2", "theme3", "theme4", "theme5", "theme6", "theme7", "theme8", "theme9", "theme10", "theme11", "theme12", "theme13", "theme14", "theme15", "theme16"],
    
    redirect: false,
    dbTheme: "",
    reduceTheme:-1,
  };

  addPicture = () => {
    console.log("THIS WILL BE USER's PICTURE")
  }

  loadSignInPage = () => {    
    this.setRedirect()
    
  }

  setRedirect = () => {    
    this.setState({
      redirect: true,      
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      this.props.updateDBtheme(mID)     
      return <Redirect to='/Signin' />
    }
  }

  
  choosenTheme = (id) => {
 
    let colorr = "";
    let testalignn = "";    
    let fontfamilyy = "";
    let divfontsizee = "";
    let pfontsizee = "";
    switch(id){
      case "theme0":
        colorr = "White";
        testalignn = "center";
        divfontsizee = "38px";
        pfontsizee = "16px";
        fontfamilyy = "Calibri";
        break;        
      case "theme1":
          colorr = "White";
          testalignn = "center";
          divfontsizee = "38px";
          pfontsizee = "16px";
          fontfamilyy = "Rockwell";
          break;      
      case "theme2":
          colorr = "#b87b16";
          testalignn = "center";
          divfontsizee = "38px";
          pfontsizee = "16px";
          fontfamilyy = "Broadway";
          break;      
      case "theme3":
          colorr = "#d86531";
          testalignn = "center";
          divfontsizee = "38px";
          pfontsizee = "16px";
          fontfamilyy = "Cooper";
          break;
      case "theme4":
          colorr = "deepskyblue";
          testalignn = "center";
          divfontsizee = "38px";
          pfontsizee = "16px";
          fontfamilyy = "Arial Black";
          break;
      case "theme5":
          colorr = "White";
          testalignn = "center";
          divfontsizee = "38px";
          pfontsizee = "16px";
          fontfamilyy = "Bodoni MT Black";
          break;     
      case "theme6":
          colorr = "Greenyellow";
          testalignn = "center";
          divfontsizee = "38px";
          pfontsizee = "16px";
          fontfamilyy = "Stencil";
          break;        
        case "theme7":
          colorr = "#a3ce01";
          testalignn = "center";
          divfontsizee = "38px";
          pfontsizee = "16px";
          fontfamilyy = "Bernard MT";
          break;      
        case "theme8":
          colorr = "#eb9ba4";
          testalignn = "center";
          divfontsizee = "38px";
          pfontsizee = "16px";
          fontfamilyy = "Magneto";
          break;
        case "theme9":
          colorr = "Gold";
          testalignn = "center";
          divfontsizee = "38px";
          pfontsizee = "16px";
          fontfamilyy = "Rockwell";
          break;      
        case "theme10":
          colorr = "White";
          testalignn = "center";
          divfontsizee = "38px"
          pfontsizee = "16px";
          fontfamilyy = "Vivaldi";
          break;
        case "theme11":
          colorr = "White";
          testalignn = "center";
          divfontsizee = "38px";
          pfontsizee = "16px";
          fontfamilyy = "Cambria";
          break;      
        case "theme12":
          colorr = "Brown";
          testalignn = "center";
          divfontsizee = "38px";
          pfontsizee = "16px";
          fontfamilyy = "Broadway";
          break;      
        case "theme13":
          colorr = "Black";
          testalignn = "center";
          divfontsizee = "24px";
          pfontsizee = "16px";
          fontfamilyy = "Wide Latin";
          break;
        case "theme14":
          colorr = "Black";
          testalignn = "center";
          divfontsizee = "38px";
          pfontsizee = "16px";
          fontfamilyy = "Script";
          break;
        case "theme15":
          colorr = "rgb(232,18,36)";
          testalignn = "center";
          divfontsizee = "38px";
          pfontsizee = "16px";
          fontfamilyy = "Bodoni MT Black"; 
          break;
        case "theme16":
          colorr = "White";
          testalignn = "center";
          divfontsizee = "38px";
          pfontsizee = "16px";
          fontfamilyy = "Bernard MT";
          break;
      default:
          colorr = "White";
          testalignn = "center";
          divfontsizee = "38px";
          pfontsizee = "16px";
          fontfamilyy = "Calibri";         
    }
    
    divStyle = {
      color: colorr,
      textAlign: testalignn,
      fontSize: divfontsizee,
      fontFamily: fontfamilyy
    };
    pStyle = {
      color: colorr,
      fontsize: pfontsizee,
      fontFamily: fontfamilyy,        
    };

    mID = this.props.currentUser        
    this.props.setTheme(id)    
  };

  colorr = "White";
  testalignn = "center";
  divfontsizee = "38px";
  fontfamilyy = "Calibri";
  
  componentWillMount() {
    this.loadInLineStyle();
  }

  loadInLineStyle = () => {
  let colorr = "White";
  let testalignn = "center";
  let divfontsizee = "38px";
  let fontfamilyy = "Calibri";
    divStyle = {
      color: colorr,
      textAlign: testalignn,
      fontSize: divfontsizee,
      fontFamily: fontfamilyy
    };
    
  };

  render() {
    
    return (
      <div>
        {this.renderRedirect()}
        <Container style={{ marginTop: 50 }}>
          <div style={divStyle}>Personalize Your Account</div>
            <div style={divStyle}><b>Choose a Theme</b></div>
            <div id="memberinfo" style={pStyle}></div>
            <div id="message"></div>
            <Row>
              <Col size="md-3">
                <div className="theme"  type="submit" id="theme1" onClick={() => this.choosenTheme(this.state.userThemes[1])}>
                  <div className="img-container">                   
                    <img alt="Theme 1" width="120" height="120" title="Mountain Waterfall" src={require('../images/theme1.jpg')} />                   
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme2" onClick={() => this.choosenTheme(this.state.userThemes[2])}>
                  <div className="img-container">
                    <img alt="Theme 2" width="120" height="120" title="Rocky Landscape Daylight" src={require('../images/theme2.jpg')} />           
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme3" onClick={() => this.choosenTheme(this.state.userThemes[3])}>
                  <div className="img-container">
                    <img alt="Theme 3" width="120" height="120" title="Desert Landscape Tree" src={require('../images/theme3.jpg')} />           
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme4" onClick={() => this.choosenTheme(this.state.userThemes[4])}>
                  <div className="img-container">
                    <img alt="Theme 4" width="120" height="120" title="Landscape Field Skyfall" src={require('../images/theme4.jpg')} />           
                  </div>                  
                </div>
              </Col>
            </Row>
            <Row>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme5" onClick={() => this.choosenTheme(this.state.userThemes[5])}>
                  <div className="img-container">
                    <img alt="Theme 5" width="120" height="120" title="Iceland Waterfall" src={require('../images/theme5.jpg')} />            
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme6" onClick={() => this.choosenTheme(this.state.userThemes[6])}>
                  <div className="img-container">
                    <img alt="Theme 6" width="120" height="120" title="Rocky Waterfall" src={require('../images/theme6.jpg')} />            
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme7" onClick={() => this.choosenTheme(this.state.userThemes[7])}>
                  <div className="img-container">
                    <img alt="Theme 7" width="120" height="120" title="Landscape Day Cloud" src={require('../images/theme7.jpg')} />            
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme8" onClick={() => this.choosenTheme(this.state.userThemes[8])}>
                  <div className="img-container">
                    <img alt="Theme 8" width="120" height="120" title="Sunset at Hale Azarya" src={require('../images/theme8.jpg')} />            
                  </div>                  
                </div>
              </Col>
            </Row>
            <Row>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme9" onClick={() => this.choosenTheme(this.state.userThemes[9])}>
                  <div className="img-container">
                    <img alt="Theme 9" width="120" height="120" title="Black Gold Marble" src={require('../images/theme9.jpg')} />            
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme10" onClick={() => this.choosenTheme(this.state.userThemes[10])}>
                  <div className="img-container">
                    <img alt="Theme 10" width="120" height="120" title="Black White Marble" src={require('../images/theme10.jpg')} />            
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme11" onClick={() => this.choosenTheme(this.state.userThemes[11])}>
                  <div className="img-container">
                    <img alt="Theme 11" width="120" height="120" title="Rain Forest Waterfall" src={require('../images/theme11.jpg')} />            
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme12" onClick={() => this.choosenTheme(this.state.userThemes[12])}>
                  <div className="img-container">
                    <img alt="Theme 12" width="120" height="120" title="Brown Circle Marble" src={require('../images/theme12.jpg')} />            
                  </div>                  
                </div>
              </Col>
            </Row>
            <Row>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme13" onClick={() => this.choosenTheme(this.state.userThemes[13])}>
                  <div className="img-container">
                    <img alt="Theme 13" width="120" height="120" title="Gold Marble" src={require('../images/theme13.jpg')} />            
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" title="White" id="theme14" onClick={() => this.choosenTheme(this.state.userThemes[14])}>
                  <div className="img-container">
                    <img alt="" width="120" height="120" src='' />            
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme15" onClick={() => this.choosenTheme(this.state.userThemes[15])}>
                  <div className="img-container">
                    <img alt="Theme 15" width="120" height="120" title="Pink Curly Marble" src={require('../images/theme15.jpg')} />            
                  </div>                  
                </div>
              </Col>
              <Col size="md-3">
                <div className="theme" type="submit" id="theme16" onClick={() => this.choosenTheme(this.state.userThemes[16])}>
                  <div className="img-container">
                    <img alt="Theme 16" width="120" height="120" title="Galaxy" src={require('../images/theme16.jpg')} />            
                  </div>                  
                </div>
              </Col>
            </Row>
            <Row>
              <Col size="md-12">              
                <span>.</span>
              </Col>
            </Row>
            <Row>
              <Col size="md-12">              
                <div className="create-acc-btn">
                  <Button title="Sign in" type="submit" onClick={() => this.loadSignInPage()} color="info" size="sm" >Sign in</Button>
                  <Button title="Rock Light Waterfall" type="submit" id="theme0" onClick={() => this.choosenTheme(this.state.userThemes[0])} color="info" size="sm" >Default Theme</Button>
                  <Button title="Add your picture" type="submit" onClick={() => this.addPicture()} color="info" size="sm" >Add Your Picture</Button>
                </div>
              </Col>
            </Row>
        </Container>
      </div>
    );
  }
}

export default PersonalizePage;





