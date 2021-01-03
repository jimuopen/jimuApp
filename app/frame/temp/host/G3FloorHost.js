import React from 'react'
import {
    Image,
    ScrollView,
    StyleSheet,
} from 'react-native'
import {px2dp, px2sp, ScreenPara} from "../../utils/ScreenUtils";
import RootView from "../../view/RootView";
import CardsManager from "../floor/base/CardsManager";
import Tag from "../floor/card/Tag";
import Notice from "../floor/card/Notice";
import CountDown from "../floor/card/CountDown";
import AdvThreeImage from "../floor/card/AdvThreeImage";
import AdvOneImage from "../floor/card/AdvOneImage";
import FloorTitle from "../floor/card/FloorTitle";
import DivideLIne from "../floor/card/DivideLIne";

/**
 * 楼层的宿主页面，使用各种卡片罗楼层
 */
export default class G3FloorHost extends React.Component {
    constructor(props) {
        super(props)
        this.data = {
            cards: [
                {
                    "name": "TextCard",
                    "style": {
                        fontSize: px2sp(20),
                        color: '#CC010B',
                        lineHeight: px2sp(30),
                        marginLeft: px2dp(16),
                    },
                    children: "页面为空"
                }
            ]
        }
    }

    componentDidMount() {
        this._request()
    }

    _request = () => {
        /*new Promise(resolve => {
          resolve(post(API.API_CMS, {keys:'template_floor_01'}))
        }).then(response => {
          if (!response || !response.code || response.code !='10000') { //失败
            console.log('-----error------' + JSON.stringify(response))
            return
          }
          //请求成功
          console.log('-----12312------' + JSON.stringify(response))
          this.data.cards = response.data.template_floor_01
          console.dir(this.data.cards)
          console.log('-----3332232------')
          this.setState({})
        })*/

        this.data.cards = [DivideLIne(16),
            FloorTitle('标签组件'),Tag(),
            DivideLIne(),
            FloorTitle('通知公告栏组件'), Notice(),
            DivideLIne(),
            FloorTitle('倒计时组件'),CountDown(),
            DivideLIne(16),
            FloorTitle('三个图片广告位组件'),AdvThreeImage(),
            DivideLIne(16),
            FloorTitle('一个图片广告组件'),AdvOneImage()

        ]
        console.log('-----3332232------')
        this.setState({})
    }

    _notice = () => {
        return {
            name: 'TouchableOpacityCard',
            style: {
                height: px2dp(44),
                flexDirection: 'row',
                alignItems: 'center',
            },
            activeOpacity: 0.8,
            children: [
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
                    children: "sdlfj",
                },
            ],
        }
    }

    // 显示item
    _renderCards = () => {
        if (!this.data.cards) {
            return null
        }
        const result = []
        this.data.cards.map((card, index) => {
            let cardView = CardsManager.getCard(card, this._onPress)
            if (cardView) {
                result.push(cardView)
            }
        })
        return result
    }

    _onPress = (navigate) => {
        console.log('-----onPress-----navigate=' + JSON.stringify(navigate))
        switch (navigate.type) {
            case 'back':
                this.props.navigation.goBack()
                break
        }
    }

    render() {
        return (
            <RootView style={styles.container} ref={r => {
                this.rootView = r
            }} onRefresh={() => this._refresh({'loadingType': 1})}>
               {/* <HeaderCard data={{title: '组件详情'}} onPress={this._onPress}/>*/}
                <ScrollView keyboardShouldPersistTaps="handled"
                            style={[{backgroundColor: '#f7f7f7', flex: 1}, (this.data.style)]}>
                    {this._renderCards()}
                </ScrollView>
            </RootView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
})
