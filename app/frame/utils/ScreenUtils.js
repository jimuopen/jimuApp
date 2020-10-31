'use strict'

import { Dimensions, PixelRatio, Platform } from 'react-native'

//只有竖屏模式，所以可以只获取一次 width
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
// UI 默认给图是 750
export const SCREEN_WIDTH = 375
const fontSizeScale = PixelRatio.getFontScale()

export function px2dp(uiElementPx) {
  return uiElementPx * screenWidth / SCREEN_WIDTH
}

export function px2sp(uiElementPx) {
  return px2dp(uiElementPx) // fontSizeScale
}

export const ScreenPara = {
  ratio: PixelRatio.get(),
  pixel: 1 / PixelRatio.get(),
  size: {
    width: screenWidth,
    height: screenHeight
  },
}

export const isIphoneX = Platform.OS == 'ios' && screenHeight >= 812

export const isIphone = Platform.OS == 'ios'

export const ScreenWidth = screenWidth
export const ScreenHeight = screenHeight
