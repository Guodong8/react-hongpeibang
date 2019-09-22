import React from "react";
import SearchMost from "./SearchMost"
 
class SearchDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchContent:[],
            searchExpert:[],
            searchMost:[],
            index:1

        }
        
    }
    changeIndex(index){
        this.setState({
            index
        })
       
    }
    render(){
        
        return (
            <div>
                    <div className="search-switchover">
                        <div onClick={this.changeIndex.bind(this,1)} className={this.state.index===1?"search-switchover-com active":"search-switchover-com"}>
                            综合排序
                        </div>
                        <div onClick={this.changeIndex.bind(this,2)} className={this.state.index===2?"search-switchover-com active":"search-switchover-com"}>
                            做过最多     
                        </div>
                        <div onClick={this.changeIndex.bind(this,3)} className={this.state.index===3?"search-switchover-com active":"search-switchover-com"}>
                            达人食谱     
                        </div> 
                    </div>
                    <div className="search-switchover1"></div>
                <div>
                    <div style={{display:this.state.index===1?"block":"none"}}><SearchMost searchContent={this.props.searchContent}></SearchMost></div>
                    <div style={{display:this.state.index===2?"block":"none"}}><SearchMost searchContent={this.props.searchMost}></SearchMost></div>
                    <div style={{display:this.state.index===3?"block":"none"}}><SearchMost searchContent={this.props.searchExpert}></SearchMost></div>
                </div>
            </div>
           
        )
    }
    componentDidMount(){
        this.setState({
            searchContent:this.props.searchContent
        })
        // console.log(this.state.searchContent)
    }
}
export default SearchDetail;