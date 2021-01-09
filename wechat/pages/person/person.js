// pages/person/person.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    log:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // 登录
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      log:true
    })
  },
  // 信息
  pim_tap() {
    wx.navigateTo({
      url: '../site/site',
    })
  },
  // 地址
  site_tap() {
    wx.chooseAddress({
      success(res) {

      }
    })
  },
  onLoad: function () {
    this.setData({
      userInfo: app.globalData.userInfo,
      log:app.globalData.userInfo === null ? false : true
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