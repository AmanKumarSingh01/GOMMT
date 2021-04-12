import React from "react";
import Amplify from "aws-amplify";
import Exports from "./aws-exports";
import "./App.scss";
import { HashRouter, Route } from "react-router-dom";
import { withAuthenticator } from "@aws-amplify/ui-react";
import MainPage from "./Features/TheLayout/MainPage";

// Configure Amplify
Amplify.configure(Exports);

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route path="/" component={MainPage} />
      </HashRouter>
    </div>
  );
}

export default withAuthenticator(App);
