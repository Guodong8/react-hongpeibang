import React from "react"
import{
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect
  
} from "react-router-dom";
import "../../asset/css/Studynav.css"

export default class Studynav extends React.Component{
  constructor(props){
    super(props)
  }
  goSkill(){
    this.props.history.push("/skill")
  }
  render(){
    return(
    <div className="nav">
      <div>
         <ul>
           <div className="daohangnav">
             <li>
             <NavLink className="icon" to={{pathname:"/skill"}} >
             <img src="https://image.hongbeibang.com/Fp0nBR7-xD2caoLENB7qZgmu9vZT?80X80&imageView2/1/w/80/h/80"></img></NavLink>
             <span onClick={this.goSkill.bind(this)}>技巧百科</span>
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
  
    
     
   
  
        
   
          
  
        </div>
    
    )
  }

}