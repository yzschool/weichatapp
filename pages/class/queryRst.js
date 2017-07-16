// queryRst.js
Page({
  enrollBtn: function () {
    wx.navigateTo({
      url: '../class/enroll',
    })

  },
  memberBtn:function(){
    wx.navigateTo({
      url:'../class/memberList',
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

    wx.request({
      //url: 'http://www.yzschool.com.cn:8080/class',
      url: 'http://www.yzschool.com.cn/weichat/class',
      //url: 'http://192.168.227.128:8080/class',
      method: 'GET',
      data: {
      },
      //header: { 'content-type': 'application/json' },
      success: function (res) {
        console.log('this is get request result')
        var jsonStr = JSON.stringify(res.data);
        var jsonPar = JSON.parse(jsonStr);
        console.log(jsonStr);
        
        that.setData({ 
          info: jsonStr,
          className: jsonPar.name,
          grade: jsonPar.name,
          startTime: jsonPar.classStartTime,
          endTime: jsonPar.classEndTime,
          district: jsonPar.district,
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