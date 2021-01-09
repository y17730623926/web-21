// pages/shop/shop.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search: [],
    _price: 0,
    status: "false",
    _state: true,
    length: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  //多选
  icon_tap(e) {
    const _index = e.currentTarget.dataset.index;
    let _search = this.data.search;
    _search[_index].status = _search[_index].status === 'false' ? 'true' : 'false';
    let qx_stat = "true";
    _search.forEach(item => {
      item.status === 'false' ? qx_stat = "false" : "";
    })

    this.setData({
      status: qx_stat,
      search: _search
    })

    this.zongji();
  },
  //全选
  icons_tap(e) {
    let state = this.data.status;
    let _search = this.data.search;
    state = state === 'false' ? 'true' : 'false';
    _search.forEach(item => {
      item.status = state
    })
    this.setData({
      search: _search,
      status: state
    })
    this.zongji();
  },
  // 价格
  zongji() {
    const _search = this.data.search;
    let zongjia = 0;
    _search.forEach(item => {
      if (item.status === "true") {
        zongjia += item.num * item.price;
      }
    })
    this.setData({
      _price: zongjia
    })
  },
  zeng(e) {
    const _id = e.currentTarget.dataset.id;
    let _search = this.data.search;
    _search.forEach(item => {
      if (item.id === _id) {
        item.num++;
      }
      if (item.status === "true") {
        this.zongji()
      }
    })
    this.setData({
      search: _search
    })
  },
  jian(e) {
    const _id = e.currentTarget.dataset.id;
    let _search = this.data.search;
    _search.forEach(item => {
      if (item.id === _id) {
        item.num = item.num <= 1 ? 1 : item.num - 1;
      }
      if (item.status === "true") {
        this.zongji()
      }
    })
    this.setData({
      search: _search
    })
  },
  delete(e) {
    wx.showModal({
      title: '提示',
      content: '您确定要删除吗？',
      success: res => {
        if (res.confirm) {
          // console.log('用户点击确定');
          const _index = e.currentTarget.dataset.index;
          wx.getStorage({
            key: 'search',
            success: res => {
              let _search = res.data;
              _search.splice(_index, 1);
              this.setData({
                search: _search
              })
              wx.setStorage({
                data: _search,
                key: 'search',
              })
              if (res.data.length === 0) {
                wx.removeTabBarBadge({
                  index: 2,
                })
              } else {
                wx.setTabBarBadge({
                  index: 2,
                  text: `${res.data.length}`
                })
              }
            }
          })
        } else if (res.cancel) {
          // console.log('用户点击取消');
        }
      }
    })

  },
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
    wx.getStorage({
      key: 'search',
      success: res => {
        this.setData({
          search: res.data,
          length: this.data.search.length,
          status: "false",
          _price: 0
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

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