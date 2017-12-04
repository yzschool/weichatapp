// pages/barCode/search.js
var address;
var bookNames = "";
var item;
var itemStatus;
var id=0;
var SNClicked = false;
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
    //id = options.id;
    address = options.locations;
    console.log("查找删除页面",  options.locations);
   /* that.setData({
      id: options.id,
      address: options.locations
    });*/
  },

  //获取输入的书名
  bindBooknames: function (e) {
    bookNames = e.detail.value
  },

  //删除按钮
  clickedDelete: function (e) {
    var that1 = this;
    var id = e.currentTarget.id;
    //  console.log("获得的ID值", id);
    var bookid = this.data.item[id].id;
    console.log("打印选择的课程唯一id ", bookid);
    /*console.log("打印选择的课程唯一id ", classid);*/
    wx.showModal({
      title: '删除',
      content: '确认要删除这本书吗',
      success: function (res) {
        if (res.confirm) {
          console.log("已经发送删除请求");
          wx.request({
            url: 'https://www.yzschool.com.cn/weichat/book_delete',
            method: 'POST',
            data: {
              "id": bookid
            },
            header: {
              'content-type': 'application/json'
            },
            success: function (res1) {
              console.log("已经发送删除请求", res1.statusCode);
              if (res1.statusCode == 204) {
                wx.showToast({
                  title: '删除成功',
                  icon: 'success',
                  duration: 3000
                });
                itemStatus = 2;
                that1.setData({ itemStatus: itemStatus });
                //wx.navigateBack();
              } else {
                wx.showToast({
                  title: '删除失败',
                  image: "../../image/fail.png",
                  duration: 4000
                })
              }
            },
          })
        } else {
          console.log("取消")
        }
      }
    })
  },

  formReset: function () {
    // console.log('form发生了reset事件')
  },

  //查找书目，按书名查询
  formSubmit4: function (e) {
    var that = this;
    console.log('按书名查询结果', bookNames);
    if (bookNames != "") {
      wx.request({
        url: 'https://www.yzschool.com.cn/weichat/book/name/',
        method: 'POST',
        data: {
          "bookname": bookNames,
          "location": address,
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res1) {
          if (res1.statusCode == 200) {
            console.log('按照名字查询数据1', res1.statusCode);
            itemStatus = 1;
            console.log('出现的block', itemStatus);
            //console.log('14567*', res1);
            var jsonStr = JSON.stringify(res1.data);
            var jsonPar = JSON.parse(jsonStr);
            console.log('按照名字查询数据', jsonPar);
            that.setData({ item: jsonPar, itemStatus: itemStatus });
          } else {
            console.log('按照名字查询数据1', res1.statusCode);
            itemStatus = 2;
            that.setData({ itemStatus: itemStatus });
            wx.showToast({
              title: '找不到该书籍',
              image: "../../image/fail.png",
              duration: 6000
            })
          }
        },
      })
    } else {
      wx.request({
        url: 'https://www.yzschool.com.cn/weichat/books',
        method: 'POST',
        data: {
          "location": address,
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res1) {
          if (res1.statusCode == 200) {
            //console.log('查询所有的书籍', res1);
            itemStatus = 1;
            var jsonStr = JSON.stringify(res1.data);
            var jsonPar = JSON.parse(jsonStr);
            console.log('查询所有的书籍', jsonPar);
            that.setData({ item: jsonPar, itemStatus: itemStatus });
          } else {
            itemStatus = 2;
            that.setData({ itemStatus: itemStatus });
            wx.showToast({
              title: '找不到该书籍',
              image: "../../image/fail.png",
              duration: 6000
            })
          }
        },
      })
    }
  },

  searchCode: function (e) {
    SNClicked = true;
    //  console.log('按编码查询');
    var that = this;
    wx.scanCode({
      success: (res) => {
        console.log('按编码查询', res.result);
        var jsonStr = JSON.stringify(res);
        console.log('按编码查询1', jsonStr);
        id = res.result;
        console.log('按编码查询ID', id);
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
          success: function (res1) {
            if (res1.statusCode == 200) {
              itemStatus = 1;
              console.log('出现的block2', itemStatus);
              console.log('查找书籍扫描出来的编码', res1.data);
              var jsonStr = JSON.stringify(res1.data);
              console.log('jsonStr 2', jsonStr);
              var jsonPar = JSON.parse(jsonStr);
              console.log('jsonPar 2', jsonPar);
              that.setData({
                item: jsonPar,
                SNClicked: SNClicked,
                itemStatus: itemStatus
              });
            } else {
              itemStatus = 2;
              that.setData({ itemStatus: itemStatus });
              wx.showToast({
                title: '找不到该书籍',
                image: "../../image/fail.png",
                duration: 6000
              })
            }
          },
        })
      }
    });

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