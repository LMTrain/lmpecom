import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Signin from "./pages/Signin";
import Getstarted from "./pages/GetStarted";
import PersonalizePage from "./pages/PersonalizePage";
import API from "./utils/API";

// import UserPage from "./pages/UserPage";


require('dotenv').config();

var userArray = [];
var userTheme = ""
var memberInfo = ""
// var signInUserTheme = ""
class App extends React.Component {
  state = {
    user:[],
    userArray:[],
    currentUser: null,
    currentUserThemes: "https://lmtrain.github.io/lm-images/assets/images/ls_wf3.jpg",
    theme: "theme0",
    memberId: "",
    memberName: "",
    navBarDefault: true,  
    
  }

  navBarOption = (id) => {
    console.log("NAVBAR OPTION IN APP", id)
    // if (id === this.state.memberId) {
    //   console.log("YES ITS THE SAME USERNAME", this.state.memberName)
    //   this.setState({ userNavBar: true,                      
    //                 })
    // }else {
    //   console.log("IT IS NOT")
    //   this.setState({ userNavBar: false,
    //                   currentUser})
    // }
  }

  saveMemberID = (mID, mName) => { 
  memberInfo = mID;
  console.log("THIS IS mID", memberInfo)

    this.setState({
      currentUser: mID,
      memberId: mID,
      memberName: mName,
      userName: mID,     
    }) 
    console.log("THIS IS currentuser", this.state.currentUser, this.state.memberName) 
    // this.getMemberInfo()
  }

  getMemberInfo = () => {
    switch(this.state.currentUser !== null){
      case true:
        this.getAPIuserData(this.state.currentUser);
       
        break;
      case false:
      console.log("WHAT IS INSIDE", this.state.currentUser)
   
      break;      
      default:
          console.log("FROM DEFAULT MID====>", this.state.currentUser)
                   
    }    
  } 

  getAPIuserData = (id) => {
    const app = this;
    id = this.state.memberId
    API.getUser({      
      userName: id               
    })
    .then(function(res){
      return new Promise(function(resolve, reject){
        app.setState({ user: res.data })
        resolve(true);
      })
    }).then(function(){
      userArray = [...app.state.user]
    })
    .catch(err => console.log(err));
  }


  //UPDATE THEME IN DB
  updateDBtheme = (mID) => {
    console.log("THIS IS MID", mID)
    var colorrr = ""
    var testalignnn = ""
    var divfontsizeee = ""
    var pfontsizeee = ""
    var fontfamilyyy = ""
 
    switch(this.state.theme){
      case "theme0":
        colorrr = "White";
        testalignnn = "center";
        divfontsizeee = "38px";
        pfontsizeee = "16px";
        fontfamilyyy = "Calibri";
       this.setFinalTheme()
        break;        
      case "theme1":
          colorrr = "White";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Rockwell";
         this.setFinalTheme()
        break;      
      case "theme2":
          colorrr = "#b87b16";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Broadway";
         this.setFinalTheme()
        break;      
      case "theme3":
          colorrr = "#d86531";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Cooper";
         this.setFinalTheme()
        break;
      case "theme4":
          colorrr = "deepskyblue";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Arial Black";
         this.setFinalTheme()
        break;
      case "theme5":
          colorrr = "White";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Bodoni MT Black";
         this.setFinalTheme()
        break;     
      case "theme6":
          colorrr = "Greenyellow";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Stencil";
         this.setFinalTheme()
        break;        
        case "theme7":
          colorrr = "#a3ce01";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Bernard MT";
         this.setFinalTheme()
        break;      
        case "theme8":
          colorrr = "#eb9ba4";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Magneto";
         this.setFinalTheme()
        break;
        case "theme9":
          colorrr = "Gold";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Rockwell";
         this.setFinalTheme()
        break;      
        case "theme10":
          colorrr = "White";
          testalignnn = "center";
          divfontsizeee = "38px"
          pfontsizeee = "16px";
          fontfamilyyy = "Vivaldi";
         this.setFinalTheme()
        break;
        case "theme11":
          colorrr = "White";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Cambria";
         this.setFinalTheme()
        break;      
        case "theme12":
          colorrr = "Brown";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Broadway";
         this.setFinalTheme()
        break;      
        case "theme13":
          colorrr = "Black";
          testalignnn = "center";
          divfontsizeee = "24px";
          pfontsizeee = "16px";
          fontfamilyyy = "Wide Latin";
         this.setFinalTheme()
        break;
        case "theme14":
          colorrr = "Black";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Script";
         this.setFinalTheme()
        break;
        case "theme15":
          colorrr = "rgb(232,18,36)";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Bodoni MT Black"; 
         this.setFinalTheme()
        break;
        case "theme16":
          colorrr = "White";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Bernard MT";
         this.setFinalTheme()
        break;
      default:
          colorrr = "White";
          testalignnn = "center";
          divfontsizeee = "38px";
          pfontsizeee = "16px";
          fontfamilyyy = "Calibri";         
    }
   
    memberInfo = String(this.state.currentUser)
    let memberId = String(this.state.currentUser)
    let memberName = String(this.state.memberName)
    let userName = String(mID)
    let formTheme = String(this.state.theme)
    let formImage = ""
    let formcolorr = String(colorrr)
    let formtestalignn = String(testalignnn)
    let formdivfontsizee =String(divfontsizeee)
    let formpfontsizee = String(pfontsizeee)
    let formfontfamilyy = String(fontfamilyyy)

    API.updateUser({
      memberId: memberId,
      memberName:memberName,
      userName: userName,     
      userTheme: formTheme,
      userImage: formImage,
      colorDb: formcolorr,
      textalignDb: formtestalignn,      
      divfontsizeDb: formdivfontsizee,
      pfontsizeDb: formpfontsizee,
      fontfamilyDb: formfontfamilyy,               
    })
      .then(res => {
        
        if(res.data.error ){
          console.log(res.data.error)
          document.getElementById("message").textContent = res.data.error;
        }else{
        
          document.getElementById("message").textContent = " ";
          
        }
      })
      
      .catch(err => console.log(err));  

  } 

  setTheme = (id) => {      
    switch(id){
      case "theme0":        
        userTheme = "theme0"
        this.setFinalTheme()
        break;

      case "theme1":
        userTheme= "theme1"
        this.setFinalTheme()
        break;

      case "theme2":        
        userTheme= "theme2"
        this.setFinalTheme()
        break;
      case "theme3":
        userTheme= "theme3"
        this.setFinalTheme()
        break;

      case "theme4":
        userTheme= "theme4"
        this.setFinalTheme()
        break;

      case "theme5":
        userTheme= "theme5"
       this.setFinalTheme()
        break;

      case "theme6":
        userTheme= "theme6"
        this.setFinalTheme()
        break;

      case "theme7":
        userTheme= "theme7"
        this.setFinalTheme()
        break;

        case "theme8":
        userTheme= "theme8"
        this.setFinalTheme()
        break;

        case "theme9":
        userTheme= "theme9"
        this.setFinalTheme()
        break;

        case "theme10":
          userTheme= "theme10"
          this.setFinalTheme()
        break;

        case "theme11":
          userTheme= "theme11"
          this.setFinalTheme()
        break;

          case "theme12":
          userTheme= "theme12"
         this.setFinalTheme()
        break;

        case "theme13":
          userTheme= "theme13"
          this.setFinalTheme()
        break;

        case "theme14":
          userTheme= "theme14"
          this.setFinalTheme()
        break;

        case "theme15":
          userTheme= "theme15"
          this.setFinalTheme()
        break;

        case "theme16":
          userTheme= "theme16"
          this.setFinalTheme()
        break;

      default :
      userTheme= "theme0"
      this.setFinalTheme()
    }
  }
 
  setFinalTheme = () => {     
    this.setState({
      theme: userTheme
    })
  }

  render() {

    const {theme, deals, navBarDefault, memberName, currentUser} = this.state;

    return (
      <Router>
        <div className="container-content">
          { navBarDefault === true ? 
            <Navbar navBarOption={this.navBarOption} UserName={currentUser} membername={memberName}/> : null}
    
          <Wrapper theme={theme}>
    
            <Route exact path="/" component={About} handleShuffleClick={this.shuffle} deals={deals} />
            {/* <Route exact path="/about" component={About} handleShuffleClick={this.shuffle} /> */}
            <Route exact path="/Cart" component={Cart} />      
            <Route exact path="/search" component={Search} />
            <Route exact path="/Getstarted" 
              render = { () => 
                <Getstarted saveMemberID={this.saveMemberID} />} />
            <Route exact path="/PersonalizePage" 
              render = { () => 
                <PersonalizePage 
                  setTheme={this.setTheme} theme={this.state.theme} currentUser={this.state.currentUser} 
                  updateDBtheme={this.updateDBtheme} getMemberInfo={this.state.getMemberInfo} id="memberinfo"
                />
              } /> 
            <Route exact path="/Signin" render = { () => <Signin saveMemberID={this.saveMemberID} setTheme={this.setTheme}/>} />
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
