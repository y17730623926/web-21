let http = require("http");
let fs = require("fs");
let url = require("url");
let server = http.createServer((req,res)=>{
    res.setHeader("Content-type","text/html;charset=utf-8");    //解决乱码
    res.setHeader("Access-Control-Allow-Origin","*");           //解决跨域
    if(req.url === "/favicon.ico"){
        return
    } else if (req.url === "/aa"){
        fs.readFile("./大背景5.jpg",(err,data)=>{
            if(err){
                console.log("读取文件失败！");
                return;
            }
            res.end(data);
        })
    } else if (req.url === "/bb"){
        fs.readFile("./css.css",(err,data)=>{
            if(err){
                console.log("读取文件失败！");
                return;
            }
            res.end(data);
        })
    } else if (req.url === "/cc"){
        fs.readFile("./test.txt",(err,data)=>{
            if(err){
                console.log("读取文件失败！");
                return;
            }
            res.end(data);
        })
    }
})
server.listen(3000);
console.log("ok");