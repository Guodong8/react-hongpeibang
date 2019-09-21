import React from "react"
import axios from "axios"
import Adminzj from "./adminzj"

class Hotbest extends React.Component{
    constructor(){
        super()
        
    } 
    render(){
        return(
        <Adminzj></Adminzj>
        )
    }
    async componentDidMount(){
        const data2 = await axios.get(`/hpb/community/getByLimit?isShow=4&pageIndex=0&pageSize=30`);
        console.log(data2);
        this.setState({
            canList:data2.data.data.data
        })
        console.log(this.state.canList)

    }
}
export default Hotbest
