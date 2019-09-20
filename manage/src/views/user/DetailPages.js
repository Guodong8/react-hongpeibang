import React from "react";
import axios from "axios"

class DetailPages extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        
        return (
            <div>{this.props.match.params.id}</div>     
        )
    }
    async componentDidMount(){
        const contentid = this.props.match.params.id
        const data = await axios.get(`/hpb/comment/recipe/get?_t=1568990969471&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1NzY3MDMxNywiaWF0IjoxNTY4MjgxNTE3fQ.T13b4XrBzIgx5zaDHuS-aEB4zMGfW__uZNsTQldFu7c&contentId=${contentid}&quantity=`);
        console.log(data)
        
        this.setState({ 
            searchList:data,
            
        })
        
        
    }
}
export default DetailPages;