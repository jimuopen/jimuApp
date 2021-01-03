/**
 * 公告
 */
import React from 'react'
import {px2dp, px2sp, ScreenPara} from "../../../utils/ScreenUtils";

export default () => {
    return {
        'name': 'ViewCard',
        'style': {
            height: px2dp(45),
            flexDirection: 'column',
            alignItems: 'center',
            paddingHorizontal: px2dp(16),
            backgroundColor: '#fff',
            //marginTop: px2dp(16),
        },
        children: [
            {
                'name': 'ViewCard',
                'style':
                    {
                        height: ScreenPara.pixel,
                        width: ScreenPara.size.width,
                        paddingLeft: px2dp(16),
                        paddingRight: px2dp(16),
                    },
                children: {
                    'name': 'ViewCard',
                    'style': {
                        height: ScreenPara.pixel,
                        backgroundColor: '#ededed',
                    },
                },
            },
            {
                'name': 'ViewCard',
                'style': {
                    height: px2dp(44),
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                },
                children: [
                    {
                        'name': 'ViewCard',
                        'style': {
                            height: px2dp(14),
                            backgroundColor: '#CC101B',
                            borderRadius: px2dp(1),
                            paddingHorizontal: px2dp(3),
                            justifyContent: 'center',
                            alignItems: 'center',
                        },
                        children: [
                            {
                                'name': 'TextCard',
                                'style': {fontSize: px2sp(10), color: '#FFF'},
                                children: '公告',
                            },
                        ],
                    },
                    {
                        'name': 'TextCard',
                        'style': {
                            fontSize: px2sp(13),
                            color: '#333',
                            marginLeft: px2sp(12),
                            flex: 1,
                        },
                        allowFontScaling: false,
                        numberOfLines: 1,
                        children: "这是通知消息，这是通知消息。",
                    }
                ],
            }],
    }

}
