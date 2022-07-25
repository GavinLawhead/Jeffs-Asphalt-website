import React from "react";
import { Home } from "./pages/home";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Routes = () => {
  const location = useLocation();

  return (
    <div>
      <Switch location={location} key={location.pathname}>
        {/* <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route> */}
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
