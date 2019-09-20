import React from "react"
import "../asset/css/Baking1.css"
import axios from "axios"
import CanList from "./canList"
class Baking extends React.Component{
    constructor(){
        super()
        this.state={
            community:[],
            community2:[]
        }
    }   
   
    render(){
        return(
            <CanList community={this.state.community}></CanList>

           

        )
    }
    async componentDidMount(){
    
        const communityId = this.props.match.params.communityId
        const community = await  this.$axios.get(`/hpb/v2/feed/getNewByCommunity?pageIndex=0&pageSize=30&communityId=${communityId}`);
        this.setState({
            community:community.data.data.data
        })
        console.log(communityId)
    }
}
export default Baking