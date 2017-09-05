// queryRst.js
var classname;
var classid;
Page({
  enrollBtn: function () {
    //console.log("className is ",classname);
    wx.navigateTo({
      url: '../class/enroll?classname=' + classname + '&classid=' + classid,
    })

  },
  memberBtn:function(){
    wx.navigateTo({
     // url:'../class/memberList?classname='+classname+'&classid='+classid
      url: '../class/memberList?classid=' + classid 
    })
  },
  

  /**
   * 页面的初始数据
   */
  data: {
    info: "Help"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log("打印id,s",options.id);
    wx.request({
      url: 'https://www.yzschool.com.cn/weichat/class/'+options.id,
      method: 'GET',
      data: {
      },
      success: function (res) {
        console.log('this is get request result')
        var jsonStr = JSON.stringify(res.data);
        var jsonPar = JSON.parse(jsonStr);
       // console.log(jsonStr);
        classname = jsonPar.classname;
        classid = jsonPar.classid;
        
        that.setData({ 
          info: jsonStr,
          className: jsonPar.classname,
          creater: jsonPar.creater,
          classtime: jsonPar.classtime,
          peroid: jsonPar.peroid,
          grade: jsonPar.grade,
          startTime: jsonPar.starttime,
          endTime: jsonPar.endtime,
          district: jsonPar.district,
          building: jsonPar.building,
          city: jsonPar.city});

      },
    })
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