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

export default class Item3Card extends BaseCard{

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <View style={styles.bottom1} onPress={() => { }}>
          <TouchableOpacity
              style={styles.bottom1view}
              activityOpacity={0.8}
          >
            <Text allowFontScaling={false}  style={styles.bottom1warn}>50</Text>
            <Text allowFontScaling={false}  style={styles.bottom1text}>商品收藏</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.bottom1view}
              activityOpacity={0.8}
          >
            <Text allowFontScaling={false}  style={styles.bottom1warn}>3</Text>
            <Text allowFontScaling={false}  style={styles.bottom1text}>关注店铺</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.bottom1Right}
              activityOpacity={0.8}
          >
            <Text allowFontScaling={false}  style={styles.bottom1warn}>6</Text>
            <Text allowFontScaling={false}  style={styles.bottom1text}>优惠券</Text>
          </TouchableOpacity>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  bottom1: {
    flexDirection: 'row',
    paddingVertical: px2dp(8),
    borderTopWidth: px2dp(10),
    borderColor: '#f0f0f0',
  },
  bottom1view: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth / 3,
  },
  bottom1warn: {
    lineHeight: px2sp(19),
    fontSize: px2sp(16),
    color: '#ff3344',
  },
  bottom1text: {
    fontSize: px2sp(12),
    lineHeight: px2sp(17),
    color: '#787878',
  },
  bottom1Right: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth / 3,
  },
})

