/**
 * 左边图片右边两行文字
 */
import React from 'react'
import {ScreenPara} from "../../../utils/ScreenUtils";

export default (title, text, text2) => {
    return {
        'name': 'ViewCard',
        'style': {
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 8,
            paddingBottom: 8,
            //marginTop:16,
            width: ScreenPara.size.width,
            height: 120 + 32,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#fff',
        },
        children: [
            {
                "name": "ImageCard",
                "style": {
                    width: 120,
                    height: 120,
                    alignItems: 'center',
                    backgroundColor: '#fff',
                },
                source: {uri: "http://img.jimuopen.com/shop/item09.png"},
                resizeMode: "contain"
            },
            {
                'name': 'ViewCard',
                'style': {
                    width: ScreenPara.size.width - 32 - 120 - 16,
                    height: 120,
                    justifyContent: 'flex-start',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    marginLeft: 16,
                    marginRight: 16,
                    paddingTop:16,
                    paddingBottom:16
                },
                children: [
                    {
                        "name": "TextCard",
                        "style": {
                            width: ScreenPara.size.width - 32 - 120 - 16,
                            fontSize: 22,
                            color: '#333333',
                            backgroundColor: '#fff',
                        },
                        children: title || '文字标题'
                    },
                    {
                        "name": "TextCard",
                        "style": {
                            width: ScreenPara.size.width - 32 - 120 - 16,
                            fontSize: 14,
                            color: '#444444',
                            backgroundColor: '#fff',
                            marginTop:16
                        },
                        children: text || ''
                    },
                    {
                        "name": "TextCard",
                        "style": {
                            width: ScreenPara.size.width - 32 - 120 - 16,
                            fontSize: 14,
                            color: '#666666',
                            backgroundColor: '#fff',
                            marginTop:16
                        },
                        children: text2 || ''
                    }
                ]
            }
        ],
    }
}
