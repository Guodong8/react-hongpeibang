import React from 'react';

import Login from "./views/user/Login"
import Home from "./views/Home"
import LoginPhone from "./views/user/LoginPhone"
import Account from "./views/user/Account"
import Register from "./views/user/Register"
import Study from "./views/Study"
import Search from "./views/user/Search"
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import Daren from './views/circle/Daren';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
                
                <Route path={"/login"} component={Login}></Route>
                <Route path={"/loginPhone"} component={LoginPhone}></Route>
                <Route path={"/register"} component={Register}></Route>
                <Route path={"/account"} component={Account}></Route>
                <Route path={"/study"} component={Study}></Route>
                <Route path={"/search"} component={Search}></Route>

                <Route path={"/"} component={Home}></Route>             
          </Switch>
          
        </Router>
    </div>
  );
}

export default App;
