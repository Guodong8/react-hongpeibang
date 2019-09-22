import React from "react"
import axios from "axios"
import Adminzj from "./adminzj"

class Hotbest extends React.Component{
    constructor(props){
        super(props)
        this.state={
         canList:[]
        }
    } 
    render(){
        
        console.log(888,this.props.communityId)    
        return(
        <Adminzj canList={this.state.canList}></Adminzj>
        )
    }
    async componentDidMount(){
        const communityId = this.props.communityId
        const data2 = await axios.get(`/hpb/v2/feed/getNewByCommunity?&pageIndex=0&pageSize=30&communityId=${communityId}`);
        console.log(66666111,data2);
        this.setState({
            canList:(data2.data.data.content).sort(data2.data.data.content.communityHotNum)
        })
        console.log(101010,this.state.canList)

    }
}
export default Hotbest
