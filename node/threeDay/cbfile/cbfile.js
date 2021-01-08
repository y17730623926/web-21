let sql = require("./sql");         //sql语句
let mysql = require("../mysql");    //封装的mysql
let keys = require("./keys");       //密钥
let { md5 } = require("./config");     //方法
var jsonwebtoken = require("jsonwebtoken"); //引入模块
class Obj {
    //注册接口
    register(req, res, next) {
        let user = req.body;
        if (user.username && user.password && user.email && user.phone) {   //注册信息不为空
            mysql.query(sql.register, [user.username], (result) => {
                if (result.length) {    //数据库里的username有没有重名的
                    res.send({
                        msg: "用户名已存在，请重新输入！",
                        code: 1
                    });
                } else {    //没有重名时添加数据
                    //把密码加密之后加入数据库
                    let sqlvalue = [user.username, md5(`${user.password}${keys.PWD_SALT}`), user.email, user.phone, user.nick];
                    mysql.query(sql.register1, sqlvalue, result => {
                        res.send({      //添加成功
                            msg: "注册成功！",
                            code: 0
                        });
                    })
                }
            })
        } else {
            res.send({
                msg: "注册的信息不能为空",
                code: -1
            });
        }
    }
    // 登录接口
    login(req, res, next) {
        let user = req.body;
        console.log(user);
        if (user.username && user.password) {   //登录信息不为空
            mysql.query(sql.login, [user.username], (result) => {
                if (result.length) {     //用户名存在
                    //密码没错(用户输入的密码通过md5加密之后 与 数据库的md5密码进行比较)
                    if (result[0].password === md5(`${user.password}${keys.PWD_SALT}`)) {
                        var token = jsonwebtoken.sign(user, keys.KEY, { expiresIn: keys.TIME });
                        res.send({
                            msg: "登陆成功！",
                            token: token,
                            code: 0
                        })
                    } else {      //密码错了
                        res.send({
                            msg: "密码错误！",
                            code: 2
                        })
                    }
                } else {    //用户名不存在
                    res.send({
                        msg: "用户名不存在！",
                        code: 1
                    })
                }
            })
        } else {      //输入的信息为空
            res.send({
                msg: "用户名或密码不能为空",
                code: -1
            })
        }
    }
    //查看接口
    has(req, res, next) {
        let user = req.body;
        if (user.username && user.password) {   //登录信息不为空
            mysql.query(sql.register, [user.username], (result) => {
                if (result.length) {     //用户名存在
                    //密码没错(用户输入的密码通过md5加密之后 与 数据库的md5密码进行比较)
                    if (result[0].password === md5(`${user.password}${keys.PWD_SALT}`)) {
                        let addvalue = [user.username];
                        mysql.query(sql.has, addvalue, result => {     //获取用户信息
                            res.send(result);
                        })
                    } else {      //密码错了
                        res.send({
                            msg: "密码错误！",
                            code: 2
                        })
                    }
                } else {    //用户名不存在
                    res.send({
                        msg: "用户名不存在！",
                        code: 1
                    })
                }
            })
        } else {      //输入的信息为空
            res.send({
                msg: "用户名或密码不能为空",
                code: -1
            })
        }
    }
    //修改接口
    // 修改前渲染
    has_change(req, res, next) {
        let user = req.body;
        if (user.id) {
            mysql.query(sql.change1, [user.id], (result) => {
                res.send({
                    msg: "成功",
                    code: 1,
                    data: result
                });
            })
        } else {
            mysql.query(sql.change2, [], (result) => {
                res.send({
                    msg: "成功",
                    code: 1,
                    data: result
                });
            })
        }
    }
    //修改中
    change(req, res, next) {
        let user = req.body;
        let addval = [user.new_username || result[0].username, user.new_email || result[0].email, user.new_phone || result[0].phone, user.new_nick || result[0].nick, user.id];
        mysql.query(sql.change3, addval, result => {
            res.send({
                msg: "修改成功！",
                code: 0
            })
        })
    }
}
module.exports = new Obj();