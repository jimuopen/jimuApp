import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native'
import BaseCard from './BaseCard'
import { isIphoneX, px2dp, px2sp, ScreenPara } from '../../utils/ScreenUtils'

export default class HeaderCard extends BaseCard {

  constructor(props) {
    super(props)
  }

  _renderLeft = () => {
    if(this._data.hideLeft){
      return null
    }
    return (
      <TouchableOpacity
        onPress={() => this._onPress && this._onPress({type:'back'})}
        style={styles.left}
        activeOpacity={0.8}
      >
        <Image
          resizeMode="contain"
          style={{ height: px2dp(20), width: px2dp(20) }}
          source={require('../../../image/frame/back.png')}
        />
      </TouchableOpacity>
    )
  }

  _renderTitle = () => {
    let subTitle = this._data && this._data.subTitle
    let title = this._data && this._data.title
    let options = this._data && this._data.options
    const optArr = (options || '').split(',')
    const width = ScreenPara.size.width - px2dp(12 + optArr.length * 40 * 2)
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', height: px2dp(44) }}>
        <Text allowFontScaling={false}  numberOfLines={2} style={[styles.title, { color: '#8a8a8a', width, textAlign: 'center', marginLeft:px2dp(25), marginRight:px2dp(44) }]} >
          {`${title ? title : ''} ${subTitle ? subTitle : ''}`}
        </Text>
      </View>
    )
  }

  _renderRight = () => {
    if(this._data.hideRight){
      return null
    }
    return (
      <View style={styles.rightWrapper}>
        <TouchableOpacity style={styles.iconWrapper} activeOpacity={0.8} onPress={() => this._onPress && this._onPress({type:'more'})}>
          <Image style={styles.iconImg} source={require('../../../image/frame/more.png')} />
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    if (Platform.OS == 'ios') {
      return (
          <View style={{ height: px2dp(isIphoneX ? 88 : 64), backgroundColor: '#FFF' }}>
            <View style={{ height: px2dp(isIphoneX ? 44 : 20) }} />
            <View style={styles.container}>
              {this._renderLeft()}
              {this._renderTitle()}
              {this._renderRight()}
            </View>
          </View >
      )
    } else {
      return (
          <View style={[styles.container, {backgroundColor: '#FFF'}]}>
            {this._renderLeft()}
            {this._renderTitle()}
            {this._renderRight()}
          </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height: px2dp(44),
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#FFF'
  },
  title: {
    fontSize: px2sp(16),
    color: '#333',
    fontWeight: 'bold',
    includeFontPadding: false
  },
  title2: {
    fontSize: px2sp(13),
    color: '#333',
    fontWeight: 'bold',
    includeFontPadding: false
  },
  subTitle: {
    marginTop: px2dp(Platform.OS == 'ios' ? 6 : 4),
    fontSize: px2sp(10),
    color: '#808080',
    includeFontPadding: false
  },
  left: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    height: px2dp(44),
    width: px2dp(44),
    left: px2dp(6)
  },
  rightWrapper: {
    position: 'absolute',
    right: px2dp(6),
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: px2dp(44),
    width: px2dp(40),
  },
  iconImg: {
    width: px2dp(40),
    height: px2dp(40)
  },
  iconText: {
    fontSize: px2sp(10),
    color: '#333',
    marginTop: px2dp(4)
  }
})
