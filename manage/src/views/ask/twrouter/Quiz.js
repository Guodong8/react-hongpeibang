import  React from "react"
// import{
//   BrowserRouter as Router,
//   Route,
//   NavLink
// } from "react-router-dom";
import "../../../asset/css/Quiz.css"
export default class  Quiz extends React.Component{
  render(){
    return(
      <div className="Quiz">
           <div>
             <span  onClick={()=>{this.props.history.go(-1)}}>取消</span>
             <span onClick={()=>{this.props.history.push("/nextstep")}}>下一步</span>
           </div>
      </div>
    )
  }

}