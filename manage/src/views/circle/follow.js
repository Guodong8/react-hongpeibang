import React from "react"
export default class Follow extends React.Component{
   componentDidMount(){
       if(!localStorage.adminId)
       this.props.history.push("/login")
   }
}