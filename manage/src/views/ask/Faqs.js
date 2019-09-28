import React from "react"

import "../../asset/css/Faqs.css"
// import Quiz from "./twrouter/Quiz"

  class Faqs extends React.Component{
   
    // twquiz(){
    //   this.props.history.push("/quzi")
    // }
    
      render(){
    
        return(
            <div className="Faqswrap">
                <div className="top">
                <p onClick={()=>{ this.props.history.push("/quzi")}}>提问</p>
                <p onClick={()=>{this.props.history.push("/search")}}>搜索问题</p>
                <p><img src="https://image.hongbeibang.com/FjmYGE5z6RvQL-_fdLKuSGYfmwO2?48X48&imageView2/1/w/48/h/48"></img></p>
  
                </div>
            
                
               
             
            </div>
        )
      }
  }
  export default Faqs;

