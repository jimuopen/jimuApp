/**
 * 倒计时
 */
import React from 'react'
import {px2dp, px2sp} from "../../../utils/ScreenUtils";

export default () => {
    return {
        "name": "TextCard",
        "style": {
            fontSize: px2sp(20),
            color: '#CC010B',
            lineHeight: px2sp(30),
            paddingLeft:px2dp(16),
            paddingRight:px2dp(16),
            paddingTop: px2dp(8),
            paddingBottom: px2dp(8),
            marginTop:px2dp(16),
            backgroundColor:"white"
        },
        children: "2020年12月31日12:00"
    }

}
