import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginSunghoon from "./pages/sunghoon/login/Login";
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login-sunghoon" component={LoginSunghoon} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
