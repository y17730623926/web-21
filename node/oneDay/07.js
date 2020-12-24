let http = require("http");
let fs = require("fs");
let server = http.createServer((req,res)=>{
    if(req.url==="/favicon.ico"){
		return;
    }
    var userid = parseInt(Math.random()*8999+1000);//[1000,9999]    随机数
    fs.mkdir("/test/"+userid,err => {       // fs.mkdir()表示新建文件
        console.log("baocuo")           //报错
    })           
    res.end("创建成功")
})
server.listen(3000);
console.log("服务已启动~");