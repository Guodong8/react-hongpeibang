import React from "react"
import axios from "axios"
import "../asset/css/canList.css"
import "../asset/css/totolist.css"
import Newbest from "../components/newbest"
import Hotbest from "../components/hotbest"

class canList extends React.Component{
    constructor(props){
        super(props)
       this.state={
        index:1,
        communityC:[],
         
       }
    } 
    changeIndex(index){
     
      this.setState({
          index
      })
  }
  
    render(){
      // const communityId = this.props.communityId
      // console.log(6666,communityId)
        const community = this.state.communityC;
        
      return(
       <div className="newswrap">
           <div>
             <div className="canListnav">
               <span className="goahead">
               <img onClick={this.props.hanndler} alt="" title="" src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&amp;imageView2/1/w/48/h/48" className="canListimg" />
               </span>
               <ul className="breakfast" >{this.props.cancanList}</ul>
             </div>  
             <div className="breakfoot"></div>
           </div>
           {/* <CantotoList  community={this.props.community}></CantotoList> */}
           <div>
                <MyBtn index={this.state.index}  changeIndex={this.changeIndex.bind(this)}></MyBtn>
                <MyDiv index={this.state.index} communityId={this.props.communityId}></MyDiv>

            </div>
           
       </div>

      )
    
    }
 
}
function MyDiv(props) {
 
    
  return (
      <div className="one">
          <div style={{display:props.index===0?"block":"none"}}><Hotbest communityId={props.communityId}></Hotbest></div>
          <div style={{display:props.index===1?"block":"none"}}><Newbest communityId={props.communityId}></Newbest></div>
       
      </div>
       
  )
}
function MyBtn(props) {
  return (
         <div className="totolistwrap" >
             <div className="totolistcontent">

         <div id="totolistc" onClick={()=>props.changeIndex(0)  } className={props.index===0?"alltext active":"alltext"}><span>最热</span></div>
          <div id="totolistc" onClick={()=>props.changeIndex(1)  } className={props.index===1?"alltext active":"alltext"}><span>最新</span> </div>

             
         
         </div>
         <div className="totolistcfoot">

         </div>
      </div>
         
  )
}
export default canList