import React from "react"
import{
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect
  
} from "react-router-dom";
import "../../asset/css/Mynav.css"

import  Jinghua  from "./Jinghua";
import Xwt from "./Xwt"
import Rwt  from "./Rwt"



export default class Nav extends React.Component{
  render(){
    return(
      <div className="navwrap">
       
                  <div className="Mynav">
                  <NavLink className={"mylink"} to={"/questions/jh"} activeStyle={{color:"#000"}} >精华问答</NavLink>
                  <NavLink className={"mylink"} to={"/questions/xwt"}  exact activeStyle={{color:"#000"}}>最新问题</NavLink>
                  <NavLink className={"mylink"} to={"/questions/rwt"} activeStyle={{color:"#000"}}>最热问题</NavLink>
                  </div>
              <Switch>
              <Route className="center" path={"/questions/jh"} component={Jinghua}></Route>
                  <Route className="center" path={"/questions/xwt"} exact component={Xwt}></Route>
                 
                  <Route className="center" path={"/questions/rwt"} component={Rwt}></Route>
            
                  <Redirect from={"/questions"}  to={"/questions/xwt"}></Redirect>
              </Switch>
                  
  
      </div>
    )
  }

}