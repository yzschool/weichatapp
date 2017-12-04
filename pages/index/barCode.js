// barCode.js
var locations;
var id;
var status;
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
//借书
  bindBorrow: function () {
    var that = this;
    //status = 1;
    console.log("barCode页面", locations)
    wx.scanCode({
      success: (res) => {
        //console.log('lalla barCode页面传过来的',res.result);
        var jsonStr = JSON.stringify(res);
        console.log('barCode页面', jsonStr);
        this.setData({
          id: res.result
        });
        id = res.result;
        //console.log('barCode页面传过来的', status);
        console.log("4446", locations);
        wx.navigateTo({
          url: '../barCode/borrow?id=' + id +  "&locations=" + locations
        })
      }
    });
  },
  //还书
  bindBack: function () {
    var that = this;
    //status = 2;
    wx.scanCode({
      success: (res) => {
        console.log('lalla', res.result);
        var jsonStr = JSON.stringify(res);
        console.log('lallaeee', jsonStr);
        this.setData({
          id: res.result
        });
        id = res.result;
        //console.log('lallas', status);
        wx.navigateTo({
          url: '../barCode/return?id=' + id +  "&locations=" + locations
        })
      }
    });

  },
  //增加书目
  bindAdd: function () {
    var that = this;
   // status = 3;
    wx.scanCode({
      success: (res) => {
        console.log('lalla', res.result);
        var jsonStr = JSON.stringify(res);
        console.log('lallaeee', jsonStr);
        this.setData({
          id: res.result
        });
        id = res.result;
        //console.log('lallas', status);
        wx.navigateTo({
          url: '../barCode/add?id=' + id  + "&locations=" + locations
        })
      }
    });

  },
  //查找
  bindSearch: function () {
    var that = this;
   // status = 4;
    wx.navigateTo({
      url: '../barCode/search?locations=' + locations
    })
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    locations=options.location;
    console.log("4445",locations)
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