Page({
  data: {

  },
  onLoad: function () {
    var that = this;
    var filePath = "http://yungege.top/%E8%9B%8B%E9%B8%A1%E5%AD%98%E6%A0%8F%E9%87%8F2013-2020.xls";//对应的网络路径，可以是内网的或者外网

    wx.downloadFile({//下载对应文件
      url: filePath,
      success: function (res) {

        var filePath = res.tempFilePath;//文件路径

        wx.openDocument({
          filePath: filePath,//装载对应文件的路径
          fileType: 'docx',//指定打开的文件类型
          success: function (res) {
            console.log("打开成功");
          },
          fail: function (res) {
            console.log(res);
          }
        })

      },
      fail: function (res) {
        console.log(res);
      }
    })


  },
})