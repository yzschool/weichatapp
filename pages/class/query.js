// query.js
Page({
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    wx.navigateTo({
      url: 'queryRst?className=成功'
    })

  },

  
  formReset: function () {
    console.log('form发生了reset事件')
  },
  /**
   * 页面的初始数据
   */
  data: {
    hide: "true",
    info: "Help",
    item: [
      {
        id: 1,
        name: "课程名-年级-上课地址",
      },
      {
        id: 2,
        name: "英文原版阅读-1年级-景田小区",
      },
      {
        id: 3,
        name: "英文原版阅读-3年级-景田小区",
      },
      {
        id: 4,
        name: "英文原版阅读-4年级-景田小区",
      },
      {
        id: 5,
        name: "英文原版阅读-5年级-景田小区",
      }
    ]

  },
  clicked: function () {
    this.setData({
      hide: "false"
    })
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