// enroll.js
// submit.js
//var classStartTime;
Page({
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);

    wx.request({
      //url: 'http://www.yzschool.com.cn:8080/class', //仅为示例，并非真实的接口地址
      url: 'http://www.yzschool.com.cn/weichat/class',
      //url: 'http://192.168.227.128:8080/class', //仅为示例，并非真实的接口地址
      method: 'POST',
      data: {
        "name": "yz english AA",
        "classStartTime": "2017-07-11",
        "classEndTime": "2017-09-11",
        "classPeroid": "每周三晚上",
        "classTime": "19:30-20:30",
        "classLevel": "中等",
        "city": "深圳",
        "district": "福田",
        "building": "香蜜湖小区",
        "latitude": 114.026694,
        "longitude": 22.549416,
        "createdBy": "xiao lee",
        "contactTel": "13900000000",
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        wx.navigateTo({
          url: 'submitRst?result=成功'
        })
      },
      fail: function (res) {
        wx.navigateTo({
          url: 'submitRst?result=失败'
        })
      }
    })

  },
  formReset: function () {
    console.log('form发生了reset事件')
  },

  /**
   * 页面的初始数据
   */
  data: {
    array: ['福田', '南山', '罗湖', '宝安', '盐田', '龙岗', '龙华', '光明'],
    objectArray: [
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
    ],
    index: 0,
    className: "",
    classStartTime: '',
    classEndTime: '',
    classTime: '12:01',
    classLevel: "",
    building: "",
    createdBy: "",
    contactTel: ""
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindClassStartTimeChange: function (e) {
    // classStartTime= e.detail.value
    this.setData({
      classStartTime: e.detail.value
    })
  },
  bindClassEndTimeChange: function (e) {
    this.setData({
      classEndTime: e.detail.value
    })
  },
  bindClassTimeChange: function (e) {
    this.setData({
      classTime: e.detail.value
    })
  },

  bindClassName: function (e) {
    this.setData({
      className: e.detail.value
    })
  },

  bindClassLevel: function (e) {
    this.setData({
      classLevel: e.detail.value
    })
  },

  bindBuilding: function (e) {
    this.setData({
      building: e.detail.value
    })
  },
  bindCreatedBy: function (e) {
    this.setData({
      createdBy: e.detail.value
    })
  },
  bindContactTel: function (e) {
    this.setData({
      contactTel: e.detail.value
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