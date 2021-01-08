// pages/find/find.js
const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}

Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    x:0,
    y:0,
    htmlSnip:`<h1>富文本</h1>`,

    years,
    months,
    days,
    value: [9999, 0, 0],
  },
  btn() {
    this.setData({
      x : 30,
      y : 30
    })
  },
  // 跳转到首页
  jump_index1(){
    wx.reLaunch({           //关闭所有页面，可以跳转到所有页面，可以传参数 
      url: '../index1/index1', //获取参数：onLoad (options) {console.log(options.query)}页面加载事件里
    })
    // wx.switchTab({       //只能跳转到导航页面，路经不能带参数，并关闭其他所有普通页面
    //   url: '../index/index',
    // })
  },
  // 跳转到index普通页面
  jump_index(){
    wx.navigateTo({      //只能跳转普通页面，保留当前页面，可以带参数，跳转后具有返回上一层功能
      url: '../index/index',
    })
    // wx.redirectTo({          //只能跳转普通页面, 关闭当前页面，可以带参数，跳转后不具有返回上一层功能。
    //   url: '../index/index', 
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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