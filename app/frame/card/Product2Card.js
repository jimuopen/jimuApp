import React from 'react'
import {
  View
} from 'react-native'
import BaseCard from "./base/BaseCard";
import CardsManager from "../manager/CardsManager";

export default class Product2Card extends BaseCard{

  constructor(props) {
    super(props)
  }

  render() {
    let item1 = this._data.item1
    let index1 = this._data.index1
    let item2 = this._data.item2
    let index2 = this._data.index2
    return (
        <View style={{flex:1, flexDirection: 'row'}} >
            {CardsManager.getCard({name:'ProductCard', data: item1}, this._data._onPress, index1)}
            {CardsManager.getCard({name:'ProductCard', data: item2}, this._data._onPress, index2)}
        </View >
    )
  }
}

