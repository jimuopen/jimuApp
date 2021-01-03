/**
 * 分割线
 */
import React from 'react'
import {Dimensions} from "react-native";

export default (marginTop) => {
    return {
        "name": "ViewCard",
        "style": {
            height: 8,
            width: Dimensions.get('window').width,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 8,
            paddingBottom: 8,
            backgroundColor: "#fff",
            marginTop:marginTop||0,
            alignItems:'center'
        },
        children: {
            "name": "ViewCard",
            "style": {
                height: 0.5,
                width: Dimensions.get('window').width - 32,
                backgroundColor: (marginTop ? '#fff' :'#cccccc')
            }
        }
    }
}
