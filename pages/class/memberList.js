// memberList.js
var studentid;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    items: [{
      message: '张莹-6年级',
    }, {
      message: '王杰-5年级'
    }]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var item=[];
    var itemId = [];

    var itemStudent = [];
    var itemName = [];
    var itemIDs = [];
   // console.log("由课程信息页面传到学生列表的数据：",options.classid);
    wx.request({
      url: 'https://www.yzschool.com.cn/weichat/class/' + options.classid,
      method: 'GET',
      success: function (res) {
     //   console.log('this is get request result', res.statusCode);
        var jsonStr = JSON.stringify(res.data);
        var jsonPar = JSON.parse(jsonStr);
        //找到该课程
        //console.log("89556",jsonStr);
        itemId = jsonPar.studentsid;
        //集合该课程的studentid
        itemId.forEach(function (e) {
          item.push(e);
        })
       // console.log("89556", item);
       /* that.setData({
          item: item
        });*/
        var a1;
        var a2;
        for (var i = 0; i < item.length; i++){
         // console.log('i is ', i);
         // console.log('111result1', item[i]);
          wx.request({
            url: 'https://www.yzschool.com.cn/weichat/student/' + item[i],
            method: 'GET',
            success: function (res) {
              //console.log("asd8", res.data);
              var jsonStrs = JSON.stringify(res.data);
              a1 = jsonStrs;
              //console.log("asd", jsonStrs);
              //console.log("断点", a1);
              itemName.push(res.data.name);
              itemIDs.push(res.data.studentid);
              var jsonStudent = JSON.stringify(itemStudent);
          //    console.log("i value is ", i + " itemStudent is ", itemIDs[0]);
              that.setData({
                itemStudent: itemName,
                itemIDs: itemIDs
              })
            }
          })
        }
      },
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
  //点击查看学生信息详情memberInfo
  messageShow: function (e) {
    var id = e.currentTarget.id;
//    console.log("获得的ID值", id);
 //   console.log("cvcv ", this.data.itemIDs);
    //var studentid = this.data.item[id].studentid;
    var studentid = this.data.itemIDs[id];
 //   console.log("打印选择的学生唯一id ", studentid);
    wx: wx.navigateTo({
      url: '../class/memberInfo?studentid=' + studentid
    })
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