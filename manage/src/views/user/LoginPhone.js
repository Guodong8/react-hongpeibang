import React from "react"
import "../../asset/css/loginPhone.css"
class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            username: '', //账号
            passWord: '', // 密码
           
        }
        
    }   
    goback(){
        this.props.history.go(-1)
    }
    submit(){

        // this.props.history.push("/user")
    }
    handleChange(key,val){
        this.setState({
            [key]:val
        })
        console.log(this.state.username)
    }
    render(){
        return(
            <div className="loginPhone">
                <div className="loginPhone-header">
                    <span onClick={this.goback.bind(this)}>取消</span>
                    <b>登录</b>
                    <span></span>
                </div>
                <div>
                    <div className="adminName">
                        <img src="https://image.hongbeibang.com/Fuxcd1wWFCY-HNifMfUbrcVBqxlc?50X50&imageView2/1/w/50/h/50"></img>
                        <span>+86</span>
                        <input type ="text" placeholder="输入手机账号" onChange={value => this.handleChange('username', value)}></input>
                    </div>
                    <div className="passWord">
                        <img src="https://image.hongbeibang.com/FhVd-FHn1W_yhi5vMjtsAQGSicId?50X50&imageView2/1/w/50/h/50"></img>
                        
                        <input type ="password" placeholder="输入密码" onChange={value => this.handleChange('passWord', value)}></input>
                    </div>
                    <div className="forgetPassword">忘记密码?</div>
                    <div className="loginPhone-btn">
                        <button onClick={this.submit.bind(this)}>登录</button>
                        <p>第三方账号登录</p>
                        <div>
                            <img src="https://image.hongbeibang.com/FmQ44nNcTSqmWx3s9wT0hUUBMPb1?200X200&imageView2/1/w/140/h/140"></img>
                            <img src="https://image.hongbeibang.com/Fq_j5DBvHFjeXIgXq-fFFDtiIvq5?200X200&imageView2/1/w/140/h/140"></img>                           
                        </div>
                        <p>快速注册</p>
                    </div>
                </div>
               
            </div>
        )
    }
}
export default Login