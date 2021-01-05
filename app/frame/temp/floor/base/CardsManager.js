import React from 'react'
import ViewCard from './ViewCard'
import TextCard from './TextCard'
import ImageCard from './ImageCard'
import TouchableOpacityCard from './TouchableOpacityCard'
import ScrollViewCard from './ScrollViewCard'
import CarouselCard from './CarouselCard'
/**
 * 卡片管理器，所有卡片在此注册
 */
export default class CardsManager{

  static getCard(card, _onPress){
    if(!card || !card.name){
      return null;
    }
    switch (card.name) {
      case 'ViewCard':
        return <ViewCard {...card} onPress={(nav) => _onPress(nav)} key={Math.random()} />
      case 'TouchableOpacityCard':
        return <TouchableOpacityCard {...card} onPress={(nav) => _onPress(nav)} key={Math.random()}/> //事件传递是逐层上传的，一直传递到根view，根view有接收_onPress参数
      case 'TextCard':
        return <TextCard {...card} key={Math.random()}/>
      case 'ImageCard':
        return <ImageCard {...card} key={Math.random()}/>
      case 'CarouselCard':
        return <CarouselCard {...card} key={Math.random()}/>
      /*case 'SwiperCard':
        return <SwiperCard {...card} onPress={(nav) => _onPress(nav)} />*/
      case 'ScrollViewCard':
        return <ScrollViewCard {...card} onPress={(nav) => _onPress(nav)} key={Math.random()}/>
    }
  }
}
