import React from 'react';

import Login from "./views/user/Login"
import Home from "./views/Home"
import LoginPhone from "./views/user/LoginPhone"
import Account from "./views/user/Account"

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
                
                <Route path={"/login"} component={Login}></Route>
                <Route path={"/loginPhone"} component={LoginPhone}></Route>
                <Route path={"/account"} component={Account}></Route>

                <Route path={"/"} component={Home}></Route>             
          </Switch>
          
        </Router>
    </div>
  );
}

export default App;
