import React, { Suspense } from "react";
import Sidebar from "./Sidebar";
import "./Index.scss";
import { Redirect, Route, Switch } from "react-router";
import routes from "./../../_routrs";
function MainPage() {
  const Loading = <h1>Loading...</h1>;
  return (
    <div className="Layout__Mainpage">
      <Sidebar />
      <main className="__mainComponent__main">
        <Suspense fallback={Loading}>
          <Switch>
            {routes.map((item, key) => {
              return (
                <Route
                  key={key}
                  path={item.path}
                  exact={item.exact}
                  render={()=> <item.component />}
                />
              );
            })}
            <Redirect from="/" to="/home" />
          </Switch>
        </Suspense>
      </main>
    </div>
  );
}

export default MainPage;
