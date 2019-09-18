import React from "react"
import "../../asset/css/search.css"
import axios from "axios"

class Search extends React.Component{
    constructor(){
        super()
       this.state={
           searchList:[]
       }
    }   
    goback(){
        this.props.history.go(-1)
    }
 
    render(){
        const searchList = this.state.searchList
        return(
            <div className="search">
                <div className="search-head">
                    <span>
                        <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48"></img>
                    </span>
                    <input type="text" placeholder="搜索食谱/食材，烘焙/家常菜一应俱全"></input>
                    <span>搜索</span>
                </div>
                <div className="search-hot">
                    <p>热门搜索</p>
                </div>
                <div className="search-lis">
                      {
                        searchList.map((item)=>(
                            <span key={item.popularSearchId} className="search-li">
                                {item.keyword}
                            </span>
                        ))
                    }
                </div>              
            </div>
        )
    }
 async componentDidMount(){
        const {data} = await axios.get(`/hpb/keyword/detail?_t=1568786276704&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1NzY3MDMxNywiaWF0IjoxNTY4MjgxNTE3fQ.T13b4XrBzIgx5zaDHuS-aEB4zMGfW__uZNsTQldFu7c`);
        console.log(data);
        this.setState({
            searchList:data.data.popularSearch
        })
        console.log(this.state.searchList)
    }
}
export default Search