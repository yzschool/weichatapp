// login.js
var userName = "";
var passWord = "";
var items = [];
var location;
Page({

  /**
   * 页面的初始数据
   */
  data: {
   /* userName:'',
    passWord:'',*/
    id_token: '',//方便存在本地的locakStorage  
    response: '' //存取返回数据 

  },
  formSubmit: function (e) {
    if (userName && passWord) {
      var num=0;
      for (var i = 0; i < items.length; i++) {
       /* console.log("i is ", i);
        console.log("items is ", items[i]);
        console.log("userName and passWord is ", userName, " + ", passWord);
        console.log("items[i].username is ", items[i].name);*/
        if (userName == items[i].name && passWord == items[i].password) {
          console.log("success ");
          num = ++num;
          /*console.log("success ", items[i].location);*/
          location = items[i].location;
          break;
        } 
      }
     /* console.log("44444", num);
      console.log("44444", location);*/
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

  //账号
  bindUserName: function (e) {
    userName= e.detail.value
    console.log("username ", userName)
  },
  //密码
  bindPassWord: function (e) {
     passWord = e.detail.value
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://www.yzschool.com.cn/weichat/book_admin',
     data:{
        name: this.data.userName,
        password: this.data.passWord,
      },
      method: 'GET',
      success: function (res) {
        console.log("admins are ", res.data)
        var str = JSON.stringify(res.data)
        var par = JSON.parse(str);
        items = par
        that.setData({
          items: items,
          id_token: res.data.id_token,
          response: res
        })
        try {
          wx.setStorageSync('id_token', res.data.id_token)
        } catch (e) {
        }
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