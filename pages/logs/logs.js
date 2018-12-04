//logs.js


var servser = getApp().data.servsers;
var indexArray = [];
var selectedbroker = "";
var brokerNameArray = [];
var idd=[];
var brokerList;
var idp;
var poi;
var session_key;
var iv;
var encryptedData;
var js_code;

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
    wx.redirectTo({


      url: "../../pages/denglu/denglu",

    })

  },
  picker1:function(e){
   
    this.setData({
      index1: e.detail.value
      
    })

  },
  onShareAppMessage: function () {
    return {
      title: '新三板董秘助手',
      path: '/pages/mach/mach'
    }
  },

  bindPickerChange: function (e) {
   


    this.setData({
      index: e.detail.value
    })

    if (this.data.index == "1") {
     
      this.setData({
        list: "lists",
        sso: "ssoo",
        ssoo: "",
        list1: "list",
        input4: "",
        input5: "",
        index1: "",

      })

    }
    if (this.data.index == "2") {
      this.setData({
        list: "lists",
        sso: "ssoo",
        ssoo: "ssoo",
        list1: "ssoo",
        input4:"",
        input5:"",
        index1:"",
       
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
   
    for (var p = 0; p < brokerNameArray.length;p++){
      if (brokerNameArray[p] == brokerNameArray[index1]){
         idp = idd[p];
          
      }
    }
  
   
    if(index=="0"){
    if (input4 == null) {
      wx.showToast({
        title: '请输入证券代码',
        icon: 'success',
        duration: 1000
      })
      return false;
    }
    if (input5 == null) {
      wx.showToast({
        title: '请输入证券简称',
        icon: 'success',
        duration: 1000
      })
      return false;
    }
    if (input2.length > 15) {
      wx.showToast({
        title: '请输入15位以内联系人',
        icon: 'success',
        duration: 1000
      })
      return false;

    }
    if (input4.length > "6" || input4.length < "6") {
      wx.showToast({
        title: '证券代码必须为6位',
        icon: 'success',
        duration: 1000
      })
      return false;
    }

    if (input5.replace(/[^\u0000-\u00ff]/g, "aa").length < 6 || input5.replace(/[^\u0000-\u00ff]/g, "aa").length > 8) {
    
      wx.showToast({
        title: '证券简称为3-4个字符',
        icon: 'success',
        duration: 1000
      })
      return false;
    }
    if(index1===""){
      wx.showToast({
        title: '主办券商为空',
        icon: 'success',
        duration: 1000
      })
      return false;

    }
    if (index1 == "0") {
    
     
    }
   
    }
    if (index=="1"){
      if (input2.length > 15) {
        wx.showToast({
          title: '请输入15位以内联系人',
          icon: 'success',
          duration: 1000
        })
        return false;

      }
      if (index1 == "") {
        wx.showToast({
          title: '券商为空',
          icon: 'success',
          duration: 1000
        })
        return false;

      }
      else{

      }

    }
    if (index == "2") {
      if (input2.length > 15) {
        wx.showToast({
          title: '请输入15位以内联系人',
          icon: 'success',
          duration: 1000
        })
        return false;

      }


    }
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
            index1: idp,
            id: id



            //  openId: getApp().data.openid
          },
          header: {
            'content-type': 'json',
          },
          success: function (res) {
            
            var userInfo = res.data.userInfo
            var messgae = res.data.messgae
            if (messgae == "1"){
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
            else{
              wx.showToast({
                title: '修改失败',
                icon: 'success',
                duration: 1000
              })

            }
          }
        })
      }
    })



  },
  onLoad: function (options) {
    
    var that = this;

    wx.login({
      success: function (res) {
       
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
                                      
                                      var js_code = res.code;
                                      wx.getUserInfo({
                                        withCredentials: "true",
                                        success: function (res) {
                                        
                                          // wx.getStorage({
                                          //   key: 'session_key',
                                          //   success: function (res) {
                                          //     console.log(res.data)
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
                                  }).

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
        wx.showModal({
          title: '提示',
          showCancel: false,
          content: '你已经拒绝授权，请删除小程序重新进入',
          success: function (res) {
            if (res.confirm) {
              

              wx.navigateTo({
                url: "/pages/zhaiyao/zhaiyao"

              })
            } else if (res.cancel) {
             
            }
          }
        })

      }
    })
    var index = that.data.index;

    var input2 = that.data.input2;
    var input3 = that.data.input3;
    var input4 = that.data.input4;
    var input5 = that.data.input5;
    var index1 = that.data.index1;
    wx.getStorage({
      key: 'user_info',
      success: function (res) {
       
       
        for (var i = 0; i < idd.length; i++) {
          if (idd[i] == id) {
           
            that.setData({
              value: idd[i]

            })
          }

        }

    if (res.data == null || res.data == undefined || res.data == "") {
      wx.navigateTo({
        url: "../denglu/denglu"
      })

    }
 


       


       else if (res.data.userType == "1") {
      var id = res.data.brokerID;
         
          that.setData({
            list: "lists",
            sso: "ssoo",
            ssoo: "",
            input4: "",
            input5: "",
            index: "1",
            input2: res.data.contactPerson,
            input3: res.data.phoneNumber,
            list1: "list",

            index1: res.data.brokerID
          })

        }
        else  if (res.data.userType == "2") {
      var id = res.data.brokerID;
          that.setData({
            list: "lists",
            sso: "ssoo",
            ssoo: "ssoo",
            list1: "ssoo",
            input4: "",
            input5: "",
            index1: "",
            index: "2",
            input2: res.data.contactPerson,
            input3: res.data.phoneNumber,


          })

        }
        else  if (res.data.userType == "0") {
      var id = res.data.brokerID;
          that.setData({
            list: "list",
            sso: "",
            ssoo: "ssoo",
            list1: "list",
            index: "0",
            input2: res.data.contactPerson,
            input3: res.data.phoneNumber,
            input4: res.data.stockCode,
            input5: res.data.stockShortName,
            // index1: res.data.brokerID
          })

        }
 

      }
    })



    wx.request({

      url: servser + '/pop-wx-web/wxWebController/initUserInfo',
      data: {



        //  openId: getApp().data.openid
      },
      header: {
        'content-type': 'json',
      },
      success: function (res) {

       
        brokerList = res.data.brokerList;
        
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
          idd:idd
        })
        wx.getStorage({
          key: 'user_info',
          success: function (res) {
           
            var id = res.data.brokerID;
            for (var i = 0; i < idd.length; i++) {
              if (idd[i] == id) {
           
                for (var n = 0; n < brokerNameArray.length;n++){
                  if (brokerNameArray[n] == brokerNameArray[i]){
                    that.setData({
                      index1: n

                    })
                  }
                }
             
              }

            }
          }
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


        that.setData({
          touxiang: avatarUrl,


        })
      }
    })
  },
  onShow: function (options) {
    
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
       
     
        for (var i = 0; i < idd.length; i++) {
          if (idd[i] == id) {
          
            that.setData({
              value: idd[i]

            })
          }

        }

    if (res.data == null || res.data == undefined || res.data == "") {
      wx.navigateTo({
        url: "../denglu/denglu"
      })

    }

     



        else if (res.data.userType == "1") {
      var id = res.data.brokerID;
        
          that.setData({
            list: "lists",
            sso: "ssoo",
            ssoo: "",
            input4: "",
            input5: "",
            index: "1",
            input2: res.data.contactPerson,
            input3: res.data.phoneNumber,
            list1: "list",

            // index1: res.data.brokerID
          })

        }
        else if (res.data.userType == "2") {
      var id = res.data.brokerID;
          that.setData({
            list: "lists",
            sso: "ssoo",
            ssoo: "ssoo",
            list1: "ssoo",
            input4: "",
            input5: "",
            index1: "",
            index: "2",
            input2: res.data.contactPerson,
            input3: res.data.phoneNumber,


          })

        }
        else if (res.data.userType == "0") {
      var id = res.data.brokerID;
          that.setData({
            list: "list",
            sso: "",
            ssoo: "ssoo",
            list1: "list",
            index: "0",
            input2: res.data.contactPerson,
            input3: res.data.phoneNumber,
            input4: res.data.stockCode,
            input5: res.data.stockShortName,
            // index1: res.data.brokerID
          })

        }

  

      }
    })



    wx.request({

      url: servser + '/pop-wx-web/wxWebController/initUserInfo',
      data: {



        //  openId: getApp().data.openid
      },
      header: {
        'content-type': 'json',
      },
      success: function (res) {

       
        brokerList = res.data.brokerList;
       
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
        wx.getStorage({
          key: 'user_info',
          success: function (res){
            
            var id = res.data.brokerID;
            for (var i = 0; i <idd.length; i++) {
              if (idd[i] == id) {
                console.log(brokerNameArray[i]);
                for (var n = 0;n < brokerNameArray.length; n++) {
                  if (brokerNameArray[n] == brokerNameArray[i]) {
                    that.setData({
                      index1: n

                    })
                  }
                }

              }

            }
          }
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


        that.setData({
          touxiang: avatarUrl,


        })
      }
    })

  




  }


})




