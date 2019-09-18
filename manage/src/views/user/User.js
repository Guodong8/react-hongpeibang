import React from "react"
import "../../asset/css/user.css"

class User extends React.Component{
    constructor(){
        super()
    }
    goAccount(){
        this.props.history.push("/account")
    }
    render(){
        return(
            <div className="user">
                <div className= "user-header">
                    <img src="https://image.hongbeibang.com/FthUBRvh6uWFq7omAeGtn8A-0E4s?48X48&imageView2/1/w/48/h/48" onClick={this.goAccount.bind(this)}></img>
                </div>
                <div className="user-message">
                    <div className="user-head">
                        <div className="user-photo">
                            <img src="https://image.hongbeibang.com/Fpt1Y3O6ZhMtxqwfNHLnICAmiOQG?132X132&imageView2/1/w/132/h/132"></img>
                        </div>
                        <div className="user-message-1">
                            <span>佛系青年</span>
                            <img src="https://image.hongbeibang.com/Fkwt9tYiYAFxX-lC-WHvmbPSOUwv?94X94&imageView2/1/w/30/h/30"></img>
                            <img src="https://image.hongbeibang.com/FmFlZjZn6BHHnqrYVMz6MGecwc0J?200X200&imageView2/1/w/50/h/50"></img>
                            <p>ID:</p>
                            <p>经验值:0/100</p>
                        </div>
                    </div>
                    <div className="user-attention">
                        <div className = "user-attention1">
                             <span>0</span>  
                             <p>关注</p> 
                        </div>
                        <div className = "user-bean">
                             <span>0</span>  
                             <p>粉丝</p> 
                        </div>
                        <div className = "user-gong">
                             <span>0</span>  
                             <p>帮贡</p> 
                        </div>
                    </div>
                </div>
                <div className="user-li">
                    <ul>
                        <li>
                            <img src="https://image.hongbeibang.com/FgyV7GBC4RPoagtZnK-npLaoB1N6?160X160&imageView2/1/w/80/h/80"></img>
                            <p>作品</p>
                        </li>
                        <li>
                            <img src="https://image.hongbeibang.com/FhxeeHCgOPEcoLPR3sP6XNbybdvK?160X160&imageView2/1/w/80/h/80"></img>
                            <p>食品</p>
                        </li>
                        <li>
                            <img src="https://image.hongbeibang.com/FkmRCthKDaI5Afc_NdkTZaqNLPE1?160X160&imageView2/1/w/80/h/80"></img>
                            <p>收藏</p>
                        </li>
                        <li>
                            <img src="https://image.hongbeibang.com/FgKxvkwdg8OOr9mhPok2JBVnCG2n?160X160&imageView2/1/w/80/h/80"></img>
                            <p>问题</p>
                        </li>
                        
                    </ul>
                </div>
                <div className="user-list">
                    <ul>
                        <li>
                            <img src="https://image.hongbeibang.com/FpFAELJdsHHxStgBnhPdgYgGmAYo?48X48&imageView2/1/w/48/h/48"></img>
                            <span>勋章墙</span>
                            <p>></p>     
                        </li>
                        <li>
                            <img src="https://image.hongbeibang.com/FjqJkpwIsLMWXY0LsNTSRG853oJR?48X48&imageView2/1/w/48/h/48"></img>
                            <span>精彩活动</span>
                            <p>></p>     
                        </li>
                        <li>
                            <img src="https://image.hongbeibang.com/Fu1OwEAsExJ20OHVI2ZqBEtLtubY?48X48&imageView2/1/w/48/h/48"></img>
                            <span>每日签到</span>
                            <p>></p>     
                        </li>
                        <li>
                            <img src="https://image.hongbeibang.com/FnuWoFzlqjbUFcZHkVG64M-cKA_N?48X48&imageView2/1/w/48/h/48"></img>
                            <span>我的课程</span>
                            <p>></p>     
                        </li>
                    </ul>
                </div>
                <div className="user-list">
                    <ul>
                        <li>
                            <img src="https://image.hongbeibang.com/FloihK3c4UsgFSSuiI6ZNNFiYWHN?48X48&imageView2/1/w/48/h/48"></img>
                            <span>浏览记录</span>
                            <p>></p>     
                        </li>
                        <li>
                            <img src="https://image.hongbeibang.com/FrIG0d-LU4bOADQE1euyCOGWO7Ep?48X48&imageView2/1/w/48/h/48"></img>
                            <span>达人申请</span>
                            <p>></p>     
                        </li>
                        <li>
                            <img src="https://image.hongbeibang.com/Fn2YVwr3Ng_AQlJvQCWtBoRBDyjR?48X48&imageView2/1/w/48/h/48"></img>
                            <span>精贡兑换</span>
                            <p>></p>     
                        </li>
                        <li>
                        </li>
                       
                    </ul>
                </div>
               
            </div>
        )
    }
    componentWillMount(){
        
        // if(!localStorage.userName){
        //     this.props.history.push("/login")
        // }
    }
}
export default User