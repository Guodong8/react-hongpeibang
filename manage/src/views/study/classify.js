import React from "react"
import "../../asset/css/classify.css"
import axios from "axios"
import {
  Link
} from 'react-router-dom'
export default class Classify extends React.Component{
  constructor(){
    super()
    this.state={
      fyallcontent:[],
      fyleftList:[],
      fyrightL:[]
    }
  }
  render(){
    const fyleftList= this.state.fyleftList
    const fyallcontent= this.state.fyallcontent
    return(
      <div>
        <div className="fybody">
           <div className="fywrap">
              <div className="fycontent">
                 <div>
                    <div className="fyhead">
                      <span className="syiconfont">
                      <img alt="" title="" src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&amp;imageView2/1/w/48/h/48" className="syimg" />
                      </span>
                      <div className="fyheadwrap">
                         <div className="fyheadcontent">
                         <span className="fysearch">搜索食谱/食材，烘焙/家常菜一应俱全</span>
                         <input className="fyinput"></input>
                         </div>
                      </div>
                    </div>
                    <div className="fyfooter">
                     </div>
                 </div>
                 <div className="fymain">
                  
                  <div className="fyleft">
                    <div className="leftwrap">
                      <div className="fylistwrap">
                        <div className="fylist">
                          {
                            fyleftList.map((item)=>(

                            
                         
                          <div className="listcontent" key={item.classifyId}>
                          {item.name} 
                          </div>
                            ))
                          }
                        </div> 
                        
                      </div>
                    </div>
                  </div>
                  <div className="fyright">
                  
                       {
                     fyallcontent.map((item)=>(

                     
                   <div className="fyrightcontent" key={item.parentClassifyId}>
                  
                    <div className="fyrighttitlewrap"> 
                 
                      <div className="fyrighttitle">
                        {item.name}
                      </div>
                    </div>
                    <div className="fyrightlist">
                      {}
                       
                     <Link className="fyalllist alllist2">
                       <div className="fylist2">
                       <img alt="" title="" src="https://image.hongbeibang.com/FpXjchxkNdw7_5P9yOA1O8NHGZQW?400X400&amp;imageView2/1/w/400/h/400" className="fylistimg" />
                       </div>
                     </Link> 
                
                    </div>

                   </div>
                    ))

} 
                   <div className="fyrightfooter">

                   </div>
                  
                 
                    
                  </div>
                 
                 </div>
              </div>
           </div>
        </div>
      </div>
    )
  }
  async componentDidMount(){
   
    const data = await axios.get(`/hpb/classify/get?`);
    const data2 = await axios.get(`/hpb/classify/getRecommend?`)
     console.log(1111,data2)
  
    this.setState({
      fyallcontent:data2.data.data,
        fyleftList:data.data.data.classify,
      
    })
    console.log(7999,this.state.fyallcontent)

}
}