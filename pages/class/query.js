// query.js
var className="";
Page({
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', className);
    wx.navigateTo({
      url: '../class/queryList?name=' + className
    })
      
  },

  
  formReset: function () {
    console.log('form发生了reset事件')
  },
  /**
   * 页面的初始数据
   */
  data: {
    movies:[
      { url:'http://yzschool.com.cn/images/weiCode/swiper1.jpg'},
      { url: 'http://yzschool.com.cn/images/weiCode/swiper2.jpg' },
      { url: 'http://yzschool.com.cn/images/weiCode/swiper3.jpg' },
    ] ,
    views:[
      {
        image:"http://yzschool.com.cn/images/class1.png",
        title:"中文精深阅读",
        tips:"母语阅读和写作..."
      },
      {
        image: "http://yzschool.com.cn/images/class2.png",
        title: "原版英语学习",
        tips: "课外的英语学习围绕分级..."
      },
      {
        image: "http://yzschool.com.cn/images/class3.png",
        title: "科技创新与实践",
        tips: "作为熟悉和掌握二十一世纪..."
      }
    ]
  },

//获取查询值
  bindClssname: function (e) {
   // console.log("find me",e.detail.value)
    className = e.detail.value
  },
  infoBtn:function(e){
    var id = e.currentTarget.id;
    /*var id=e.currentTarget.id;*/
    console.log("获得的ID值", id);
    wx.navigateTo({
      url: '../class/info?indexId=' + id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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