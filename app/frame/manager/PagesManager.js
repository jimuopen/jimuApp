/**
 * 页面配置管理器，所有卡片在此注册
 */
import {CartPage} from "../page/CartPage";
import {HomePage} from "../page/HomePage";
import {ListPage} from "../page/ListPage";
import {MinePage} from "../page/MinePage";


import {
  Dimensions, PixelRatio,
} from 'react-native'

export default class PagesManager{

  /**
   * 获得页面处
   * @param host 宿主
   * @param params 参数
   */
  static getLogic(host, params) {
    console.log('--- getLogic --- host.page=' + host.page + ',===' + JSON.stringify(host.page))
    let retPage = ''
    if(host.page){
      const map = new Map()
      //map.set('MinePage', MinePageLogic)
      retPage = map.get(host.page)
    }
    retPage ? retPage(host, params) : this.getDefaultController(host, params)
  }

  /**
   * 获取页面模板
   * @param pageName 页面名称
   * @param params 页面参数,可以是respon数据
   */
  static getPage(pageName, params){
    console.log('--- getPage --- pageName=' + pageName)
    let retPage = ''
    if(pageName){
      const map = new Map()
      map.set('HomePage', HomePage())
      map.set('CartPage', CartPage())
      map.set('ListPage', ListPage())
      map.set('MinePage', MinePage())
      retPage = map.get(pageName)
    }
    return new Promise(resolve => {resolve(retPage)})

  /*  return fetch('http://127.0.0.1:3000/shop/' + pageName, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        screen_width: Dimensions.get('window').width,
        screen_height: Dimensions.get('window').height,
        ratio: PixelRatio.get(),
        fontScale: PixelRatio.getFontScale(),
      })
    }).then((response) => response.json())
    .then((responseJson) => {
      //console.dir(responseJson)
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    })*/
  }

  /**
   * 默认的页面处理器
   * @param host
   * @param params
   */
  static getDefaultController (host, params) {
    console.log('-- getDefaultController handle -----' + JSON.stringify(params))
    switch (params.method) {
      case 'host_init':
        host._refresh(Object.assign(params, {'loadingType' : 0}))
        break
      case 'host_refresh'://页面重新展示
        this.getPage(host.page, params).then((response) => {
          host.data = response.data
          host.setState({})
        })
        break
    }
  }
}
