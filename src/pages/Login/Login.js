import React from "react";
import "./Login.css";

class Login extends React.Component {
  render() {
    return (
      <div className="Login">
        <button onClick={() => alert("안녕하세요")}>Click Me</button>
        <h1 className="title">Hello Wolrd</h1>
      </div>
    );
  }
}

export default Login;
