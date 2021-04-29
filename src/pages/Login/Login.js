import React from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class Login extends React.Component {
  goToMain = () => {
    this.props.history.push("/main");
  };

  render() {
    return (
      <div className="Login">
        <h1 className="title" onClick={this.goToMain}>
          Westagram
        </h1>
        <button>Go To Main</button>
      </div>
    );
  }
}

export default withRouter(Login);
