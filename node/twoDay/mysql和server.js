let mysql = require("./mysql");
let http = require("http");
let server = http.createServer((req,res)=>{
    res.setHeader("content-type","text/html;charset=utf-8");
    mysql.query("select * from user",[],(result)=>{
        // argument must be of type string or an instance of Buffer. Received an instance of Array   报错表示数据格式不对
        res.end(JSON.stringify(result));
    })
})
server.listen(3000);
console.log("已启动")