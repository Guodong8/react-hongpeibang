import React from "react";
import SearchMost from "../../components/SearchMost"
import axios from "axios"
import "../../asset/css/searchRecipe.css"
 
class SearchRecipe extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchContent:[],
            searchExpert:[],
            searchMost:[],
            index:1
        }
        
    }
    goback(){             
        this.props.history.go(-1)                   
    }
    changeIndex(index=1){
        this.setState({
            index
        })   
    }
    changeSearch(e){
        this.setState({
            keyword:e.target.value
        })
       
    }
    render(){
        
        return (
            <div className="search-recipe1">
                <div className="search-recipe">
                    <span>
                        <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" onClick={this.goback.bind(this)}></img>
                    </span>
                    <input type="text" placeholder="搜索食谱/食材，烘焙/家常菜一应俱全" onChange={this.changeSearch.bind(this)}></input>
                    <span>
                       食谱 <img src="https://image.hongbeibang.com/FnX5qtpWKlcHoDYC5KDFHulWfEZl?32X32&imageView2/1/w/32/h/32"></img>
                    </span>
                </div>
                <div className="search-head1"></div>
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
                    <div style={{display:this.state.index===1?"block":"none"}}><SearchMost searchContent={this.state.searchContent}></SearchMost></div>
                    <div style={{display:this.state.index===2?"block":"none"}}><SearchMost searchContent={this.state.searchMost}></SearchMost></div>
                    <div style={{display:this.state.index===3?"block":"none"}}><SearchMost searchContent={this.state.searchExpert}></SearchMost></div>
                </div>
            </div>
           
        )
    }
   async componentDidMount(){
        const keyword= this.props.match.params.keyword;  
        console.log(keyword)
        const {data} = await axios.get(`/hpb/search/getMoreRecipe?_t=1569417998583&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1ODM1MzM5NSwiaWF0IjoxNTY4OTY0NTk1fQ.EuAdyOz13iwp498AbzPOdUC3SJ-0szLmC9Nhx61RptI&pageIndex=0&pageSize=10&keyword=${keyword}&sort=`)      
        const searchMost = await axios.get(`/hpb/search/getMoreRecipe?_t=1569418131805&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1ODM1MzM5NSwiaWF0IjoxNTY4OTY0NTk1fQ.EuAdyOz13iwp498AbzPOdUC3SJ-0szLmC9Nhx61RptI&pageIndex=0&pageSize=10&keyword=${keyword}&sort=dishNum`)
        const searchExpert = await axios.get(`/hpb/search/getMoreRecipe?_t=1569417883409&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1ODM1MzM5NSwiaWF0IjoxNTY4OTY0NTk1fQ.EuAdyOz13iwp498AbzPOdUC3SJ-0szLmC9Nhx61RptI&pageIndex=0&pageSize=10&keyword=${keyword}&sort=master`)
        // console.log(searchExpert);
        this.setState({
            searchContent:data.data.search.list.recipe.data,
            searchMost:searchMost.data.data.search.list.recipe.data,
            searchExpert:searchExpert.data.data.search.list.recipe.data,
           
        })

    }
}
export default SearchRecipe;