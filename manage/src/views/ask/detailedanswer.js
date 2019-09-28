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
      commentcount:[],
      commentwt:[]

    }
  }

  render(){
    const  {commentlist}=this.state;
    const {commentcount}=this.state;
    const {commentwt}=this.state;
    
    return(
      
          <div className="detailedwrap">
             <div className="topwrap">
                  <span className="fontgo"  onClick={()=>{this.props.history.go(-1)}}>
                    <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48"></img>
  
                  </span>
                  <p className="topfont">回答</p>
             
            </div>
           
           
            <div className="centenwrap">
              
            <div className="cententtitle">{commentwt.title}</div>
      <div className="userdetailed">
        <div className="padd">
          <div className="follow">+关注</div>
        <div className="vipimgwrap">
          <img src={commentwt.clientImage}></img>

        </div>
        <div className="vipNamewrap" >
            <div className="vipxximg">
              <img src="https://image.hongbeibang.com/Fj1UT_HuSX4MkdcukYhWRpioEyWx?200X200&imageView2/1/w/80/h/80"></img>

            </div>
            <div className="vipName">{commentwt.clientName}</div>
        </div>
        </div>
        <div className="vipwt">
          {commentwt.description}
        </div>
        

      </div>
       <div className="comment">
        <div className="commentfont">
          <span>评论{commentcount.count}</span>
          <div className="s9b31ec9"></div>
        </div>
      </div>
      {
                commentlist.map(v=>(
                  <div key={v.clientId}>

     
      <div className="vipcommentwrap">
        <div className="vipcomment">
          <div className="commentimg">
            <img src={v.clientImage}></img>

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
            
           
           

          </div>
         
    )
  }
  async componentDidMount(){
    const contentaId = this.props.match.params.b
    const {data}=await axios.get(`/hpb/comment/getFloor?_t=1569075193221&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1NzkzNTMzOCwiaWF0IjoxNTY4NTQ2NTM4fQ.bvDr9GLJ1HfbxJSyYBXAvHgc2q-rPDEMuHZ_FgwYbqo&pageIndex=0&pageSize=10&contentId=${contentaId}`)
      
        const shuju=await axios.get(`/hpb/question/getAnswer?_t=1569409869243&csrfToken=&contentId=${contentaId}`)
        // console.log(shuju)
        this.setState({
          commentlist:data.data.data,
          commentcount:data.data,
          commentwt:shuju.data.data.content,
        })
        console.log(this.state.commentlist)
        // console.log(this.state.commentwt)
  }
}