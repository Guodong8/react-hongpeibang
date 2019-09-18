import React from "react"
import "../../asset/css/account.css"
class Account extends React.Component{
    constructor(){
        super()  
    }
    goback(){
        this.props.history.go(-1)
    }   
    goLoginPhone(){
        this.props.history.push("/loginPhone")
    }
    loginOut(){
        this.props.history.push("/login")
    }   
    render(){
        return(
            <div className="account">
                <div className="account-header">
                    <span className="iconfont icon-icon_left" onClick={this.goback.bind(this)}></span>
                    <b>设置</b>
                    <span></span>
                </div>
                <div className="account-list">
                    <ul>
                        <li>
                            <span>个人设置</span>
                            <span>></span>
                        </li>
                        <li>
                            <span>账号设置</span>
                            <span>></span>
                        </li>
                    </ul>
                </div>

                <div className="account-list">
                    <ul>
                        <li>
                            <span>意见反馈</span>
                            <span>></span>
                        </li>
                        <li>
                            <span>用户守则</span>
                            <span>></span>
                        </li>
                        <li>
                            <span>关于我们</span>
                            <span>></span>
                        </li>
                        <li>
                            <span>商务合作</span>
                            <span>></span>
                        </li>
                    </ul>
                </div>
                
                <div className="exit-login">
                    <button className="logout" onClick={this.loginOut.bind(this)}>退出登录</button>
                </div>
            </div>
        )
    }
}
export default Account