var express = require('express');
var router = express.Router();
let mysql = require("../mysql");
/* GET users listing. */
// 添加
// banner表     添加
router.get('/banner', function (req, res, next) {
    let data = req.query;
    let sqladd= "insert into banner(img,name) values(?,?)";
    let sqlvalue = [data.img,data.name];
    mysql.query(sqladd, sqlvalue, result => {
        res.send({      //添加成功
            msg: "添加成功！",
            code: 0
        });
    })
});
//sortSearch表      添加
router.get('/sortSearch', function (req, res, next) {
    let data = req.query;
    // console.log(data);
    let sqladd= "insert into sortSearch(`name`,`img`,`sort`,`date`,`price`,`shop_name`,`desc`,`provcity`) values(?,?,?,?,?,?,?,?)";
    let date = new Date();
    let Year = date.getFullYear();      //年
    let Month = date.getMonth() + 1;    //月
    let ri = date.getDate();            //日
    let Hours = date.getHours();        //小时
    let Minutes = date.getMinutes();    //分钟
    date = `${Year}年${Month}月${ri}日${Hours}点${Minutes}分`;
    console.log(typeof date);
    //                                                   价格       名称          说明        来源城市
    let sqlvalue = [data.name,data.img,data.sort,date,data.price,data.shop_name,data.desc,data.provcity];
    // console.log(sqladd)
    // console.log(sqlvalue)
    mysql.query(sqladd, sqlvalue, result => {
        res.send({      //添加成功
            msg: "添加成功！",
            code: 0,
            date
        });
    })
});
// 查询轮播图
router.get('/bannerOne', function (req, res, next) {
    let sqladd= "select * from banner";
    let sqlvalue = [];
    mysql.query(sqladd, sqlvalue, result => {
        res.send({      //添加成功
            msg: "添加成功！",
            code: 0,
            data:result
        });
    })
});
//sort表    查询分类
router.get('/sortOne', function (req, res, next) {
    let sqladd= "select * from sort";
    let sqlvalue = [];
    mysql.query(sqladd, sqlvalue, result => {
        res.send({      //添加成功
            msg: "添加成功！",
            code: 0,
            data:result
        });
    })
});
// 查询所有   sortSearch表
router.get('/sortSearchOne', function (req, res, next) {
    let sqladd= "select * from sortsearch";
    let sqlvalue = [];
    mysql.query(sqladd, sqlvalue, result => {
        res.send({      //添加成功
            msg: "添加成功！",
            code: 0,
            data:result
        });
    })
});
//分类查询  sortSearch表    sort = data.sousuo
router.get('/sortHas', function (req, res, next) {
    let data = req.query;
    let sqladd= `select * from sortsearch where sort=?`;
    let sqlvalue = [data.sousuo];
    mysql.query(sqladd, sqlvalue, result => {
        res.send({      //添加成功
            msg: "成功！",
            code: 0,
            data:result
        });
    })
});
//搜索框查询    sortSearch表   name like %data.sousuo%
router.get('/sousuo', function (req, res, next) {
    let data = req.query;
    let sqladd= "select * from sortsearch where `desc` like ? or sort = ?";
    let sqlvalue = [`%${data.sousuo}%`,`${data.sousuo}`];
    mysql.query(sqladd, sqlvalue, result => {
        res.send({      //添加成功
            msg: "成功！",
            code: 0,
            data:result
        });
    })
});
//id查询    sousuo = data.sousuo
router.get('/id_has', function (req, res, next) {
    let data = req.query;
    let sqladd= `select * from sortsearch where id=?`;
    let sqlvalue = [data.sousuo];
    mysql.query(sqladd, sqlvalue, result => {
        res.send({      //添加成功
            msg: "成功！",
            code: 0,
            data:result
        });
    })
});
module.exports = router;
