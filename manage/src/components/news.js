import React from "react"
import axios from "axios"
import Adminzj from "./adminzj"
import {
    Link
} from 'react-router-dom'
const request = require("request")
request("https://api.hongbeibang.com/v2/feed/getNew?pageIndex=0&pageSize=10",function (err,response,body) {
// console.log(response);//response是请求的相关信息 包括body.地址 域名等等 而body是情求回来的接口数据

})
class News extends React.Component {
    constructor(){
        super()
       this.state={
           canList:[]
       }
    }   
   
    render(){
        const canList= this.state.canList
    return (


        <div id="wrap">
           <div className="main" style={{ top: '2.75rem', bottom: '3.125rem' }}>
              <div className="lunbowrap">
                 <div className="lunbo" style={{ width: '30.5625rem' }}>
                        <div className="lunbotu" style={{ padding: '0rem  0rem 0rem 0.9375rem' }}>
                            <img alt="" title="" src={require('../asset/img/lunbotu1.jpg')} className="worksiconfont"
                                style={{ background: 'none', width: '9.375rem', height: '5.3438rem' }}></img></div>
                        <div className="lunbotu">
                            <img alt="" title="" src={require('../asset/img/lunbotu2.jpg')} className="worksiconfont"
                                style={{ background: 'none', width: '9.375rem', height: '5.3438rem' }} /></div>
                        <div className="lunbotu">
                            <img alt="" title="" src={require('../asset/img/lunbotu3.jpg')} className="worksiconfont"
                                style={{ background: 'none', width: '9.375rem', height: '5.3438rem' }} /></div>
                    </div>
                </div>

                {/* <!--餐品类--> */}
                <div className="canpinwrap">
               
                  
                        
                    <div className="canpin" > 
                     
                        <div className="canpinList" style={{ width: '77.8125rem' }}>
                             
                             {
                                  canList.map((item)=>(
                                  <Link to={"/bakingCircle/"+item.communityId}>
                            <div className="canlist" key={item.communityId} >
                            {item.name}
                            </div>
                           
</Link>
                                 ))
                }
                 
                        </div>
                    </div>
                     
                </div>
                {/* <!--内容--> */}

                <Adminzj></Adminzj>

            </div>
        </div>

    )
    }
    async componentDidMount(){
        const data2 = await axios.get(`/hpb/community/getByLimit?isShow=4&pageIndex=0&pageSize=10`);
        console.log(data2);
        this.setState({
            canList:data2.data.data.data
        })
        console.log(this.state.canList)

    }

}

export default News
