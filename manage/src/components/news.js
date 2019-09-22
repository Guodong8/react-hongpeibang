import React from "react"
import axios from "axios"
import Adminzj from "./adminzj"
import Rotation from "./Rotation"
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
           canList:[]
       }
    }   
   
    render(){
        const canList= this.state.canList
    return (


        <div id="newswrap">
           <div className="mainn" style={{ top: '2.75rem', bottom: '3.125rem' }}>
           <Rotation></Rotation>

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
        this.setState({
            canList:data2.data.data.data,
            content:data.data.content
        })
        console.log(this.state.canList)

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
