import React from 'react'
import EntryCard from '../card/generic/EntryCard'
import CarouselCard from '../card/generic/CarouselCard'
import SimpleCard from '../card/SimpleCard'
import EntryListCard from '../card/generic/EntryListCard'
import ImageCard from "../card/ImageCard";
import FlatListCard from "../card/FlatListCard";
import ProductCard from "../card/ProductCard";
import Product2Card from "../card/Product2Card";
import CartProductCard from "../card/CartProductCard";
import UserCard from "../card/UserCard";
import Item3Card from "../card/Item3Card";
import Item4Card from "../card/Item4Card";
/**
 * 卡片管理器，所有卡片在此注册
 */
export default class CardsManager{

  static getCard(card, _onPress, index, host){
    if(!card || !card.name){
      return null;
    }
    switch (card.name) {
      case 'EntryCard':
        return <EntryCard key={index} data={card.data} onPress={_onPress} ref={card.id} host={host}/>
      case 'CarouselCard':
        return <CarouselCard key={index} data={card.data} onPress={_onPress} ref={card.id} host={host}/>
      case 'SimpleCard':
        return <SimpleCard key={index} data={card.data} onPress={_onPress} ref={card.id} host={host}/>
      case 'ImageCard':
        return <ImageCard key={index} data={card.data} onPress={_onPress} ref={card.id} host={host}/>
      case 'FlatListCard':
        return <FlatListCard key={index} data={card.data} onPress={_onPress} ref={card.id} host={host}/>
      case 'EntryListCard':
        return <EntryListCard key={index} data={card.data} onPress={_onPress} ref={card.id} host={host}/>
      case 'ProductCard':
        return <ProductCard key={index} data={card.data} onPress={_onPress} ref={card.id} host={host}/>
      case 'Product2Card':
        return <Product2Card key={index} data={card.data} onPress={_onPress} ref={card.id} host={host}/>
      case 'CartProductCard':
        return <CartProductCard key={index} data={card.data} onPress={_onPress} ref={card.id} host={host}/>
      case 'UserCard':
        return <UserCard key={index} data={card.data} onPress={_onPress} ref={card.id} host={host}/>
      case 'Item3Card':
        return <Item3Card key={index} data={card.data} onPress={_onPress} ref={card.id} host={host}/>
      case 'Item4Card':
        return <Item4Card key={index} data={card.data} onPress={_onPress} ref={card.id} host={host}/>

    }
  }
}
