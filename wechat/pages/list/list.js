// pages/list/list.js
import $ from "../../utils/ajaxConfig";
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // 加
  zeng() {
    const _list = this.data.list;
    _list.num = _list.num < 10 ? _list.num + 1 : 10;
    this.setData({
      list: _list
    })
  },
  // 减
  jian() {
    const _list = this.data.list;
    _list.num = _list.num <= 1 ? 1 : _list.num - 1;
    this.setData({
      list: _list
    })
  },
  //首页
  index_jump() {
    wx.switchTab({
      url: '../index1/index1',
    })
  },
  //购物车
  shopping_jump() {
    wx.switchTab({
      url: '../shop/shop',
    })
  },
  //加入购物车
  shopping() {
    const _list = this.data.list;
    wx.getStorage({
      key: "search",
      success: res => {
        res.data.push(_list);
        wx.setStorage({
          data: res.data,
          key: 'search',
          success: () => {
            wx.showLoading({
              title: '添加成功',
            })
            setTimeout(function () {
              wx.hideLoading()
              wx.switchTab({
                url: '../shop/shop',
              })
            }, 1000)
          }
        })

      },
      fail: () => {
        const search = [];
        search.push(_list);
        wx.setStorage({
          data: search,
          key: 'search',
          success: res => {
            wx.showLoading({
              title: '添加成功',
            })
            setTimeout(function () {
              wx.hideLoading();
              wx.switchTab({
                url: '../shop/shop',
              })
            }, 1000)
          }
        })
      }
    })
  },
  onLoad: function (options) {
    $.promiseGet("/goods/id_has", {
      sousuo: options.id
    }).then(res => {
      this.setData({
        list: res.data.data[0]
      })
      console.log(this.data.list);
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