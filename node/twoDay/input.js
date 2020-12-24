let http = require("http");
let url = require("url");
let mysql = require("./mysql");
let server = http.createServer((req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*");//解决跨域
    res.setHeader("content-type","text/html;charset=utf-8");    //如果有文字就需要转码
    let aa = url.parse(req.url,true).query;
    let addsql = "insert into user(username,password,phone,email,nick) values(?,?,?,?,?)";
    let addvaule = [aa.username,aa.password,aa.phone,aa.email,aa.nick];
    mysql.query(addsql,addvaule,(result)=>{
        console.log(result);
        res.end("修改成功!")
    })
})
server.listen(3000);
console.log("ok");