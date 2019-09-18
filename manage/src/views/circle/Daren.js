import React from "react"
import "../../asset/css/daren.css"
class Daren extends React.Component{
    constructor(){
        super()  
    }
    gollow(){
        this.props.history.push("/follow")
    }   
    goNews(){
        this.props.history.push("/circle")
    }
    render(){
        return(
          1
        )
    }
}
export default Daren