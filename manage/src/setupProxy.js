const proxy = require("http-proxy-middleware");
module.exports = function (app) {
    // proxy是一个函数，第一个参数是 前缀
    app.use("/hpb",proxy({
            target:"https://api.hongbeibang.com",
            changeOrigin:true,
            pathRewrite:{
                "^/hpb":""
            }
    }))

   



    app.use("/w",proxy({
        target:"http://127.0.0.1",
        changeOrigin:true,
        pathRewrite:{
            "^/w":""
        }
    }))
}


