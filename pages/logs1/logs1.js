//logs.js


var servser = getApp().data.servsers;
var indexArray = [];
var selectedbroker = "";
var brokerNameArray = [];
Page({
  data: {
    logs: [],
    userType: "",
    stackCode: "",
    touxiang: "",
    wxname: "",
    brokerName: "",
    email: "",
    tel: "",
    cc: "",
    dd: "",
    array1: ["董秘", "券商", "其他"],
    list: "list",
    sso: "sso",
    ssoo: "ssoo",
    list1: "list"

  },
  tuichu: function () {
    // wx.redirectTo({


    //   url: "../../pages/denglu/denglu",

    // })

  },

  bindPickerChange: function (e) {
   ;


    this.setData({
      index: e.detail.value
    })

    if (this.data.index == "1") {
      this.setData({
        list: "lists",
        sso: "ssoo",
        ssoo: "",
        input4: "",
        input5: "",
      })

    }
    if (this.data.index == "2") {
      this.setData({
        list: "lists",
        sso: "ssoo",
        ssoo: "ssoo",
        list1: "ssoo",
        input4: "",
        input5: "",
        index1: "",

      })

    }
    if (this.data.index == "0") {
      this.setData({
        list: "list",
        sso: "",
        ssoo: "ssoo",
        list1: "list"
      })

    }
  },

  input2: function (e) {
    this.setData({
      input2: e.detail.value
    })
  },
  input3: function (e) {
    this.setData({
      input3: e.detail.value
    })
  },
  input4: function (e) {
    this.setData({
      input4: e.detail.value
    })
  },
  input5: function (e) {
    this.setData({
      input5: e.detail.value
    })
  },


  picker: function (e) {
    this.setData({
      index1: e.detail.value
    })
   
    selectedbroker = indexArray[e.detail.value];

  },

  baocun: function () {
    var that = this;

    var index = that.data.index;

    var input2 = that.data.input2;
    var input3 = that.data.input3;
    var input4 = that.data.input4;
    var input5 = that.data.input5;
    var index1 = that.data.index1;
    wx.getStorage({
      key: 'user_info',
      success: function (res) {
      
        var id = res.data.id;

        wx.request({

          url: servser + '/pop-wx-web/wxWebController/updateUserInfo',
          data: {
            index: index,
            input2: input2,
            input3: input3,
            input4: input4,
            input5: input5,
            index1: index1,
            id: id



            //  openId: getApp().data.openid
          },
          header: {
            'content-type': 'json',
          },
          success: function (res) {
            
            var userInfo = res.data.userInfo
            var messgae = res.data.messgae
            if (messgae == "1") {
              wx.showToast({
                title: '修改成功',
                icon: 'success',
                duration: 1000
              })

              wx.setStorage({
                key: "user_info",
                data: userInfo
              })

            }
          }
        })
      }
    })



  },

  onLoad: function (options) {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        var iv = res.iv
        var encryptedData = res.encryptedData;
        wx.login({
          success: function (res) {
            
            var code = res.code;
            //  请求code ， 获取user_info ， 如果没有跳转到登陆页面
            wx.request({
              url: 'https://gf.dudao360.com/pop-wx-web/wxWebController/getSessionKeyAndUserInfo', //仅为示例，并非真实的接口地址
              data: {
                grant_type: 'client_credential',
                iv: iv,
                encryptedData: encryptedData,
                js_code: code
              },
              header: {
                'content-type': 'application/json'
              },
              success: function (res) {
                var userInfo = res.data.userInfo;;
                if (userInfo == null) {
                  wx.navigateTo({
                    url: "../denglu/denglu"
                    // url: "../logs/logs"
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
                  wx.switchTab({
                    url: "../logs/logs"
                  })
                }
              }
            })
          }
        })
      },
       fail: function () {
        wx.showModal({
          title: '提示',
          showCancel: false,
          content: '你已经拒绝授权，请删除小程序重新进入',
          success: function (res) {
            if (res.confirm) {
              
              wx.navigateTo({
                url: "/pages/shuaixuan/shuaixuan"

              })
            } else if (res.cancel) {
             
            }
          }
        })

      }
    })
    


  }


})




