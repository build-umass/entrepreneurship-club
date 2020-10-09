/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

// * Importing rebranded-template's index page
import Home from "views/Home.js";
// * Importing rebranded-template's landing page
import Landing from "views/examples/Landing.js";
// * Commented out below imports for original Argon pages (moved to "views/deprecated")
// import Index from "views/Index.js";
// import Login from "views/examples/Login.js";
// import Landing from "views/examples/Landing-Original.js";
// import Profile from "views/examples/Profile.js";
// import Register from "views/examples/Register.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <Home {...props} />} />
      <Route
        path="/landing-page"
        exact
        render={(props) => <Landing {...props} />}
      />
      {
        // * deprecated routes
        // <Route path="/login-page" exact render={(props) => <Login {...props} />} />
        // <Route path="/profile-page" exact render={(props) => <Profile {...props} />} />
        // <Route path="/register-page" exact render={(props) => <Register {...props} />}/>
      }
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
