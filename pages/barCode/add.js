// pages/barCode/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    address:'',
    bookName:''
  },

  bindBookname: function (e) {
   // bookName = e.detail.value
    this.setData({
      bookName: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    /*that.data.id = options.id;
    that.data.address = options.locations;*/
    //console.log("借书页面", options.id, options.locations);
    that.setData({
      id: options.id,
      address: options.locations
    });
  },

  formSubmit3: function (e) {
   // console.log('form发生了submit事件，添加书目', this.data.bookName, this.data.address, this.data.id);
    if (this.data.bookName) {
      wx.request({
        url: 'https://www.yzschool.com.cn/weichat/book',
        method: 'POST',
        data: {
          /*"id": this.data.id,
          "bookname": this.data.bookName,
          "location": this.data.address,*/
          "id": this.data.id,
          "borrowname": "",
          "isbn": "",
          "bookname": this.data.bookName,
          "location": this.data.address,
          "updatetime": ""
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          if (res.statusCode == 201) {
            wx.showToast({
              title: '添加成功',
              icon: 'success',
              duration: 4000
            });
            setTimeout(function () {
              wx.navigateBack();
            }, 1000)
            //wx.navigateBack();
          } else {
            wx.showToast({
              title: '添加失败',
              image: "../../image/fail.png",
              duration: 5000
            })
          }
        },
      })
    } else {
      wx.showToast({
        title: '信息填写不完整',
        image: "../../image/fail.png",
        duration: 4000
      })
    }

  },

  formReset: function () {
    // console.log('form发生了reset事件')
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