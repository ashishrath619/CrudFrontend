import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Adduser from "./Components/Pages/Adduser";
import DisplayUser from "./Components/Pages/DisplayUser";
import Editpage from "./Components/Pages/Editpage";

export default function App(props) {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Adduser} history={props.history} />
          <Route
            exact
            path="/DisplayUser"
            component={DisplayUser}
            history={props.history}
          />
          <Route
            exact
            path="/Editpage"
            component={Editpage}
            history={props.history}
          />
        </Switch>
      </Router>
    </div>
  );
}
