import React from "react"
import "../asset/css/Baking1.css"
import axios from "axios"
import CanList from "./canList"
class Baking extends React.Component{
    constructor(){
        super()
        this.state={
          community:[]
        }
    }   
    goahead(){
        this.props.history.go(-1)
        console.log("llll")
       }
    render(){
        
        return(
            <CanList communityId={this.props.match.params.communityId} hanndler={this.goahead.bind(this)}></CanList>

           

        )
    }
    async componentDidMount(){
    
        const communityId = this.props.match.params.communityId
        const community = await  this.$axios.get(`/hpb/v2/feed/getNewByCommunity?pageIndex=0&pageSize=30&communityId=${communityId}`);
        console.log(community)
        this.setState({
            community:community.data.data.community
        })
        
   
    }
}
export default Baking