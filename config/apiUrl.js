// let ipUrl = 'http://127.0.0.1:7001/default/'//本地
let ipUrl = 'http://47.113.118.154/default/'//云服务器（线上）

let servPath = {

  //首页列表 接口
  getArticleList: ipUrl + 'getArticleList',

  //详细页 接口
  getArticleById: ipUrl + 'getArticleById/',

  //获得文章类别 接口
  getTypeInfo: ipUrl + 'getTypeInfo',

  //根据文章类别获取文章列表 接口
  getListById: ipUrl + 'getListById/',


}

export default servPath;