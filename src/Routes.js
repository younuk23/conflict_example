import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginYeonuk from "./pages/yeonuk/login/Login";
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login-yeonuk" component={LoginYeonuk} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
