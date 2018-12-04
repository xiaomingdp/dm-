//app.js
var session_key = null;
var iv = null;
var encryptedData = null;
var js_code = null;

App({
  data: {
    servsers: "https://www.dudao360.com",
    // servsers:"https://www.neeqask.com",
    pageTimer :"",
    off: false,
    openid: "",
    a:1,
    ff: ""
  },
  onHide: function () {
    // clearInterval(qqqq);
    var pages = getCurrentPages();
   


    wx.getStorage({
      key: 'obj',
      success: function (res) {
       
      }
    })
    wx.getStorage({
      key: 'opiy',
      success: function (res) {
        wx.setStorage({
          key: "xuanxiang",
          data: res.data
        })

      }
    })

    wx.getStorage({
      key: 'xuanxiang',
      success: function (res) {
       
      }
    })

    
  },
 

  onLaunch: function () {
  

    this.data.ff = 55;
    var that = this;
    //调用API从本地缓存中获取数据
    

    // for (var i = 0; i < 5; i++) {
  




  },




})



wx.getSystemInfo({
  success: function (res) {

    var sss = res.version;

    if (wx.canIUse('openBluetoothAdapter') &&
      wx.canIUse('getSystemInfoSync.return.screenWidth') &&
      wx.canIUse('getSystemInfo.success.screenWidth') &&
      wx.canIUse('showToast.object.image') &&
      wx.canIUse('onCompassChange.callback.direction') &&
      wx.canIUse('request.object.method.GET') &&

      wx.canIUse('contact-button') &&
      wx.canIUse('text.selectable') &&
      wx.canIUse('button.open-type.contact')) {




    }
    else {

      wx.navigateTo({
        url: "pages/mach/mach?id=" + sss
      })


    }


  }
})


