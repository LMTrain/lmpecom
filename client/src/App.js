import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Signin from "./pages/Signin";
import GetStarted from "./pages/GetStarted";
// import UserPage from "./pages/UserPage";

require('dotenv').config();

class App extends React.Component {
  state = {
    currentUserThemes: "https://lmtrain.github.io/lm-images/assets/images/ls_wf3.jpg",
    theme: "https://lmtrain.github.io/lm-images/assets/images/ls_wf3.jpg",
  }

  getTheme = () => {    
    
    switch("theme0"){
      case "theme0":
        return "https://lmtrain.github.io/lm-images/assets/images/ls_wf3.jpg"
      case "theme1":
        return "https://lmtrain.github.io/lm-images/assets/images/ls_field-wf5.jpg"
      
      case "theme2":
        
        return "https://lmtrain.github.io/lm-images/assets/images/ls_daylight.jpg"
      
      case "theme3":
        return "https://lmtrain.github.io/lm-images/assets/images/ls_field-cnn.jpg"
      
      case "theme4":
        return "https://lmtrain.github.io/lm-images/assets/images/ls_field.jpg"
     
      case "theme5":
        return "https://lmtrain.github.io/lm-images/assets/images/ls_wf1.jpg"
     
      case "theme6":
        return "https://lmtrain.github.io/lm-images/assets/images/ls_wf2.jpg"

      case "theme7":
        return "https://lmtrain.github.io/lm-images/assets/images/ls_field2.jpg"
      case "theme8":
          return "https://lmtrain.github.io/lm-images/assets/images/ls_hale-azarya.jpg"
      case "theme9":
        return "https://lmtrain.github.io/lm-images/assets/images/marble_blackgold.jpg"
        case "theme10":
          return "https://lmtrain.github.io/lm-images/assets/images/marble_blackwhite.jpg"
        case "theme11":
            return "https://lmtrain.github.io/lm-images/assets/images/marble_bluecledonia.png"
        case "theme12":
          return "https://lmtrain.github.io/lm-images/assets/images/marble_browncircle.jpg"
        case "theme13":
          return "https://lmtrain.github.io/lm-images/assets/images/marble_gold.jpg"
        case "theme14":
            return ""
        case "theme15":
          return "https://lmtrain.github.io/lm-images/assets/images/marble_pinkmarble.jpg"
        case "theme16":
          return "https://lmtrain.github.io/lm-images/assets/images/marble_whitegray.jpg"

      default :
        return "https://lmtrain.github.io/lm-images/assets/images/ls_wf3.jpg"
    }
  }
 
  render() {

    const {theme} = this.state;

    return (
      <Router>
        <div className="container-content">
          <Navbar />
    
          <Wrapper theme={theme}>
    
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/Cart" component={Cart} />      
            <Route exact path="/search" component={Search} />
            <Route exact path="/Getstarted" component={GetStarted} />   
            <Route exact path="/Signin" component={Signin} />
            <Route exact path="/Sign out" render = { () => <About/>}/>         
            {/* <Route exact path="/UserPage" render = { () => <UserPage logOut={this.logOut} saveMemberID={this.saveMemberID} currentUser={this.state.currentUser} />}/> */}
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}

 


export default App;
