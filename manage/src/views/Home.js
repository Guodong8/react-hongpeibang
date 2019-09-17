import React from "react";

import User from "./user/User";
import News from "./circle/News";
import Study from "./Study";
import Questions from "./Questions";
import "../asset/css/footer.css"

import {
    Route,
    NavLink
} from "react-router-dom"


class Home extends React.Component{
    render(){
        return(
            <div className="footer">
                        <Route path={"/"}exact component={Study}></Route>
                        <Route path={"/circle"}  component={News}></Route>
                        <Route path={"/questions"} component={Questions}></Route>
                        <Route path={"/user"} component={User}></Route>
                <nav className="foot">
                     <NavLink to={"/"} exact activeStyle={{color:"green"}}>
                         <img src="https://image.hongbeibang.com/FsxN7RUFRJ9Zdris5Z22haR2xIhj?50X50&imageView2/1/w/50/h/50"></img>
                         <p>学烘焙</p>
                    </NavLink>
                    <NavLink to={"/circle"}  activeStyle={{color:"green"}}>
                    <img src="https://image.hongbeibang.com/Fkpdn7F9EWxvNeSS8M7V4_xbRPlf?50X50&imageView2/1/w/50/h/50"></img>
                    <p>烘焙圈</p>
                        </NavLink>
                    <NavLink to={"/questions"}  activeStyle={{color:"green"}}>
                        <img src="https://image.hongbeibang.com/Flm_lYHJQA56h0VyhdRhQ1i5iO06?50X50&imageView2/1/w/50/h/50"></img>
                        <p>问答</p>
                        </NavLink>
                    <NavLink to={"/user"}  activeStyle={{color:"green"}}>
                         <img src="https://image.hongbeibang.com/FrYeKj0MohOJQuNzUgCugg90cHCS?50X50&imageView2/1/w/50/h/50"></img>
                         <p>小窝</p>
                        </NavLink>
                </nav>              
                
            
            </div>
        )
    }
}
export default Home