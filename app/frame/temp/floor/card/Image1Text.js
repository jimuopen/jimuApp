/**
 * 左边图片右边一行文字
 */
import React from 'react'
import {ScreenPara} from "../../../utils/ScreenUtils";

export default (text) => {
    return {
        'name': 'ViewCard',
        'style': {
            paddingLeft:16,
            paddingRight:16,
            paddingTop: 8,
            paddingBottom: 8,
            //marginTop:16,
            width: ScreenPara.size.width,
            height: 120 + 32,
            justifyContent:'space-between',
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
                source:{uri: "http://img.jimuopen.com/shop/item09.png"},
                resizeMode:"contain"
            },
            {
                "name": "TextCard",
                "style": {
                    width: ScreenPara.size.width - 32 -120-16,
                    fontSize:16,
                    color:'#333333',
                    backgroundColor: '#fff',
                    paddingTop:3,
                    marginLeft:16,
                    marginRight:16
                },
                children: text|| '文字段落'
            }
        ],
    }
}
