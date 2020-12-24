let http = require("http");
let fs = require("fs");     //添加读取模块
let sever = http.createServer((req,res)=>{
    res.setHeader("Content-type","text/html;charset=utf-8");
	res.setHeader("Access-Control-Allow-Origin","*");           //解决跨域
    // fs.readFile('./test.txt',(err,data)=>{
    //     if(err){
    //         console.log("请求失败！");
    //         return;
    //     }
    //     res.end(data);
    // })
    fs.readFile('./data.json',(err,data)=>{         //读取的文件
        if(err){
            console.log("请求失败！");
            return;
        }
        res.end(data);
    })
})
sever.listen(3000);
console.log("读取文件~");