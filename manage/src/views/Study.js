import React from "react"
import axios from "axios"
// import Stcontent from "../components/stcontent"
import "../../src/asset/css/baking.css"
import "../asset/iconfont/iconfont.css"
import Stcontent from "../components/stcontent"
import Studynav from "./study/Studynav"

class Study extends React.Component{
    constructor(){
        super()
        this.state={
         
        }
    }
  render(){
  
      return(
        

        <div className="whole">
        <header>
            <span className="iconfont icon-chushimao left">

            </span>
            <div className="headwrap">
                <div className="head"><span className="search3">
                        <img alt="" title="" src="https://image.hongbeibang.com/FltPAS-35CZfvSpnHacXWoqcfFz5?42X42&amp;imageView2/1/w/42/h/42"
                         className="searchimg"/>
                        </span><span className="searchtext">搜索食谱/食材，烘焙/家常菜一应俱全</span>
                    <input className="searchwenzi"/></div>
            </div>

            <span className="iconfont icon-lingdang right">

            </span>
        </header>

      <Studynav></Studynav>
        
        
     <Stcontent></Stcontent>
      
        
    </div>
    
    
      
    
      )
  }
 



}
export default Study