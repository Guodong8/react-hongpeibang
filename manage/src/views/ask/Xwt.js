import React from "react"
import "../../asset/css/navys.css"
import wtlist from "../ask/zxwt/xwtlist"
import Xwtlist from "../ask/zxwt/xwtlist";

export default class questioning extends React.Component{
  render(){
    return(
      <div className="navys" >
      <Xwtlist></Xwtlist>
      </div>
    )
  }
}