var myDate = new Date();
var day = myDate.getDate();

var servser = getApp().data.servsers;


Page({
  data: {



  },
  kaishi: function () {
    wx.navigateTo({
      url: "../../pages/datiye/datiye"
    })


  },
  

 
  onLoad: function (options) {
    var that=this;
    wx.getStorage({
      key: 'user_info',
      success: function (res) {
       var user_info = res.data
       if (res.data == null || res.data == undefined || res.data == "") {
          wx.navigateTo({
            url: "../denglu/denglu"

          })

        }
        else{
          wx.request({
            url: servser + '/pop_exam_api/frontend/history', //仅为示例，并非真实的接口地址
            data: {
              userid: user_info.phoneNumber,
            },
            header: {
              'content-type': 'application/json'
            },
            success: function (res) {
            
              that.setData({

                history: res.data.history,

              })


            }

          })
        }

     
      }
    })



  },
  onShow: function (options) {
    var that = this;
    wx.getStorage({
      key: 'user_info',
      success: function (res) {
        var user_info = res.data
        if (res.data == null || res.data == undefined || res.data == "") {
          wx.navigateTo({
            url: "../denglu/denglu"

          })

        }
        else {
          wx.request({
            url: servser + '/pop_exam_api/frontend/history', //仅为示例，并非真实的接口地址
            data: {
              userid: user_info.phoneNumber,
            },
            header: {
              'content-type': 'application/json'
            },
            success: function (res) {
            
              that.setData({

                history: res.data.history,

              })


            }

          })
        }


      }
    })



  },

})









