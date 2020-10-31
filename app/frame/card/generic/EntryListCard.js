/*
* 入口列表卡片
*/
import React from 'react'
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native'
import { px2dp, px2sp } from '../../utils/ScreenUtils'
import LinearGradient from "react-native-linear-gradient"

// 获得屏幕宽高
const screenWidth = Dimensions.get('window').width

export default class EntryListCard extends React.Component {

  constructor(props) {
    super(props)
    this._initData()
  }

  _initData(){
    const { data, onPress} = this.props
    this._data = data
    this._onPress = onPress
    this.size = this._data.length
  }

  _renderItems = () => {
    const result = []
    const width = Math.floor(screenWidth / 4)
    this._data.map((x, i) =>
    {
      result.push(
        <TouchableOpacity key={`entry-${i}`} style={{ width, justifyContent: 'center', alignItems: 'center', marginTop: px2dp(16) }}
                          activeOpacity={0.8} onPress={() => {this._onPress(x.navigate)}}>
          <Image style={{ height: px2dp(24), width: px2dp(24) }} source={{ uri: x.icon }} />
          <Text allowFontScaling={false} style={{ fontSize: px2sp(12), color: '#333333', marginTop: px2dp(8) }}>{x.name}</Text>
          {
            x.conner ?
              <LinearGradient colors={['#CC101B', '#9D0C15']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                              style={{ height: px2dp(14), position: 'absolute', top: -px2dp(8), left: width / 2, borderRadius: px2dp(7), borderBottomLeftRadius: 0, justifyContent: 'center', alignItems: 'center' }}>
                <Text allowFontScaling={false} style={{ fontSize: px2sp(8.5), color: 'white', paddingHorizontal: px2dp(3.5) }}>{x.conner}</Text>
              </LinearGradient > : null
          }
        </TouchableOpacity>
      )
    })
    return result
  }

  render() {
    return (
      <View key='accountFunctionEntryList' style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: -px2dp(12) }}>
            {this._renderItems()}
      </View>
    )
  }
}
