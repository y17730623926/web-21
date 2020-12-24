let http = require("http");
let server = http.createServer((req,res)=>{         //require请求   //resquest响应   
	res.setHeader("Content-type","text/html;charset=utf-8");//解决浏览器乱码
    let num = parseInt(Math.random()*99);  //[0,99)
	let ips = req.connection.remoteAddress;     //获取请求的ip地址      req.connection.remoteAddress
    if(num === 66){           
		console.log("中奖用户"+ips);
		throw new Error("game over");
	}
	res.end(num.toString(),"【ip是】"+ips);
})
server.listen(3000);
console.log("游戏开始");