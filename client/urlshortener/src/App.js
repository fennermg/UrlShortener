import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./components/Admin";
import Index from "./components/Index";
import LongUrl from "./components/LongUrl";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/:code" component={LongUrl} />
          {/* <Route exact path="/admin/dashboard" component={Admin} /> */}
        </Switch>
      </Router>
  );
}

export default App;
