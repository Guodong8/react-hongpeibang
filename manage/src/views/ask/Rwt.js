import React from "react"
import "../../asset/css/rwt.css"
import  axios  from  "axios"
export default class questioning extends React.Component{
  constructor(){
    super();
    this.state={
      rwtlist:[]

    }
  }
  render(){
    const  {rwtlist}=this.state;
    return(
      <div className="navys">
        {
          rwtlist.map(v=>(
<div className="rwtwrop" key={v.contentId}>
          <div className="rwttitle">{v.title}</div>
       <div className="rwtcontent">
         
           <img className="rwtimg" src={v.recipe.image}></img>
         
         <div className="productName">
           <p>奶香绿豆糕</p>
           <p>作者:{v.recipe.clientName}</p>
         </div>
        
       </div>
       <div className="answer">
             {/* {
                v.answerNum>0?<span>{v.answerNum}个赞</span>:<p >暂无点赞</p>
             } */}
             <span className="likenum">{v.answerNum}个赞</span>
              <span className="writeanswer"><img className="writeanswerimg" src="https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40"></img>写答案</span>
  
            </div>

      </div>
          ))
          
        }
        
      </div>
    )
  }
  async componentDidMount(){
    const {data}=await axios.get(`/hpb/question/getHot?_t=1568865912143&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1NzkzNTMzOCwiaWF0IjoxNTY4NTQ2NTM4fQ.bvDr9GLJ1HfbxJSyYBXAvHgc2q-rPDEMuHZ_FgwYbqo&pageIndex=0&pageSize=10`)
        // console.log(data)
        this.setState({
          rwtlist:data.data.content.data
        })
        console.log(this.state.rwtlist)
  }
}