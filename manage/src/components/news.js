import React from "react"
import axios from "axios"
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
       
        const content = this.state.content;
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
                            <div className="canlist" key={item.communityId} >
                            {item.name}
                            </div>
                            

                                 ))
                }
                        </div>
                    </div>
                     
                </div>
                {/* <!--内容--> */}
                
                <div className="admincontentwrap" >
                {
                          content.map((item)=>(
                    <div  style={{ marginbottom: '0.625rem' }} key={item.contentId}>
                        <div className="admincontent">
                            <div className="admininformation">
                                <div className="adminhead">
                                    <div className="adminheadimg"><img alt="" title=""
                                        src={item.clientImage}
                                        className="adminheadsmallimg" style={{ background: 'none', width: '2.375rem', height: '2.375rem' }} />
                                    </div>
                                </div>
                                <div className="adminnamewrap">
                                    <div className="adminname">{item.clientName}
                                    </div>
                                </div>
                                <div className="admindescribe"><span>{item.createTime}</span><span className="adminworks">{item.coverTitle}</span></div>
                            </div>
                            <div className="conversation"><span className="conversationtext">{item.communityName}</span><span></span></div>
                            <div style={{ marginbottom: '0.6875rem' }}>
                                <div className="workscontentwrap">
                                    <div className="workscontent" style={{ width: '100%', height: '18.75rem' }}><img alt="" title=""
                                        src={item.image}
                                        className="worksimg" style={{ background: 'none', width: '13.6875rem', height: '18.25rem' }} />
                                    </div><a className="worksshade2 worksshade" href="/dish/14728398"></a>
                                </div>
                            </div>
                            <div style={{ marginbottom: '0.9375rem', padding: '0 0.9375rem' }}>
                                <div className="worksintroduce">
                                    <img alt="" title=""
                                        src={item.image}
                                        className="workssmallimg" style={{ background: 'none', width: ' 4.375rem', height: '4.375rem' }} />
                                    <div className="worksright">
                                        <div className="worksname">{item.coverTitle}</div>
                                        <div className="worksworker">{item.clientName}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="worksread">{item.visitNum}人浏览</div>
                            <div className="worksfooter">
                                <div className="worksactions">
                                    <div className="worksup"><img alt="" title=""
                                        src={require('../asset/img/up.jpg')}
                                        className="worksiconfont" /></div>
                                    <div className="worksnum">{item.likeNum}
                                    </div>
                                </div>
                                <div className="worksactions">
                                    <div className="worksup"><img alt="" title=""
                                        src={require('../asset/img/Reward.jpg')}
                                        className="worksiconfont" /></div>
                                    <div className="worksnum">{item.rewardNum} 
                                    
                                    </div>
                                </div>
                                <div className="worksactions">
                                    <div className="worksup"><img alt="" title=""
                                        src={require('../asset/img/talk.jpg')}
                                        className="worksiconfont" /></div>
                                    <div className="worksnum">{item.commentNum}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    ))
                }
                </div>
            </div>
        
        
        
        
        </div>

    )
    }
    async componentDidMount(){
        
        const {data} = await axios.get(`/hpb/v2/feed/getNew?pageIndex=0&pageSize=10`);
        // console.log(data);
        this.setState({
            content:data.data.content
        })
        // console.log(this.state.content)
       
        const data2 = await axios.get(`/hpb/community/getByLimit?isShow=4&pageIndex=0&pageSize=10`);
        console.log(data2);
        this.setState({
            canList:data2.data.data.data
        })
        console.log(this.state.canList)

    }

}


export default News
