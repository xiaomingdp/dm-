// pages/shuaixuan/shuaixuan.js
var obj;
Page({
  data:{
    jibai: '在 新三板董秘助手考试 中\n击败全国99%的用户',
    percent:"0",
    zong:"0"
    
    

  },
  onShareAppMessage: function () {
    return {
      title: '获取更多考试咨询，请关注新三板董秘助手公众号',
      path: '/pages/mach/mach',
      desc: "获取更多考试咨询，请关注新三板董秘助手公众号",
      success: function (res) {

        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  siliao:function(){
    wx.previewImage({
      current: '', // 当前显示图片的http链接
      urls: ["https://www.dudao360.com/tmp/qpo.png"] // 需要预览的图片http链接列表
    })

  },
  onLoad:function(options){
    obj = options.obj
   
    var that=this;
  
    var res = {};
    // var jieguo = JSON.parse(obj);
    res.data = wx.getStorageSync('obju');
    // res.data = JSON.parse(obj);
   
  
    var jieguo = res.data
    var cuowu = [];
    var quanbu = [];
    var cuowuList = [];
    var that = this;
    // var res = {};
    // var jieguo = JSON.parse(obj);
    // res.data = JSON.parse(obj);
    var i = 0;
    var danxuan = 0;
    var duoxuan = 0;
    var panduan = 0;
    for (var fen in res.data.type_mark) {
      if (i == 0) {
        danxuan = res.data.type_mark[fen];
      } else if (i == 1) {
        duoxuan = res.data.type_mark[fen];
      }
      else if (i == 2) {
        panduan = res.data.type_mark[fen];
      }
      i++;
    }
    
    that.setData({
      zong: res.data.mark,
      danxuan: danxuan,
      duoxuan: duoxuan,
      panduan: panduan,
      quanbu1: jieguo.items,
      cuowu1: jieguo.wrong_items,
      vo: res.data.type_mark,
      hiddenLoading: "true",
      percent: jieguo.percent
    });
    // wx.previewImage({
    //   current: '', // 当前显示图片的http链接
    //   urls: ["https://www.dudao360.com/tmp/lop.jpg"] // 需要预览的图片http链接列表
    // })
    // 页面初始化 options为页面跳转所带来的参数

    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
        that.setData({
          touxiang: avatarUrl,
          wxname: nickName

        })
      }
    })
    wx.setStorage({
      key: "obj",
      data: ""
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow: function (){
    
    var that=this;
    var res = {};
    res.data = wx.getStorageSync('obju');
    // var jieguo = JSON.parse(obj);
    // res.data = JSON.parse(obj);
  
    var jieguo = res.data
    var cuowu = [];
    var quanbu = [];
    var cuowuList = [];
    var that = this;
    // var res = {};
    // var jieguo = JSON.parse(obj);
    // res.data = JSON.parse(obj);
    var i = 0;
    var danxuan = 0;
    var duoxuan = 0;
    var panduan = 0;
    for (var fen in res.data.type_mark) {
      if (i == 0) {
        danxuan = res.data.type_mark[fen];
      } else if (i == 1) {
        duoxuan = res.data.type_mark[fen];
      }
      else if (i == 2) {
        panduan = res.data.type_mark[fen];
      }
      i++;
    }
    
    that.setData({
      zong: res.data.mark,
      danxuan: danxuan,
      duoxuan: duoxuan,
      panduan: panduan,
      quanbu1: jieguo.items,
      cuowu1: jieguo.wrong_items,
      vo: res.data.type_mark,
      hiddenLoading: "true",
      percent: jieguo.percent
    });


  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  chakan:function(){
   
    var res = {};
    res.data = wx.getStorageSync('obju');
    wx.navigateTo({

      url: "../../pages/jieguo/jieguo"


    })

  }
})