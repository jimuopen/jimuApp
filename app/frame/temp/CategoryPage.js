
import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableHighlight,
  Image,
} from 'react-native';
import {ScreenPara} from "../utils/ScreenUtils";
import RootView from "../view/RootView";
import HeaderCard from "../card/base/HeaderCard";


export default class Category extends Component {

  componentDidMount()
  {
    console.log('进入了componentDidMount');
    this.fetchData();//请求网络数据，这里就不在解释了
  }


  static navigationOptions = ({navigation})=>({
    title:'分类',
  });

  state = {//根据各自后台的数据来设定需要的属性
    data:[],//数据数组
    right: [],//选中后右边list的数据数据
    selectedIndex: 0,//第几个选中
    height: 0,
  };


  render() {
    return (
        <RootView style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
          <HeaderCard data={{
            "title": "分类列表",
            "hideRight": true,
            "hideLeft": true
          }} onPress={this._onPress} />
          <View style={{flex: 1}}>
            <View style={{backgroundColor: '#f4f4f4', flex: 1}} onLayout={this.onLayout}>
              <View style={{height: 0.5, backgroundColor: '#e6e6e6'}}/>
              <View style={{flexDirection: 'row', width: ScreenPara.size.width, flex: 1}}>
                <View style={{width: 90, backgroundColor: '#e6e6e6'}}>
                  <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    height: 45
                  }}>
                    <Text style={{fontSize: 14, color: '#f60'}}>推荐分类</Text>
                  </View>
                  <FlatList
                      ref={'left'}
                      style={{flexGrow: 1}}
                      data={this.state.data}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={this.renderLeftItem}
                      showsVerticalScrollIndicator={false}
                  />
                </View>
                <FlatList
                    style={{flexGrow: 1}}
                    data={this.state.right}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this.renderRightItem}
                    showsVerticalScrollIndicator={false}
                />
              </View>
            </View>
          </View>
        </RootView>
    );
  }


  onLayout = (event) => {//当组件挂载或者布局变化的时候调用
    let {height} = event.nativeEvent.layout;
    this.setState({height: height})
  };


  renderRightItem = ({item, index}) => (
      <View style={{marginLeft: 10, marginRight: 10,}}>
        <Text style={{
          fontSize: 14,
          color: '#333',
          marginTop: index === 0 ? 10 : 0,
          marginBottom: 10
        }}>{item.category_name}</Text>
        <View style={{backgroundColor: 'white', flex: 1, marginBottom: 10}}>
          <FlatList
              style={{}}
              data={item.cateList}
              numColumns={3}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => this.renderLevel3(item)}
              showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
  );
  renderLevel3 = (item) => (
      <TouchableHighlight underlayColor='#f0f0f0' onPress={() => {
        /*let url = '';
        switch (item.operation_type) {
          case 1:
            this.props.navigation.navigate('SearchResultView', {
              code: item.href, key: item.operation_content
            });
            break;
          case 2://专题
            this.props.navigation.navigate("OtherWebView", {url: Api.WebApi + "/homepage/showView?viewID=" + item.href});
            break;
          case 3://url
            this.props.navigation.navigate("OtherWebView", {url: item.href});
            break;
          case 4:
            this.props.navigation.navigate('SearchResultView', {
              key: item.href
            });
            break;
        }*/
      }}>
        <View style={{alignItems: 'center', width: (ScreenPara.size.width - 110) / 3, marginBottom: 10}}>
          <Image source={{uri: 'http://123.56.254.117:9000/shop/item09.png'}}
                 style={{height: 65, width: 65, marginTop: 10, marginBottom: 3}}/>
          <Text style={{fontSize: 12, color: "#333"}}>{item.category_name}</Text>
        </View>
      </TouchableHighlight>
  );


  renderLeftItem = ({item, index})  => {
    console.log(item);
    return (
        <View>
          <View style={{height: 0.5, backgroundColor: '#e6e6e6'}}/>
          <TouchableHighlight underlayColor='#ccc' onPress={() => this.onSelected(index)}>
            <View
                ref={(ref) => this.selectedView = {...this.selectedView, [`left${index}`]: ref}}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: index === 0 ? '#f60' : 'white',
                  height: 45
                }}>
              <Text
                  ref={(ref) => this.selectedText = {...this.selectedText, [`left${index}`]: ref}}
                  style={{
                    fontSize: 14,
                    color: index === 0 ? 'white' : '#333'
                  }}>{item.category_name}</Text>
            </View>
          </TouchableHighlight>
        </View>
    )
  };


  onSelected = (index) => {
    let length = this.state.data.length;
    for (let i = 0; i < length; i++) {
      if (i === index) {
        this.selectedView['left' + i].setNativeProps({
          style: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f60',
            height: 45
          }
        });
      } else {
        this.selectedView['left' + i].setNativeProps({
          style: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            height: 45
          }
        });
      }
    }
    for (var i = 0; i < length; i++) {
      if (i === index) {
        this.selectedText['left' + i].setNativeProps({
          style: {
            fontSize: 14,
            color: 'white'
          }
        })
      } else {
        this.selectedText['left' + i].setNativeProps({
          style: {
            fontSize: 14,
            color: '#333'
          }
        })
      }
    }
    setTimeout(() => {
      this.setState({selectedIndex: index, right: this.state.data[index].cateList});
    }, 50);

  };

  fetchData(){
    this.setState({
      data: [
          {'category_name':'百货','cateList':[
              {'category_name':'百货','cateList':[
                  {'category_name':'衣服'}, {'category_name':'厨具'},{'category_name':'保洁'},
                ]}]},
        {'category_name':'家电','cateList':[
            {'category_name':'家电','cateList':[
                {'category_name':'空调'}, {'category_name':'冰箱'},{'category_name':'洗衣机'},
              ]}]},
        {'category_name':'生鲜','cateList':[
            {'category_name':'水果','cateList':[
                {'category_name':'苹果'}, {'category_name':'橘子'},{'category_name':'火龙果'},
              ]},
            {'category_name':'蔬菜','cateList':[
                {'category_name':'白菜'}, {'category_name':'菠菜'},{'category_name':'土豆'},{'category_name':'地瓜'},
              ]},
              ]},
        {'category_name':'手机','cateList':[
            {'category_name':'旗舰机型','cateList':[
                {'category_name':'华为'}, {'category_name':'小米'},{'category_name':'oppo'},{'category_name':'vivo'},{'category_name':'apple'},
              ]}]}
              ],
      right: [
        {'category_name':'百货','cateList':[
            {'category_name':'衣服'}, {'category_name':'厨具'},{'category_name':'保洁'},
          ]}]
    })

  }
}