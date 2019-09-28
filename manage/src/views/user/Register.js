import React from "react"
import "../../asset/css/register.css"
import {  
    NavLink,
  } from "react-router-dom"
class Register extends React.Component{
    constructor(){
        super()
        this.state = {
            adminName: '', //账号
            passWord: '', // 密码           
        }     
    }   
    goback(){
        this.props.history.go(-1)
    }
//    async submit(){
//         const adminName = this.state.adminName
//         const passWord = this.state.passWord
    
     
//     }
    usernameChange(e){
        this.setState({
            adminName:e.target.value
        })      
    }
    passwordChange(e){
        this.setState({
            passWord:e.target.value
        })
    }
    render(){
       
        return(
            <div className="register">
                <div className="register-header">
                    <span onClick={this.goback.bind(this)}>取消</span>
                    <b>手机验证</b>
                    <span></span>
                </div>
                <div className="register-caution">
                    <p>请确保你的手机通畅，能接受验证码</p>
                </div>
                <div>
                    <div className="adminName">
                       
                        <span>+86</span>
                        <input type ="text" placeholder="请输入手机号" onChange={this.usernameChange.bind(this)}></input>
                    </div>
                    <div className="passWord">
                        
                        
                        <input type ="password" placeholder="请输入密码" onChange={this.passwordChange.bind(this)}></input>
                    </div>
                    <div className="forgetPassword">忘记密码?</div>
                    <div className="register-btn">
                        <NavLink to={{pathname:"/loginPhone",query:{adminName : this.state.adminName,passWord : this.state.passWord}}}><button >注册</button></NavLink>
                       
                    
                    </div>
                </div>
               
            </div>
        )
    }
}
export default Register