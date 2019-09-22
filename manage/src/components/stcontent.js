import React from "react"
import axios from "axios"
class Stcontent extends React.Component{
    constructor(){
        super()
        this.state={
            data:[],
            category:[],
            seasonal:[],
            foundation:[],
            breakfast:[],
            technical:[]
        }
       
    }
    render(){
        const data = this.state.data
        const category = this.state.category
        const seasonal = this.state.seasonal
        const foundation = this.state.foundation
        const breakfast = this.state.breakfast
        const technical = this.state.technical



        return(
            <section>
            <div className="recommend">
                <div className="recommend1">推荐课程</div>
            </div>
            <div className="Recommended_courses">
                <div className="Recommended_img">
                {
                    data.map((item)=>(
                        <div className="Content" key={item.courseId}>
                        <img alt="" title="" 
                        src={item.coverImage}
                         className="Contentimg" style={{background: 'none', width:'160px', height: '224px'}}></img>
                        <div className="Contenttext">{item.title}</div>
                    </div>


                     ) )
                   
                }
                </div>
                </div>
                
                    
                    
                 <div className="recommend">
                <div className="recommend1">私房网红</div>
            </div>
            <div className="Recommended_courses">
                <div className="Recommended_img">
                { 
                    category.map((item)=>(
                    <div className="Content" key={item.categoryItemId}>
                    <img alt="" title="" 
                    src={item.image}
                     className="Contentimg" style={{background: 'none', width: '160px', height: '224px'}}/>
                    <div className="Islearning"><span>1000+</span><span>在学</span></div>
                    <div className="Contenttext">{item.shareDescription}</div>
                </div>
                ))
                  }
                   
                   
                   
            
                </div>
            </div>
                           
                 <div className="recommend">
                 <div className="recommend1">应季必做</div>
             </div>
             <div className="Recommended_courses">
                 <div className="Recommended_img">
                 { 
                    seasonal.map((item)=>(
                     <div className="Content" key={item.categoryItemId}>
                     <img alt="" title="" 
                     src={item.image}
                      className="Contentimg" style={{background: 'none', width: '160px', height: '224px'}}/>
                     <div className="Islearning"><span>1000+</span><span>在学</span></div>
                     <div className="Contenttext">{item.shareDescription}</div>
                 </div>
                 ))
                   }
                    
                    
                    
             
                 </div>
             </div>
             <div className="recommend">
             <div className="recommend1">应季必做</div>
         </div>
         <div className="Recommended_courses">
             <div className="Recommended_img">
             { 
                foundation.map((item)=>(
                 <div className="Content" key={item.categoryItemId}>
                 <img alt="" title="" 
                 src={item.image}
                  className="Contentimg" style={{background: 'none', width: '160px', height: '224px'}}/>
                 <div className="Islearning"><span>1000+</span><span>在学</span></div>
                 <div className="Contenttext">{item.shareDescription}</div>
             </div>
             ))
               }
                
                
                
         
             </div>
         </div>
         <div className="recommend">
         <div className="recommend1">元气早餐</div>
     </div>
     <div className="Recommended_courses">
         <div className="Recommended_img">
         { 
            breakfast.map((item)=>(
             <div className="Content" key={item.categoryItemId}>
             <img alt="" title="" 
             src={item.image}
              className="Contentimg" style={{background: 'none', width: '160px', height: '224px'}}/>
             <div className="Islearning"><span>1000+</span><span>在学</span></div>
             <div className="Contenttext">{item.shareDescription}</div>
         </div>
         ))
           }
            
            
            
     
         </div>
     </div>
     <div className="recommend">
     <div className="recommend1">技法专栏</div>
 </div>
 <div className="Recommended_courses">
     <div className="Recommended_img">
     { 
        technical.map((item)=>(
         <div className="Content" key={item.categoryItemId}>
         <img alt="" title="" 
         src={item.image}
          className="Contentimg" style={{background: 'none', width: '160px', height: '224px'}}/>
         <div className="Islearning"><span>1000+</span><span>在学</span></div>
         <div className="Contenttext">{item.shareDescription}</div>
     </div>
     ))
       }
        
        
        
 
     </div>
 </div>

        </section>
        )
    }
    async componentDidMount(){
        const {data}=await axios.get(`/hpb/recommend/getRandContent?type=3&pageSize=10`);
        const data1= await axios.get(`/hpb/education/getIndex?`)
       console.log(data1);
        
        this.setState({
            data:data.data.data,
            category:data1.data.data.category[1].item,
            seasonal :data1.data.data.category[2].item,
            foundation:data1.data.data.category[3].item,
           breakfast:data1.data.data.category[4].item,
           technical:data1.data.data.category[5].item
            
        })  
                                                                                                                                                                                                                                                                                                                                      
       
    }
   

}
export default Stcontent