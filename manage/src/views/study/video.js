import React from "react"
import Stcontent from "../../components/stcontent"
import "../../asset/css/baking.css"
import ReactSwiper from 'reactjs-swiper';
import Swipe from "../study/swipe"; 

export default class Video extends React.Component{
  
  
  render(){
   
    return(
      
      <div className="whole">
       <Swipe></Swipe>
      <Stcontent></Stcontent>
      </div>
    )
  }
}
