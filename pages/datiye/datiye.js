var myDate = new Date();
var day = myDate.getDate();
// 设置变量，在appjs里面 onhide 的 时候  保存到缓存 a
// onshow 读取缓存，读取缓存里面的题目和已经选择的答案  如果a为空  new新题目
var servsers = getApp().data.servsers;
var we = null;
var input1value = null;
var page = 1;
var qqrr = [];
var off = true;
var lsju = [];
var sd = 0;
var arr1 = [];
var brokerName = null;
var info_id = [];
var is = [];
var obj;
var ti = "";
var key = [];
var num = 0;
var answerlist = {};
var answerlist1 = {};
var zgd = [];
var duoxuan = {};
var user_info = {};
var qqqq = getApp().data.pageTimer;
var xiaoshi = null;
var Minutes = null;
var Seconds = null;
var scha = null;
var ww1 = null;
var ww2 = null;
var qqq1 = null;
var a = getApp().data.a;
var xiaoshishezhi = 2;
var fenshezhi = 0;
var miaoshezhi = 0;
var iu = [];
var answer;
var e = null;
var selected = null;
var tr = {};
var xuanxiang = {};
var ggp=0;
var o = [];
var b = [];
var offp = true;
var v = [];
var tp=true;
var lo = [];
var h=true;
var systemtime=0;

Page({

  data: {
    items: [


    ],
    cont: 0,
    zong: "100",
    zanting: "暂停",
    ling: "ling",
    tan: "",
    hiddenLoading: "",
    chuangg: "chuangg",
    modalHidden: "false",
    disabled: "",
    se: "",
    xuanzeticont: 3,
    duoxuancont: 3,
    panduancont: 9,
    list1:[],
    list2: [],
    list3: [],
    height:"60px",
    san:"",
    er:"",
    yi:"",
    top1:"92%",
    title:"title",
    classname1:"classname2"


  },
  // onHide: function () {
  //   // clearInterval(qqqq);
  //   console.log("hidehide333333333333333")
  // },


  zanting: function () {
    var that = this
    if (this.data.zanting == "暂停") {
      clearInterval(qqqq);
      var hous = this.data.hous;
      var fen = this.data.fen;
      var miao = this.data.miao;

      this.setData({
        zanting: "继续",
        tan: "tan",
        zindex: ""
      });



    } else {
      this.setData({
        zanting: "暂停",
        tan: ""
      });
      clearInterval(qqqq);
      
      var dateEND = new Date();
      var date = new Date();
      dateEND.setDate(+0);
      dateEND.setHours(+xiaoshishezhi);
      dateEND.setMinutes(+fenshezhi);
      dateEND.setSeconds(+miaoshezhi);
   
      var weilail = dateEND.getTime();
      var dateEND1 = new Date();

      dateEND1.setDate(0);
      dateEND1.setHours(that.data.hous);
      dateEND1.setMinutes(that.data.fen);
      dateEND1.setSeconds(that.data.miao);
     
      var xianzai = dateEND1.getTime()
      scha = weilail - xianzai;





      var date = new Date();
      xiaoshi = date.getHours() + xiaoshishezhi;

      Minutes = date.getMinutes() + fenshezhi;
      Seconds = date.getSeconds() + miaoshezhi;
      getApp().data.pageTimer = qqqq = setInterval(function () {
        var dateEND = new Date();
        var date = new Date();
        var day = date.getDate()
     
        dateEND.setDate(day);
        dateEND.setHours(xiaoshi);
        dateEND.setMinutes(Minutes);
        dateEND.setSeconds(Seconds);
        ww1 = dateEND.getTime();
        ww2 = date.getTime();
        var cha = dateEND.getTime() - date.getTime() - scha;
       




        if (cha < 0) {
          clearInterval(qqqq);

          that.setData({
            hous: "0",
            fen: "00",
            miao: "00",
            tan: "tan",
            chuangg: "chuang",
            modalHidden: "",
            zindex: "z-index:3"

          });

          // wx.showModal({
          //   title: '答题时间已到',
          //   content: '是否立即提交？',
          //   cancelText: "重新答题",
          //   confirmText: "立即提交",
          //   success: function (res) {
          //     if (res.confirm) {

          //       var par = {};
          //       wx.getStorage({
          //         key: 'user_info',
          //         success: function (res) {
          //         
          //           user_info = res.data
          //         }
          //       })
          //       par.userid = user_info.phoneNumber;

          //       for (var x in duoxuan) {
          //         for (var i in answerlist[x]) {
          //           for (var y = 0; y < duoxuan[x].length; y++) {
          //             duoxuan[x][y];
          //             answerlist[x][duoxuan[x][y]] = 1;
          //           }
          //         }
          //       }

          //       par.answerlist = answerlist;
          //       
          //       var tr = par.answerlist;
          //       var iu = [];

          //       for (var i in tr) {
          //         var df = tr[i];

          //         iu.push(df)

          //       }
          //       var uu = {};
          //       for (var x in iu) {
          //         var ss = [];
          //         var s = 0;
          //         for (var i in iu[x]) {
          //           if (i != 'info_num') {
          //             ss[s] = iu[x][i];
          //             s++;
          //           }
          //         }
          //         var iui = { 'info_num': iu[x]['info_num'], 'answer': ss };
          //         iu[x] = iui;
          //       }
          //     }

          //       else if (res.cancel) {
          //       wx.switchTab({

          //         url: "../../pages/index1/index1"

          //       })
          //     }
          //     }
          // })
        }


        var day = parseInt(cha / 86400000);
        var hous = parseInt((cha - day * 86400000) / 3600000);
        var fen = parseInt((cha - (day * 86400000 + hous * 3600000)) / 60000);
        var miao = parseInt((cha - (day * 86400000 + hous * 3600000 + fen * 60000)) / 1000)
        if (miao < 10) {

          that.setData({
            hous: hous,
            fen: fen,
            miao: "0" + miao

          });
        }
        if (fen < 10) {
          that.setData({
            hous: hous,
            fen: "0" + fen,
            miao: miao

          });
        }
        if (miao >= 10 && fen >= 10) {
          that.setData({
            hous: hous,
            fen: fen,
            miao: miao

          });

        }
        if (miao < 10 && fen < 10) {
          that.setData({
            hous: hous,

            miao: "0" + miao

          });

        }


      }, 1000)


    }



  },

  onLoad: function () {
    iu = [];
    answer = {};
    answerlist = [];
    duoxuan = [];
    zgd = [];
    selected = "";
    var that = this;
    o = [];
    b = [];
    v = [];

    var that = this;

    this.setData({
      san: "",
      er: "",
      yi: "",
      zanting: "暂停",
      gg: false,
      cont: 0,
      chuangg: "chuangg",
      tan: "",
      disabled: ""





    });
    wx.setStorage({
      key: "jieguo",
      data: ""
    })
    wx.setStorage({
      key: "obj",
      data: " "
    })
    wx.setStorage({
      key: "opiy",
      data: ""
    })
    answerlist = {};
    clearInterval(qqqq);
    wx.getStorage({
      key: 'user_info',
      success: function (res) {
      
        user_info = res.data;
        var xuanzeticont = that.data.xuanzeticont;
        var duoxuancont = that.data.duoxuancont;
        var panduancont = that.data.panduancont;
        var man = user_info.phoneNumber
        wx.request({
          url: servsers + '/pop_exam_api/frontend/newexam', //仅为示例，并非真实的接口地址
          method: "POST",
          data: {
            userid:man,
            r: Math.random(),
            // typeconfig: JSON.stringify({ 1: xuanzeticont, 2: duoxuancont, 3: panduancont })
          },
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          success: function (res) {
            that.setData({


              classname1: "classname1"
            })

           
          },
          fail:function(){
            that.setData({

           
              classname1:"classname2"
            })
            wx.showModal({
              title: '提示',
              content: '获取题目失败，是否刷新？',
              success: function (res) {
                if (res.confirm) {
                  wx.redirectTo({
                    url: "../../pages/datiye/datiye"

                  })
                } else if (res.cancel) {
                  wx.switchTab({
                    url: "../index1/index1"

                  })
                }
              }
            })

          }
        })

        wx.request({
          url: servsers + '/pop_exam_api/frontend/show', //仅为示例，并非真实的接口地址
          // method:"POST",
          data: {
            userid:man,
            Page: '1',
            r: Math.random()
          },
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {

            obj = res.data;
            wx.setStorage({
              key: "obj",
              data: obj
            })
            answerlist = {};
            var info = {};

            // 初始化答案，把所有答案变成0 ， 即未答
            for (var i = 0; i < obj.length; i++) {
              answer = {};
              answer["info_num"] = obj[i].info_num;
              for (var j in obj[i].options) {
                answer[j] = 0;
              }
              answerlist[i] = answer;
            }

          
           
            for(var i=0;i<obj.length;i++){
              if (obj[i].title_type==1){
            
               o.push(obj[i]);
             
              }
             else if (obj[i].title_type == 2) {

                b.push(obj[i]);

              }
              else{
                v.push(obj[i]);
              }
          }
        
       
            var contt = res.data.length;
         
            that.setData({
              list1: o,
              list2: b,
              list3: v,
            

              zong: contt,
        

              // items:res.data.options[0]


            })
        

     
          
          }
        })

      }

    })

    var that = this;
    var date = new Date();
    xiaoshi = date.getHours() + xiaoshishezhi;

    Minutes = date.getMinutes() + fenshezhi;
    Seconds = date.getSeconds() + miaoshezhi;
    getApp().data.pageTimer = qqqq = setInterval(function () {
      var dateEND = new Date();
      var date = new Date();
      var day = date.getDate()
   
      dateEND.setDate(day);
      dateEND.setHours(xiaoshi);
      dateEND.setMinutes(Minutes);
      dateEND.setSeconds(Seconds);
      ww1 = dateEND.getTime();
      ww2 = date.getTime();
      var cha = dateEND.getTime() - date.getTime();
    

      if (cha < 0) {
        clearInterval(qqqq);

        that.setData({
          hous: "0",
          fen: "00",
          miao: "00",
          tan: "tan",
          chuangg: "chuang",
          modalHidden: "",
          zindex: "z-index:3"


        });

        // wx.showModal({
        //   title: '答题时间已到',
        //   content: '是否立即提交？',
        //   cancelText: "重新答题",
        //   confirmText: "立即提交",
        //   success: function (res) {

        // if (res.confirm) {





        // }


        //  else if (res.cancel) {

        // }



      }
      else {

        var day = parseInt(cha / 86400000);
        var hous = parseInt((cha - day * 86400000) / 3600000);
        var fen = parseInt((cha - (day * 86400000 + hous * 3600000)) / 60000);
        var miao = parseInt((cha - (day * 86400000 + hous * 3600000 + fen * 60000)) / 1000)


        if (miao < 10) {

          that.setData({
            hous: hous,
            fen: fen,
            miao: "0" + miao

          });
        }
        if (fen < 10) {
          that.setData({
            hous: hous,
            fen: "0" + fen,
            miao: miao

          });
        }
        if (miao >= 10 && fen >= 10) {
          that.setData({
            hous: hous,
            fen: fen,
            miao: miao

          });

        }
        if (miao < 10 && fen < 10) {
          that.setData({
            hous: hous,

            miao: "0" + miao

          });

        }
      }

      that.setData({
        san: "三、判断题",
        er: "二、多选题",
        yi: "一、单选题",
        hiddenLoading: "true"
        

      })

    }, 1000)



  },

  sub: function () {
  
    var that = this;
    this.setData({
      disabled: "true",
      hiddenLoading: ""
    })
    clearInterval(qqqq);
    var par = {};
    par.userid = user_info.phoneNumber;
    

    for (var x in duoxuan) { 
    var ii = x;
      for (var i in answerlist[ii]) {
        for (var y = 0; y < duoxuan[x].length; y++) {
          duoxuan[x][y];
          answerlist[ii][duoxuan[x][y]] = 1;
        }
      }
    }

    par.answerlist = answerlist;
   
  
    tr = par.answerlist;
 


    for (var i in tr) {
      var df = tr[i];

      iu.push(df)

    }
    var uu = {};
    for (var x in iu) {
      var ss = [];
      var s = 0;
      for (var i in iu[x]) {
        if (i != 'info_num') {
          ss[s] = iu[x][i];
          s++;
        }
      }
      var iui = { 'info_num': iu[x]['info_num'], 'answer': ss };
      iu[x] = iui;
    }

    




    //  console.log(JSON.stringify(iu));



    wx.request({
      url: servsers + '/pop_exam_api/frontend/judge', //仅为示例，并非真实的接口地址
      // url:"http://114.215.28.157:8080/pop_exam_web/examinfo/listByPage.json?",
      method: "POST",
      data: {
        userid: user_info.phoneNumber,
        'answerlist': JSON.stringify(iu)
        // pagesize:1000


      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
      
        // console.log(res.data.dataList[]);
        

       

        wx.setStorageSync('obju', res.data);
        wx.navigateTo({


          // url: "../../pages/fenxiang/fenxiang?obj=" + JSON.stringify(res.data)
          url: "../../pages/fenxiang/fenxiang"


        })
        that.setData({
          disabled: "",
          hiddenLoading:"true"
        })
      }
    })






  },
 
  radioChange: function (e) {
  
    // tr={};
    var that=this;
  
  
    selected = e.detail.value;// 选中项
    
    var info_id = e.currentTarget.id; // 题目id
    // var ll = info_id.indexOf("100");
    // var info_id = info_id.slice(0,ll);
    // console.log(info_id)
    duoxuan[info_id] = selected;
   

    var isInsert = 0;
  
    for (var i = 0; i < zgd.length; i++) {
      if (zgd[i] == e.currentTarget.id) {
        if (selected.length == "0") {
          zgd.splice(i, 1);
          // var ln = this.data.cont - 1;
          var ln = zgd.length;
          this.setData({
            cont: ln
          });
        } else {
          isInsert = 0;
        }
       
        isInsert = 1;
      }
     
       
    
    }

  
   
   
   
    
    if (isInsert == 0) {
    
      zgd[zgd.length] = e.currentTarget.id;
      
      if (selected.length != "0") {
       
        var ln = this.data.cont + 1;
        
        this.setData({
          cont: ln
        });
      } else {
        var ln = this.data.cont - 1;
        this.setData({
          cont: ln
        });
      }
      
    }

    

  

  },

// 选择题 自动
  ff: function (e) {
    
    ggp=0;
    var heightid = e.currentTarget.id;
    var height1;
    wx.createSelectorQuery().selectAll('.xuanze').boundingClientRect(function (rects) {
     
      var heightidd =Number(heightid)+1;
      var arrv = rects.slice(0, heightidd);
      var arrb=[];
      for(var i=0;i<arrv.length;i++){
       arrb.push(arrv[i].height);
      }
      for (var i = 0; i < arrb.length; i++) {
          ggp=ggp+=arrb[i];

      }
     var gg=arrb.length;
      wx.pageScrollTo({
        scrollTop: ggp+gg*8+27,
        duration: systemtime
      })
      rects.forEach(function (rect) {
       
      })
    }).exec(
    )
    //  console.log(e.currentTarget.id)
    //  console.log(e.currentTarget.dataset.info_id)// 题目id
    //   console.log(e.currentTarget.dataset.id)// 题目编号（咱们的）
    //   console.log(e.currentTarget.dataset.ans);// 选择的答案
    var isInsert = 0;
    for (var i = 0; i < zgd.length; i++) {
      if (zgd[i] == e.currentTarget.dataset.id) {
        isInsert = 1;
      }
    }
    if (isInsert == 0) {
      zgd[zgd.length] = e.currentTarget.dataset.id;
      var ln = this.data.cont + 1;
      this.setData({
        cont: ln
      });
    }

    var questionId = e.currentTarget.dataset.id;//
    var selectAnswer = e.currentTarget.dataset.ans;
   
    //  answerlist[questionId][selectAnswer];
    for (var x in answerlist[questionId]) {

      if (x == selectAnswer) {

        answerlist[questionId][x] = 1;
        // answerlist[x] = 1;
      } else if (x != selectAnswer && x != "info_num") {

        answerlist[questionId][x] = 0;
        // answerlist[x] = 0;
      }
    }
    
    

    wx.setStorage({
      key: "opiy",
      data: answerlist
    })
    
  },
  bb: function (e) {
    var m1=o.length;
    var m2=b.length;
    var m3=v.length;
    var ggpp=0;
    // 选择题高度
    wx.createSelectorQuery().selectAll('.xuanze').boundingClientRect(function (rects) {
      ggpp=0;
      var arrv = rects.slice(0, m1);
      var arrb = [];
      for (var i = 0; i < arrv.length; i++) {
        arrb.push(arrv[i].height);
      }
      for (var i = 0; i < arrb.length; i++) {
        ggpp = ggpp += arrb[i];

      }
      var gg = arrb.length;
      rects.forEach(function (rect) {

      })
    }).exec()


    // 多选题高度
    wx.createSelectorQuery().selectAll('.duoxuan').boundingClientRect(function (rects) {
      var arrv = rects.slice(0, m1);
      var arrb = [];
      for (var i = 0; i < arrv.length; i++) {
        arrb.push(arrv[i].height);
      }
      for (var i = 0; i < arrb.length; i++) {
        ggpp = ggpp += arrb[i];

      }
      var gg = arrb.length;
      rects.forEach(function (rect) {

      })
    }).exec()
    ggp =0;
    var heightid = e.currentTarget.id-m1-m2;
    var height1;
    wx.createSelectorQuery().selectAll('.panduan').boundingClientRect(function (rects) {
      var heightidd = Number(heightid) + 1;
      var arrv = rects.slice(0, heightidd);
      var arrb = [];
      for (var i = 0; i < arrv.length; i++) {
        arrb.push(arrv[i].height);
      }
      for (var i = 0; i < arrb.length; i++) {
        ggp = ggp += arrb[i];  //判断题选择的height

      }

     
      var gg = arrb.length;
      rects.forEach(function (rect) {


        rect.id      // 节点的ID
        rect.dataset // 节点的dataset
        rect.left    // 节点的左边界坐标
        rect.right   // 节点的右边界坐标
        rect.top     // 节点的上边界坐标
        rect.bottom  // 节点的下边界坐标
        rect.width   // 节点的宽度
        rect.height  // 节点的高度


      })


      wx.pageScrollTo({
        scrollTop: ggpp + ggp +(m1+m2+gg)*8+90,
        duration: systemtime
      })
     
    }).exec(
    )
      

    //  console.log(e.currentTarget.id)
    //  console.log(e.currentTarget.dataset.info_id)// 题目id
    //   console.log(e.currentTarget.dataset.id)// 题目编号（咱们的）
    //   console.log(e.currentTarget.dataset.ans);// 选择的答案
    var isInsert = 0;
    for (var i = 0; i < zgd.length; i++) {
      if (zgd[i] == e.currentTarget.dataset.id) {
        isInsert = 1;
      }
    }
    if (isInsert == 0) {
      zgd[zgd.length] = e.currentTarget.dataset.id;
      var ln = this.data.cont + 1;
      this.setData({
        cont: ln
      });
    }
    var questionId = e.currentTarget.dataset.id;//
    var selectAnswer = e.currentTarget.dataset.ans;

    //  answerlist[questionId][selectAnswer];
    for (var x in answerlist[questionId]) {

      if (x == selectAnswer) {

        answerlist[questionId][x] = 1;
        // answerlist[x] = 1;
      } else if (x != selectAnswer && x != "info_num") {

        answerlist[questionId][x] = 0;
        // answerlist[x] = 0;
      }
    }
  },

  onShareAppMessage: function () {
   
    return {
      title: '新三板董秘助手',
      path: '/pages/mach/mach',
      success: function (res) {
       
      }
    }
    
  },


  onShow : function (e) {
    wx.getSystemInfo({
      success(res) {
        console.log(res.system)
        if (res.system.slice(0, 3) =="iOS"){
          systemtime=300;
        }
        else{
          systemtime = 0;
        }
      }
    })
    var that = this;
    that.setData({
      hiddenLoading: ""

    });
    // wx.navigateBack({
    var pages = getCurrentPages();
    wx.getStorage({
      key: 'obj',
      success: function (res) {
       

        if (res.data == null || res.data == undefined || res.data == "") {
         
          wx.setStorage({
            key: "obj",
            data:""
          })
          ggp = 0;
          o = [];
          b = [];
          v = [];
          wx.setStorage({
            key: "jieguo",
            data: ""
          })

          wx.setStorage({
            key: "opiy",
            data: ""
          })
          wx.setStorageSync('obju', "");
          that.setData({
            san: "",
            er: "",
            yi: "",
            zanting: "暂停",
            gg: false,
            cont: 0,
            chuangg: "chuangg",
            tan: "",
            disabled: "",
           


          });
          var prevPage = pages[pages.length - 2]

          iu = [];
          answer = {};
          answerlist = [];
          duoxuan = [];
          zgd = [];
          selected = "";
          
         
          clearInterval(qqqq);
          wx.getStorage({
            key: 'user_info',
            success: function (res) {
          
              user_info = res.data;
              var xuanzeticont = that.data.xuanzeticont;
              var duoxuancont = that.data.duoxuancont;
              var panduancont = that.data.panduancont;
              var man = user_info.phoneNumber
              wx.request({
                url: servsers + '/pop_exam_api/frontend/newexam', //仅为示例，并非真实的接口地址
                method: "POST",
                data: {
                  userid: man,
                  // typeconfig: JSON.stringify({ 1: xuanzeticont, 2: duoxuancont, 3: panduancont })
                },
                header: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                success: function (res) {
                 
                }
              })

              wx.request({
                url: servsers + '/pop_exam_api/frontend/show', //仅为示例，并非真实的接口地址
                // method:"POST",
                data: {
                  userid: man,
                  Page: '1',
                  r: Math.random()
                },
                header: {
                  'content-type': 'application/json'
                },
                success: function (res) {
                    
                  obj = res.data;
                  wx.setStorage({
                    key: "obj",
                    data: res.data
                  })
                  answerlist = {};
                  var info = {};

                  // 初始化答案，把所有答案变成0 ， 即未答
                  for (var i = 0; i < obj.length; i++) {
                    answer = {};
                    answer["info_num"] = obj[i].info_num;
                    for (var j in obj[i].options) {
                      answer[j] = 0;
                    }
                    answerlist[i] = answer;
                  }
                
                  for (var i = 0; i < obj.length; i++) {
                    if (obj[i].title_type == 1) {

                      o.push(obj[i]);

                    }
                    else if (obj[i].title_type == 2) {

                      b.push(obj[i]);

                    }
                    else {
                      v.push(obj[i]);
                    }
                  }

 
                  var contt = res.data.length;
                 
                  that.setData({
                    list1: o,
                    list2: b,
                    list3: v,


                    zong: contt,


                    // items:res.data.options[0]


                  })
               
         
                }
              })

            }

          })


          var date = new Date();
          xiaoshi = date.getHours() + xiaoshishezhi;

          Minutes = date.getMinutes() + fenshezhi;
          Seconds = date.getSeconds() + miaoshezhi;
          getApp().data.pageTimer = qqqq = setInterval(function () {
            var dateEND = new Date();
            var date = new Date();
            var day = date.getDate()
         
            dateEND.setDate(day);
            dateEND.setHours(xiaoshi);
            dateEND.setMinutes(Minutes);
            dateEND.setSeconds(Seconds);
            ww1 = dateEND.getTime();
            ww2 = date.getTime();
            var cha = dateEND.getTime() - date.getTime();
         

            if (cha < 0) {
              clearInterval(qqqq);

              that.setData({
                hous: "0",
                fen: "00",
                miao: "00",
                tan: "tan",
                chuangg: "chuang",
                modalHidden: "",
                zindex: "z-index:3"


              });
              that.setData({
                san: "三、判断题",
                er: "二、多选题",
                yi: "一、单选题",
                hiddenLoading: "true"

              })
       


            }
            else {

              var day = parseInt(cha / 86400000);
              var hous = parseInt((cha - day * 86400000) / 3600000);
              var fen = parseInt((cha - (day * 86400000 + hous * 3600000)) / 60000);
              var miao = parseInt((cha - (day * 86400000 + hous * 3600000 + fen * 60000)) / 1000)


              if (miao < 10) {

                that.setData({
                  hous: hous,
                  fen: fen,
                  miao: "0" + miao

                });
              }
              if (fen < 10) {
                that.setData({
                  hous: hous,
                  fen: "0" + fen,
                  miao: miao

                });
              }
              if (miao >= 10 && fen >= 10) {
                that.setData({
                  hous: hous,
                  fen: fen,
                  miao: miao

                });

              }
              if (miao < 10 && fen < 10) {
                that.setData({
                  hous: hous,

                  miao: "0" + miao

                });

              }
            }

            that.setData({
              san: "三、判断题",
              er: "二、多选题",
              yi: "一、单选题",
              hiddenLoading: "true"

            })

          }, 1000)
        
        
        
        
        
        }




        else {
     
          that.setData({
            list1: o,
            list2: b,
            list3: v,


            zong: contt,


         


          })
        
          wx.getStorage({
            key: 'opiy',
            success: function (res) {
             
              xuanxiang = res.data;
            }
          })
          answerlist1 = xuanxiang;
         
          var info = {};

          var contt = res.data.length;
  



        }
  
        // wx.createSelectorQuery().select("#sor").fields({
        //   dataset: true,
        //   size: true,
        //   scrollOffset: true,
        //   properties: ['scrollX', 'scrollY']
        // }, function (res) {
          

        //   that.setData({
        //     top1: res.height + "px"

        //   })
        //   res.dataset    // 节点的dataset
        //   res.width      // 节点的宽度
        //   res.height     // 节点的高度
        //   res.scrollLeft // 节点的水平滚动位置
        //   res.scrollTop  // 节点的竖直滚动位置
        //   res.scrollX    // 节点 scroll-x 属性的当前值
        //   res.scrollY    // 节点 scroll-x 属性的当前值

        // }).exec(


        //   )
       

  

       

       
      }
    })


  },


  ctijiao: function () {
    // clearInterval(qqqq);
    var par = {};

    par.userid = user_info.phoneNumber;

    for (var x in duoxuan) {
     
      for (var i in answerlist[x]) {
        for (var y = 0; y < duoxuan[x].length; y++) {
          duoxuan[x][y];
          answerlist[x][duoxuan[x][y]] = 1;
        }
      }
    }

    par.answerlist = answerlist;
    
    var tr = par.answerlist;
    iu = [];

    for (var i in tr) {
      var df = tr[i];

      iu.push(df)

    }
    var uu = {};
    for (var x in iu) {
      var ss = [];
      var s = 0;
      for (var i in iu[x]) {
        if (i != 'info_num') {
          ss[s] = iu[x][i];
          s++;
        }
      }
      var iui = { 'info_num': iu[x]['info_num'], 'answer': ss };
      iu[x] = iui;
    }

 

    //  console.log(JSON.stringify(iu));



    wx.request({
      url: servsers + '/pop_exam_api/frontend/judge', //仅为示例，并非真实的接口地址
      method: "POST",
      data: {
        userid: user_info.phoneNumber,
        'answerlist': JSON.stringify(iu)

      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
      
        wx.setStorageSync('obju', res.data);
      


   
      }
    })


  },


  chongxin: function () {
    wx.switchTab({

      url: "../../pages/index1/index1"

    })


  },





  modalBindaconfirm: function () {
    this.setData({
      modalHidden: !this.data.modalHidden,

    })
    clearInterval(qqqq);
    var par = {};

    par.userid = user_info.phoneNumber;

    for (var x in duoxuan) {
     
      for (var i in answerlist[x]) {
        for (var y = 0; y < duoxuan[x].length; y++) {
          duoxuan[x][y];
          answerlist[x][duoxuan[x][y]] = 1;
        }
      }
    }

    par.answerlist = answerlist;
    
    var tr = par.answerlist;


    for (var i in tr) {
      var df = tr[i];

      iu.push(df)

    }
    var uu = {};
    for (var x in iu) {
      var ss = [];
      var s = 0;
      for (var i in iu[x]) {
        if (i != 'info_num') {
          ss[s] = iu[x][i];
          s++;
        }
      }
      var iui = { 'info_num': iu[x]['info_num'], 'answer': ss };
      iu[x] = iui;
    }


    //  console.log(JSON.stringify(iu));



    wx.request({
      url: servsers + '/pop_exam_api/frontend/judge', //仅为示例，并非真实的接口地址
      method: "POST",
      data: {
        userid: user_info.phoneNumber,
        'answerlist': JSON.stringify(iu)

      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
      


        wx.navigateTo({


          url: "../../pages/jieguo/jieguo?obj=" + JSON.stringify(res.data)


        })
      }
    })
  },
  modalBindcancel: function () {
    this.setData({
      modalHidden: !this.data.modalHidden,

    })
    wx.switchTab({

      url: "../../pages/index1/index1"

    })
  }








})

