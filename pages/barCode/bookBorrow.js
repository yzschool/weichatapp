// pages/barCode/bookBorrrow.js
var id;
var status;
var itemStatus;
var bookName;
var bookNames = "";
var borrowname ="";
var borrownameR = "";
var address;
var bookList;
var item;
var SNClicked = false;
Page({
  data: {
    hiddens:true
  },


//借书
  formSubmit1: function (e) {
    console.log("借书操作scan id is，borrowname is ", id,borrowname);
    if (id && borrowname) {
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
            console.log('（借书）用ID 查出的返回代码为200,证明数据库里面有这本书', res1.statusCode);
            var jsonStr = JSON.stringify(res1.data);
            var jsonPar = JSON.parse(jsonStr);
            console.log('1456786', jsonPar);
            console.log('为什么为空', jsonPar[0].borrowname);
            if (jsonPar[0].borrowname == "") {
              //update
              console.log('update');
              wx.request({
                url: 'https://www.yzschool.com.cn/weichat/book_update',
                method: 'POST',
                data: {
                  "id": id,
                  "borrowname": borrowname,
                },
                header: {
                  'content-type': 'application/json'
                },
                success: function (res) {
                  if (res.statusCode == 200) {
                    wx.showToast({
                      title: '借书成功',
                      icon: 'success',
                      duration: 4000
                    });
                    var City
                    //wx.navigateBack();
                  } else {
                    wx.showToast({
                      title: '借书失败',
                      image: "../../image/fail.png",
                      duration: 4000
                   })
                  }
                },
              })
            } else {
              wx.showToast({
                title: '书籍已被借阅',
                image: "../../image/fail.png",
                duration: 4000
              })
            }

          } else {
            //数据库没这本书，就要跳到添加书目，borrowname有数据
            console.log('add book',id,borrowname,bookName,address);
            wx.request({
              url: 'https://www.yzschool.com.cn/weichat/book',
              method: 'POST',
              data: {
                "id": id,
                "borrowname": borrowname,
                "bookname": bookName,
                "location": address,
              },
              header: {
                'content-type': 'application/json'
              },
              success: function (res) {
                if (res.statusCode == 201) {
                  wx.showToast({
                    title: '借阅成功',
                    icon: 'success',
                    duration: 6000
                  })
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
        },
      })

    } else {
      wx.showToast({
        title: '借阅人不能为空',
        image: "../../image/fail.png",
        duration: 3000
      })
    }
},
//还书
  formSubmit2: function (e) {
    console.log("还书操作scan id is ", id);
    console.log("还书操作scan id is ", borrownameR);
    if (borrownameR !=""){
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
    }else{
      wx.showToast({
        title: '该书籍未被借阅',
        image: "../../image/fail.png",
        duration: 3000
      })
    }
   
  },
  //添加书
  formSubmit3: function (e) {
    console.log('form发生了submit事件，添加书目', bookName);
    if (bookName) {
      wx.request({
        url: 'https://www.yzschool.com.cn/weichat/book',
        method: 'POST',
        data: {
          "id": id,
          "bookname": bookName,
          "location": address,
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
            })
            console.log("7777777")
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
            itemStatus=1;
            console.log('出现的block', itemStatus);
            //console.log('14567*', res1);
            var jsonStr = JSON.stringify(res1.data);
            var jsonPar = JSON.parse(jsonStr);
            console.log('按照名字查询数据', jsonPar);
            that.setData({ item: jsonPar, itemStatus: itemStatus});
          } else {
            console.log('按照名字查询数据1', res1.statusCode);
            itemStatus=2;
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

  //查找书目，按唯一编码查询
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
                itemStatus:itemStatus
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
/*  searchName: function (e) {
    console.log('点击按钮“书名查询”');
    SNClicked = true;
    var that = this;
    that.setData({ SNClicked: SNClicked })
  },*/
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   // console.log("111", itemStatus)
    var that = this;
    id = options.id;
    status = options.status;
    address = options.locations;
    console.log("状态：1借，2还，3加，4查，5删", options.status, options.locations)
    that.setData({
      id: options.id,
      status: options.status,
      address: options.locations
    });
    //检查一下ID是否存在数据库里面
    if (status == 1 || status == 2){
      console.log("555556", id,address);
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
            if (status == 2) {
              borrownameR = jsonPar[0].borrowname;
             // console.log("5557", borrownameT);
              that.setData({
                borrownameR: borrownameR
              });
              console.log("dhg", borrownameR)
            }
          } else {
            console.log('不存在该书籍');
            if (status == 1) {
              that.setData({
                hiddens: false
              });
            };
          /*  wx.showToast({
              title: '操作失败',
              image: "../../image/fail.png",
              duration: 3000
            })*/
          }
        }
      })
    }
    
  },

  bindBookname: function (e) {
    bookName = e.detail.value
  },

  bindBorrowname: function(e){
    borrowname = e.detail.value;
    console.log("12345", borrowname)
  },
 /* bindAdd: function (e) {
    address = e.detail.value
  },*/

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