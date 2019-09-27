import React  from  "react"

import "../../asset/css/questionbuttom.css"
export default class Questionbuttom extends React.Component{
  render(){
    return(
        <div className="buttomwarp">
              <div className="buttomleft">
              <div className="bottomcenten"></div>
              <div className="leftimg">
                <img src="https://image.hongbeibang.com/Fh_n2YndO4M5AlLq-k3uBHDG5PmP?48X48&imageView2/1/w/48/h/48"></img>
              </div>
              <div className="leftfont">邀请回答</div>
              </div>
              <div className="bottomright">
              <div className="rightimg">
                <img src="https://image.hongbeibang.com/Fnu20JVHiBh4OUcn7CDDPdCyJKC_?48X48&imageView2/1/w/48/h/48"></img>
              </div>
              <div className="rightfont">邀请回答</div>
              </div>
             
        </div>
     
    )
  }
 
}