// submit.js
//var classStartTime;
var className;
var createdBy;
var building;
var grade;
var usertype="男";
var classStartTime;
var classEndTime;
var week;
var classTime;
var index;
var classLevel;
var contactTel="";

Page(
  
  {
  formSubmit: function (e) {
   // console.log('form发生了submit事件，携带数据为：', e.detail.value);
    var result = this.data.array_name[e.detail.value.selector];
    this.setData({ result:result});
    if (contactTel.length==11){
      if (className && createdBy && building && contactTel) {
        wx.request({
          url: 'https://www.yzschool.com.cn/weichat/class',
          method: 'POST',
          data: {
            "classname": className,
            "starttime": classStartTime,
            "endtime": classEndTime,
            "peroid": week,
            "usertype": usertype,
            "classtime": classTime,
            "level": classLevel,
            "city": "深圳",
            "district": result,
            "building": building,
            "creater": createdBy,
            "tel": contactTel,
            "grade": grade
          },
          header: {
            /* 'content-type': 'application/x-www-form-urlencoded'*/
            'content-type': 'application/json'
          },
          success: function (res) {
            wx.showToast({
              title: '正在加载中...',
              icon: 'loadings',
              duration: 4000
            })
            //console.log(res.data)
            wx.navigateTo({
              url: 'subPage?result=成功'
            })
           

          },

          fail: function (res) {
            /*wx.navigateTo({
              url: 'submitRst?result=失败'
            })*/
            wx.showToast({
              title: '提交失败',
              image: "../../image/fail.png",
              duration: 4000
            })
          }
        })
      } else {
        wx.showToast({
          title: '信息不完整',
          //icon: 'loadings',
          image: "../../image/fail.png",
          duration: 4000
        })
      }
    } else if (contactTel.length == 0) {
      wx.showToast({
        title: '信息不完整',
        //icon: 'loadings',
        image: "../../image/fail.png",
        duration: 2000
      })
    } else {
      wx.showToast({
        title: '号码为11位',
        width:"300px",
        //icon: 'fail',
        image: "../../image/fail.png",
        duration: 2000
      })

    }
    
   

  },
  formReset: function () {
    console.log('form发生了reset事件',className)
   // this.setData({
      className: ''
    //})
    console.log('form发生了reset事件', className)
  },

  /**
   * 页面的初始数据
   */
  data: {
    objectArray:[],
    array_name:[],
    index: 0,
    className:"",
    classStartTime:' ',
    classEndTime: ' ',
    classTime: ' ',
    classLevel:" ",
    building:" ",
    createdBy:" ",
    contactTel:" "

  },

//课程名
  bindChange: function (e) {
    className = e.detail.value
  },
  //姓名
  bindCreatedBy: function (e) {
      createdBy= e.detail.value
  },
  //年级
  bindGrade:function(e){
      grade=e.detail.value
  },
  //性别
  bindradio: function (e) {
    usertype = e.detail.value
  //  console.log("usertype is ",usertype)
  },
  //上课区域
  bindPickerChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
   // console.log("aaaaa",index)
  },
  //开始时间
  bindClassStartTimeChange: function (e) {
    this.setData({
      classStartTime: e.detail.value
    })
    classStartTime = e.detail.value
  },
  //结束时间
  bindClassEndTimeChange: function (e) {
    this.setData({
      classEndTime: e.detail.value
    })
    classEndTime=e.detail.value
  },
  //上课时间
  bindClassTimeChange: function (e) {
    this.setData({
      classTime: e.detail.value
    })
    classTime=e.detail.value
  },
//课程难度
  bindClassLevel: function (e) {
      classLevel= e.detail.value
  },
  //星期
  bindWeek:function(e){
      week = e.detail.value
  },
//上课地点
  bindBuilding: function (e) {
      building= e.detail.value
  },
  //联系电话
  bindContactTel: function (e) {
      contactTel= e.detail.value
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var  array_name=[],
      objectArray = [
        {
          id: 0,
          name: '福田'
        },
        {
          id: 1,
          name: '南山'
        },
        {
          id: 2,
          name: '罗湖'
        },
        {
          id: 3,
          name: '宝安'
        },
        {
          id: 4,
          name: '盐田'
        },
        {
          id: 5,
          name: '龙岗'
        },
        {
          id: 6,
          name: '龙华'
        },
        {
          id: 7,
          name: '光明'
        }
      ];
    objectArray.forEach(function (e) {
      array_name.push(e.name);
    })
    this.setData({ objectArray: objectArray, array_name: array_name });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("bbbb",className)
    this.setData({
      className: ''
    });
    console.log("bbbb", className)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
   
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})