let http = require("http");
let fs = require("fs");
let server = http.createServer((req,res)=>{
	if(req.url==="/favicon.ico") {
		return;
	}
	//fs.stat();//检测状态
	// fs.stat("test",(err,data)=>{
	fs.stat("./01.js",(err,data)=>{
		console.log(data.isDirectory());        //检测路径是不是文件夹
	})
	res.end("success~")
})
server.listen(3000)