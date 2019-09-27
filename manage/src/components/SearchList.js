import React from "react";
import axios from "axios"
import { 
    NavLink,
  } from "react-router-dom"
class SearchList extends React.Component{
    constructor(){
        super();
        this.state={
            searchList:[],
            // searchHistory:[],
            isShow:true,       
        }      
    }
    // sendkeyword(key){
    //     this.props.handle(key);      
    // }
    clearSearch(){
       
        this.setState({
            isShow:false,
            searchHistory:[]
        })
        localStorage.removeItem("searchHistory")
    }
    shopSearch(key){
        // localStorage.searchHistory= key;
        localStorage.searchHistory=Array.from(key) ;
        localStorage.searchHistory = localStorage.searchHistory.concat(Array.from(key));

        // this.setState({
        //   searchHistory:  localStorage.searchHistory
        // })
        
        // console.log(this.state.searchHistory)
        console.log(localStorage.searchHistory)
      
    }
    // sendkeyword(key){
        
    //     this.props.handle(key);      
    // }
    
    render(){
        const searchList = this.state.searchList;
        const searchHistory = localStorage.searchHistory
       
        return (
            <div> 
                <div className="search-hot">
                    <p>热门搜索</p>
                </div>
                <div className="search-lis">
                      {
                        searchList.map((item)=>(
                            <NavLink to={"/search/recipe/"+item.keyword} key={item.popularSearchId}>
                                <span key={item.popularSearchId} className="search-li" onClick={this.shopSearch.bind(this,item.keyword)}>
                                        {item.keyword}
                                 </span>
                            </NavLink>
  
                        ))
                      
                    }
                </div>  
                
                <div className="search-history" style={{display:this.state.isShow?"black":"none"}}>
                    <div className="search-history1">
                         <span>最近搜索</span>
                        <span>
                            <img src="https://image.hongbeibang.com/FlNyAtoE7VQRWghfLMIzjymlNTI2?48X48&imageView2/1/w/38/h/38" onClick={this.clearSearch.bind(this)}></img>
                        </span>
                    </div>
                    <div className="search-lis">
                    <span className="search-li">
                                        {searchHistory}
                   </span>

                            {/* {                      
                                searchHistory.map((item,c)=>(
                                    <span className="search-li" key={c}>
                                        {item}
                                    </span>
                                ))
                            } */}
                    </div>
                   
                </div>            
            </div>
        )
    }
    async componentDidMount(){
        const {data} = await axios.get(`/hpb/keyword/detail?_t=1568786276704&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1NzY3MDMxNywiaWF0IjoxNTY4MjgxNTE3fQ.T13b4XrBzIgx5zaDHuS-aEB4zMGfW__uZNsTQldFu7c`);
        this.setState({ 
            searchList:data.data.popularSearch,        
        })   
    }
}
export default SearchList;