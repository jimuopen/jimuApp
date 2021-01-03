/**
 * 单图片广告
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
            //marginTop:16,
            width: ScreenPara.size.width,
            height: ScreenPara.size.width/2 + 32,
            justifyContent:'space-between',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#fff',
        },
        children: [
/*            {
                "name": "TextCard",
                "style": {
                    width: ScreenPara.size.width - 32,
                    height: 30,
                    fontSize:16,
                    backgroundColor: '#fff',
                    paddingTop:3,

                },
                children:"单个图片广告"
            },*/
            {
                "name": "ImageCard",
                "style": {
                    width: ScreenPara.size.width - 32,
                    height: ScreenPara.size.width/2,
                    alignItems: 'center',
                    backgroundColor: '#fff',
                },
                source:{uri: "http://img.jimuopen.com/shop/item08.png"},
                resizeMode:"stretch"
            }
        ]
    }

}
