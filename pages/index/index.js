// index.js
// 获取应用实例
const app = getApp()

const types = ['default', 'primary', 'warn']
const pageObject = {
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },

  onShareAppMessage() {
    return {
      title: '专业的鸡蛋数据基地',
      path: 'pages/index/index'
    }
  },

  setDisabled() {
    this.setData({
      disabled: !this.data.disabled
    })
  },

  setPlain() {
    this.setData({
      plain: !this.data.plain
    })
  },

  setLoading() {
    this.setData({
      loading: !this.data.loading
    })
  },
  
  handleContact(e) {
    console.log(e.detail)
  },

  handleGetPhoneNumber(e) {
    console.log(e.detail)
  },

  handleGetUserInfo(e) {
    console.log(e.detail)
  },

  handleOpenSetting(e) {
    console.log(e.detail.authSetting)
  },

  handleGetUserInfo(e) {
    console.log(e.detail.userInfo)
  },

  egg_btn() {
    //点击跳转到list页面
    wx.navigateTo({
      //把app.json中的路径拿过来前面加上 / 就可以了
      url: '/pages/egg/egg',
    })
  },
  ji_btn() {
    //点击跳转到list页面
    //wx.navigateTo({
      //把app.json中的路径拿过来前面加上 / 就可以了
      //url: '/pages/ji/ji',
    //})
    wx.showToast({

      title: '联系火箭蛋群主',
 
      icon: 'success',
 
      duration: 2000//持续的时间
 
    })
  },
  kaihu_btn() {
    //点击跳转到list页面
    //wx.navigateTo({
      //把app.json中的路径拿过来前面加上 / 就可以了
      //url: '/pages/ji/ji',
    //})
    wx.showToast({

      title: '联系火箭蛋群主',
 
      icon: 'success',
 
      duration: 2000//持续的时间
 
    })
  },
  ctp_btn() {
    //点击跳转到list页面
    //wx.navigateTo({
      //把app.json中的路径拿过来前面加上 / 就可以了
      //url: '/pages/ji/ji',
    //})
    wx.showToast({

      title: '联系火箭蛋群主',
 
      icon: 'success',
 
      duration: 2000//持续的时间
 
    })
  },
  chenben_btn() {
    //点击跳转到list页面
    wx.navigateTo({
      //把app.json中的路径拿过来前面加上 / 就可以了
      url: '/pages/chenben/ji',
    })
  },
  note_btn() {
    //点击跳转到list页面
    wx.navigateTo({
      //把app.json中的路径拿过来前面加上 / 就可以了
      url: '/pages/note/ji',
    })
  },
  //开启小程序之旅按钮的点击事件
  xx0x_btn() {
    //点击跳转到list页面
    wx.navigateTo({
      //把app.json中的路径拿过来前面加上 / 就可以了
      url: '/pages/xx0x/xx0x',
    })
  },

  df1_btn() {
    //点击跳转到list页面
    wx.navigateTo({
      //把app.json中的路径拿过来前面加上 / 就可以了
      url: '/pages/df_1/df1',
    })
  },
  df2_btn() {
    //点击跳转到list页面
    wx.navigateTo({
      //把app.json中的路径拿过来前面加上 / 就可以了
      url: '/pages/df_2/df2',
    })
  },
  df3_btn() {
    //点击跳转到list页面
    wx.navigateTo({
      //把app.json中的路径拿过来前面加上 / 就可以了
      url: '/pages/df_3/df3',
    })
  },
  df4_btn() {
    //点击跳转到list页面
    wx.navigateTo({
      //把app.json中的路径拿过来前面加上 / 就可以了
      url: '/pages/df_4/df4',
    })
  },
  basis_btn() {
    //点击跳转到list页面
    wx.navigateTo({
      //把app.json中的路径拿过来前面加上 / 就可以了
      url: '/pages/basis/page',
    })
  },
  basis_year_btn() {
    //点击跳转到list页面
    wx.navigateTo({
      //把app.json中的路径拿过来前面加上 / 就可以了
      url: '/pages/basis_year/page',
    })
  }
}

for (let i = 0; i < types.length; ++i) {
  (function (type) {
    pageObject[type] = function () {
      const key = type + 'Size'
      const changedData = {}
      changedData[key] =
        this.data[key] === 'default' ? 'mini' : 'default'
      this.setData(changedData)
    }
  }(types[i]))
}

Page(pageObject)
