Component({
  properties: {
    text: {
      type: String,
      value: ""
    },
    _id: {
      type: String,
      value: ""
    },
    tuijian: {
      type: Array,
      value: [],
      observer: {
        tuijian: res => {
          this.setData({
            tuijian: res
          })
        }
      }
    },
    img: {
      type: String,
      value: ""
    },
    desc: {
      type: String,
      value: ""
    },
    price: {
      type: String,
      value: ""
    }
  },
  methods: {      //自定义方法
    _jump_list: function (e) {
      wx.navigateTo({
        url: '../../pages/list/list?id=' + e.currentTarget.dataset.id,
      })
    },
  }

})