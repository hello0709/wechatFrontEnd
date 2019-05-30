// pages/details/details.js
Page({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
   
  },
  //just tset a while
  // formSubmit:function(e){
  //   console.log(e.detail.value);
  // }
  // send message to backend
  formSubmit: function(e) {
    if (e.detail.value.good_info.length == 0 || e.detail.value.buyaddress.length == 0 || e.detail.value.receiveaddress.length==0){
    wx.showToast({
      title: '请输入用户信息',
      icon:'loading',
      duration:1000
    })
    setTimeout(function(){
      wx.hideToast()
    },2000)
    }
    else if(e.detail.value.phonenumber.length!=11){
      wx.showToast({
        title: '输入正确的手机号',
        icon:'loading',
        duration:1000,
      })
      setTimeout(function(){
        wx.hideToast()
      },2000)
    }
    else{
    var that = this;
    var formData = e.detail.value; //获取表单所有input的值  
    wx.request({
      url: 'http://172.24.118.8:8081/getInfo',
      header: {
        "Content-Type": "application/json"
      },
      method: "POST",
      data:formData,
      success: function (res) {
        console.log(res.data);
        wx.showToast({
          title: '下单成功',
          icon:'success',
          duration:1000,
        })
        setTimeout(function () {
          wx.hideToast()
        }, 2000)
      }
    })
  }
  }

})