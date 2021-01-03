/**
 * 三个图片广告
 */
import React from 'react'
import {ScreenPara} from "../../../utils/ScreenUtils";

export default () => {
    return {
        'name': 'ViewCard',
        'style': {
            paddingLeft:16,
            paddingRight:16,
            paddingTop: 8,
            paddingBottom: 8,
            marginTop:16,
            width: ScreenPara.size.width,
            height: ScreenPara.size.width/3.8 + 32,
            justifyContent:'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#fff',
        },
        children: [
            {
                "name": "ImageCard",
                "style": {
                    width: ScreenPara.size.width/3.8,
                    height: ScreenPara.size.width/3.8,
                    alignItems: 'center',
                    backgroundColor: '#fff',
                },
                source:{uri: "http://img.jimuopen.com/shop/item09.png"},
                resizeMode:"contain"
            },
            {
                "name": "ImageCard",
                "style": {
                    width: ScreenPara.size.width/3.8,
                    height: ScreenPara.size.width/3.8,
                    alignItems: 'center',
                    backgroundColor: '#fff',
                },
                source:{uri: "http://img.jimuopen.com/shop/item09.png"},
                resizeMode:"contain"
            },
            {
                "name": "ImageCard",
                "style": {
                    width: ScreenPara.size.width/3.8,
                    height: ScreenPara.size.width/3.8,
                    alignItems: 'center',
                    backgroundColor: '#fff',
                },
                source:{uri: "http://img.jimuopen.com/shop/item09.png"},
                resizeMode:"contain"
            },
        ],
    }
}
