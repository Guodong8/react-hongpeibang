import React from "react"
// import "../asset/css/Activity1.css"
import axios from "axios"
class Activity extends React.Component{
    constructor(){
        super()
        this.state={
            community:[]
        }
    }   
   
    render(){
        const community2 =  this.state.community
        console.log(311,community2)
        return(
            <div>
11
             
              
                     <div>
                         <img src={community2.coverImage} style={{width:'200px',height:'200px'}}></img>
                     </div>
              
         
            </div>
           
           

           

        )
    }
    async componentDidMount(){
    
        const contentId = this.props.match.params.contentId
       
        const community = await  this.$axios.get(`/hpb/activity/getComponent?pageIndex=0&pageSize=10&contentId=${contentId}`);
        console.log(767676,community)
        this.setState({
            community:community.data.data.activity
        })
        console.log(333,this.state.community)
    }
}
export default Activity