// 创建数据库
let mysql = require("mysql");
// console.log(mysql);
// let form = new FormData();           //表单序列化
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: "3306",
    database: "first"
})
// 链接数据库
connection.connect();
// connection.query(sql语句,插入的值,回调函数(err,result){})            //表示对数据库操作的语句
// 增
// let addsql = "insert into user(username,password,phone,email,nick) values(?,?,?,?,?)";
// let addvalue = ["yukuan","123456","123456789","123456@qq.com","132456"];
// connection.query(addsql,addvalue,(err,result)=>{
//     if(err){
//         console.log("添加失败！");
//         return;
//     }
//     console.log(result);
// })
// 查
// 查询所有
// let addsql = "select * from user";           //where表示的是条件
// 条件查询
// let tjsql = `select * from user where id=?`
// let tjsql = `select username,email,phone,nick from user where id=?`
// let addvalue = [1];
// connection.query(addsql, addvalue, (err, result) => {
//     if (err) {
//         console.log("查找错误!");
//         return;
//     }
//     console.log(result);
// })
// 修改
// let addsql = "update user set username=?,phone = ? where id=?";
// let addvalue = ["laof", "12121212", 1];
// connection.query(addsql, addvalue, (err, result) => {
//     if (err) {
//         console.log("修改错误!");
//         return;
//     }
//     console.log(result);
// })
// 删除
// let addsql = 'delete from user where id=?';
// let addvalue = [3];
// connection.query(addsql,addvalue,(err, result) => {
//     if (err) {
//         console.log("删除失败!");
//         return;
//     }
//     console.log(result);
// })
connection.end();