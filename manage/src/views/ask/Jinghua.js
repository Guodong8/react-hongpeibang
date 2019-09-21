import React from "react"
// import "../../asset/css/navys.css"
import axios from "axios"
export default class jinghua extends React.Component{
  constructor(){
    super();
    this.state={
      essenceList:[]

    }
  }
  render(){
    const {essenceList}=this.state
    return(
      <div className="navys">
        {
          essenceList.map(v=>(
            <div className="jhlist" key={v.contentId}>
            <div className="imglist">
              <img src={v.clientImage}></img>
            </div>
            <div className="viplist">
              <span>
              <img src="https://image.hongbeibang.com/Fj1UT_HuSX4MkdcukYhWRpioEyWx?200X200&imageView2/1/w/80/h/80"></img>
              </span>
              <span>{v.clientName}</span>
  
            </div>
            <div className="wtwrap">
            <div className="vipwt"> {v.coverTitle}</div>
            <div className="viphd">{v.coverSummary}</div>
            </div>
            {
              v.hotNum>0?<div className="like">{v.hotNum}个赞</div>:<div className="like" >暂无点赞</div>
            }
            
            </div>
            
          ))
         
     
        }
         
      </div>
    )
  }
  async  componentDidMount(){
    const {data}=await axios.get(`/hpb/question/getEssence?_t=1568860021466&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1NzkzNTMzOCwiaWF0IjoxNTY4NTQ2NTM4fQ.bvDr9GLJ1HfbxJSyYBXAvHgc2q-rPDEMuHZ_FgwYbqo&pageIndex=0&pageSize=10`)
  console.log(data)
  this.setState({
    essenceList:data.data.content.data
  })
  console.log(this.state.essenceList)

  }

}