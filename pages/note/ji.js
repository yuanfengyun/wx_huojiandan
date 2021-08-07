Page({
  data: {

  },
  onLoad: function () {
    var that = this;
    var filePath = "http://yungege.top/note.pdf";//对应的网络路径，可以是内网的或者外网
    wx.showLoading({title:"加载中"});
    wx.downloadFile({//下载对应文件
      url: filePath,
      success: function (res) {
        wx.hideLoading();


        var filePath = res.tempFilePath;//文件路径

        wx.openDocument({
          filePath: filePath,//装载对应文件的路径
          fileType: 'pdf',//指定打开的文件类型
          success: function (res) {
            console.log("打开成功");
          },
          fail: function (res) {
            console.log(res);
          }
        })

      },
      fail: function (res) {
        wx.hideLoading();
        console.log(res);
      }
    })


  },
})