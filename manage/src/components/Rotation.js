import React from "react"
import axios from "axios"
class Rotation extends React.Component {
    constructor(){
        super()
       this.state={
           content:[],
         
       }
    }   
    render(){
       
        const content = this.state.content;
     
    return (
       <div className="lunbowrap">
                 <div className="lunbo" style={{ width: '30.5625rem' }}>
                        <div className="lunbotu" style={{ padding: '0rem  0rem 0rem 0.9375rem' }}>
                            <img alt="" title="" src={require('../asset/img/lunbotu1.jpg')} className="worksiconfont"
                                style={{ background: 'none', width: '9.375rem', height: '5.3438rem' }}></img></div>
                        <div className="lunbotu">
                            <img alt="" title="" src={require('../asset/img/lunbotu2.jpg')} className="worksiconfont"
                                style={{ background: 'none', width: '9.375rem', height: '5.3438rem' }} /></div>
                        <div className="lunbotu">
                            <img alt="" title="" src={require('../asset/img/lunbotu3.jpg')} className="worksiconfont"
                                style={{ background: 'none', width: '9.375rem', height: '5.3438rem' }} /></div>
                    </div>
                </div> 
    )
}
// async componentDidMount(){
        
//     const {data} = await axios.get(`/hpb/v2/feed/getNew?pageIndex=0&pageSize=10`);
//     // console.log(data);
//     this.setState({
//         content:data.data.content
//     })
//     // console.log(this.state.content)
   
   

// }
}
export default Rotation