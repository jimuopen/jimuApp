import React from 'react'
import CardsManager from './CardsManager'
//import Swiper from 'react-native-swiper'

/**
 * 轮播
 */
export default class SwiperCard extends React.Component {

  constructor(props) {
    super(props)
    this.children = this.props.children
  }

  componentWillReceiveProps(nextProps) {
    if(this.props !== nextProps) {
      this.children = nextProps.children
    }
  }

  _renderChildren = () => {
    if(this.children instanceof Array){
      let array = []
      this.children.forEach(x => {
        array.push(CardsManager.getCard(x, this.props.onPress))
      })
      return array
    }else{
      return CardsManager.getCard(this.children, this.props.onPress)
    }
  }

  render() {
    return (
          {/*<Swiper {...this.props} >
            {this._renderChildren()}
          </Swiper>*/}
    )
  }
}
