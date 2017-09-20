// queryList.js

var item = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Mshow: false

  },

  showChange: function (e) {
    this.setData({
      Mshow: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var item = [];
    var ass = options.name;
    console.log("ass is ", ass);
    if (ass ==  "") {
      console.log("携带的值为空值 ")
      wx.request({
        url: 'https://www.yzschool.com.cn/weichat/class',
        /* url: 'https://www.yzschool.com.cn/weichat/classname/' + options.name,*/
        method: 'GET',
        //header: { 'content-type': 'application/json' },
        success: function (res) {
          if (res.statusCode == 200) {
            var jsonStr = JSON.stringify(res.data);
            var jsonPar = JSON.parse(jsonStr);
            var item = [];
             console.log(jsonStr);

            jsonPar.forEach(function (e) {
              item.push(e);
            })
            that.setData({ item: item });
          } else {
            wx.showToast({
              title: '找不到该课程',
              image: "../../image/fail.png"
            })
          }
          that.showChange();
          /*console.log("hhhhhh ", Mshow);*/

        },
      })


    } else {
      console.log("携带的值不为空 ", ass)
      wx.request({
        //url: 'https://www.yzschool.com.cn/weichat/class',
        url: 'https://www.yzschool.com.cn/weichat/classname/' + options.name,
        method: 'GET',
        //header: { 'content-type': 'application/json' },
        success: function (res) {
          console.log('this is get request result', res.statusCode);
          if (res.statusCode == 200) {
            var jsonStr = JSON.stringify(res.data);
            var jsonPar = JSON.parse(jsonStr);
            var item = [];
             console.log(jsonStr);

            jsonPar.forEach(function (e) {
              item.push(e);
            })
            that.setData({ item: item });
          } else {
            wx.showToast({
              title: '找不到该课程',
              image: "../../image/fail.png"
            })
          }
          that.showChange();
          //console.log("hhhhhh ", Mshow);
        },
      })
    }
  },


  clickedItem: function (e) {
    var id = e.currentTarget.id;
  //  console.log("获得的ID值", id);
    var classid = this.data.item[id].classid;
   // console.log("打印选择的课程唯一id ", classid);
    wx.navigateTo({
      //将classid传到下一个页面
      url: '../class/queryRst?id=' + classid
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