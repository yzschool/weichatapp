// login.js
var items = [];
var location;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '',
    userPassword: ''
  },
  formSubmit: function (e) {
    console.log("e.detail.value ", e.detail.value);
    var objData = e.detail.value;
    if (objData.userName && objData.userPassword) {
      wx.setStorageSync('userName', objData.userName);
      wx.setStorageSync('userPassword', objData.userPassword);
      var num=0;
      for (var i = 0; i < items.length; i++) {
        /*console.log("i=", i, " items[i]= ", items[i], " userName=", objData.userName, " passWord=", objData.userPassword);*/
        if (objData.userName == items[i].name && objData.userPassword == items[i].password) {
          console.log("success ");
          num = ++num;
          location = items[i].location;
          break;
        } 
      }
      /*console.log("num=", num," location=",location);*/
      if(num==1){
        wx.navigateTo({
          url: '../index/barCode?location=' + location
        })
      }else{
        console.log("fail ");
        wx.showToast({
          title: '账号或密码错误',
          image: "../../image/fail.png",
          duration: 4000
        })
      }
    } else if (userName) {
      wx.showToast({
        title: '密码不能为空',
        image: "../../image/fail.png",
        duration: 4000
      })
    } else {
      wx.showToast({
        title: '账号不能为空',
        image: "../../image/fail.png",
        duration: 4000
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var userName = wx.getStorageSync('userName');
    var userPassword = wx.getStorageSync('userPassword');
    if (userName) {
      that.setData({ userName: userName });
    }
    if (userPassword) {
      that.setData({ userPassword: userPassword });
    }
    wx.request({
     url: 'https://www.yzschool.com.cn/weichat/book_admin',
      method: 'GET',
      success: function (res) {
        console.log("admins are ", res.data)
        var str = JSON.stringify(res.data)
        var par = JSON.parse(str);
        items = par
        that.setData({
          items: items
        })
      }
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