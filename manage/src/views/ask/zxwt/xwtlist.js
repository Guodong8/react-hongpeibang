import  React from  "react"
import "../../../asset/css/xwtlist.css"
// import Detailedquestions  from "./Detailedquestions"
import  axios  from  "axios"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from "react-router-dom"
export default class Xwtlist extends React.Component{

  constructor(){
    super();
    this.state={
      xxlist:[]

    }
  }
  render(){
    const {xxlist}=this.state;
    return(
      <div className="wrap">
            
        {
          xxlist.map(v=>(
            <div className="wtlist" key={v.contentQuestionId}>
             
             <NavLink className={"listtitie"} to={"/detailedquestions/" +v.contentId+"/"+v.clientId}>{v.coverTitle}</NavLink>
            {
              v.recipe.clientId>0? <div className="xiangxi" key={v.recipe.clientId} >
              
              <img src={v.recipe.image}></img>
               <div className="goodsname">
                 <h4>{v.recipe.title}</h4>
                 <p>作者:{v.recipe.clientName}</p>
               </div>
               </div>:""
            }

           
           
            <div className="answer">
              {
                v.answerNum>0?<span>{v.answerNum}个回答</span>:<a className="zwhd">暂无回答</a>
              }
             
              <span><img src="https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40"></img>写答案</span>
  
            </div>
          </div>
          ))
         
        }
        
      </div>
    )
  }
  async componentDidMount(){
    const {data}=await axios.get(`/hpb/question/getNew?_t=1568776893053&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1NzkzNTMzOCwiaWF0IjoxNTY4NTQ2NTM4fQ.bvDr9GLJ1HfbxJSyYBXAvHgc2q-rPDEMuHZ_FgwYbqo&pageIndex=0&pageSize=10`)
        // console.log(data)
        this.setState({
          xxlist:data.data.content.data
        })
        // console.log(this.state.xxlist)
  }
}