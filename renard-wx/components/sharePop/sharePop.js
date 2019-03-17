// components/sharePop/sharePop.js
Component({
 /**
  * 组件的属性列表
  */
 properties: {
  url: {
   type: String,
   value: '', // 属性值 （可选）
  },
  bottom:{
   type: Number,
   value: 0, // 属性值 （可选）
  }
 },

 /**
  * 组件的初始数据
  */
 data: {
  // 弹窗显示控制
  showPop: false,
 },

 /**
  * 组件的方法列表
  */
 methods: {
  closeShare: function() {
   this.setData({
    showPop: false,
   });
  },

  togglePopup: function() {
   let that = this;
   this.setData({
    showPop: !this.data.showPop,
   });
  },

  // 保存分享图
  _saveShare: function() {
    // 如果storage中设置了cartId，则是立即购买，否则是购物车购买
    try {
      wx.setStorageSync('cartId', "123");
      wx.setStorageSync('grouponRulesId', "123");
      wx.setStorageSync('grouponLinkId', "123");
      wx.navigateTo({
        url: '../../pages/poster/poster'
      })
    } catch (e) { }

  /* wx.showLoading({
    title: '加载中',
   });

   setTimeout(function() {
    wx.hideLoading()
   }, 2000);

   let that = this;
   wx.downloadFile({
    url: that.data.url,
    success: function(res) {
     console.log(res)
     wx.saveImageToPhotosAlbum({
      filePath: res.tempFilePath,
      success: function(res) {
       wx.showModal({
        title: '存图成功',
        content: '图片成功保存到相册了，可以分享到朋友圈了',
        showCancel: false,
        confirmText: '好的',
        confirmColor: '#a78845',
        success: function(res) {
         if (res.confirm) {
          console.log('用户点击确定');
         }
        }
       });
       wx.hideLoading();
      },
      fail: function(res) {
       console.log('fail')
      }
     })
    },
    fail: function() {
     console.log('fail')
    }
   })
    */


  },

 }
})