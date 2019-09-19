import React from "react"
import Faqs from "../views/ask/Faqs"
import Mynav from "../views/ask/Mynav"
class Questions extends React.Component{
       
    render(){
        return(
            <div className="questions">
               <Faqs {...this.props}></Faqs>
               <Mynav></Mynav>
               
            </div>
        )
    }
}
export default Questions;