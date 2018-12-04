// pages/mach/mach.js
var session_key = null;
var iv = null;
var encryptedData = null;
var js_code = null;

Page({
  data:{

    hiddenLoading:"",
    hiddenLoading1: "",

  },
  onLoad:function(options){
    
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    var session_key = null;
    var iv = null;
    var encryptedData = null;
    var js_code = null;

var that=this;
    wx.login({
      success: function (res) {
        console.log(res.code);
        console.log("准备执行jscode2");
        var code = res.code;
        // 通过code 获取 存放seesion_key的map的键
        wx.setStorage({
          key: "js_code",
          data: res.code
        })
      }
    }


    );

    // }

    wx.getSetting({
      success: res => {
        console.log(res)
        if (res.authSetting['scope.userInfo']) {
          that.setData({
            hiddenLoading1: "true"
          })
          console.log('已经授权')
          // 已经授权，可以直接调用 getUserInfo 
          wx.getUserInfo({
            withCredentials: "true",
            success: function (res) {
              wx.getStorage({
                key: 'session_key',
                success: function (res) {

                }
              })
              encryptedData = res.encryptedData;
              iv = res.iv;
              wx.setStorage({
                key: "encryptedData",
                data: encryptedData
              })

              wx.setStorage({
                key: "iv",
                data: iv
              })

              var userInfo = res.userInfo
              var nickName = userInfo.nickName
              var avatarUrl = userInfo.avatarUrl
              var gender = userInfo.gender //性别 0：未知、1：男、2：女
              var province = userInfo.province
              var city = userInfo.city
              var country = userInfo.country


              wx.setStorage({
                key: "user_info",
                data: ""
              })

              wx.login({
                success: function (res) {

                  var code = res.code;
                  // 通过code 获取 存放seesion_key的map的键
                  wx.setStorage({
                    key: "js_code",
                    data: res.code
                  })

                  wx.request({
                    url: 'https://api.weixin.qq.com/sns/jscode2session', //仅为示例，并非真实的接口地址
                    data: {
                      appid: "wxf6c2cb8aee1cf94e",
                      secret: "2fdd5872ea4ef116910632b4f0e423e4",
                      js_code: code,
                      grant_type: "authorization_code"
                    },
                    header: {
                      'content-type': 'application/json'
                    },
                    success: function (res) {

                      wx.setStorage({
                        key: "openid",
                        data: res.data.openid
                      })


                      clearInterval(getApp().data.pageTimer);
                      wx.getStorage({
                        key: 'iv',
                        success: function (res) {

                          iv = res.data;
                          wx.getStorage({
                            key: 'js_code',
                            success: function (res) {

                              js_code = res.data;
                              wx.getStorage({
                                key: 'encryptedData',
                                success: function (res) {

                                  encryptedData = res.data;
                                  wx.request({
                                    url: 'https://www.dudao360.com/pop-wx-web/wxWebController/getSessionKeyAndUserInfo', //仅为示例，并非真实的接口地址
                                    data: {
                                      grant_type: 'client_credential',
                                      iv: iv,
                                      encryptedData: encryptedData,
                                      js_code: js_code
                                    },
                                    header: {
                                      'content-type': 'application/json'
                                    },
                                    success: function (res) {

                                      if (res.data.message == 3 || res.data.message == 2) {


                                        wx.login({
                                          success: function (res) {
                                            console.log(res.code);
                                            console.log("准备执行jscode2");
                                            var js_code = res.code;
                                            wx.getUserInfo({
                                              withCredentials: "true",
                                              success: function (res) {

                                                // wx.getStorage({
                                                //   key: 'session_key',
                                                //   success: function (res) {
                                                //    
                                                //   }
                                                // })
                                                // encryptedData = res.encryptedData;
                                                // iv = res.iv;
                                                // wx.setStorage({
                                                //   key: "encryptedData",
                                                //   data: encryptedData
                                                // })

                                                // wx.setStorage({
                                                //   key: "iv",
                                                //   data: iv
                                                // })
                                                var encryptedData = res.encryptedData;
                                                var iv = res.iv;

                                                var userInfo = res.userInfo
                                                var nickName = userInfo.nickName
                                                var avatarUrl = userInfo.avatarUrl
                                                var gender = userInfo.gender //性别 0：未知、1：男、2：女
                                                var province = userInfo.province
                                                var city = userInfo.city
                                                var country = userInfo.country



                                                // 通过code 获取 存放seesion_key的map的键
                                                wx.request({
                                                  url: 'https://www.dudao360.com/pop-wx-web/wxWebController/getSessionKeyAndUserInfo', //仅为示例，并非真实的接口地址
                                                  data: {
                                                    grant_type: 'client_credential',
                                                    iv: iv,
                                                    encryptedData: encryptedData,
                                                    js_code: js_code
                                                  },
                                                  header: {
                                                    'content-type': 'application/json'
                                                  },
                                                  success: function (res) {

                                                    that.data.off = true;

                                                    if (res.data.message == 3 || res.data.message == 2) {
                                                      wx.showToast({
                                                        title: '服务器错误',
                                                        icon: 'success',
                                                        duration: 2000
                                                      })

                                                    } else {
                                                      wx.setStorage({
                                                        key: "unionId",
                                                        data: res.data.unionId
                                                      })

                                                      wx.setStorage({
                                                        key: "user_info",
                                                        data: res.data.userInfo
                                                      })
                                                      that.setData({
                                                        hiddenLoading: "true"
                                                      })
                                                      wx.switchTab({
                                                        url: "../index1/index1"

                                                      })
                                                    }
                                                  }
                                                })
                                              }
                                            })
                                          }
                                        })

                                      } else {


                                        wx.setStorage({
                                          key: "unionId",
                                          data: res.data.unionId
                                        })

                                        wx.setStorage({
                                          key: "user_info",
                                          data: res.data.userInfo
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
                    }
                  })




                }
              })

            },
            fail: function () {
              // wx.showModal({
              //   title: '提示',
              //   showCancel: false,
              //   content: '你已经拒绝授权，请删除小程序重新进入',
              //   success: function (res) {
              //     if (res.confirm) {
              //       console.log('用户点击确定');

              //       wx.navigateTo({
              //         url: "/pages/zhaiyao/zhaiyao"

              //       })
              //     } else if (res.cancel) {
              //       console.log('用户点击取消')
              //     }
              //   }
              // })

            }
          })
        } else {
          that.setData({
            hiddenLoading: "false"
          });
          this.onShow();
          
        }
      }
    })
   

    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})