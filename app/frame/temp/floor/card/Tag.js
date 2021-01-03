/**
 * 标签组件
 */
import React from 'react'
import {px2dp, px2sp, ScreenPara} from "../../../utils/ScreenUtils";

export default () => {
    return {
        'name': 'ViewCard',
        'style': {
            width: ScreenPara.size.width,
            paddingTop: px2dp(12),
            paddingBottom: px2dp(12),
            flexDirection: 'column',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: px2dp(16),
            backgroundColor:"white"
        },
        children: [
            {
                'name': 'ViewCard',
                'style': {
                    width: ScreenPara.size.width,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignSelf: 'center',
                },
                children: [
                    {
                        'name': 'TextCard',
                        'style': {
                            lineHeight: px2dp(18),
                            fontSize: px2sp(12),
                            color: '#e6770a',
                            borderColor: '#e6770a',
                            paddingLeft: px2dp(4),
                            paddingRight: px2dp(4),
                            borderRadius: px2dp(1),
                            borderWidth: px2dp(0.5),
                            marginLeft: px2dp(16),
                        },
                        props: {allowFontScaling: false, numberOfLines: 1},
                        children: '爆款商品',
                    },
                    {
                        'name': 'TextCard',
                        'style': {
                            lineHeight: px2dp(18),
                            fontSize: px2sp(12),
                            color: '#e6770a',
                            borderColor: '#e6770a',
                            paddingLeft: px2dp(4),
                            paddingRight: px2dp(4),
                            borderRadius: px2dp(1),
                            borderWidth: px2dp(0.5),
                            marginLeft: px2dp(8),
                        },
                        props: {allowFontScaling: false, numberOfLines: 1},
                        children: '月销过完',
                    }],
            },
        ],
    }
}
