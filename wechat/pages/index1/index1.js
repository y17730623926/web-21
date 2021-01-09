// pages/index1/index1.js
const app = getApp();
import $ from "../../utils/ajaxConfig";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: [],
    sort1: [],
    tuijian: [],
    wanghong: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(app.globalData.username, "页面加载");
    // wx.request({
    //   url: 'http://localhost:3000/goods/bannerOne',
    //   method: "get",
    //   success: data => {
    //     this.setData({
    //       background: data.data.data,
    //     })
    //   }
    // })
    //轮播图
    $.promiseGet("/goods/bannerOne", {}).then(data => {
      this.setData({
        background: data.data.data,
      })
    })
    // wx.request({
    //   url: 'http://localhost:3000/goods/sortOne',
    //   method: "get",
    //   success: data => {
    //     this.setData({
    //       sort1: data.data.data
    //     })
    //   }
    // })
    //分类
    $.promiseGet("/goods/sortOne", {}).then(data => {
      this.setData({
        sort1: data.data.data
      })
    })
    //推荐    网红
    $.promiseGet("/goods/sousuo", {
      sousuo: "潮流"
    }).then(data => {
      this.setData({
        tuijian: data.data.data
      })
    })
    $.promiseGet("/goods/sousuo", {
      sousuo: "网红"
    }).then(data => {
      this.setData({
        wanghong: data.data.data
      })
    })
  },
  jump_sort(e) {
    //Storage传参
    wx.setStorage({
      data: e.currentTarget.dataset.name,
      key: "data",
      success: () => {
        wx.switchTab({
          url: '../logs/logs',
        })
      }
    })
    //   app.globalData传参
    // app.globalData.name = e.currentTarget.dataset.name;
  },
  jump_list(e) {
    console.log(e);
    // wx.navigateTo({
    //   url: '../../pages/list/list?',
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log(app.globalData.username, "渲染完成");
    wx.getStorage({
      key: "search",
      success: res => {
        if (res.data.length !== 0) {
          wx.setTabBarBadge({
            index: 2,
            text: `${res.data.length}`
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log(app.globalData.username, "页面显示");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // console.log(app.globalData.username, "页面隐藏");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // console.log(app.globalData.username, "页面卸载");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // console.log(app.globalData.username, "下拉");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // console.log(app.globalData.username, "触底");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    // console.log(app.globalData.username, "分享");
  }
})