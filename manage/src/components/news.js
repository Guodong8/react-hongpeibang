import React from "react"
import axios from "axios"
import Adminzj from "./adminzj"
import {
    Link
} from 'react-router-dom'
import BScroll from "better-scroll"
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
           cancategory:[],
           changetitle:{}
       }
    }   
    changecan(e){
  console.log(9191,e)
        this.setState({
            changetitle:1
          
        })
        console.log(6663131,this.state.changetitle)
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
                                      <div className="canlist" key={item.communityId} onClick={this.changecan.bind(this,item.name)} >
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
       
        const {data} = await axios.get(`/hpb/v2/feed/getNew?pageIndex=0&pageSize=10`);
        const data3 = await axios.get(`/hpb/feed/getCategory?`);
      
        this.setState({
            canList:data2.data.data.data,
            content:data.data.content,
            cancategory:data3.data.data.category[0].item
        })
        // let onScroll = new BScroll(".ra_ui-tab-content", {
        //     click:true,
        //     tap:true,
        //     probeType: 2,
        //     pullDownRefresh: {
        //         threshold: 50,
        //         stop: 20
        //     },
        //     //下拉刷新：可以配置顶部下拉的距离（threshold） 来决定刷新时机以及回弹停留的距离（stop）
        //     //这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载
        //     pullUpLoad: {
        //         threshold: 10
        //     },
        //     mouseWheel: {    // pc端同样能滑动
        //         speed: 20,
        //         invert: false
        //     },
        //     useTransition:false  // 防止iphone微信滑动卡顿
        // });
        // BScroll.prototype.me=this;
        // onScroll.on("pullingDown",function(){
        //     console.log("pullingDown");
        //     this.me.props.getTrend.bind(this.me,1)();
        //     onScroll.finishPullDown();//可以多次执行上拉刷新
        // });
        // onScroll.on("pullingUp",function(){
        //     //alert('已到最底部');
        //     pageSize++;
        //     // console.log(page);
        //     // console.log('加载ajax数据');
        //     // console.log(this.me);
        //     this.me.setState({
        //         pageSize
        //     });
        //     this.me.props.getTrend.bind(this.me,pageSize)();
        //     onScroll.finishPullUp();//可以多次执行上拉刷新
        // });
        // onScroll.refresh()

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
