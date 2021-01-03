/**
 * 全是文字的展示组件
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
            height: ScreenPara.size.width/2 + 32,
            justifyContent:'space-between',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#fff',
        },
        children: [
            {
                "name": "TextCard",
                "style": {
                    width: ScreenPara.size.width - 32,
                    fontSize:16,
                    backgroundColor: '#fff',
                    paddingTop:3,

                },
                children: text|| '文字段落'
            }
        ]
    }

}
