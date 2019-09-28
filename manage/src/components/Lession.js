import React from "react"
import axios from "axios"
class Lession extends React.Component{
    constructor(){
        super()
        this.state={
            content:[]
        }
    }
    render(){
       const content=this.state.content
        return(
            <div>
{
   
        content.map((item)=>(
            <div  dangerouslySetInnerHTML = {{ __html:item.introduce }}>
     
        </div>
        ))
    
}

            </div>
            
             
        )
    }
    
    async componentDidMount(){
        const courseId = this.props.match.params.contentId
        const {data}=await axios.get(`/hpb/education/getCourse?educationCourseId=${courseId}`);
     
    
       console.log(6666,data);
        
        this.setState({
            content:data.data.introduces,
      
            
        })  
          console.log(789789,this.state.content)
        
                                                                                                                                                                                                                                                                                                                                      
       
    }
}
export default Lession