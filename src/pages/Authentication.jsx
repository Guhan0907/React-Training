import React, { Component } from "react";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Home from "./Home";

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      isUserLogged: false,
      users: [],
    };
  }

  handleLogin = (obj) => {
    const user = this.state.users;
    const userExists = user.find(
      (x) => x.email === obj.email && x.password === obj.password,
    );

    if (userExists) {
      // this.setState({isUserLogged : true});
      this.setState({ isLogin: true, isUserLogged: true });
    } else if (obj.email === "") {
      alert("Enter the Details");
    } else {
      console.log(obj);
      alert("Invalid Credentials");
    }
  };

  handleSignUp = (obj) => {
    const { users } = this.state;

    const userExists = users.find((x) => x.email === obj.email);

    if (userExists) alert("User Already Present");
    else if (obj.email === "") {
      alert("Enter the Details");
    } else {
      let data = {
        userName: obj.userName,
        email: obj.email,
        password: obj.password,
      };
      // users = [...users , data];
      this.setState({
        users: [...users, data],
        isLogin: true,
        isUserLogged: true,
      });
      // this.setState({})
    }
  };

  handleToggle = () => {
    var temp = !this.state.isLogin;
    this.setState({ isLogin: temp });
  };

  render() {
    return (
      <>
        {/* <h1> Hello this is the Authentication Page </h1> */}
        <div>
          {this.state.isUserLogged ? (
            <Home />
          ) : this.state.isLogin ? (
            <Login onLogin={this.handleLogin} goToSignUp={this.handleToggle} />
          ) : (
            <SignUp
              onSignUp={this.handleSignUp}
              goToLogin={this.handleToggle}
            />
          )}
        </div>
      </>
    );
  }
}

export default Authentication;
