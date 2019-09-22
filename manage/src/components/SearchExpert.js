import React from "react";

class SearchExpert extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        const searchContent= this.props.searchContent
        return (
            searchContent.map((item)=>(
                <div className="searchDetail" key={item.contentId}>
                    <img src={item.image}></img>
                    <div className="searchDetail-1">
                        <h3>{item.coverTitle}</h3>
                        <div className = "searchDetail-2">
                            <p>{item.clientName}</p>
                            <p>{item.collectNum}人收藏 <span> </span>{item.dishNum}人做过</p>
                        </div>
                        
                    </div>
                   
                </div>
            ))
        )
    }
}
export default SearchExpert;