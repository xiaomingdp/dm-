var myDate = new Date();
var day = myDate.getDate();

var servser = getApp().data.servsers;
var cuowu = [];
var obj;
// 展示完页面  清掉缓存 （onload最后）

Page({
  data: {
    cuowuti: "只显示错误题目",
    zong: 0,
    list: "list",
    listq: "list144",

    quanbu: "quanbu",
    cuowu: [1, 1, 1],
    hiddenLoading: ""




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
  quanbu: function () {
    var that = this;
    if (this.data.cuowuti == "只显示错误题目") {
      this.setData({
        cuowuti: "显示全部题目",
        list: "list144",
        listq: "list",


      })
    }
    else {
      this.setData({
        cuowuti: "只显示错误题目",
        list: "list",
        listq: "list144",




      })

    }
  },
  // kaishi: function () {
  //   wx.navigateTo({
  //     url: "../../pages/datiye/datiye"
  //   })


  // },
  // onLoad: function () {
  //   var that=this;
  //   that.setData({
  //     hiddenLoading: ""
  //   })
  //   var res = {};
  //   res.data = wx.getStorageSync('obju');
  //   if (res.data == "" || res.data =="defined"||res.data==null){
  //     wx.showToast({
  //       title: '答案解析失败',
  //       icon: 'success',
  //       duration: 2000
  //     })
  //   }
 
  //   var itemss = res.data.items;
  //   for (var i = 0; i < itemss.length; i++) {
  //     var u1 = itemss[i];
  //     u1.jiexiti =""
  //      u1.jiexiti =u1.description
  //     // u1.jiexiti = "建立健全自律监管、中介督导、社会监督为一体的市场约束机制，能够通过自律、市场、公司自治解决的事项，行政力量原则上不介入。三是建立健全事中事后监管机制，强化行政执法，坚决查处欺诈、虚假披露、内幕交易、操纵市场等违法违规行为。---出处"
  //     var q11 = u1.jiexiti;
  //     if (q11 != "") {
  //       var q12 = q11.indexOf("---");
      
  //       if (q12 != "-1") {
  //         var jiexiti = q11.slice("0", q12);
  //         var chuchu = q11.slice(q12 + 3);

  //         u1.jiexiti = jiexiti;
  //         u1.chuchu = chuchu;

  //       }
  //       else {
  //         u1.chuchu = "";

  //       }
  //     }
  //     else {
  //       u1.jiexiti = "暂无"
  //       u1.chuchu="";
  //     }
  //   }
  
  //   var jieguo=res

  //   cuowu = [];
  //   var quanbu = [];
  //   var cuowuList = [];
  //   var that = this;
  //   // var res = {};
  //   // var jieguo = JSON.parse(obj);
  //   // res.data = JSON.parse(obj);
  //   var i = 0;
  //   var danxuan = 0;
  //   var duoxuan = 0;
  //   var panduan = 0;
  //   for (var fen in res.data.type_mark) {
  //     if (i == 0) {
  //       danxuan = res.data.type_mark[fen];
  //     } else if (i == 1) {
  //       duoxuan = res.data.type_mark[fen];
  //     }
  //     else if (i == 2) {
  //       panduan = res.data.type_mark[fen];
  //     }
  //     i++;
  //   }
  //   that.setData({
  //     zong: res.data.mark,
  //     danxuan: danxuan,
  //     duoxuan: duoxuan,
  //     panduan: panduan,
  //     quanbu1: jieguo.items,
  //     cuowu1: jieguo.wrong_items,
  //     vo: res.data.type_mark,
     
  //   });
  //   wx.setStorage({
  //     key: "obj",
  //     data: ""
  //   })
  //   that.setData({
  //     hiddenLoading:"true"
  //   })
  // },


  onShow: function () {
   
    var res = {};
    res.data = wx.getStorageSync('obju');
    var itemss = res.data.items;
    for (var i = 0; i < itemss.length; i++) {
      var u1 = itemss[i];
      u1.jiexiti =""
       u1.jiexiti =u1.description

      // u1.jiexiti = "建立健全自律监管、中介督导、社会监督为一体的市场约束机制，能够通过自律、市场、公司自治解决的事项，行政力量原则上不介入。三是建立健全事中事后监管机制，强化行政执法，坚决查处欺诈、虚假披露、内幕交易、操纵市场等违法违规行为。---出处"
      var q11 = u1.jiexiti;
      if (q11 != "") {
        var q12 = q11.indexOf("---");
       
        if (q12 != "-1") {
          var jiexiti = q11.slice("0", q12);
          var chuchu = q11.slice(q12 + 3);

          u1.jiexiti = jiexiti;
          u1.chuchu = chuchu;

        }
        else {
          u1.chuchu ="";

        }
      }
      else {
        u1.jiexiti = "暂无"
        u1.chuchu="";
      }
    }


    var itemss = res.data.wrong_items;
    for (var i = 0; i < itemss.length; i++) {
      var u1 = itemss[i];
      u1.jiexiti =""
      u1.jiexiti =u1.description

      // u1.jiexiti = "建立健全自律监管、中介督导、社会监督为一体的市场约束机制，能够通过自律、市场、公司自治解决的事项，行政力量原则上不介入。三是建立健全事中事后监管机制，强化行政执法，坚决查处欺诈、虚假披露、内幕交易、操纵市场等违法违规行为。---出处"
      var q11 = u1.jiexiti;
      if (q11 != "") {
        var q12 = q11.indexOf("---");
      
        if (q12 != "-1") {
          var jiexiti = q11.slice("0", q12);
          var chuchu = q11.slice(q12 + 3);

          u1.jiexiti = jiexiti;
          u1.chuchu = chuchu;

        }
        else {
          u1.chuchu = "";

        }
      }
      else { 
        u1.jiexiti = "暂无"
        u1.chuchu="";
      }
    }
   
    var jieguo = res.data
    var jiexi = res.data.items
 
    cuowu = [];
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
      hiddenLoading: "true"
    });
    wx.setStorage({
      key: "obj",
      data: ""
    })



  }

})









