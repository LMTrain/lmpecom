import React, { Component } from "react";
import Container from "../components/Container";
import "./style.css";
import API from "../utils/API";
import { Button } from 'reactstrap';
import { Redirect } from "react-router-dom";



class Signin extends Component {
  state = { 
    memberId: "",   
    user:{},
    membername: "",
    userName: null,
    memberpassword: "",    
    isError: false,
    errorMessage: '',
    message: '', 
    redirect: false,
  };

  loadSearchPage = () => {    
    this.setRedirect()
    
  }

  setRedirect = () => {    
    this.setState({
      redirect: true,      
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {         
      return <Redirect to='/Search' />
    }
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

    
  signInSubmit = event => {
    event.preventDefault();
    const {memberemail, memberpassword} = this.state

    if (!memberemail) {
      this.message = "Username cannot be empty"
      this.setState({message: "Username cannot be empty"})         
      return;
    } else {
      this.message = " "
      this.setState({message: " "})      
    }
    
    if (!memberpassword) {
      this.message = "Password cannot be empty"
      this.setState({message: "Password cannot be empty"})       
      return;
    } else {
      this.message = " "
      this.setState({message: " "})      
  }

    const userAccount = {     
      memberemail,  
      memberpassword,     
    }

    this.setState({
      memberemail: '',      
      memberpassword: '',    
    })    
        
   
    let userName = String(userAccount.memberemail)   
    let password = String(userAccount.memberpassword)   
    API.loginUser({     
      userName: userName,      
      password: password,

    })    
    .then(res => {
      
      const { data } = res.data;
      if(res.data.error === "Invalid Password"){
        console.log(res.data)
        this.message = res.data.error        
        this.setState({
          isError: true,         
          errorMessage: res.data.error,
          memberemail: " ",      
          memberpassword: " ",
          message: res.data.error
        })
      } else if (res.data.error === "User does not exist!"){
          console.log(res.data)
          this.message = res.data.error         
          this.setState({
            isError: true,            
            errorMessage: res.data.error,
            memberemail: " ",      
            memberpassword: " ",
            message: res.data.error
          })
      
      } else {
        console.log("SIGNIN PROPS", this.props)
    
        this.setState({
          redirect: true,
          userName: data[0].memberId,
          memberId: data[0].memberId,          
          membername: data[0].memberName,
        })       
        // this.loadAPIgetUser(this.state.userName)
        this.props.saveMemberID(userName, data[0].memberName)
      }
     
    })    
    .catch(err => console.log(err));      
  };

  // loadAPIgetUser = (id) => {
  //   const app = this; 
  //   API.getUser({      
  //     userName: this.state.userName,               
  //   })
  //   .then(function(res){
  //     return new Promise(function(resolve, reject){
  //       app.setState({ user: res.data })
  //       resolve(true);
  //     })
  //   }).then(function(){
  //     userArray = [...app.state.user]
  //     app.setState({
  //       userTheme: userArray[0].userTheme,
  //       membername: userArray[0].memberName
  //     })
  //     app.userTheme(app.state.userTheme);
  //   })
  //   .catch(err => console.log(err));
  // }

  // userTheme = (id) => { 
  //   divStyle = {
  //     color: userArray[0].colorDb,
  //     textAlign: userArray[0].textalignDb,
  //     fontSize: userArray[0].divfontsizeDb,
  //     fontFamily: userArray[0].fontfamilyDb,
  //   };
  //   this.props.setTheme(id)    
  // }


  render() {  
    const {userName} = this.state   
    return (
      <div>
        {this.renderRedirect()}
        { userName !== null ? null :
          <Container style={{ marginTop: 200 }}>
            <div>
              <div className="card card-body">
                <div id ="message">{this.message}</div>
                <h5>Sign In</h5>
                <form className="form-groups">          
                  <div className="form-group">
                    <label id="username"></label>
                    <input 
                      value={this.memberemail}
                      onChange={this.handleInputChange}
                      name="memberemail"
                      type="text"
                      className="form-control"  
                      placeholder="Enter Your Email"
                      id="memberemail"
                      />
                  </div>
                  <div className="form-group">
                    <label id="password"></label>
                    <input 
                      value={this.memberpassword}
                      onChange={this.handleInputChange}
                      name="memberpassword"
                      type="password" 
                      className="form-control" 
                      placeholder="Enter User Password"
                      id="memberpassword" 
                      />
                  </div>
                  
                </form>            
                <div className="getstarted">
                  <span>
                    <Button 
                      type="submit" onClick={this.signInSubmit} color="info" size="sm">Sign In
                    </Button>{" "}
                            
                    <p>No Account? <a href="/Getstarted">Create Account</a></p>
                    <p><a href="/Getstarted">Forget Email/Password?</a></p>
                  </span>
                </div>
              </div>
            </div>
          </Container>
        }
        {/* {userName === null || userName === undefined ? null : <Navbar          
            userName={userName} membername={membername}       
        />}  */}
          {/* <div style={divStyle}><b> Welcome {membername}!</b></div>            */}
        {/* {userName === null || userName === undefined ? null : <Search          
            userName={userName} membername={membername}
        />} */}
      </div>
    );
  }
}

export default Signin;





