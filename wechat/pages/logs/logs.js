//logs.js
const util = require('../../utils/util.js');
const app = getApp();
import $ from "../../utils/ajaxConfig";
Page({
  data: {
    sort: [],
    sort1: [],
    name: ""
  },
  focus_search(){
    wx.navigateTo({
      url: '../search/search',
    })
  },
  jump_list(e){
    wx.navigateTo({
      url: '../../pages/list/list?id=' + e.currentTarget.dataset.id,
    })
  },
  onLoad: function () {
    //左边sort
    // wx.request({
    //   url: 'http://localhost:3000/goods/sortOne',
    //   method: "GET",
    //   success: data => {
    //     this.setData({
    //       sort: data.data.data,
    //       name: "男装",
    //     })
    //   }
    // })
    $.promiseGet("/goods/sortOne", {}).then(res => {
      this.setData({
        sort: res.data.data,
        name: "男装",
      })
    })
    this.ajax("男装")
  },
  onShow: function () {
    //右边
    console.log("显示");
    //  刷新分类，获取参数（Storage）
    wx.getStorage({
      key: 'data',
      success: res => {
        this.ajax(res.data);
        this.setData({
          name: res.data
        })
      }
    })
    //  获取参数 (app.globalData)
    // this.setData({
    //   name:app.globalData.name
    // })
    // this.ajax(this.data.name);
  },
  //请求
  ajax(sousuo) {
    // wx.request({
    //   url: `http://localhost:3000/goods/sortHas?sousuo=${sousuo}`,
    //   method: "GET",
    //   success: data => {
    //     this.setData({
    //       sort1: data.data.data
    //     })
    //   }
    // })
    $.promiseGet("/goods/sortHas", {
      sousuo: sousuo
    }).then(res => {
      this.setData({
        sort1: res.data.data,
      })
    })
  },
  // 分类点击
  sort_btn(e) {
    wx.setStorage({
      data: e.target.dataset.text,
      key: 'data',
      success: () => {
        this.setData({
          name: e.target.dataset.text
        })
        this.ajax(e.target.dataset.text);
      }
    })
  }
})