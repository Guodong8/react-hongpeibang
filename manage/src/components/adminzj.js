import React from "react"
import axios from "axios"
import Zmage from 'react-zmage'
class Adminzj extends React.Component {
    constructor(){
        super()
       this.state={
           content:[],
         
       }
    }   
    render(){
       
        const content = this.props.canList;
        console.log(999,content.length)
     
    return (
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
            <div className="conversation">
                <span className="conversationtext">{item.communityName}</span>
                <span>{item.introduce}</span></div>
            <div style={{ marginbottom: '0.6875rem' }}>
                <div className="workscontentwrap">

                    
                {
                             item.image.map((itam)=>(

                               
                               
                    <div className="workscontent"  style={{ 
                        
                        width: '100%', height: '18.75rem' }}>
                        
                                  <Zmage alt="" title="" src={itam}   className="worksimg" style={{ background: 'none', width: '13.6875rem', height: '18.25rem' }} />
                           
                       
                       
                    </div>
                   
                     ))
                    }
                    <a className="worksshade2 worksshade" href="/dish/14728398"></a>
                     
                </div>
            </div>
            <div style={{ marginbottom: '0.9375rem', padding: '0 0.9375rem' }}>
                <div className="worksintroduce">
                    <img alt="" title=""
                        src={item.image}
                        className="workssmallimg" style={{ background: 'none', width: ' 4.375rem', height: '4.375rem' }} />
                    <div className="worksright">
                        <div className="worksname">{item.coverTitle}</div>
                        <div className="worksworker">作者：{item.clientName}</div>
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
    )
}

}
export default Adminzj