// login.js
var userName;
var passWord;
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  formSubmit: function (e) {
    wx.navigateTo({
      url: '../index/barCode' 
    })
  /*  wx.request({
          url: 'https://www.yzschool.com.cn/weichat/class',
          method: 'POST',
          data: {
            "userName": userName,
            "passWord": passWord
          },
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
            wx.navigateTo({
              url: 'subPage?result=成功'
            })


          },

          fail: function (res) {
            wx.showToast({
              title: '提交失败',
              image: "../../image/fail.png",
              duration: 4000
            })
          }
        })*/
      



  },

  //账号
  userName: function (e) {
    userName = e.detail.value
  },
  //密码
  passWord: function (e) {
    passWord = e.detail.value
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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