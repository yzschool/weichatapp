// barCode.js
/*var locations;
var id;*/
Page({

  /**
   * 页面的初始数据
   */
  data: {
    locations:'',
    id:0
  },
//借书
  bindBorrow: function () {
    var that = this;
    //status = 1;
    console.log("barCode页面", that.data.locations)
    wx.scanCode({
      success: (res) => {
        //console.log('lalla barCode页面传过来的',res.result);
        var jsonStr = JSON.stringify(res);
        console.log('barCode页面', jsonStr);
        that.data.id = res.result;
        that.setData({
          id: res.result
        });
        //console.log('barCode页面传过来的', status);
        wx.navigateTo({
          url: '../barCode/borrow?id=' + that.data.id + "&locations=" + that.data.locations
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
        that.data.id = res.result;
        that.setData({
          id: res.result
        });
        //console.log('lallas', status);
        wx.navigateTo({
          url: '../barCode/return?id=' + that.data.id + "&locations=" + that.data.locations
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
        that.data.id = res.result;
        that.setData({
          id: res.result
        });
        //console.log('lallas', status);
        wx.navigateTo({
          url: '../barCode/add?id=' + that.data.id + "&locations=" + that.data.locations
        })
      }
    });

  },
  //查找
  bindSearch: function () {
    var that = this;
   // status = 4;
    wx.navigateTo({
      url: '../barCode/search?locations=' + that.data.locations
    })
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //locations=options.location;
    this.setData({
      locations: options.location
    })
    console.log("4445",this.data.locations)
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