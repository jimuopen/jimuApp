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

export default class Item4Card extends BaseCard{

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <View style={{
            borderTopWidth: px2dp(10),
            borderBottomWidth: px2dp(10),
            borderColor: '#f0f0f0',
        }}>
        <Text allowFontScaling={false}  style={styles.titletext}>我的订单</Text>
            <View style={{height: ScreenPara.pixel,width:screenWidth}}>
                <View style={{
                    height:ScreenPara.pixel,
                    backgroundColor: '#ededed',
                }}/>
            </View>
        <View style={styles.bottom1} onPress={() => { }}>
          <TouchableOpacity
              style={styles.bottom1view}
              activityOpacity={0.8}
          >
              <Image
                  style={{
                      height: px2dp(23),
                      width: px2dp(23),
                  }}
                  source={require('../../image/frame/paid.png')}
              />
            <Text allowFontScaling={false}  style={styles.bottom1text}>待付款</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.bottom1view}
              activityOpacity={0.8}
          >
              <Image
                  style={{
                      height: px2dp(20),
                      width: px2dp(20),
                  }}
                  source={require('../../image/frame/delivered.png')}
              />
            <Text allowFontScaling={false}  style={styles.bottom1text}>待发货</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.bottom1view}
              activityOpacity={0.8}
          >
              <Image
                  style={{
                      height: px2dp(28),
                      width: px2dp(28),
                  }}
                  source={require('../../image/frame/received.png')}
              />
            <Text allowFontScaling={false}  style={styles.bottom1text}>待收货</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.bottom1view}
              activityOpacity={0.8}
          >
              <Image
                  style={{
                      height: px2dp(26),
                      width: px2dp(26),
                  }} resizeMode={'contain'}
                  source={require('../../image/frame/after_sale.png')}
              />
            <Text allowFontScaling={false}  style={styles.bottom1text}>售后</Text>
          </TouchableOpacity>
        </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  bottom1: {
    flexDirection: 'row',
    paddingVertical: px2dp(8),
    backgroundColor:'#fff',
    borderBottomWidth: px2dp(1),
    borderColor: '#f0f0f0',
  },
  bottom1view: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth / 4,
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
  titletext: {
    fontSize: px2sp(14),
    lineHeight: px2sp(25),
    color: '#333333',
    marginLeft:px2dp(16),
    marginTop:px2dp(6),
    marginBottom:px2dp(6),
  },
})

