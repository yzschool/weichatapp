// info.js
var i=0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:[
      {
        title:"中文精深阅读",
        content:"母语阅读和写作是最核心的基础能力，从中国经典的诗经、小说等开始到大量的现代文学和非虚构类作品的阅读讨论，利用课外扩展整本书的阅读能力、审辩性思考、讨论，来为写作奠定基础。写作从儿童绘本配词开始，到低年级的叙事、说明、沟通性、辩论性问题写作，到高年级的说服性、复杂故事构造、说明性与展望性写作，通过母语的学习，陪伴儿童的掌握文学和逻辑以及判断能力。 ",
        movies: [
          { url: 'http://yzschool.com.cn/images/g6.jpg' },
          { url: 'http://yzschool.com.cn/images/f1.jpg' },
          { url: 'http://yzschool.com.cn/images/g1.jpg' },
        ] 
      },
      {
        title:"原版英语学习",
        content:"课外的英语学习围绕分级阅读开展，采用美国学校的课外阅读材料，包含故事、介绍、传记、科技、历史、地理等内容，全面拓展儿童和少年通过英语认识外界，快速提升英语的读、书、写和听的能力。同时融合不同年级的核心辅助技能，比如低年级的自然拼读、朗读和掌握高频词，以及高年级对故事的复述、写作和自我阅读英文原著的能力。 ",
        movies: [
          { url: 'http://yzschool.com.cn/images/co6.jpg' },
          { url: 'http://yzschool.com.cn/images/g3.jpg' },
          { url: 'http://yzschool.com.cn/images/g5.jpg' },
        ] 
      },
      {
        title: "科技创新与实践",
        content: "作为熟悉和掌握二十一世纪科技技能的课程，科技创新包括编程、机器人、电影制作、物理实验等涵盖小学低年级、高年级和初中的扩展性内容。协助儿童和少年通过科技手段表达故事构建，以及理解事物后面的因素，为在新世纪的学习奠定基础的同时，协助青少年结伴来提升科学的素养，进一步激发学习中文写作、数学应用、以及英语等能力。",
        movies: [
          { url: 'http://yzschool.com.cn/images/科技编程2.jpg' },
          { url: 'http://yzschool.com.cn/images/g4.jpg' },
          { url: 'http://yzschool.com.cn/images/co1.jpg' },
        ] 
      }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.indexId == 0){
      i = 0;
    } else if (options.indexId == 1){
      i = 1;
    }else{
      i = 2;
    }
    var that=this;
    that.setData({ i: i})
  
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