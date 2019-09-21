import React from "react"
import axios from "axios"
// import Stcontent from "../components/stcontent"
import "../../src/asset/css/baking.css"
import "../asset/iconfont/iconfont.css"
import Stcontent from "../components/stcontent"

class Study extends React.Component{
    constructor(){
        super()
        this.state={
         
        }
    }
  render(){
  
      return(
        

        <div className="whole">
        <header>
            <span className="iconfont icon-chushimao left">

            </span>
            <div className="headwrap">
                <div className="head"><span className="search3">
                        <img alt="" title="" src="https://image.hongbeibang.com/FltPAS-35CZfvSpnHacXWoqcfFz5?42X42&amp;imageView2/1/w/42/h/42"
                         className="searchimg"/>
                        </span><span className="searchtext">搜索食谱/食材，烘焙/家常菜一应俱全</span>
                    <input className="searchwenzi"/></div>
            </div>

            <span className="iconfont icon-lingdang right">

            </span>
        </header>

        <div className="nav">
       
             
        <div >
             
         
            
       
            
       <ul >
       <li >
           <i className=""></i>
           <img src="https://image.hongbeibang.com/Fp0nBR7-xD2caoLENB7qZgmu9vZT?80X80&imageView2/1/w/80/h/80"App-link></img>
           <span>技巧百科</span>
           </li>
           
           <li >
           <i className="">
           <img src="https://image.hongbeibang.com/Fl493FjRZluXqCNJnvhRYw_IGKZO?80X80&imageView2/1/w/80/h/80"></img>
           </i>
           
           <span>视频学堂</span>
           </li>
           <li>
           <i className=""> <img src="https://image.hongbeibang.com/FkU-5lDUu7y7CurjkdJYWh-ZIg3x?80X80&imageView2/1/w/80/h/80"></img></i>
           
           <span>新手课程</span>
           </li>
           <li>
           <i className=""><img src="https://image.hongbeibang.com/FkcHmIr5rX7zXeHET_Rew64lVrgx?80X80&imageView2/1/w/80/h/80"></img></i>
           
           <span>食品分类</span>
           </li>
       </ul>
     
           
      
    
    </div>
          
  
        </div>
        
        
     <Stcontent></Stcontent>
      
        
    </div>
    
    
      
    
      )
  }
  async componentDidMount(){
        
    const {data} = await axios.get(`/hpb/index/get?`);
    console.log(data);
    this.setState({
        category:data.data.category[0].item
    })
    console.log(this.state.category)
}



}
export default Study