import React from "react"
import "../../asset/css/login.css"
class Login extends React.Component{
    constructor(){
        super()
        
    }   
    goLoginPhone(){
        this.props.history.push("/loginPhone")
    }
    render(){
        return(
            <div className="login">
                <div className="login-header">
                    <span className="iconfont icon-icon_left"></span>
                    <b>登录</b>
                    <span></span>
                </div>
                <div className="nav">
                    <img src="https://image.hongbeibang.com/FoBGm71FF5SYiTw0Wc0xkeiL3eQz?imageMogr2/strip/thumbnail/510x510"></img>
                    <button>使用微信登录</button>
                    <p onClick={this.goLoginPhone.bind(this)}>其他方式登录</p>
                    <p className="nav-clause"><span>登录即代表阅读即同意</span><span>服务条款</span></p>
                </div>
            </div>
        )
    }
}
export default Login