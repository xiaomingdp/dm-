var myDate = new Date();
var day = myDate.getDate();
var servser = getApp().data.servsers;


var session_key = null;
var iv = null;
var encryptedData = null;
var js_code = null;
var unionId = null;
var app;
var openid;
var jWeixin;


Page({
  data: {
    pdf:"",
    hiddenLoading:"true",
    div:"div",
    share:""

  },
  
  onShareAppMessage: function () {
    return {
      title: '新三板董秘助手',
      path: '/pages/mach/mach',
      desc: "",
      success: function (res) {

        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  vv:function(){
    wx.previewImage({
      current: '', // 当前显示图片的http链接
      urls: ["https://www.dudao360.com/tmp/mmexport1496889538958.jpg"] // 需要预览的图片http链接列表
    })
  },
  onLoad: function () {

    wx.login({
      success: function (res) {
       
        if (res.code) {
          //发起网络请求
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }

        wx.request({
          url: "https://api.weixin.qq.com/sns/jscode2session",
          data: {
            js_code: res.code,
            appid: "wxf6c2cb8aee1cf94e",
            secret: "2fdd5872ea4ef116910632b4f0e423e4",
            grant_type: "authorization_code"
          },
          success: function (res) {
           
          }
        })
      }

    });

    var that = this;
   
  
  //  for(var i=0;i<10;i++){
  //    var off = getApp().data.off;
  //    if (off = true) {
  //      console.log(off)
  //      that.setData({
  //        hiddenLoading: "true"

  //      })

  //    }
  //  }


   
    that.setData({
      disabled: true

    })

    setTimeout(function () {
      that.setData({
        disabled: ""

      })
      
      
    },1000)


  },
  fenxiang:function(){
      console.log(666)
      this.setData({
        div: "",
        // share:"share"

      })
      
  },
  lok:function(){
    wx.scanCode({
      success: (res) => {
       
      }
    })
  },
  onShow:function(){
 
    // setTimeout(function () {
    // wx.getSetting({
    //   success(res) {
    //     if (!res['scope.userInfo']) {
    //       wx.showModal({
    //         title: '提示',
    //         showCancel: false,
    //         content: '你已经拒绝授权，请删除小程序重新进入',
    //         success: function (res) {
    //           if (res.confirm) {
    //             console.log('用户点击确定');
    //             wx.navigateTo({
    //               url: "/pages/zhaiyao/zhaiyao"

    //             })
    //           } else if (res.cancel) {
    //             console.log('用户点击取消')
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
    // }, 3000)
    var that = this;
    that.setData({
      disabled: true

    })

    setTimeout(function () {
      that.setData({
        disabled: ""

      })


    }, 100)


  },
  kaishi: function () {
    this.setData({
      disabled: true

    })
    
    var that=this;
    that.setData({
      pdf:"pdf"

    })
  setTimeout(function () {
  
    wx.getStorage({
      key: 'user_info',
      success: function (res) {
     
      
        if (res.data == null || res.data == undefined || res.data =="") {
          wx.navigateTo({
            url: "../../pages/denglu/denglu"

          })
          that.setData({
            pdf: ""

          })
        
        } else {
        

          wx.navigateTo({
            url: "../../pages/datiye/datiye"

          })
          that.setData({
            pdf: ""

          })

         
        }
     

      }
    })

  }, 20);

  },
// 111111111111111111111111



})









