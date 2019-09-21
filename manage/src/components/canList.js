import React from "react"
import axios from "axios"
import "../asset/css/canList.css"
import CantotoList from "../views/circle/cantotolist"
class canList extends React.Component{
    constructor(props){
        super(props)
       this.state={
        community:[],
         
       }
    } 
    goahead(){
        this.props.history.go(-1)
       }
    render(){
        const community = this.state.community;
      return(
       <div className="wrap">
           <div>
             <div className="canListnav">
               <span className="goahead">
               <img onClick={this.goahead.bind(this)} alt="" title="" src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&amp;imageView2/1/w/48/h/48" className="canListimg" />
               </span>
               <ul className="breakfast" >#早餐#</ul>
             </div>  
             <div className="breakfoot"></div>
           </div>
           <CantotoList></CantotoList>
           
       </div>

      )
    
    }
 
}
export default canList