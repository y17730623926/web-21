// pages/search_find/search_find.js
import $ from "../../utils/ajaxConfig";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:"",
    tuijian:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    $.promiseGet("/goods/sousuo",{sousuo:options.search}).then(res=>{
      this.setData({
        tuijian:res.data.data,
        text:options.search
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})