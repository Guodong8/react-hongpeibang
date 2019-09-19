import React from "react"
import "../../asset/css/search.css"
import axios from "axios"
import SearchList from "../../components/SearchList"
import SearchDetail from "../../components/SearchDetail"

class Search extends React.Component{
    constructor(){
        super()
       this.state={
           searchList:[],
           keyword:'',
           visible:true,
           searchContent:[],
           searchHistory:[]
       }
    
    }   
    goback(){
        
       if(this.state.visible){
            this.props.history.go(-1)
       }else{
           this.setState({
            visible:true

        })
       }
        
    }
    changeSearch(e){
        this.setState({
            keyword:e.target.value
        })
       
    }
    clearSearch(){  
        this.setState({
            searchHistory:[]
        })   
    }
   async shopSearch(key){
        const keyword= this.state.keyword || key;  
        const {data} = await axios.get(`/hpb/search/getMoreRecipe?_t=1568817963544&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1NzkzNTMzOCwiaWF0IjoxNTY4NTQ2NTM4fQ.bvDr9GLJ1HfbxJSyYBXAvHgc2q-rPDEMuHZ_FgwYbqo&pageIndex=0&pageSize=10&keyword=${keyword}`)      

        this.setState({
            searchContent:data.data.search.list.recipe.data,
            visible:false,
            searchHistory: this.state.searchHistory.concat(key)
        })
    }
    render(){
        
        return(
            <div className="search-1">
                <div className="search-head">
                    <span>
                        <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" onClick={this.goback.bind(this)}></img>
                    </span>
                    <input type="text" placeholder="搜索食谱/食材，烘焙/家常菜一应俱全" onChange={this.changeSearch.bind(this)}></input>
                    <span onClick={this.shopSearch.bind(this)}>搜索</span>
                    
                </div>
                {
                    (this.state.visible?
                    <SearchList 
                    handle={this.shopSearch.bind(this)} 
                    searchHistory={this.state.searchHistory}
                    clearSh =  {this.clearSearch.bind(this)} >
                    </SearchList>:
                    <SearchDetail searchContent={this.state.searchContent}></SearchDetail>)
                }

            </div>
        )
    }

}
export default Search