/*
* 底部按钮栏
*/
import React from 'react'
import {
  ImageBackground, Text, StyleSheet, Image,
} from 'react-native'
import { px2dp, px2sp, ScreenPara } from '../../utils/ScreenUtils'
import LinearGradient from "react-native-linear-gradient";

export default class FooterCard extends React.Component {

  constructor(props) {
    super(props)
    this._initData()
  }

  _initData(){
    const { data, onPress} = this.props
    this._data = data
    this._onPress = onPress
  }

  render() {

    return (
      <ImageBackground
        style={{ position: 'absolute', bottom: 0, height: px2dp(74),
          paddingTop: px2dp(6),
          width: ScreenPara.size.width, flexDirection: 'row', alignItems: 'center',
          justifyContent: 'space-between',
        }}
        source={require('../../../image/frame/shadow.png')} resizeMode='stretch'>
        <Image style={{width:px2dp(25),height:px2dp(25),marginLeft:px2dp(16)}}
               source={require('../../../image/frame/radio_selected.png')} />
        <Text allowFontScaling={false}  numberOfLines={2}
              style={{ color: '#3a3a3a', textAlign: 'center',
                marginRight:px2dp(20)}} >
          合计：￥ 522.00 元
        </Text>

        <LinearGradient colors={['#fC101B', '#fD4C15']} style={styles.buttonWrapper} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
          <Text allowFontScaling={false}  style={{ fontSize: px2sp(17), color: '#FFF' }} >去结算(3)</Text>
        </LinearGradient >
      </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
  buttonWrapper: {
    height: px2dp(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: px2dp(130),
    borderRadius: px2dp(25),
    marginRight:px2dp(16)
}
})