import React from "react"
import{
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect
  
} from "react-router-dom";
import "../../asset/css/Studynav.css"

import  Skill  from "./skill";
import  Classify from "./classify"
import Course from "./course"
import Video from "./video"



export default class Studynav extends React.Component{
  render(){
    return(
    <div className="nav">
      <div>
         <ul>
           <div className="daohangnav">
             <li>
             <NavLink className="icon" to={{pathname:"/skill"}} >
             <img src="https://image.hongbeibang.com/Fp0nBR7-xD2caoLENB7qZgmu9vZT?80X80&imageView2/1/w/80/h/80"></img></NavLink>
             <span>技巧百科</span>
             </li>
          
           
           <li >
           <NavLink  className="icon" to={{pathname:"/video"}}>
           <img src="https://image.hongbeibang.com/Fl493FjRZluXqCNJnvhRYw_IGKZO?80X80&imageView2/1/w/80/h/80"></img></NavLink>
          
           <span>视频学堂</span>
           </li>

           <li>
           <NavLink  className="icon" to={{pathname:"/course"}}> <img src="https://image.hongbeibang.com/FkU-5lDUu7y7CurjkdJYWh-ZIg3x?80X80&imageView2/1/w/80/h/80"></img></NavLink>
           <span>新手课程</span>
           </li>

           <li>
           <NavLink  className="icon" to={{pathname:"/classify"}}><img src="https://image.hongbeibang.com/FkcHmIr5rX7zXeHET_Rew64lVrgx?80X80&imageView2/1/w/80/h/80"></img></NavLink>
           <span>食品分类</span>
           </li>
           </div>

       </ul>
     
           
      
    
    </div>
    <Switch>
    <Route path={"/skill"} exact component={Skill}></Route>
        <Route  path={"/video"} exact component={Video}></Route>
        <Route  path={"/course"} component={Course}></Route>
        <Route  path={"/classify"} component={Classify}></Route>
  
        
    </Switch>
          
  
        </div>
    
    )
  }

}