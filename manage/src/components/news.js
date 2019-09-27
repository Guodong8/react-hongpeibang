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
           content:[],
           canList:[],
           cancategory:[]
       }
    }   
   
    render(){
        const canList= this.state.canList
        const cancategory = this.state.cancategory
    return (


        <div id="newswrap">
           <div className="mainn" style={{ top: '2.75rem', bottom: '3.125rem' }}>
           <div className="lunbowrap">
                 <div className="lunbo" style={{ width: '30.5625rem' }} >
                 {
                                  cancategory.map((itam)=>(
                                  <Link to={"/activity/"+itam.activityContentId} key={itam.activityContentId}>
                                     
                            
                        

                                
                        <div className="lunbotu" style={{ padding: '0rem  0rem 0rem 0.9375rem' }}  key={itam.activityContentId}>
                            <img alt="" title="" src={itam.image} className="worksiconfont"
                                style={{ background: 'none', width: '9.375rem', height: '5.3438rem' }}></img>
                                </div>
                       </Link>
                                ))
                            }  
                    </div>
                </div> 

                {/* <!--餐品类--> */}
                <div className="canpinwrap">
               
                  
                        
                    <div className="canpin" > 
                     
                        <div className="canpinList" style={{ width: '77.8125rem' }}>
                             
                             {
                                  canList.map((item)=>(
                                  <Link to={"/bakingCircle/"+item.communityId} key={item.communityId}>
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

                <Adminzj  canList={this.state.content}></Adminzj>

            </div>
        </div>

    )
    }
    async componentDidMount(){
        const data2 = await axios.get(`/hpb/community/getByLimit?isShow=4&pageIndex=0&pageSize=10`);
        console.log(data2); 
        const {data} = await axios.get(`/hpb/v2/feed/getNew?pageIndex=0&pageSize=10`);
        const data3 = await axios.get(`/hpb/feed/getCategory?`);
        console.log(123,data3)
        this.setState({
            canList:data2.data.data.data,
            content:data.data.content,
            cancategory:data3.data.data.category[0].item
        })
        console.log(7999,this.state.cancategory)

    }
    // async componentDidMount(){
        
    //     const {data} = await axios.get(`/hpb/v2/feed/getNew?pageIndex=0&pageSize=10`);
    //     // console.log(data);
    //     this.setState({
    //         content:data.data.content
    //     })
    //     // console.log(this.state.content)
       
       
    
    // }
   

}

export default News
