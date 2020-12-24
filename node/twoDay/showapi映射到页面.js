//兼容较老版本nodejs, 如果你的项目不支持ES6可以选用该版本
//推荐使用npm安装使用sdk: npm install --save showapi-sdk
'use strict';
var http = require("http");
var showapiSdk = require('showapi-sdk');
let datalist = {};          //放数据
var server = http.createServer((req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*");//解决跨域
	res.setHeader("content-type","text/html;charset=utf-8");    //如果有文字就需要转码
	if(datalist){       //把数据发给客户端
		console.log(datalist);
		res.end(JSON.stringify(datalist));
	}
})
server.listen(3000);
console.log("success~")
data()  //别人发的请求之后的数据运行一下
function data(){
	//设置你测试用的appId和secret,img
	var appId='486513';
	var secret='1e5a05c9ff0142f4998dd24e855bb09a';
	//开启debug
	//showapiSdk.debug(true);
	if(!(appId&&secret)){
	  console.error('请先设置appId等测试参数,详见样例代码内注释!')
	  return;
	}
	//全局默认设置
	showapiSdk.setting({
	  url:"http://route.showapi.com/126-2",//你要调用的API对应接入点的地址,注意需要先订购了相关套餐才能调
	  appId:appId,//你的应用id
	  secret:secret,//你的密钥
	  timeout:5000,//http超时设置
	  options:{//默认请求参数,极少用到
		testParam:'test'
	  }
	})
	var request=showapiSdk.request();
	request.appendText('count','10');
	request.post(function(data){
	  // console.log(data)
	  datalist = data;          //把别人的数据放入我要用的变量中
	})	
}
