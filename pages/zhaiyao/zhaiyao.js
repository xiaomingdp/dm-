// pages/zhaiyao/zhaiyao.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    console.log(111)
    wx.getSetting({
      success(res) {
        if (!res['scope.userInfo']) {
          wx.showModal({
            title: '提示',
            showCancel: false,
            content: '你已经拒绝授权，请删除小程序重新进入',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定');
                wx.navigateTo({
                  url: "/pages/zhaiyao/zhaiyao"

                })
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
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