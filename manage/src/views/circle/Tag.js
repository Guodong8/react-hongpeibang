import React from "react"
import "../../asset/css/news.css"
import Daren from "../../components/daren"
import Follow from "../../components/follow"
import  News from "../../components/news"

export default class  Tag extends React.Component {
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
            <div style={{display:props.index===0?"block":"none"}}><Follow></Follow></div>
            <div style={{display:props.index===1?"block":"none"}}><News></News></div>
            <div style={{display:props.index===2?"block":"none"}}><Daren></Daren></div>
          
        </div>
    )
}
function MyBtn(props) {
    return (
           <div className="navigation" style={{padding: '0 18px'}}>
               <span className="iconfont" style={{ float: 'left' }}>
                    <img alt="" title="" src={require('../../asset/img/add.jpg')} className="iiconfont" /></span>
                <span className="iconfont" style={{ float: 'right' }}>
                    <img alt="" title="" src={require('../../asset/img/remind.jpg')} className="iiconfont" /></span>
           <div className="toptext">

           <div  onClick={()=>props.changeIndex(0)  } className={props.index===0?"alltext active":"alltext"}><span>关注</span></div>
            <div onClick={()=>props.changeIndex(1)  } className={props.index===1?"alltext active":"alltext"}><span>最新</span><div class="underline"></div> </div>
            <div onClick={()=>props.changeIndex(2)  } className={props.index===2?"alltext active":"alltext"}><span>达人</span> </div>
               
           
            </div>
            </div>
    )
}
// ReactDOM.render((
//     <div>
//         <Tag index={0}></Tag>
//     </div>
// ),document.querySelector("#myApp"));
