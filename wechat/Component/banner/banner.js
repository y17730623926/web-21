Component({
  // options: {
  //   multipleSlots: true // 在组件定义时的选项中启用多slot支持
  // },
  properties: {       //相当于data，一般变量在这里声明
    imgList:{
      type:Array,
      value:[],
      observer:{      //监听器，监听imgList修改执行的函数
        imgList:res=>{
          this.setData({
            imgList:res
          })
        }
      }
    },
    url:{
      type:String,
      value:""
    },
    bannerHeight:{
      type:String,
      value:""
    }
  }
})