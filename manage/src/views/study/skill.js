import React from "react";
import "../../asset/css/skill.css";
import axios from "axios";
import {Router,Route,hashHistory} from "react-router"

class Skill extends React.Component {
    constructor(props) {
        super(props)
        this.backClick = this.backClick.bind(this)
        this.state = {
            data: []


        }
    }
    backClick(){
        this.props.history.go(-1)
   }
    render() {
        const data = this.state.data
        return (
            <div id="body">
                <div className="wrap">
                    <div style={{ padding: '0rem', maxwidth: '37.5rem', margin: '0 auto', overflow: 'hidden' }}>

                        <div className="contentwrap" style={{ backgroundColor: '#fff' }}>
                            <div className="navigation"><span className="navigationi" style={{ float: 'left' }}><img alt="" title=""
                                src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&amp;imageView2/1/w/48/h/48"
                                className="navigationimg" onClick={this.backClick.bind(this)}></img></span></div>

                        </div>
                        <div className="main">
                            <div className="maincontent">
                                {data.map((item) => (
                                    <div className="mainview" key={item.couseId}><img alt="" title=""
                                        src={item.image}
                                        className="s5541079b" style={{ width: '8.125rem', background: 'none', height: '5rem' }}></img>
                                        <div className="maintext">{item.title}</div>
                                    </div>
                                ))


                                }

                            </div>
                        </div>
                        <div className="downloadwrap">
                            <div className="download"><img className="downloadimg"
                                src="https://image.hongbeibang.com/FqrNwXey8HDGxtROft8FVPUMPEwE" alt=""></img></div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
    async componentDidMount() {
        const data = await axios.get(`/hpb/education/getNewbieGuide?type=5&`);
        console.log(data);
        this.setState({
            data: data.data.data.courseGuide
        })
    }
}
export default Skill
