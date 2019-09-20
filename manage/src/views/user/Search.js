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
           searchHistory:[],
           searchMost:[],
           searchExpert:[]
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
        const {data} = await axios.get(`/hpb/search/getMoreRecipe?_t=1568817963544&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1NzkzNTMzOCwiaWF0IjoxNTY4NTQ2NTM4fQ.bvDr9GLJ1HfbxJSyYBXAvHgc2q-rPDEMuHZ_FgwYbqo&pageIndex=0&pageSize=10&keyword=${keyword}&sort=master`)      

        const searchMost = await axios.get(`/hpb/search/getMoreRecipe?_t=1568959340449&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1ODMyOTg3OCwiaWF0IjoxNTY4OTQxMDc4fQ.1o6tY2MTZm5_VNTm1IMj625Csh1NB_AN3DtTqSmuIF0&pageIndex=10&pageSize=10&keyword=${keyword}sort=dishNum`)
        const searchExpert = await axios.get(`/hpb/search/getMoreRecipe?_t=1568967580840&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1ODMyOTg3OCwiaWF0IjoxNTY4OTQxMDc4fQ.1o6tY2MTZm5_VNTm1IMj625Csh1NB_AN3DtTqSmuIF0&pageIndex=10&pageSize=10&keyword=${keyword}&sort=master`)
        console.log(searchExpert);
        this.setState({
            searchContent:data.data.search.list.recipe.data,
            searchMost:searchMost.data.data.search.list.recipe.data,
            searchExpert:searchExpert.data.data.search.list.recipe.data,
            visible:false,
            searchHistory: this.state.searchHistory.concat(key)
        })
        // console.log(this.state.searchContent);
        console.log(this.state.searchMost)
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
                <div className="search-head1"></div>
                {
                    (this.state.visible?
                    <SearchList 
                    handle={this.shopSearch.bind(this)} 
                    searchHistory={this.state.searchHistory}
                    clearSh =  {this.clearSearch.bind(this)} >
                    </SearchList>:
                    <SearchDetail
                     searchContent={this.state.searchContent}
                     searchMost={this.state.searchMost}
                     searchExpert={this.state.searchExpert}
                     ></SearchDetail>)
                }

            </div>
        )
    }

}
export default Search