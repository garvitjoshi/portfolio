import { Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import React from "react";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          render={function() {
            return <h1 style={{ color: "black" }}> Not Found </h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
