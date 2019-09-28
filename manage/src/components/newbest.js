import React from "react"
import axios from "axios"
import Adminzj from "./adminzj"

class Newbest extends React.Component{
    constructor(props){
        super(props)
        this.state={
            canList:[]
        }
    } 
    render(){
     
        return(
        <Adminzj canList={this.state.canList}></Adminzj>
        )
    }
    async componentDidMount(){
        const communityId = this.props.communityId
        const data2 = await axios.get(`/hpb/v2/feed/getNewByCommunity?pageIndex=0&pageSize=10&communityId=${communityId}`);
       
        this.setState({
            canList:data2.data.data.content
        })
        
      

    }
}
export default Newbest
