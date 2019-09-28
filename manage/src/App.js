import React from 'react';

import Login from "./views/user/Login"
import Home from "./views/Home"
import LoginPhone from "./views/user/LoginPhone"
import Account from "./views/user/Account"
import Register from "./views/user/Register"

import Search from "./views/user/Search"
import SearchRecipe from "./views/user/SearchRecipe"
import DetailPages from "./views/user/DetailPages"
import Skill from './views/study/skill';

import quzi from "./views/ask/twrouter/Quiz"
import nextstep from "./views/ask/twrouter/nextstep"
import Detailedquestions from "./views/ask/zxwt/Detailedquestions"

import Baking from "./components/Baking"
import Lession from "./components/Lession"
import Activity from "./components/Activity"
import Classify from "./views/study/classify"
import Course from "./views/study/course"
import Video from "./views/study/video"
import Detailedanswer from "./views/ask/detailedanswer"


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
                
                
                <Route path={"/detailPages/:id"} component={DetailPages}></Route>

                <Route path={"/bakingCircle/:communityId"} component={Baking}></Route>
                <Route path={"/activity/:contentId"} component={Activity}></Route>
               
                <Route path={"/skill"} component={Skill}></Route>
                <Route path={"/search"} exact component={Search}></Route>
                <Route path={"/search/recipe/:keyword"} component={SearchRecipe}></Route>
                <Route path={"/skill"} component={Skill}></Route>
                  
                 
                <Route path={"/quzi"} component={quzi}></Route>
                <Route path={"/nextstep"} component={nextstep}></Route>
                <Route  path={"/detailedquestions/:id/:a"} component={Detailedquestions}></Route>
                <Route path={"/lession/contentId=:contentId"} component={Lession}></Route>

                <Route  path={"/classify"} component={Classify}></Route>
                <Route  path={"/video"} exact component={Video}></Route>
                   <Route  path={"/course"} component={Course}></Route>

                <Route path={"/detailedanswer/:b"} component={Detailedanswer}></Route>
                <Route path={"/"} component={Home}></Route>             

           
                       
          </Switch>
          
        </Router>
    </div>
  );
}

export default App;
