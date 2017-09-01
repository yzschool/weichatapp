// memberInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //console.log('打印学生id',options.studentid);
    wx.request({
      url: 'https://www.yzschool.com.cn/weichat/student/' + options.studentid,
      data: '',
      method: 'GET',
      success: function(res) {
        var jsonStr = JSON.stringify(res.data);
        var jsonPar = JSON.parse(jsonStr);
       // console.log("打印出的数据",jsonStr);
        if (jsonPar.email){
          jsonPar.email = jsonPar.email
        }else{
          jsonPar.email="未填写"
        }
        that.setData({
          info: jsonStr,
          name:jsonPar.name,
          usertype: jsonPar.usertype,
          grade: jsonPar.grade,
          capibility: jsonPar.capibility,
          district: jsonPar.district,
          building: jsonPar.building,
          city: jsonPar.city,
          school: jsonPar.school,
          phone: jsonPar.phone,
          email:jsonPar.email
        });

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