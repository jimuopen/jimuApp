import { Component } from 'react'
import PagesManager from '../manager/PagesManager'

export default class BaseHost extends Component{

  constructor(props) {
    super(props)
    this.params = { } //页面跳转过来的参数
    this.page = this.props.page
    this.data = {} //网络请求返回的数据
    this.data.header = {title : this.params.title}
  }

  componentDidMount() {//页面进入的时候会执行此方法
    this._handle(Object.assign(this.params, {'method':'host_init'})) //逻辑页面可接收此参数执行生命周期相关的操作
  }

  componentWillUnmount() { //页面退出的时候会执行此方法
  }

  _refresh = (params) => { //页面刷新预置方法
    this._handle(Object.assign(params,{'method':'host_refresh'}))//host_refresh 会覆盖params中的method方法
  }

  _handle = (navigate) => {
    PagesManager.getLogic(this, navigate)
  }

  /**
   * 页面通用点击事件处理方法
   * @param navigate 接收导航对象
   * 目前的实现是传入一个对象包含type信息，和data数据，这两个是项目中一直使用的方法，
   * 格式：{navigate : {type:'jump',"pageParas":{},"activeUrl":"","pageName":"CurrentGladScreen"},otherData:'otherData'}
   * 另外项目中还有一种传递data.pagecode和data.pageparas的方式，后期可以一起实现或者合并成一套,格式见首页弹窗跳转
   */
  _onPress = (navigate) => {
    console.log('-----onPress-----navigate=' + JSON.stringify(navigate))
    if(!navigate){
      return
    }
    switch (navigate.type) {
      case 'back':
        this.props.navigation.goBack()
        break
      case 'handle':
        this._handle(navigate)
        break
      case 'more':
        this._refresh({})
        break
    }
  }
}
