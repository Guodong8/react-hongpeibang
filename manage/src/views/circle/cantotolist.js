import React from "react"
import "../../asset/css/totolist.css"
import Newbest from "../../components/newbest"
import Hotbest from "../../components/hotbest"



 class  CantotoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            index:1//this.props.index
        }
    }
    changeIndex(index){
        console.log(11111);
        this.setState({
            index
        })
    }
    render(){
        return (
            <div>
                <MyBtn index={this.state.index} changeIndex={this.changeIndex.bind(this)}></MyBtn>
                <MyDiv index={this.state.index}></MyDiv>

            </div>
        )
    }
}
function MyDiv(props) {

    return (
        <div className="one">
            <div style={{display:props.index===0?"block":"none"}}><Hotbest></Hotbest></div>
            <div style={{display:props.index===1?"block":"none"}}><Newbest></Newbest></div>
         
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
 export default CantotoList
// // ReactDOM.render((
// //     <div>
// //         <Tag index={0}></Tag>
// //     </div>
// // ),document.querySelector("#myApp"));
