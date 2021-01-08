const ajax = {
  get(url,val,success){
    wx.request({
      url: 'http://localhost:3000' + url,
      data:val,
      method:"GET",
      success
    })
  },
  promiseGet(url,val,success){
    return new Promise((res,rej)=>{
      wx.request({
        url: 'http://localhost:3000' + url,
        data:val,
        success:res,
        fail:rej
      })
    })
  }
}
export default ajax;