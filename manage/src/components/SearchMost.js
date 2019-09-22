import React from "react";
import {
    BrowserRouter as Router,
    Link,
    Switch
  } from "react-router-dom"

class SearchMost extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        const searchContent= this.props.searchContent
        console.log(searchContent);
        return (
            searchContent.map((item)=>(
                    <Link to={"/detailPages/"+item.contentId} className="searchDetail">
                        
                        <img src={item.image}></img>
                        <div className="searchDetail-1">
                            <h3>{item.coverTitle}</h3>
                            <div className = "searchDetail-2">
                                <p>{item.clientName}</p>
                                <p>{item.collectNum}人收藏 <span> </span>{item.dishNum}人做过</p>
                            </div>
                            
                        </div>
                    </Link>
                
            ))
        )
    }
}
export default SearchMost;

