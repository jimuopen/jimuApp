import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native'
import {px2sp, px2dp, ScreenPara} from '../utils/ScreenUtils'
import BaseCard from "./base/BaseCard";

// 获得屏幕宽高
const screenWidth = Dimensions.get('window').width

export default class UserCard extends BaseCard{

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <TouchableOpacity
            style={styles.top1}
            onPress={this._onPress}
            activeOpacity={0.8}
        >
          <View style={styles.headImage}>
            <Image
                style={{
                  height: px2dp(53),
                  width: px2dp(53),
                  borderRadius: px2dp(26),
                  borderColor: '#f4f4f4',
                  borderWidth: ScreenPara.pixel
                }}
                source={require('../../image/frame/icon_default_user.png')}
            />
          </View>
          <View style={styles.userTextView}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: px2dp(6),
              height: px2dp(21),
            }}>
              <Text allowFontScaling={false}  style={styles.username}>张三</Text>
            </View>
            <Text allowFontScaling={false}  style={styles.usersummary} numberOfLines={1}>
              <Text allowFontScaling={false}  style={{ fontSize: px2sp(12), color: '#8a8a8a'}}>{'钻石会员'}</Text>
            </Text>
          </View>
          <Image
              style={{
                height: px2dp(30),
                width: px2dp(30),
                marginRight: px2dp(26),
              }}
              source={require('../../image/frame/qrcode.png')}
          />
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  top1: {
    flexDirection: 'row',
    paddingVertical: px2dp(17),
    paddingLeft: px2dp(18),
    alignItems: 'center',
    borderBottomWidth: px2dp(1),
    borderColor: '#f0f0f0',
  },
  headImage: {
    width: px2dp(53),
    height: px2dp(53),
    marginRight: px2dp(12),
  },
  userTextView: {
    justifyContent: 'center',
    flex: 1
  },
  username: {
    // height: ScreenUtils.px2dp(21),
    fontSize: px2sp(16),
    color: '#333333',
  },
  usersummary: {
    fontSize: px2sp(12),
    color: '#787878',
  },
})

