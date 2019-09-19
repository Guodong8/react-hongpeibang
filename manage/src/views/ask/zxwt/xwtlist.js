import  React from  "react"
import "../../../asset/css/xwtlist.css"
import  axios  from  "axios"
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
            <div className="wtlist" key={v.contentQuestionId} >
            <div className="listtitie">{v.coverTitle}</div>
            <div className="xiangxi" >
              
           <img src={v.recipe.image}></img>
            <div className="goodsname">
              <h4>{v.recipe.title}</h4>
              <p>作者:{v.recipe.clientName}</p>
            </div>
            </div>
            <div className="answer">
              <span>暂无回答</span>
              <span><img src="https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40"></img>写答案</span>
  
            </div>
          </div>
          ))
         
        }
        
      </div>
    )
  }
  async componentDidMount(){
    const {data}=await axios.get(`/hongbeibang/question/getNew?_t=1568776893053&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1NzkzNTMzOCwiaWF0IjoxNTY4NTQ2NTM4fQ.bvDr9GLJ1HfbxJSyYBXAvHgc2q-rPDEMuHZ_FgwYbqo&pageIndex=0&pageSize=10`)
        console.log(data)
        this.setState({
          xxlist:data.data.content.data
        })
        console.log(this.state.xxlist)
  }
}