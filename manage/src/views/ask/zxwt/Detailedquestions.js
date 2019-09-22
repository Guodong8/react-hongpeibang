import React from "react";
import axios from "axios";
import "../../../asset/css/Detailedquestions.css";

export default class Detailedquestions extends React.Component {
  constructor() {
    super();
    this.state = {
      Detailedxx: [],
      Detailedvip:{},
      Detailedtitle:[],
    };
  }
  render() {
    const  {Detailedxx}=this.state;
    const  {Detailedvip} = this.state;
    const  {Detailedtitle}=this.state;
    return (
      <div className="Detailedwrap">
        <div className="DetailedTop">
          <span onClick={() => {this.props.history.go(-1);}}>
            <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" />
          </span>
          <div className="scsize">
            <p>收藏</p>
          </div>
        </div>
                    {/*以下是商品问题内容  */}

              <div className="DetailedTitle">
                 <p>{Detailedtitle.title}</p>
              </div>
              <div style={{background:"#fff"}}>
              <div className="xiangxi">
                <img src={Detailedvip.image}></img>
                <div className="goodsname">
                    <h4>{Detailedvip.title}</h4>
                <p>作者:{Detailedtitle.clientName}</p>
              </div>
            </div>
            <div></div>
              </div>
            <div style={{background:"#F5f7f9"}} >
            <div className="respond">{Detailedvip.state}回答</div>
            </div>
           


            {/* 以下是回答 */}
            {
              Detailedxx.map(v=>(
                <div key={v.clientId}>
                <div className="respondlist">
                    <div className="headPortrait ">
                      <img src={v.clientImage}></img>
                    </div>
                    <div className="vipwrap">
                      <div className="vipidentity">
                        <img src="https://image.hongbeibang.com/Fj1UT_HuSX4MkdcukYhWRpioEyWx?200X200&imageView2/1/w/80/h/80"></img>
                      </div>
                      <div className="vipName">{v.clientName}</div>
                      <div className="respondItem">
                      {
                         v.modifyTime
                        
                      }小时前
                      </div>
                    </div>
                    
                    <div className="commentcontent">
                   {v.description}
                    </div>
                    <div className="zanwrap">
                      <img src="https://image.hongbeibang.com/Fqv9VBHXG627znbKlZYnHQMTHVdc?200X200&imageView2/1/w/38/h/38"></img>
                      <div className="zan">点赞</div>
    
                    </div>
                    <div className='comment'>
                      <img src="https://image.hongbeibang.com/FiZ5-B7_rmV_gnPl97P-FkpjSlij?200X200&imageView2/1/w/38/h/38"></img>
                      <div className="commentfont">评论</div>
                    </div>
                </div>
                
    
                </div>

              ))

            }
           
            
 
      </div>
    );
  }

  async componentDidMount() {
    const contentId = this.props.match.params.id;
    const clientId = this.props.match.params.a;
    console.log(contentId,clientId)

    const { data } = await axios.get(`/hpb/question/getQuestion?_t=1568950657650&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1NzkzNTMzOCwiaWF0IjoxNTY4NTQ2NTM4fQ.bvDr9GLJ1HfbxJSyYBXAvHgc2q-rPDEMuHZ_FgwYbqo&contentId=${contentId}`
);
const dataA=await axios.get(`/hpb/question/getAnswers?_t=1568980864957&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1NzkzNTMzOCwiaWF0IjoxNTY4NTQ2NTM4fQ.bvDr9GLJ1HfbxJSyYBXAvHgc2q-rPDEMuHZ_FgwYbqo&pageIndex=0&pageSize=10&contentId=${contentId}&clientId=${clientId}`)
    // console.log(data);
    this.setState({
      Detailedvip: data.data.content.recipe,
      Detailedtitle:data.data.content,
      Detailedxx:dataA.data.data.content.answer.data

    });
    // console.log(this.state.Detailedvip);
    // console.log(this.state.Detailedxx)
    console.log(dataA)

  }

  
}
