var myDate = new Date();
var day = myDate.getDate();
var servser = getApp().data.servsers;

var opp = null;
var openid = "";
var countdown = 5;
var openid = "";
var countdown = 5;
var session_key = null;
var iv = null;
var encryptedData = null;
var unionId = null;
var openid = null;

Page({
  data: {
    listarr: ["dsfdfs", 2, 3, 4, 5],
    username: "",
    password: "",
    btn: "btn",
    sssd: true,
    yanz: "yanz",
    yanzzi: "获取验证码",
    countdown: 60,
    yanzyanz: "yanz",
    name: "",
    ldok: "",
    namegg: "",
    shanchu: "shanchuu",
    fgdisabled:""



  },
  shanchu: function () {
    this.setData({

      namegg: "",

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
  namegg: function (e) {
    var that = this
    this.setData({
      namegg: e.detail.value,
      shanchu: "shanchu"
    })

    if (that.data.namegg != "" && that.data.ldok != "") {
      that.setData({

        btn: "btnn"
      })
    }
  },
  ldok: function (e) {
    var that = this
    this.setData({
      ldok: e.detail.value
    })

    if (that.data.ldok != "" && that.data.namegg != "") {
      that.setData({

        btn: "btnn"
      })
    }
  },
  yzdl: function () {
    
    var that = this;
    var name = this.data.namegg
    var name1 = this.data.ldok;
    if (name1.replace(/[^\d]/g, '').length != 6) {
      wx.showToast({
        title: '验证码不正确',
        icon: 'success',
        duration: 1000
      })
      return false;
    }
    wx.getStorage({
      key: 'openid',
      success: function (res) {
        openid = res.data
      }
    })
    wx.getStorage({
      key: 'unionId',
      success: function (res) {
       
        unionId=res.data;
        wx.request({
          url: servser + '/pop-wx-web/wxWebController/validCode', //仅为示例，并非真实的接口地址
          data: {
            name: name,
            name1: name1,
            unionId: unionId,
            openid: openid

          },
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
           
            var message = res.data.message;
            var userInfo = res.data.userInfo;
            if (message == "1") {
              wx.setStorage({
                key: "user_info",
                data: userInfo
              })
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

          
            }
            else if (message == "2") {
              wx.showToast({
                title: '验证码错误',
                icon: 'success',
                duration: 1000
              })

            } else if(message =="3"){
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




  },

  yanz: function (e) {
     this.setData({
       fgdisabled: "true"

    })

    var that = this;
  

    var shouji = this.data.namegg;
    var name1 = this.data.ldok;

    console.log(shouji)
    if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(shouji))) {
      wx.showToast({
        title: '手机号码不正确',
        icon: 'success',
        duration: 1000
      })
      that.setData({
        fgdisabled: ""

      })
      return false;
    }




     wx.getStorage({
      key: 'openid',
      success: function (res) {
       
       var  openid = res.data
    wx.request({
      url: servser + '/pop-wx-web/wxWebController/sendVerificationCode1', //仅为示例，并非真实的接口地址
      data: {
        mobblecode: shouji,
        openid: openid

      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
       
        if (res.data.message == 3) {
          wx.showToast({
            title: '该手机尚未注册',
            icon: 'success',
            duration: 1000
          })
          that.setData({
            fgdisabled: ""

          })
          // that.setData({
          //   disabled: "",

          // })

        } else if (res.data.message == 2) {
          wx.showToast({
            title: '网络错误',
            icon: 'success',
            duration: 1000
          })
          that.setData({
            fgdisabled: ""

          })
        } else {
          countdown = 60;
          var s = setInterval(function () {

            if (countdown == 0) {
              that.setData({
                yanz: "yanz",
                yanzzi: "获取验证码",
                fgdisabled: "",
                yanzyanz: "yanz"


              })
              that.setData({
                fgdisabled: ""

              })


              clearInterval(s);

              return false;
            } else {
              countdown--;
              that.setData({
                yanz: "yanzz",
                yanzzi: countdown,
                fgdisabled: "true"



              })
           

            }

          }, 1000)


        }
      }
    })
      }
     })

  },

  
  // onShow:function(){
  //   var that=this;
  //    that.setData({

  //     username:"",
  //     password:""
  //   })
  // },
  onLoad: function (options) {
    wx.getStorage({
      key: 'session_key',
      success: function (res) {
       
        session_key = res.data
      }
    })

    wx.getStorage({
      key: 'iv',
      success: function (res) {
       
        iv = res.data
      }
    })
    wx.getStorage({
      key: 'encryptedData',
      success: function (res) {
       
        encryptedData = res.data
      }
    })


    opp = options;
    //     if(opp.noticeId!=null){

    //                   wx.request({
    //                       url: servser+'/dudu/user/wx/binding', //仅为示例，并非真实的接口地址
    //                       data: {
    //                         userid: opp.userid
    //                       },
    //                       header: {
    //                           'content-type': 'application/json'
    //                       },
    //                       success: function(res){


    // wx.setStorage({
    //      key:"key",
    //      data:res.data.Msg,

    //   })


    //                         if(res.data.Msg.token!=undefined&&res.data.Msg.token!=null){

    //                           var id=opp.noticeId
    //                               wx.navigateTo({

    //                                   url:"../../pages/xiangqing/xiangqing?id="+id+"&token="+token

    //                                })

    //                         }
    //                       }
    //                     })

    //               }
    //   wx.login({
    //     success: function(res){

    //       if (res.code) {
    //         //发起网络请求
    //         wx.request({
    //           url: servser+'/dudu/user/ssoLogin',
    //           data: {
    //             code: res.code,
    //             AppID:"wxbefe2bf3941efe1a",
    //             AppSecret:"71c300a2f9e560457f7001fffc158978",
    //           }
    //         })
    //       } else {
    //         console.log('获取用户登录态失败！' + res.errMsg)
    //       }
    //     }
    //   });

    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender //性别 0：未知、1：男、2：女 
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country

      }
    })
  },
  ff: function () {




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
    var that = this;

    //  if(this.data.username=="admin"){
    //     return false;
    // }
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


  




  },




})
wx.getStorage({
  key: 'key',
  success: function (res) {

  }
})


