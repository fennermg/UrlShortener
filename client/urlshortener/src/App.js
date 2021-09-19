import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./components/Admin";
import Index from "./components/Index";
import Login from "./components/Login";
import LongUrl from "./components/LongUrl";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/:code" component={LongUrl} />
          <Route exact path="/admin/login" component={Login} />
          <Route exact path="/admin/dashboard" component={Admin} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
