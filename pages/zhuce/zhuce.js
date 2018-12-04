var myDate = new Date();
var day = myDate.getDate();
var servser = getApp().data.servsers;

var opp = null;
var openid = "";
var countdown = 5;
var session_key = null;
var iv = null;
var encryptedData = null;
var indexArray = [];
var selectedbroker = "";
var brokerNameArray = [];
var unionId = null;
var openid=null;
var servser = getApp().data.servsers;
var indexArray = [];
var selectedbroker = "";
var brokerNameArray = [];
var idd = [];
var brokerList;
var idp;
var poi;

Page({
  data: {
    listarr: ["dsfdfs", 2, 3, 4, 5],
    username: "",
    password: "1234567890Aa",
    btn: "btn",
    sssd: true,
    yanz: "yanz",
    yanzzi: "获取验证码",
    countdown: 60,
    array1: ["董秘", "券商", "其他"],
    horder: "请选择用户类型:",
    horderr: "请选择主办券商",
    ssoo: "ssoo",
    ss: "ss",
    as: "ss",
    yanzyanz: "yanz",
    shanchu: "shanchuu",
    yanjing: "yanjingg",
    yanjing1: "https://www.dudao360.com/tmp/yanjing.png",
    mimaleix: "false",
    color: "color:#afafaf"





  },

  name1: function (e) {
    var that = this
    this.setData({
      name1: e.detail.value,
      shanchu: "shanchu"
    })
  },
  yanz: function (e) {
    var that = this;
   
    that.setData({
      disabled: "true"

    })
    var shouji = that.data.name1;
    if (!(/^1[3|4|5|8|7][0-9]\d{4,8}$/.test(shouji))) {
      wx.showToast({
        title: '手机号码不正确',
        icon: 'success',
        duration: 1000
      })
      that.setData({
        disabled: ""

      })

      return false;
    }
    if (shouji.length != "11") {
      wx.showToast({
        title: '手机号码不足11位',
        icon: 'success',
        duration: 1000
      })
      that.setData({
        disabled: ""

      })
      return false;

    }







    wx.request({
      url: servser + '/pop-wx-web/wxWebController/sendVerificationCode', //仅为示例，并非真实的接口地址
      data: {
        mobblecode: that.data.name1
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
       
        if (res.data.message != null) {
          if (res.data.message == 1) {
            wx.showToast({
              title: '手机号码已经注册',
              icon: 'success',
              duration: 1000
            })

            that.setData({
              disabled: ""

            })


          }

          else if (res.data.message == 2) {

            wx.showToast({
              title: '发送验证码失败',
              icon: 'success',
              duration: 1000
            })
            that.setData({
              yanzyanz: "",
              disabled: ""

            })

          }

        }

        else {
          countdown = 60;
          var s = setInterval(function () {

            if (countdown == 0) {
              that.setData({
                yanz: "yanz",
                yanzzi: "获取验证码",
                disabled: "",
                yanzyanz: "yanz"


              })


              clearInterval(s);

              return false;
            } else {
              countdown--;
              that.setData({
                yanz: "yanzz",
                yanzzi: countdown,
                disabled: "true"



              })

            }

          }, 1000)

        }
      }
    })

  },



  bindPickerChange: function (e) {
    


    this.setData({
      index: e.detail.value,
      horder: ""
    })

    if (this.data.index == "1") {
      this.setData({
        ss: "sss",
        name4: "",
        name5: "",
        as: "ss",
        sso:"sss",
        ssoo:""
      })

    }
    if (this.data.index == "2") {
      this.setData({
        as: "sss",
        ss: "sss",
        name4: "",
        name5: "",
        index1: ""
      })

    }
    if (this.data.index == "0") {
      this.setData({
        as: "ss",
        ss: "ss",

      })

    }
  },
  picker: function (e) {
    var that = this;
    this.setData({
      index1: e.detail.value,
      horderr: ""
    })
   
    selectedbroker = indexArray[e.detail.value];
    
    if (this.data.horder != "请选择用户类型:" && this.data.name1 != undefined && this.data.name3 != undefined && this.data.name2 != undefined && this.data.name4 != undefined && this.data.name5 != undefined && this.data.name6 != undefined && this.data.horderr != "请选择主办券商") {
      that.setData({

        btn: "btnn"
      })


    }
    if (this.data.index == "2" && this.data.name1 != undefined && this.data.name3 != undefined && this.data.name2 != undefined &&  this.data.name6 != undefined) {
      that.setData({

        btn: "btnn"
      })


    }

  },

  name1: function (e) {
    var that = this;
    
    this.setData({
      name1: e.detail.value,
      shanchu: "shanchu"
    })
   
    if (this.data.horder != "请选择用户类型:" && this.data.name1 != undefined && this.data.name3 != undefined && this.data.name2 != undefined && this.data.name4 != undefined && this.data.name5 != undefined && this.data.name6 != undefined && this.data.horderr != "请选择主办券商") {
      this.setData({

        btn: "btnn"
      })
     

    }
    if (this.data.index == "2" && this.data.name1 != undefined && this.data.name3 != undefined && this.data.name2 != undefined && this.data.name6 != undefined) {
      this.setData({

        btn: "btnn"
      })


    }
  },
  shanchu: function () {
    this.setData({

      name1: "",

    })

  },

  name2: function (e) {
    var that = this;
    this.setData({
      name2: e.detail.value
    })
    if (this.data.horder != "请选择用户类型:" && this.data.name1 != undefined && this.data.name3 != undefined && this.data.name2 != undefined && this.data.name4 != undefined && this.data.name5 != undefined && this.data.name6 != undefined && this.data.horderr != "请选择主办券商") {
      this.setData({

        btn: "btnn"
      })


    }
    if (this.data.index == "2" && this.data.name1 != undefined && this.data.name3 != undefined && this.data.name2 != undefined && this.data.name6 != undefined) {
      this.setData({

        btn: "btnn"
      })


    }
  },
  name3: function (e) {
    if (this.data.horder != "请选择用户类型:" && this.data.name1 != undefined && this.data.name3 != undefined && this.data.name2 != undefined && this.data.name4 != undefined && this.data.name5 != undefined && this.data.name6 != undefined && this.data.horderr != "请选择主办券商") {
      this.setData({

        btn: "btnn"
      })


    }
    if (this.data.index == "2" && this.data.name1 != undefined && this.data.name3 != undefined && this.data.name2 != undefined && this.data.name6 != undefined) {
      this.setData({

        btn: "btnn"
      })


    }
    this.setData({
      name3: e.detail.value,
      yanjing: "yanjing",
    })
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
  name4: function (e) {
    if (this.data.horder != "请选择用户类型:" && this.data.name1 != undefined && this.data.name3 != undefined && this.data.name2 != undefined && this.data.name4 != undefined && this.data.name5 != undefined && this.data.name6 != undefined && this.data.horderr != "请选择主办券商") {
      this.setData({

        btn: "btnn"
      })


    }
    if (this.data.index == "2" && this.data.name1 != undefined && this.data.name3 != undefined && this.data.name2 != undefined && this.data.name6 != undefined) {
      this.setData({

        btn: "btnn"
      })


    }
    this.setData({
      name4: e.detail.value
    })
  },
  name5: function (e) {
    if (this.data.horder != "请选择用户类型:" && this.data.name1 != undefined && this.data.name3 != undefined && this.data.name2 != undefined && this.data.name4 != undefined && this.data.name5 != undefined && this.data.name6 != undefined && this.data.horderr != "请选择主办券商") {
      this.setData({

        btn: "btnn"
      })


    }
    
    this.setData({
      name5: e.detail.value
    });

  },
  name6: function (e) {
    var that = this;
    var shouji = this.data.name1;
    var mima = that.data.name3;
    var name2 = that.data.name2;
    var name4 = that.data.name4;
    var name5 = that.data.name5;
    var name6 = that.data.name6;
    this.setData({
      name6: e.detail.value
    })
    if (this.data.horder != "请选择用户类型:" && this.data.name1 != undefined && this.data.name3 != undefined && this.data.name2 != undefined && this.data.name4 != undefined && this.data.name5 != undefined && this.data.name6 != undefined && this.data.horderr != "请选择主办券商") {
      this.setData({

        btn: "btnn"
      })


    }
    if (this.data.index == "2" && this.data.name1 != undefined && this.data.name3 != undefined && this.data.name2 != undefined && this.data.name6 != undefined) {
      this.setData({

        btn: "btnn"
      })


    }
  },

  // name:function(e){

  //    var that=this;

  //   if(this.data.password!==""&&this.data.username!==""){ 
  //       that.setData({

  //         btn:"btnn"
  //       })
  //   }
  //    if(this.data.password==""&&this.data.username!==""){

  //           that.setData({

  //             btn:"btn"
  //           })


  //    }                                                                                                                          
  //    if(this.data.password!==""&&this.data.username==""){
  //           that.setData({

  //             btn:"btn"
  //           })


  //    }

  //     if(this.data.password==""&&this.data.username==""){
  //           that.setData({ 

  //             btn:"btn"
  //           })


  //    }

  //   this.setData({
  //     username:e.detail.value

  //   })



  // },
  //  password:function(e){

  //    var that=this;
  //   if(this.data.password!==""&&this.data.username!==""){
  //       that.setData({

  //         btn:"btnn"
  //   })
  //   }
  //    if(this.data.password==""&&this.data.username!==""){

  //           this.setData({

  //             btn:"btn"
  //           })


  //    }
  //    if(this.data.password!==""&&this.data.username==""){
  //           that.setData({

  //             btn:"btn"
  //           })


  //    }
  //     if(this.data.password==""&&this.data.username==""){
  //           that.setData({

  //             btn:"btn"
  //           })


  //    }


  //   this.setData({

  //     password:e.detail.value
  //   })



  // },

  // onShow:function(){
  //   var that=this;
  //    that.setData({

  //     username:"",
  //     password:""
  //   })
  // },
  onLoad: function (options) {
    var that = this;

    wx.request({

      url: servser + '/pop-wx-web/wxWebController/initUserInfo',
      data: {



        //  openId: getApp().data.openid
      },
      header: {
        'content-type': 'json',
      },
      success: function (res) {

      
        var brokerList = res.data.brokerList;
      
        indexArray = [];
        brokerNameArray = [];
        for (var i = 0; i < brokerList.length; i++) {
          indexArray[i] = brokerList[i].brokerCode;
          brokerNameArray[i] = brokerList[i].shortName;
          idd[i] = brokerList[i].id;
        }
      
        that.setData({
          indexArray: indexArray,
          brokerNameArray: brokerNameArray,
          idd: idd
        })

      }
    })



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

    wx.getStorage({
      key: 'unionId',
      success: function (res) {
      
        unionId = res.data
      }
    })





  },
  ff: function () {




  },

  

  zhuce: function (e) {
    var that = this;
    var shouji = that.data.name1;
    var mima = that.data.name3;
    var name2 = that.data.name2;
    var name4 = that.data.name4;
    var name5 = that.data.name5;
    var name6 = that.data.name6;
    var index1=that.data.index1;


    for (var p = 0; p < brokerNameArray.length; p++) {
     
      if (brokerNameArray[p] == brokerNameArray[index1]) {
        idp = idd[p];

      }
    }

    if (this.data.horder == "请选择用户类型:") {

      wx.showToast({
        title: '请选择用户类型',
        icon: 'success',
        duration: 1000
      })
      return false;
    }
    if (this.data.index == "0") {
      

      if (shouji == null) {
        wx.showToast({
          title: '请输入手机号码',
          icon: 'success',
          duration: 1000
        })
        return false;
      }

      if (name2 == null) {
        wx.showToast({
          title: '请输入短信验证码',
          icon: 'success',
          duration: 1000
        })
        return false;
      }
      if (mima == null) {
        wx.showToast({
          title: '请输入密码',
          icon: 'success',
          duration: 1000
        })
        return false;
      }
      if (name4 == null) {
        wx.showToast({
          title: '请输入证券代码',
          icon: 'success',
          duration: 1000
        })
        return false;
      }
      if (name5 == null) {
        wx.showToast({
          title: '请输入证券简称',
          icon: 'success',
          duration: 1000
        })
        return false;
      }
      if (this.data.horderr == "请选择主办券商") {

        wx.showToast({
          title: '请选择主办券商',
          icon: 'success',
          duration: 1000
        })
        return false;
      }
      if (name6 == null || name6 == undefined ) {
        wx.showToast({
          title: '请输入联系人',
          icon: 'success',
          duration: 1000
        })
        return false;
      }
      // if (name6.replace(/\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]/g, "").length==0&&name6!==""){
      //   console.log(name6.replace(/\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]/g, "").length)
      //   wx.showToast({
      //     title: '无法解析表情',
      //     icon: 'success',
      //     duration: 1000
      //   })
      //   return false;

      // }
      // if (name5.replace(/\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]/g, "").length == 0 && name5 !== "") {
      //   console.log(name6.replace(/\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]/g, "").length)
      //   wx.showToast({
      //     title: '无法解析表情1',
      //     icon: 'success',
      //     duration: 1000
      //   })
      //   return false;

      // }
    
      var regRule = /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g;
      if (name6.match(regRule)) {
        name6 = name6.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, "");
        wx.showToast({
          title: '无法解析表情',
          icon: 'success',
          duration: 1000
        })
        return false;

        
      } 
      var regRule = /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g;
      if (name5.match(regRule)) {
        name5 = name5.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, "");
        wx.showToast({
          title: '无法解析表情',
          icon: 'success',
          duration: 1000
        })
        return false;


      } 
      var name5 = that.data.name5;
      if (name5.replace(/[^\u0000-\u00ff]/g, "aa").length < 6 || name5.replace(/[^\u0000-\u00ff]/g, "aa").length > 8){
      
        wx.showToast({
          title: '证券简称为3-4字符',
          icon: 'success',
          duration: 1000
        })
        return false;
      }
    

      if (mima.length < "6") {
        wx.showToast({
          title: '请输入6-16位密码',
          icon: 'success',
          duration: 1000
        })
        return false;


      }
      if (mima.length >"16") {
        wx.showToast({
          title: '请输入6-16位密码',
          icon: 'success',
          duration: 1000
        })
        return false;


      }



      if (name4.length > "6" || name4.length < "6") {
        wx.showToast({
          title: '证券代码必须为6位',
          icon: 'success',
          duration: 1000
        })
        return false;
      }

      if (shouji.length != "11") {
        wx.showToast({
          title: '手机号码不足11位',
          icon: 'success',
          duration: 1000
        })
        return false;

      }

    }
    else if (this.data.index == "1") {
      if (shouji == null) {
        wx.showToast({
          title: '请输入手机号码',
          icon: 'success',
          duration: 1000
        })
        return false;
      }

      if (name2 == null) {
        wx.showToast({
          title: '请输入短信验证码',
          icon: 'success',
          duration: 1000
        })
        return false;
      }
      if (mima == null) {
        wx.showToast({
          title: '请输入密码',
          icon: 'success',
          duration: 1000
        })
        return false;
      }


      if (name6 == null) {
        wx.showToast({
          title: '请输入联系人',
          icon: 'success',
          duration: 1000
        })
        return false;
      }


      if (mima.length < 6 || mima.length > 16) {
        wx.showToast({
          title: '请输入6-16位密码',
          icon: 'success',
          duration: 1000
        })
        return false;


      }


      if (shouji.length != "11") {
        wx.showToast({
          title: '手机号码不足11位',
          icon: 'success',
          duration: 1000
        })
        return false;

      }
      if (name6.length > 15) {
        wx.showToast({
          title: '联系人不超过15个字',
          icon: 'success',
          duration: 1000
        })
        return false;
      }
    }
    else if (this.data.index == "2") {
      idp="";
      if (shouji == null) {
        wx.showToast({
          title: '请输入手机号码',
          icon: 'success',
          duration: 1000
        })
        return false;
      }

      if (name2 == null) {
        wx.showToast({
          title: '请输入短信验证码',
          icon: 'success',
          duration: 1000
        })
        return false;
      }
      if (mima == null) {
        wx.showToast({
          title: '请输入密码',
          icon: 'success',
          duration: 1000
        })
        return false;
      }


      if (name6 == null) {
        wx.showToast({
          title: '请输入15位以内联系人',
          icon: 'success',
          duration: 1000
        })
        return false;
      }


      if (mima.length < 6 || mima.length > 16) {
        wx.showToast({
          title: '请输入6-16位密码',
          icon: 'success',
          duration: 1000
        })
        return false;


      }


      if (shouji.length != "11") {
        wx.showToast({
          title: '手机号码不足11位',
          icon: 'success',
          duration: 1000
        })
        return false;

      }
      if (name6.length > 15) {
        wx.showToast({
          title: '请输入15位以内联系人',
          icon: 'success',
          duration: 1000
        })
        return false;

      }


    }

   

    var index = this.data.index
    var index1 = this.data.index1
    var name1 = this.data.name1;
    var name2 = this.data.name2;
    var name3 = this.data.name3;
    var name4 = this.data.name4;
    var name5 = this.data.name5;
    var name6 = this.data.name6;
    if (name6 == null || name6 =="") {
     
      wx.showToast({
        title: '请输入联系人',
        icon: 'success',
        duration: 1000
      })
      return false;
    }
   
    wx.getStorage({
      key: 'openid',
      success: function (res) {
       
        openid = res.data
    
    wx.request({
      url: servser + '/pop-wx-web/wxWebController/saveUser',
      data: {
        unionId: unionId,
        index: index,
        name1: name1,
        name2: name2,
        name3: name3,
        name4: name4,
        name5: name5,
        name6: name6,
        index1: idp,
        openid: openid


      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
       
        var message = res.data.message;
        var userInfo = res.data.userInfo;
        if (message == "1") {
          wx.showToast({
            title: '网络错误,注册失败',
            icon: 'success',
            duration: 2000
          })

        }
        if (message == "2") {
          wx.showToast({
            title: '验证码错误',
            icon: 'success',
            duration: 2000
          })

        }
        if (message == "3") {
          wx.showToast({
            title: '手机号已注册',
            icon: 'success',
            duration: 2000
          })

        }
        if (message == "4") {
       
          wx.setStorage({
            key: "user_info",
            data: userInfo
          })
          wx.showToast({
            title: '注册成功',
            icon: 'success',
            duration: 1000,
            success: function (res) {
              wx.switchTab({
                url: "../index1/index1"

              })
             

            }
         
            
          })
      

        }
      }
    })
      }
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
