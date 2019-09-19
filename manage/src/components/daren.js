import React from "react"

function Daren(props){
    return(
 
          
   <div className="main" style={{top:'2.75rem',bottom:'3.125rem '}}>
          <div className="admincontentwrap">
                  <div style={{marginbottom:'0.625rem'}}>
                      <div className="admincontent">
                          <div className="admininformation">
                              <div className="adminhead">
                                  <div className="adminheadimg"><img alt="" title=""
                                          src={require('../asset/img/headimg.jpg')}
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
                                          src={require('../asset/img/works.jpg')}
                                          className="worksimg" style={{background: 'none', width: '13.6875rem', height: '18.25rem'}}/>
                                  </div><a className="worksshade2 worksshade" href="/dish/14728398"></a>
                              </div>
                          </div>
                          <div style={{marginbottom:'0.9375rem',padding:'0 0.9375rem'}}>
                              <div className="worksintroduce">
                                  <img alt="" title=""
                                      src={require('../asset/img/smallworks.jpg')}
                                      className="workssmallimg" style={{background: 'none',width: '4.375rem', height: '4.375rem'}}/>
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
              </div>
      </div>
        
    )
}
export default Daren
