// pages/barCode/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookNames:"",
    item:[],
    addressS:'',
    itemStatus:0,
    id:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
   // console.log("查找删除页面",  options.locations);
    that.setData({
      addressS: options.locations
    });
  },

  //获取输入的书名
  bindBooknames: function (e) {
    this.setData({
      bookNames: e.detail.value
    })
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
          //console.log("已经发送删除请求");
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
              //console.log("已经发送删除请求", res1.statusCode);
              if (res1.statusCode == 204) {
                wx.showToast({
                  title: '删除成功',
                  icon: 'success',
                  duration: 3000
                });
                that1.setData.itemStatus = 2;
                that1.setData({ itemStatus: that1.setData.itemStatus });
               // console.log("111111", that1.setData.itemStatus);
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
   // console.log('按书名查询结果555', that.data.bookNames);
    if (that.data.bookNames != "") {
     // console.log('按书名查询结果', that.data.bookNames);
      wx.request({
        url: 'https://www.yzschool.com.cn/weichat/book/name',
        method: 'POST',
        data: {
          "bookname": that.data.bookNames,
          "location": that.data.addressS,
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res1) {
          if (res1.statusCode == 200) {
            //console.log('按照名字查询数据1', res1.statusCode);
            that.data.itemStatus = 1;
            //console.log('出现的block', that.data.itemStatus);
            //console.log('14567*', res1);
            var jsonStr = JSON.stringify(res1.data);
            var jsonPar = JSON.parse(jsonStr);
            //console.log('按照名字查询数据', jsonPar);
            that.setData({ item: jsonPar, itemStatus: that.data.itemStatus });
          } else {
            //console.log('按照名字查询数据1', res1.statusCode);
            that.setData.itemStatus = 2;
           // console.log("222222", that.setData.itemStatus);
            that.setData({ itemStatus: that.setData.itemStatus });
            wx.showToast({
              title: '找不到该书籍',
              image: "../../image/fail.png",
              duration: 6000
            })
          }
        },
      })
    } else {
     // console.log('查询所有结果');
      wx.request({
        url: 'https://www.yzschool.com.cn/weichat/books',
        method: 'POST',
        data: {
          "location": that.data.addressS,
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res1) {
          if (res1.statusCode == 200) {
            //console.log('查询所有的书籍', res1);
            that.setData.itemStatus = 1;
            var jsonStr = JSON.stringify(res1.data);
            var jsonPar = JSON.parse(jsonStr);
            console.log('查询所有的书籍', jsonPar);
            //item1 = jsonPar;
            that.setData({
               item: jsonPar, 
               itemStatus: that.setData.itemStatus 
               });
          } else {
            that.setData.itemStatus = 2;
            that.setData({ itemStatus: that.setData.itemStatus });
            //console.log("res.statusCode", res1.statusCode);
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
   // SNClicked = true;
    //  console.log('按编码查询');
    var that = this;
    wx.scanCode({
      success: (res) => {
      //  console.log('按编码查询', res.result);
        var jsonStr = JSON.stringify(res);
        //console.log('按编码查询1', jsonStr);
        that.data.id = res.result;
     //   console.log('按编码查询ID', that.data.id);
        wx.request({
          url: 'https://www.yzschool.com.cn/weichat/book/id',
          method: 'POST',
          data: {
            "id": that.data.id,
            "location": that.data.addressS,
          },
          header: {
            'content-type': 'application/json'
          },
          success: function (res1) {
            if (res1.statusCode == 200) {
              that.setData.itemStatus = 1;
             // console.log('出现的block2', that.setData.itemStatus);
             // console.log('查找书籍扫描出来的编码', res1.data);
              var jsonStr = JSON.stringify(res1.data);
             // console.log('jsonStr 2', jsonStr);
              var jsonPar = JSON.parse(jsonStr);
             // console.log('jsonPar 2', jsonPar);
              that.setData({
                item: jsonPar,
                itemStatus: that.setData.itemStatus
              });
            } else {
              that.setData.itemStatus = 2;
              that.setData({ itemStatus: that.setData.itemStatus });
             // console.log("res.statusCode", res1.statusCode);
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