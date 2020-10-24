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

import BaseTemplate from "views/examples/BaseTemplate.js";
import Landing from "views/Landing.js";
<<<<<<< Updated upstream
=======
import About from "views/About.js";
import ProgramsEvents from "views/examples/ProgramsEvents";
>>>>>>> Stashed changes

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <Landing {...props} />} />
      <Route
        path="/base-template"
        exact
        render={(props) => <BaseTemplate {...props} />}
      />
<<<<<<< Updated upstream
=======
      <Route
        path="/programs-events"
        exact
        render={(props) => <ProgramsEvents {...props} />}
      />
      <Route
        path="/about"
        exact
        render={(props) => <About {...props} />}
      />
>>>>>>> Stashed changes
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
