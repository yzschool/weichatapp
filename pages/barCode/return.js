// pages/barCode/return.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    borrownameR:'',
    address:'',
    id:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
   // console.log("还书页面", options.id, options.locations)
    that.setData({
      id: options.id,
      address: options.locations
    });
    //检查一下ID是否存在数据库里面
    //console.log("99999996", that.data.id, that.data.address);
    wx.request({
      url: 'https://www.yzschool.com.cn/weichat/book/id',
      method: 'POST',
      data: {
        "id": that.data.id,
        "location": that.data.address,
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (re) {
        //console.log("55555", re.statusCode);
        if (re.statusCode == 200) {
         // console.log('存在该书籍', re);
          var jsonStr = JSON.stringify(re.data);
          var jsonPar = JSON.parse(jsonStr);
          that.data.borrownameR = jsonPar[0].borrowname;
            that.setData({
              borrownameR: that.data.borrownameR
            });
          //console.log("dhg", that.data.borrownameR)
        } else {
          //console.log('不存在该书籍');
          wx.showToast({
            title: '该书籍不存在',
            image: "../../image/fail.png",
            duration: 3000
          })
        }
      }
    })
  },

  //还书
  formSubmit2: function (e) {
    var that=this;
    //console.log("还书操作scan id is ", that.data.id, that.data.borrownameR);
    if (that.data.borrownameR != "") {
      //update一下
      wx.request({
        url: 'https://www.yzschool.com.cn/weichat/book_update',
        method: 'POST',
        data: {
          "id": that.data.id,
          "borrowname": ""
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          if (res.statusCode == 200) {
            wx.showToast({
              title: '还书成功',
              icon: 'success',
              duration: 6000
            });
            //wx.navigateBack();
          } else {
            console
            wx.showToast({
              title: '还书失败',
              image: "../../image/fail.png",
              duration: 4000
            })
          }
        },
      })
    } else {
      wx.showToast({
        title: '该书籍未被借阅',
        image: "../../image/fail.png",
        duration: 3000
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