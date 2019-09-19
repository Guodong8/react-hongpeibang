import React from  "react"
import "../../../asset/css/nextstep.css"
export default class write extends React.Component{
  render(){
    return(
      <div>
       <div className="nextstep">
       <span onClick={()=>{this.props.history.go(-1)}}>
         <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48"/>

         </span>
             <span onClick={()=>{this.props.history.push("/nextstep")}}>完成</span>
       </div>
      </div>
      
    )
  }
  }
