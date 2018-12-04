var myDate = new Date();
var day = myDate.getDate();
var servser = getApp().data.servsers;

var opp = null;
var openid = "";
var session_key = null;
var iv = null;
var encryptedData = null;
var unionId = null;
var openid=null;

Page({
  data: {
    listarr: ["dsfdfs", 2, 3, 4, 5],
    username: "",
    password: "",
    btn: "btn",
    sssd: true,
    shanchu: "shanchuu",
    yanjing: "yanjingg",
    yanjing1: "https://www.dudao360.com/tmp/yanjing.png",
    mimaleix: "false",
    btn: "btn"


  },
  wangji: function () {
    wx.navigateTo({
      url: "../../pages/wangji/wangji"

    })
  },
  zhuce: function () {
    wx.navigateTo({
      url: "../../pages/zhuce/zhuce"

    })
  },
  mk: function (e) {
    console.log(e)
  },
  shanchu: function () {
    this.setData({

      username: "",

    })

  },
  username: function () {

  },
  fouss: function () {
    if (this.data.username != "") {
      this.setData({

        shanchu: "shanchu",


      })
    }

  },

  password1: function () {


    this.setData({

      yanjing: "yanjing",


    })


  },
  f1: function () {
    var that = this;

    if (this.data.username != "" && this.data.password != "") {

      that.setData({

        btn: "btnn",


      })
    }

  },

  yanjing: function () {
    if (!this.data.mimaleix == "") {
      this.setData({

        yanjing1: "https://www.dudao360.com/tmp/yanjing1.png",
        mimaleix: ""


      })

    }
    else {
      this.setData({

        yanjing1: "https://www.dudao360.com/tmp/yanjing.png",
        mimaleix: "false"


      })

    }
  },

  name: function (e) {

    var that = this;
    that.setData({

      shanchu: "shanchu"
    })


    if (this.data.password !== "" && this.data.username !== "") {
      that.setData({

        btn: "btnn"
      })
    }
    //  if(this.data.password==""&&this.data.username!==""){

    //         that.setData({

    //           btn:"btn"
    //         })


    //  }                                                                                                                          
    //  if(this.data.password!==""&&this.data.username==""){
    //         that.setData({

    //           btn:"btn"
    //         })


    //  }

    //   if(this.data.password==""&&this.data.username==""){
    //         that.setData({ 

    //           btn:"btn"
    //         })


    //  }

    this.setData({
      username: e.detail.value

    })



  },
  password1: function (e) {
    this.setData({

      yanjing: "yanjing",


    })

    var that = this;
    if (this.data.password !== "" && this.data.username !== "") {
      that.setData({

        btn: "btnn"
      })
    }
    //  if(this.data.password==""&&this.data.username!==""){

    //         this.setData({

    //           btn:"btn"
    //         })


    //  }
    //  if(this.data.password!==""&&this.data.username==""){
    //         that.setData({

    //           btn:"btn"
    //         })


    //  }
    //   if(this.data.password==""&&this.data.username==""){
    //         that.setData({

    //           btn:"btn"
    //         })


    //  }


    this.setData({

      password: e.detail.value
    })



  },

  btn: function () {

    var that = this;
    if (this.data.password !== "" && this.data.username !== "") {
      wx.showNavigationBarLoading({

      })
      this.setData({

        sssd: false
      })
    }


    if (this.data.password == "") {

      wx.showToast({
        title: '用户名或密码不能为空',
        icon: 'success',
        duration: 2000
      })
      return false;
    }
    if (this.data.username == "") {
      wx.showToast({
        title: '用户名或密码不能为空',
        icon: 'success',
        duration: 2000
      })
      return false;

    }
    wx.getStorage({
      key: 'unionId',
      success: function (res) {
        console.log(res.data);
        unionId = res.data

        wx.getStorage({
          key: 'openid',
          success: function (res) {
            openid=res.data
            console.log(res.data)
       
        wx.request({

          url: servser + '/pop-wx-web/wxWebController/bindingUser',
          data: {
            password: that.data.password,
            username: that.data.username,
            unionId: unionId,
            openid: res.data

            //  openId: getApp().data.openid
          },
          header: {
            'content-type': 'application/json'



          },

          success: function (res) {
            console.log(res)
            var message = res.data.message;
            if (message == 1) {
              wx.showToast({
                title: '登录名或密码错误',
                icon: 'success',
                duration: 2000,
                success: function (res) {

                }
              })
            } else if (message == 2) {
              // 绑定成功
              wx.showToast({
                title: '登陆成功',
                icon: 'success',
                duration: 1000,
                success: function (res) {
                  wx.switchTab({
                    url: "../index1/index1"

                  })

                }
              })
              var userInfo = res.data.userInfo;
              wx.setStorage({
                key: "user_info",
                data: userInfo
              })
            

            } else if (message == 3) {
              //网络错误
              wx.showToast({
                title: '网络错误',
                icon: 'success',
                duration: 2000,
                success: function (res) {

                }

              })
            }
            else if (message == 4) {
              //该手机号已经绑定
              wx.showToast({
                title: '该手机号已经绑定',
                icon: 'success',
                duration: 2000,
                success: function (res) {

                }

              })
            } else if (message == "5") {
              wx.showToast({
                title: '当前微信号与绑定董秘助手的微信号不一致，绑定失败',
                icon: 'success',
                duration: 1000
              })
            }

 
          }


        })
          }
        })
      }
    })
  }
})










