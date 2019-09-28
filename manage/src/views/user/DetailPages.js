import React from "react";
import axios from "axios"
import "../../asset/css/detailsPage.css"

class DetailPages extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            detailsPage:[],
            material:[],
            step:[],
            dish:[],
            
        }
    }
    render(){
        const detailsPage = this.state.detailsPage;
        const material = this.state.material;
        const dish = this.state.dish;

        const step = this.state.step;
        
        
        return (
            
            <div className="detailsPage">
                <div className="detailsPage-head">
                    <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" onClick={()=>this.props.history.go(-1)}></img>
                    <div className ="detailsPage-collect">
                        <span>收藏</span>
                    </div>
                </div>
                <div className="detailsPage-head1"></div>
                <div className="detailsPage-head2"><img src={detailsPage.coverImage}></img></div>
                <div className="detailsPage-content">
                        
                        <h2>{detailsPage.coverTitle}</h2>
                        <div className="detailsPage-author">
                            <img src={detailsPage.clientImage}></img>
                            <span>{detailsPage.clientName}</span>
                            <div className ="detailsPage-author1">
                                <span>+关注</span>
                            </div>
                            
                        </div>
                        <p>{detailsPage.coverSummary}</p>

                    <div className="detailsPage-author2"></div>
                    <div className="detailsPage-food">
                        <h1>食材用料</h1>
                        <div className="detailsPage-deal">
                            <input type = "button" value="-"/>
                            <span>4</span>
                            <input type = "button" value="+"/>
                            <span>(份量/块)</span>
                        </div>
                        <div className="detailsPage-material">
                            {
                                material.map((item,i)=>(
                                    <div className="detailsPage-recipe" key={i.contentRecipeMaterialId}>
                                        <span>{item.name}</span>
                                        <span>{item.weight}</span>
                                    </div>
                                ))
                            }
                            {/* <p>{material.name}</p> */}
                        </div>
                    </div>
                    <div className="detailsPage-author2"></div>
                    <div className="detailsPage-steps">
                        {
                            step.map((v,i)=>(
                                <div className="detailsPage-step" key={v.contentRecipeStepId}>
                                    <h3>步骤{i+1}</h3>
                                    <img src={v.image}></img>
                                    <p>{v.text}</p>
                                </div>
                            ))
                        }   
                    </div>
                
                    <div className="detailsPage-hint" style={{display:detailsPage.tip=[]?"none":"black"}}>
                        <h3>小贴士</h3>
                        <p>{detailsPage.tip}</p>
                    </div>  
                </div>
                <div className="detailsPage-dish" >
                     <div className="detailsPage-all">
                         <h1>作业</h1>
                         <p>查看全部</p>
                     </div> 
                     <div className="detailsPage-usersbox">
                         <div className="detailsPage-users" style={{width:"1560px"}}>
                            {
                                dish.map((item,v)=>(
                                    <div key={v.clientId} className="detailsPage-user" >
                                        <img src={item.coverImage}></img>
                                        <img src={item.clientImage}></img>
                                        <span>{item.clientName}</span>
                                        <p>{item.coverSummary}</p>
                                        <p>
                                            <img src="https://image.hongbeibang.com/FmwV3erfnWllNy3UkmPLji-iWRn8?imageMogr2/strip/thumbnail/640x640"></img>
                                            <span>{item.likeNum}</span>
                                        </p>
                                    </div>
                                ))
                            }
                         </div>
                     </div>
                    
                </div>
                
            </div>     
        )
    }
    async componentDidMount(){
        const contentid = this.props.match.params.id;
        console.log(contentid)
        const {data} = await axios.get(`/hpb/recipe/get?_t=1569036190893&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1ODM1MzM5NSwiaWF0IjoxNTY4OTY0NTk1fQ.EuAdyOz13iwp498AbzPOdUC3SJ-0szLmC9Nhx61RptI&contentId=${contentid}&quantity=`);
       console.log(data)
                
        this.setState({ 
            detailsPage:data.data.recipe,
            material:data.data.recipe.material,
            step:data.data.recipe.step,
            dish:data.data.recipe.dish.data
            
        })
        // console.log(this.state.detailsPage); 
        // console.log(this.state.material);    
    }
}
export default DetailPages;