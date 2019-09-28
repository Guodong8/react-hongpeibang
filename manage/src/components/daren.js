import React from "react"

import axios from "axios"
import Zmage from 'react-zmage'
class Daren extends React.Component{
    constructor(){
        super()
        this.state={
            content:[]
        }

    }
    render(){
        const content = this.state.content
        return(
 
          
            <div className="mainn" style={{top:'2.75rem',bottom:'3.125rem '}}>
                   <div className="admincontentwrap" >
                   {
                       content.map((item)=>(
                        <div style={{marginbottom:'0.625rem'}} key={item.contentId}>
                        <div className="admincontent">
                            <div className="admininformation">
                                <div className="adminhead">
                                    <div className="adminheadimg"><img alt="" title=""
                                            src={item.clientImage}
                                            className="adminheadsmallimg" style={{background: 'none', width: '2.375rem', height: '2.375rem'}}/>
                                    </div>
                                </div>
                                <div className="adminnamewrap">
                                   
                                    <div className="adminname">{item.clientName}
                                    </div>
                                </div>
                                <div className="admindescribe"><span>{item.createTime}</span><span className="adminworks">{item.coverTitle}</span></div>
                            </div>
                            <div className="conversation"><span className="conversationtext">{item.communityName}</span><span></span></div>
                            <div style={{marginbottom:'0.6875rem'}}>
                                <div className="workscontentwrap">
                                    <div className="workscontent" style={{width:'100%',height:'18.75rem'}}><Zmage alt="" title=""
                                            src={item.image}
                                            className="worksimg" style={{background: 'none', width: '13.6875rem', height: '18.25rem'}}/>
                                    </div><a className="worksshade2 worksshade" href="/dish/14728398"></a>
                                </div>
                            </div>
                            <div style={{marginbottom:'0.9375rem',padding:'0 0.9375rem'}}>
                                <div className="worksintroduce">
                                    <img alt="" title=""
                                        src={item.image}
                                        className="workssmallimg" style={{background: 'none',width: '4.375rem', height: '4.375rem'}}/>
                                    <div className="worksright">
                                        <div className="worksname">{item.title}</div>
                                        <div className="worksworker">作者：{item.clientName}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="worksread">{item.visitNum}次浏览</div>
                            <div className="worksfooter">
                                <div className="worksactions">
                                    <div className="worksup"><img alt="" title=""
                                            src={require('../asset/img/up.jpg')}
                                            className="worksiconfont"/></div>
                                    <div className="worksnum">52
                                    </div>
                                </div>
                                <div className="worksactions">
                                    <div className="worksup"><img alt="" title=""
                                            src={require('../asset/img/Reward.jpg')}
                                            className="worksiconfont"/></div>
                                    <div className="worksnum">打赏
                                    </div>
                                </div>
                                <div className="worksactions">
                                    <div className="worksup"><img alt="" title=""
                                            src={require('../asset/img/talk.jpg')}
                                            className="worksiconfont"/></div>
                                    <div className="worksnum">评论
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                       ))
                    }
                          
                       </div>
               </div>
                 
             )
    }async componentDidMount(){
        const {data} = await axios.get('/hpb/v2/feed/getMasterNew?pageIndex=0&pageSize=10');
     
        this.setState({
            content:data.data.content
        })
       



}
// async componentDidMount(){
        
//     const {data} = await axios.get(`/hpb/v2/feed/getNew?pageIndex=0&pageSize=10`);
//     console.log(data);
//     this.setState({
//         content:data.data.content
//     })
//     console.log(this.state.content)
// }
    
}

export default Daren
