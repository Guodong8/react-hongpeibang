const proxy=require("http-proxy-middleware")
module.exports = function (app) {
  app.use(proxy("/hongbeibang",{
    target:"https://api.hongbeibang.com",
    changeOrigin:true,
    pathRewrite:{
    "^/hongbeibang":""
    }
    }))
}
// async componentDidMount(){
//   const {data}=await axios.get(`/v2/feed/getNew?pageIndex=0&pageSize=10`)
//       console.log(data)
//       this.setState({
//         xxlist:data.data.content.data
//       })
//       console.log(this.state.xxlist)
// }