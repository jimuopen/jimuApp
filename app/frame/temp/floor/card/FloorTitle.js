/**
 * 楼层标题
 */
import React from 'react'

export default (title) => {
    return {
        "name": "TextCard",
        "style": {
            textAlign:'center',
            fontSize: 16,
            color: '#e6770a',
            lineHeight:20,
            paddingLeft:16,
            paddingRight:16,
            paddingTop: 8,
            paddingBottom: 8,
            marginTop:16,
            backgroundColor:"white"
        },
        children: title||"楼层中间的标题"
    }
}
