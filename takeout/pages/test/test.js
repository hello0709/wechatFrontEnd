// pages/test/test.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: '',
  },
  button:function() {
    var that = this;
    wx.request({
      url: 'http://localhost:8081/getDetails',
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log(res.data) //打印到控制台
        var list = res.data.list;
        if (list == null) {
          var toastText = '数据获取失败';
          wx.showToast({
            title: toastText,
            icon: '',
            duration: 2000
          });
        } else {
          that.setData({
            list: list
          })
        }
      }
    })
  }
})