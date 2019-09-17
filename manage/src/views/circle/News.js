import React from "react"
import "../../asset/css/news.css"

class News extends React.Component{
    
   
    render(){
        return(
          
             <div className="wrap">
     
           
            <div className="navigation">
                <span className="iconfont" style={{float:'left'}}>
                    <img alt="" title="" src={require('../../asset/img/add.jpg')}className="iiconfont"/></span>
                <span className="iconfont" style={{float:'right'}}>
                    <img alt="" title="" src={require('../../asset/img/remind.jpg')}className="iiconfont"/></span>
                <div className="toptext">
                    <div className="alltext"><span>关注</span></div>
                    <div className="alltext active"><span>最新</span>
                        <div className="underline"></div>
                    </div>
                    <div className="alltext"><span>达人</span></div>
                </div>
            </div>
            
            
            <div className="main" style={{top:'2.75rem',bottom:'3.125rem'}}>
               
                <div className="lunbowrap">
                    <div className="lunbo" style={{width:'30.5625rem'}}>
                        <div className="lunbotu" style={{padding: '0rem  0rem 0rem 0.9375rem'}}>
                            <img alt="" title="" src={require('../../asset/img/lunbotu1.jpg')} className="worksiconfont"
                                style={{background: 'none',width: '9.375rem', height: '5.3438rem'}}></img></div>
                        <div className="lunbotu">
                            <img alt="" title="" src={require('../../asset/img/lunbotu2.jpg')} className="worksiconfont"
                                style={{background: 'none', width: '9.375rem', height: '5.3438rem'}}/></div>
                        <div className="lunbotu">
                            <img alt="" title="" src={require('../../asset/img/lunbotu3.jpg')} className="worksiconfont"
                                style={{background: 'none', width: '9.375rem' ,height: '5.3438rem'}}/></div>
                    </div>
                </div>

                {/* <!--餐品类--> */}
                <div className="canpinwrap">
                    <div className="canpin">
                        <div className="canpinList" style={{width:'77.8125rem'}}>
                            <div className="canlist" style={{backgroundColor:'#94BFBB'}}>#早餐#</div>
                            <div className="canlist" style={{backgroundColor:'#927472'}}>#午餐#</div>
                            <div className="canlist" style={{backgroundColor:'#E5AA9C'}}>#晚餐#</div>
                            <div className="canlist" style={{backgroundColor:'#5BADA6'}}>#下午茶#</div>
                            <div className="canlist" style={{backgroundColor:'#b78b9f'}}>#夜宵#</div>
                            <div className="canlist" style={{backgroundColor:'#acbcc9'}}>#ACA交作业#</div>
                            <div className="canlist" style={{backgroundColor:'#8f7671'}}>#外面吃去#</div>
                            <div className="canlist" style={{backgroundColor:'#acb99b'}}>#外貌协会#</div>
                            <div className="canlist" style={{backgroundColor:'#aca6bb'}}>#做失败了#</div>
                            <div className="canlist" style={{backgroundColor:'#c3d0ad'}}>#东菱吃好早餐#</div>
                        </div>
                    </div>
                </div>
                {/* <!--内容--> */}
                <div className="admincontentwrap">
                    <div style={{marginbottom:'0.625rem'}}>
                        <div className="admincontent">
                            <div className="admininformation">
                                <div className="adminhead">
                                    <div className="adminheadimg"><img alt="" title=""
                                            src={require('../../asset/img/headimg.jpg')}
                                            className="adminheadsmallimg" style={{background: 'none', width: '2.375rem', height: '2.375rem'}}/>
                                    </div>
                                </div>
                                <div className="adminnamewrap">
                                    <div className="adminname">馬馬👑
                                    </div>
                                </div>
                                <div className="admindescribe"><span>11分钟前</span><span className="adminworks">南瓜蒸蛋糕</span></div>
                            </div>
                            <div className="conversation"><span className="conversationtext">#下午茶#</span><span></span></div>
                            <div style={{marginbottom:'0.6875rem'}}>
                                <div className="workscontentwrap">
                                    <div className="workscontent" style={{width:'100%',height:'18.75rem'}}><img alt="" title=""
                                            src={require('../../asset/img/works.jpg')}
                                            className="worksimg" style={{background: 'none', width: '13.6875rem', height: '18.25rem'}}/>
                                    </div><a className="worksshade2 worksshade" href="/dish/14728398"></a>
                                </div>
                            </div>
                            <div style={{marginbottom:'0.9375rem',padding:'0 0.9375rem'}}>
                                <div className="worksintroduce">
                                    <img alt="" title=""
                                        src={require('../../asset/img/smallworks.jpg')}
                                        className="workssmallimg" style={{background: 'none', width:' 4.375rem', height: '4.375rem'}}/>
                                    <div className="worksright">
                                        <div className="worksname">南瓜蒸蛋糕</div>
                                        <div className="worksworker">作者：高高的美食天地</div>
                                    </div>
                                </div>
                            </div>
                            <div className="worksread">21次浏览</div>
                            <div className="worksfooter">
                                <div className="worksactions">
                                    <div className="worksup"><img alt="" title=""
                                            src={require('../../asset/img/up.jpg')}
                                            className="worksiconfont"/></div>
                                    <div className="worksnum">52
                                    </div>
                                </div>
                                <div className="worksactions">
                                    <div className="worksup"><img alt="" title=""
                                            src={require('../../asset/img/Reward.jpg')}
                                            className="worksiconfont"/></div>
                                    <div className="worksnum">打赏
                                    </div>
                                </div>
                                <div className="worksactions">
                                    <div className="worksup"><img alt="" title=""
                                            src={require('../../asset/img/talk.jpg')}
                                            className="worksiconfont"/></div>
                                    <div className="worksnum">评论
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                        
                        
                       
                   
                 
                
             
                
            

        
       

        )
            
        }
    }


export default News
  