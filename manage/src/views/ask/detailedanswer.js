import React from  "react"
import  axios  from  "axios"

import "../../asset/css/detailedanswer.css"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from "react-router-dom"
export default class detailedanswer extends React.Component{
  constructor(){
    super();
    this.state={
      commentlist:[],
      commentcount:[]

    }
  }

  render(){
    const  {commentlist}=this.state;
    const {commentcount}=this.state;
    
    return(
      
          <div className="detailedwrap">
             <div className="topwrap">
                  <span className="fontgo"  onClick={()=>{this.props.history.go(-1)}}>
                    <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48"></img>
  
                  </span>
                  <p className="topfont">回答</p>
             
            </div>
            {
                commentlist.map(v=>(
                 
            <div className="centenwrap" key={v.floorCommentContentId}>
            <div className="cententtitle">{v.coverTitle}</div>
      <div className="userdetailed">
        <div className="padd">
          <div className="follow">+关注</div>
        <div className="vipimgwrap">
          <img src={v.commentClientImage}></img>

        </div>
        <div className="vipNamewrap" >
            <div className="vipxximg">
              <img src="https://image.hongbeibang.com/Fj1UT_HuSX4MkdcukYhWRpioEyWx?200X200&imageView2/1/w/80/h/80"></img>

            </div>
            <div className="vipName">{v.commentClientName}</div>
        </div>
        </div>
        <div className="vipwt">
          <p>{v.coverSummary}</p>
        </div>
        

      </div>
      <div className="comment">
        <div className="commentfont">
          <span>评论{commentcount.count}</span>
          <div className="s9b31ec9"></div>
        </div>
      </div>
      <div className="vipcommentwrap">
        <div className="vipcomment">
          <div className="commentimg">
            <img src="https://image.hongbeibang.com/Fut2uwWW9tKJqk5ZSmfogW2lWTRJ?132X132&imageView2/1/w/132/h/132"></img>

          </div>
          <div className="commentName">
            <p>{v.clientName}</p>
            <p>{v.createTime}</p>

          </div >
          <div className="commentContent">
            <div>
              <span>{v.text}</span>
            </div>

          </div>
          
        </div>            

      </div>
      </div>
            
                ))
            }
           

          </div>
         
    )
  }
  async componentDidMount(){
    const contentaId = this.props.match.params.b
    const {data}=await axios.get(`/hpb/comment/getFloor?_t=1569075193221&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1NzkzNTMzOCwiaWF0IjoxNTY4NTQ2NTM4fQ.bvDr9GLJ1HfbxJSyYBXAvHgc2q-rPDEMuHZ_FgwYbqo&pageIndex=0&pageSize=10&contentId=${contentaId}`)
        // console.log(data)
        this.setState({
          commentlist:data.data.data,
          commentcount:data.data,
        })
        console.log(this.state.commentlist)
  }
}