/**
* 入口展示条卡片
*/
import React from 'react'
import {
  View,
  Text, TouchableOpacity, Image,
} from 'react-native'
import BaseCard from '../base/BaseCard'
import { px2dp, px2sp } from '../../utils/ScreenUtils'
export default class EntryCard extends BaseCard {

  constructor(props) {
    super(props)
  }

  //绘制左边文本
  _renderLeftText= () => {
      return (
      <View style={{flexDirection:'row'}}>
          {this._data.leftImage ? <Image style={{width:px2dp(18), height:px2dp(18)}} source={{uri:this._data.leftImage}} /> :null}
            <Text style={[ { fontSize: px2sp(16), color: '#8a8a8a',marginLeft: px2dp(10)}, (this._data.leftText && this._data.leftText.style)]}
              allowFontScaling={false} numberOfLines={1}>{this._data.leftText}
            </Text>
      </View>
      )
  }

  //绘制右边文本
  _renderRightText= () => {
    return (
        <Text style={[{ fontSize: px2sp(16), color: '#8a8a8a'}, (this._data.rightText && this._data.rightText.style)]}
              allowFontScaling={false} numberOfLines={1}>{this._data.rightText}
        </Text>
    )
  }

  //绘制右边Icon
  _renderRightImage= () => {
    return (<Image style={{width:px2dp(14), height:px2dp(14)}} source={require('../../../image/frame/entry_more.png')} />)
  }

  render() {
    if(this._data && this._data.hideCard){
      return null
    }
    return (
      <TouchableOpacity activeOpacity={0.8} disabled={!this._data.navigate} onPress={() => { this._onPress(this._data.navigate) } }
                        style={[{flexDirection: 'row', alignItems:'center', justifyContent: 'space-between', height:px2dp(40),
                          backgroundColor:'white', paddingLeft:px2dp(16), paddingRight:px2dp(16)}, (this._data.view && this._data.view.style)]}>
          <View style={[{flexDirection: 'row', alignItems:'center'}, (this._data.leftView && this._data.leftView.style)]}>
            {this._renderLeftText()}
          </View>
          <View style={[{flexDirection: 'row', alignItems:'center'}, (this._data.rightView && this._data.rightView.style)]}>
              {this._data.showRightText ? this._renderRightText() : null }
              {this._data.showRightImage ? this._renderRightImage() : null }
          </View>
      </TouchableOpacity>
    )
  }
}
