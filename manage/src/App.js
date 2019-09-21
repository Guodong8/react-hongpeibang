import React from 'react';

import Login from "./views/user/Login"
import Home from "./views/Home"
import LoginPhone from "./views/user/LoginPhone"
import Account from "./views/user/Account"
import Register from "./views/user/Register"

import Search from "./views/user/Search"
import Skill from './views/study/skill';

import quzi from "./views/ask/twrouter/Quiz"
import nextstep from "./views/ask/twrouter/nextstep"
import Detailedquestions from "./views/ask/zxwt/Detailedquestions"

import Baking from "./components/Baking.js"

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect

} from "react-router-dom"



function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
                
                <Route path={"/login"} component={Login}></Route>
                <Route path={"/loginPhone"} component={LoginPhone}></Route>
                <Route path={"/register"} component={Register}></Route>
                <Route path={"/account"} component={Account}></Route>
                <Route path={"/bakingCircle/:communityId"} component={Baking}></Route>
                <Route path={"/search"} component={Search}></Route>
                <Route path={"/skill"} component={Skill}></Route>
                <Route path={"/"} component={Home}></Route>    
                <Route path={"/quzi"} component={quzi}></Route>
                <Route path={"/nextstep"} component={nextstep}></Route>
                <Route  path={"/detailedquestions/:id/:a"} component={Detailedquestions}></Route>
                <Route path={"/"} component={Home}></Route>             

             
                       
          </Switch>
          
        </Router>
    </div>
  );
}

export default App;
