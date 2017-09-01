// enroll.js
//var classStartTime;
var classid;
var name="";
var city;
var district;
var building;
var grade;
var usertype = "男";
var index;
var capibility;
var phone="";
var school;
var email;
//console.log("打印11111", index);
Page({
  formSubmit: function (e) {
    //console.log('form发生了submit事件，携带数据为：', e.detail.value);
    //console.log('form发生了submit事件，55555携带数据为：', classid);
    var result = this.data.array_name[e.detail.value.selector];
    this.setData({ result: result });
   // console.log('form发生了submit事件，55555携带数据为：', result);
    if (name&&phone) {
      wx.request({
        url: 'https://www.yzschool.com.cn/weichat/class/' + classid,
        method: 'PUT',
        data: {
          "name": name,
          "phone": phone,
          "email": email,
          "school": school,
          "grade": grade,
          "capibility": capibility,
          "usertype": usertype,
          "city": "深圳",
          "district": result,
          "building": building,
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
         // console.log(res.data)
         // console.log('this is get request result', res.statusCode);
          if (res.statusCode==201){
            wx.showToast({
              title: '报名成功',
              icon: 'success',
              duration: 2000
            })
            wx.navigateBack();
          } else if (res.statusCode == 208){
            wx.showToast({
              title: '您已报名该课程，请勿重复',
              duration: 5000
            })
          }else{
            wx.showToast({
              title: '报名失败，请检查网络',
              duration: 5000
            })
          }
         
          
          
        },
        fail: function (res) {
          /* wx.navigateTo({
             url: 'submitRst?result=失败'
           })*/
          wx.showToast({
            title: '报名失败',
            image: "../../image/fail.png",
            duration: 4000
          })
        }
      })
     // console.log('name22232', name);

    }else if(phone){
      wx.showToast({
        title: '未填写姓名',
        image: "../../image/fail.png",
        duration: 4000
      })
     // console.log('name2222', name);
    }else{
      wx.showToast({
        title: '未填写电话',
        image: "../../image/fail.png",
        duration: 4000
      })
     // console.log('name2222', name);
    }
   
  },
  formReset: function () {
   // console.log('form发生了reset事件')
  },

  /**
   * 页面的初始数据
   */
  data: {
    objectArray: [],
    array_name: [],
    index:0,
    usertype:"",
    classLevel: "",
    building: "",
    name: "",
    contactTel: "",
    email: ""
  },

 
  bindName: function (e) {
    name = e.detail.value;
  //  console.log('name value is ',name)
  },
  //年级
  bindGrade: function (e) {
    grade = e.detail.value
  },
  //性别
  bindradio: function (e) {
    usertype = e.detail.value
  },
  //上课区域
  bindPickerChange: function (e) {
   // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
    console.log("打印22222", index);
  },
  
  //课程难度
  bindClassLevel: function (e) {
    capibility = e.detail.value
  },
  
  //上课地点
  bindBuilding: function (e) {
    building = e.detail.value
  },
  //就读学校
  bindSchool: function (e) {
    school = e.detail.value
  },
  //联系电话
  bindPhone: function (e) {
    phone = e.detail.value
  },
  bindEmail: function (e) {
    email = e.detail.value
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //console.log("打印classname", options.classid);
    classid = options.classid;
     that.setData({
       classname: options.classname,
       classid: options.classid
     })

     var array_name = [],
       objectArray = [
         {
           id: 0,
           name: '福田'
         },
         {
           id: 1,
           name: '南山'
         },
         {
           id: 2,
           name: '罗湖'
         },
         {
           id: 3,
           name: '宝安'
         },
         {
           id: 4,
           name: '盐田'
         },
         {
           id: 5,
           name: '龙岗'
         },
         {
           id: 6,
           name: '龙华'
         },
         {
           id: 7,
           name: '光明'
         }
       ];
     objectArray.forEach(function (e) {
       array_name.push(e.name);
     })
     this.setData({ objectArray: objectArray, array_name: array_name });
    // console.log("打印88888", index);
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