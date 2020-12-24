let http = require("http");
let url = require("url");
let server = http.createServer((req,res)=>{
    console.log(req.url);           //req.url表示的是请求的路经
    if(req.url === "/favicon.ico"){
        return;
    }
    // http://192.168.1.103:3000/login
    // 协议 ip 端口号 path路径 参数
    // let pathname = url.parse(req.url).pathname;      //获取请求的path路经
    //let pathname = url.parse(req.url).query;          //参数以字符串形式展示
	let pathname = url.parse(req.url,true).query;       //参数以对象形式展示
	console.log(pathname.name)
    res.end("请求结束");
})
server.listen(3000);
console.log("服务器启动");