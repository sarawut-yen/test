import React from "react"
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// pages

import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";

const App = () => {
    return (
      <BrowserRouter>
      <Switch>
        <Route
          path="/nucleo"
          render={(props) => <NucleoIcons {...props} />}
        />
        <Route
          path="/landing"
          render={(props) => <LandingPage {...props} />}
        />
        <Route
          path="/profile"
          render={(props) => <ProfilePage {...props} />}
        />
        <Route
          path="/register"
          render={(props) => <RegisterPage {...props} />}
        />
        <Redirect exact to="/landing" />
        <Route path="*" render={() => "404 Not found!"} />
      </Switch>
    </BrowserRouter>
    )
}

export default App