import React from "react";
import "./App.scss";
import aws from "./aws-exports";
import Amplify from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./Features/Home/Home";
import Details from "./Features/Details/Details";
Amplify.configure(aws);

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route exact path="/:id/details" component={Details} />
        <Route exact path="/" component={Home} />
      </HashRouter>
    </div>
  );
}

export default withAuthenticator(App);
