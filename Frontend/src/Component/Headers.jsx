import React, { Component } from "react";
import "../Component/Header.css";
import Modal from "react-modal";
import { jwtDecode } from "jwt-decode"; 
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { withRouter } from "./HOC";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#f4f4f8",
    // padding:'1% 8%',
    maxWidth: "100%",
    border: "1px solid black",
  },
};

 class Headers extends Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: "",
      loginModalIsOpen: false,
      isLoggedIn: false,
      loggedInUser: undefined,
    };
  }

  componentDidMount() {
    const path = this.props.location.pathname; // Access location from props
    let bg;
    if (path === "/" || path === "/home") {
      bg = "brown";
    } else {
      bg = "red";
    }
    this.setState({ backgroundColor: bg });
  }
  handlelogin = () => {
    this.setState({ loginModalIsOpen: true });
  };
  handlecancel = () => {
    this.setState({ loginModalIsOpen: false });
  };

  responseGoogle = (response) => {
    console.log(response);
    const decode = jwtDecode(response?.credential);
    // console.log(decode.name);
    this.setState({ isLoggedIn: true, loggedInUser: decode.name, loginModalIsOpen: false });
  };

  handlelogout = () => {
    this.setState({ isLoggedIn: false, loggedInUser: undefined })
  }
  navigatelogo=(path)=>{
    this.props.navigate(path)
  }

  render() {
    const { backgroundColor, loginModalIsOpen, isLoggedIn, loggedInUser } =
      this.state;
    return (
      <>
        {!isLoggedIn ?
          <div className="auth" style={{ backgroundColor }}>
            <div className="logo" onClick={()=> this.navigatelogo('/home')}>!e</div>
           <div className="subauth"> <button onClick={this.handlelogin}>Login</button>
            <button>Create an Account</button></div>
          </div>
          :
          <div className="auth" style={{ backgroundColor }}>
            <button>{loggedInUser}</button>
            <button className="signup" onClick={this.handlelogout}>Logout</button>
          </div>
        }
        <Modal
          isOpen={loginModalIsOpen}
          style={customStyles}
          contentLabel="Login Modal">
          <h4 className="h4login">Login</h4>
          <div className="loginform">
            <input type="email" name="" id="" placeholder="email" />
            <br />
            <input type="password" name="" id="" placeholder="password" />
            <div className="loginbtn">
              <button className="btn1">Login</button>
              <button onClick={this.handlecancel} className="btn2">
                cancel
              </button>
            </div>
          </div>
          <GoogleOAuthProvider clientId="280709620788-epo75gl6bvbcr6rqa1fli695n5sb4sjk.apps.googleusercontent.com">
            <GoogleLogin
              buttonText="Login"
              onError={this.responseGoogle}
              onSuccess={this.responseGoogle}
              cookiePolicy={"single_host_origin"}
              scope="profile email"
            />
          </GoogleOAuthProvider>
        </Modal>

      </>
    );
  }
}
export default withRouter(Headers);