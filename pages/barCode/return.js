// pages/barCode/return.js
var borrownameR = "";
var address;
var id;
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
    id = options.id;
    address = options.locations;
    console.log("还书页面", options.id, options.locations)
    that.setData({
      id: options.id,
     // status: options.status,
      address: options.locations
    });
    //检查一下ID是否存在数据库里面
    console.log("555556", id, address);
    wx.request({
      url: 'https://www.yzschool.com.cn/weichat/book/id/',
      method: 'POST',
      data: {
        "id": id,
        "location": address,
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (re) {
        console.log("55555", re.statusCode);
        if (re.statusCode == 200) {
          console.log('存在该书籍', re);
          var jsonStr = JSON.stringify(re.data);
          var jsonPar = JSON.parse(jsonStr);
          console.log('145678', jsonPar);
            borrownameR = jsonPar[0].borrowname;
            // console.log("5557", borrownameT);
            that.setData({
              borrownameR: borrownameR
            });
            console.log("dhg", borrownameR)
        } else {
          console.log('不存在该书籍');
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
    console.log("还书操作scan id is ", id);
    console.log("还书操作scan id is ", borrownameR);
    if (borrownameR != "") {
      //update一下
      wx.request({
        url: 'https://www.yzschool.com.cn/weichat/book_update',
        method: 'POST',
        data: {
          "id": id,
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