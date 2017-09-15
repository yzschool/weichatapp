// subPage.js
var i;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:[
      {
        text:"提交成功",
        image:"http://yzschool.com.cn/images/weiCode/ok.png"
      },
      {
        text: "提交失败",
        image: "http://yzschool.com.cn/images/weiCode/failed.png"
      }
    ]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("lalal", options.result)
    if (options.result == "成功") {
      i = 0;
    } else {
      i = 1;
    }
    this.setData({
      result: options.result,
      i:i
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