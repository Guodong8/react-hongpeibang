import React from  "react"
import "../../../asset/css/nextstep.css"
export default class write extends React.Component{
  constructor(){
    super()
    this.state={
      bools:true,
      boo:true,
      ha:false,
    }
  }
  render(){
    const {bools,boo,ha}=this.state
    return(
      <div>
       <div className="nextstep">
       <span onClick={()=>{this.props.history.go(-1)}}>
         <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48"/>

         </span>
             {/* <span onClick={()=>{this.props.history.push("/nextstep")}}>完成</span> */}
             <span onClick={this.Change.bind(this)}>完成</span>

       </div>

       <div >
        <input  className="inputtext" placeholder="填写问题相关描述信息（选填）"></input>
       </div>


       {/* *****发布************************ */}



       <div className="tkfnwrap" style={{display:bools?"none":"block"}} >
       <div className="tkfb" style={{display:ha?"none":"block"}} >
         <div className="fbtitle">是否发布</div>
         <div className="fbimg">
           <img src="https://image.hongbeibang.com/FhbEC23nnzbxalK2lds2F0u-pPjE?200X200&imageView2/1/w/200/h/200"></img>
         </div>
         <div className="fbtext" > 
            <p>为维护“问答版块”的良好秩序，</p>
            <p>请确定您提交的问题与烘焙有关的哦！</p>

         </div>
         <div className="buttomtext">*如发表于烘焙无关问题，可能面临系统封号风险</div>
         <div className="wuy"></div>


         <div className="buttomtextwrap">
          <div className="leftf">
            <div className="fd"></div>
            <span onClick={this.yc.bind(this)}>取消</span>
          </div>
          <span className="righty"  onClick={this.ycs.bind(this)} >发布</span>
         </div>
       </div>
       </div>



        {/* ***********是否发布********************** */}
       <div className="wcwarp" style={{display:boo?"none":"block"}}>
         <div className="wck">
          <div className="tstitle">提示</div>
          <div className="fbwrap">
            <p className="fbcg">发布成功</p>
          </div>
          <div className="qdwrap">
            <div className="qdsize" onClick={()=>{ this.props.history.push("/quzi")}}>确定</div>
          </div>
         </div>
       </div>
      
       <div className="inputwrap"></div>
      </div>
      
    )
  }
  Change(){
    this.setState({
      bools:false,
    })
  }


  ycs(){
    this.setState({

      boo:false,
      ha:true
   
    })
  }
  yc(){
    this.setState({
      bools:false
    })
  }
  // haa(){
  //   this.setState({
    
  //   })
  // }
  }
