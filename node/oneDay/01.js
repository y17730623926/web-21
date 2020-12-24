// http内置模块 require表示引用
let http = require("http");
// 创建服务器
let server = http.createServer((req,res)=>{
    res.setHeader("Content-type","text/html;charset=utf-8");//解决浏览器乱码
    res.end("第一次建立服务器");    // res.end()接受的是一个字符串
})
// 监听端口号   (端口号，地址)
server.listen(3000);
console.log("服务已启动");