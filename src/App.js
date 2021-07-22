import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Adduser from "./Components/Pages/Adduser";
import DisplayUser from "./Components/Pages/DisplayUser";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Adduser}></Route>
          <Route exact path="/DisplayUser" component={DisplayUser}></Route>
        </Switch>
      </Router>
    </div>
  );
}
