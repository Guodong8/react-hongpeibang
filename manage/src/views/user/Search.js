import React from "react"
import "../../asset/css/search.css"
import {  
    NavLink,
  } from "react-router-dom"
import SearchList from "../../components/SearchList"



class Search extends React.Component{
    constructor(){
        super()
       this.state={
           searchList:[],
           keyword:'',
           visible:true,
           
           searchHistory:["1","2"],
           
       }
    
    }   
    goback(){             
            this.props.history.go(-1)                   
    }
    changeSearch(e){
        this.setState({
            keyword:e.target.value
        })
       console.log(this.state.keyword)
    }
    clearSearch(){  
        this.setState({
            searchHistory:[]
        })   
    }
    sendsearch(){
        localStorage.searchHistory=this.state.keyword
    }
//   shopSearch(key){
//     //   console.log(key);
//     const keyword= this.state.keyword || key;
//     console.log(keyword)
//       this.setState({
//         searchHistory: this.state.searchHistory.push(key)
//       })
//       console.log(this.state.searchHistory)
    
//   }
    render(){
        
        return(
            <div className="search-1">
                <div className="search-head">
                    <span>
                        <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" onClick={this.goback.bind(this)}></img>
                    </span>
                    <input type="text" placeholder="搜索食谱/食材，烘焙/家常菜一应俱全" onChange={this.changeSearch.bind(this)}></input>
                    
                    <NavLink to={"/search/recipe/"+this.state.keyword}><span onClick={this.sendsearch.bind(this)}>搜索</span></NavLink>
                    
                </div>
                <div className="search-head1"></div>
                
             
                    <SearchList 
                    // handle={this.shopSearch.bind(this)} 
                    searchHistory={this.state.searchHistory}
                    clearSh =  {this.clearSearch.bind(this)} >
                    </SearchList>
                    {/* <SearchDetail
                     searchContent={this.state.searchContent}
                     searchMost={this.state.searchMost}
                     searchExpert={this.state.searchExpert}
                     ></SearchDetail>) */}
               
            </div>
        )
    }

}
export default Search