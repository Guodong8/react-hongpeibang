import  React from "react"
// import{
//   BrowserRouter as Router,
//   Route,
//   NavLink
// } from "react-router-dom";
import "../../../asset/css/Quiz.css"
export default class  Quiz extends React.Component{
  constructor(){
    super()
    this.state={
      val:'',
      bool:false
    }
  }
  render(){
    let {val,bool} =this.state
    return(
      <div className="dawrop">
           <div className="Quiz">
             <span  onClick={()=>{this.props.history.push("/questions/jh")}}>取消</span>
             <span onClick={()=>{
               
               if(val){
                this.props.history.push("/nextstep")
               }else{
                    this.setState({
                      bool:true
                    })
               }
            
            }}>下一步</span>
           </div>
           <div>
             
              <input className="inputtext"
               type="text" placeholder="请写下你的问题并用问号结尾"
                value={val}
                 onChange={this.handleChange.bind(this)}
                  style={{display:bool?'none':'block'}}
                 />

                 <div  className="tkuangwrop"   onClick={this.Change.bind(this)}> 
                 <div className="tkuang"
                  style={{display:bool?'block':'none'}}>请输入你的问题</div>

                 </div>
              
           </div>
           <div className="inputwrap"></div>
      </div>
    )
  }
  handleChange(e){
    let value = e.target.value
      console.log(value)
      this.setState({
        val:value
      })
  }
  Change(){
    this.setState({
      bool:false,
    })
  }

}