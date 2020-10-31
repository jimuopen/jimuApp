/**
* 基础卡片
*/
import React from 'react'

export default class BaseCard extends React.Component {

  constructor(props) {
    super(props)
    this._initData()
  }

  _initData(){
    const { data, onPress} = this.props
    this._data = data
    this._onPress = onPress
  }

/*  componentDidUpdate(nextProps) {
    if(this._data !== nextProps.data) {
      this._data = nextProps.data
    }
  }*/

  componentWillReceiveProps(nextProps) {
    if(this._data !== nextProps.data) {
      this._data = nextProps.data
    }
  }

  update(data){ //外部调用
    if(data){
      this._data = data
    }
    this.setState({})
  }
}
