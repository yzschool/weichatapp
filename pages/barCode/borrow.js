// pages/barCode/borrow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddens: true,
    id:0,
    address:'',
    bookName:'',
    borrowname:'',
    jsonBorrowName:'',
    consoleStatus:0,
    is_first_action:false
  },

  /**
   * 生命周期函数--监听页面加载
   */

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
  
  },
  //借书
  formSubmit1: function (e) {
   // console.log("借书操作scan id is，borrowname is ", this.data.id, this.data.borrowname);
    if (this.data.id && this.data.borrowname) {
      if (this.data.consoleStatus==1){
        //数据库存在该书籍
        console.log("update jsonBorrowName", this.data.jsonBorrowName);
        if (this.data.jsonBorrowName == undefined) {
          //update
          console.log('update');
          console.log("is_first_action value is", this.data.is_first_action)
         /* if (is_first_action == false) {


          } else {

          }*/
          wx.request({
            url: 'https://www.yzschool.com.cn/weichat/book_update',
            method: 'POST',
            data: {
              "id": this.data.id,
              "borrowname": this.data.borrowname,
              "isbn":"",
              "bookname":"",
              "location": "",
              "updatetime":""

            },
            header: {
              'content-type': 'application/json'
            },
            success: function (res) {
              if (res.statusCode == 200) {
                wx.showToast({
                  title: '借书成功',
                  icon: 'success',
                  duration: 3000
                });
                setTimeout(function () {
                  wx.navigateBack();
                }, 1000)
                //wx.navigateBack();
              } else {
                wx.showToast({
                  title: '借书失败',
                  image: "../../image/fail.png",
                  duration: 3000
                })
              }
            },
          })

        } else {
          wx.showToast({
            title: '书籍已被借阅',
            image: "../../image/fail.png",
            duration: 3000
          })
        }
      }else{
        //不存在该书籍
       // console.log("不存在该书籍时的consoleStatus ", this.data.consoleStatus);
       // console.log('add book', this.data.id, this.data.borrowname, this.data.bookName, this.data.address);
        wx.request({
          url: 'https://www.yzschool.com.cn/weichat/book',
          method: 'POST',
          data: {
           /* "id": this.data.id,
            "borrowname": this.data.borrowname,
            "bookname": this.data.bookName,
            "location": this.data.address,*/
            "id": this.data.id,
            "borrowname": this.data.borrowname,
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
                title: '借阅成功',
                icon: 'success',
                duration: 3000
              });
              setTimeout(function () {
                wx.navigateBack();
              }, 1000)
              //wx.navigateBack();
            } else {
              wx.showToast({
                title: '失败',
                image: "../../image/fail.png"
              })
            }
          },
        })
      }
      
    } else {
      wx.showToast({
        title: '借阅人不能为空',
        image: "../../image/fail.png",
        duration: 2000
      })
    }
  },
  formReset: function () {
    // console.log('form发生了reset事件')
  },
  bindBookname: function (e) {
    //bookName = e.detail.value
    this.setData({
      bookName: e.detail.value
    })
  },
  bindBorrowname: function (e) {
    //borrowname = e.detail.value;
    var that=this;
    that.setData({
      borrowname: e.detail.value
    })
    //console.log("12345", borrowname)
  },
  onLoad: function (options) {
    var that = this;
   /* id = options.id;
    address = options.locations;*/
   // console.log("借书页面", options.id, options.locations);
    that.setData({
      id: options.id,
      address: options.locations
    });
    //检查一下ID是否存在数据库里面
   // console.log("555556", that.data.id, that.data.address);
      wx.request({
        url: 'https://www.yzschool.com.cn/weichat/book/id',
        method: 'POST',
        data: {
         /* "id": that.data.id,
          "location": that.data.address,*/

          "id": that.data.id,
          "borrowname": "",
          "isbn": "",
          "bookname": "",
          "location": that.data.address,
          "updatetime": ""
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (re) {
          console.log("55555", re.statusCode);
          if (re.statusCode == 200) {
            //console.log('存在该书籍', re);
            var jsonStr = JSON.stringify(re.data);
            var jsonPar = JSON.parse(jsonStr);
            console.log('145678', jsonPar);
            that.data.consoleStatus=1;
            that.data.jsonBorrowName = jsonPar[0].borrowname;
            console.log('consoleStatus1 存在该书籍', that.data.consoleStatus, that.data.jsonBorrowName);
          } else {
            that.data.consoleStatus=2;
            //console.log('consoleStatus2 不存在该书籍', that.data.consoleStatus);
            //console.log('不存在该书籍');
              that.setData({
                hiddens: false
              });
            };
        }
      })
    

  }
})