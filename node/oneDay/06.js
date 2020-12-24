let http = require("http");
let url = require("url");
// /student/1234567890 查询学生信息
// /teacher/232323  查询教师信息
let server = http.createServer((req ,res) => {
    res.setHeader("Content-type","text/html;charset=utf-8");
	res.setHeader("Access-Control-Allow-Origin","*");//解决跨域
    if(req.url==="/favicon.ico"){
		return;
    }
    var userurl = req.url;
    if(userurl.substr(0,9) === "/student/"){
        var studentid = userurl.substr(9);
        if (/^\d{10}$/.test(studentid)) {
            res.end("你查询的学生信息是："+studentid)
        } else {
            res.end("你查询的学生信息有误，请重新输入")
        }
    } else if(userurl.substr(0,9) === "/teacher/"){
        var teacherid = userurl.substr(9);
        if (/^\d{10}$/.test(teacherid)) {
            res.end("你查询的老师信息是："+teacherid)
        } else {
            res.end("你查询的老师信息有误，请重新输入")
        }
    }
});
server.listen(3000);
console.log("请查询");