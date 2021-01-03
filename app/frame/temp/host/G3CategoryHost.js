import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {ScreenPara} from "../../utils/ScreenUtils";
export default class G3CategoryHost extends Component {

  componentDidMount()
  {
    console.log('进入了componentDidMount');
    this.fetchData();//请求网络数据，这里就不在解释了
  }

  state = {//根据各自后台的数据来设定需要的属性
    data:[],//数据数组
    right: [],//选中后右边list的数据数据
    selectedIndex: 0,//第几个选中
    height: 0,
  };

  _onPress  = (navigate) => {
    console.log('-----onPress-----navigate=' + JSON.stringify(navigate))
    switch (navigate.type) {
      case 'back':
        this.props.navigation.goBack()
        break
      case 'jump':
          this.props.navigation.navigate('G3FloorHost')
     /*   let router = {
          routeName: 'G3FloorHost',
          /!*params:{
            page:'CreditListPage',
          }*!/
        }
        const navigateAction = NavigationActions.navigate({
          routeName: router.routeName,
          params: router.params
        })
        this.props.navigation.dispatch(navigateAction)*/
        break
    }
  }

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
       {/* <HeaderCard data={{title:'组件库'}}  onPress={this._onPress}/>*/}
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
                  <Text style={{fontSize: 14, color: '#f60'}}>组件分类</Text>
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
      </View>
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
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => this.renderLevel3(item)}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
  renderLevel3 = (item) => (
    <TouchableOpacity activeOpacity={0.8} onPress={() => {
      this._onPress({'type':'jump'})
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
      <View style={{alignItems: 'center', width: (ScreenPara.size.width - 110) / 2, marginBottom: 1 , backgroundColor:'#f7f7f7', padding:5}}>
        <Image source={{uri: item.image}} resizeMode="contain"
               style={{height: 100, width: 100, marginTop: 10, marginBottom: 3}}/>
        <Text style={{fontSize: 14, color: "#333"}}>{item.category_name}</Text>
      </View>
    </TouchableOpacity>
  );


  renderLeftItem = ({item, index})  => {
    console.log(item);
    return (
      <View>
        <View style={{height: 0.5, backgroundColor: '#e6e6e6'}}/>
        <TouchableOpacity activeOpacity={0.8}  onPress={() => this.onSelected(index)}>
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
        </TouchableOpacity>
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
    let defaultRight = [
      {'category_name':'基础图文','cateList':[
          {'category_name':'快捷入口', "image":"https://h5static.m.jd.com/babel-tpls/babel_tower/static_image/快捷入口-默认.png"},
          {'category_name':'页面公告', "image":"https://h5static.m.jd.com/babel-tpls/babel_tower/static_image/页面公告-默认.png"},
          {'category_name':'文字标签', "image":"https://h5static.m.jd.com/babel-tpls/babel_tower/static_image/文字模板-默认.png"},
          {'category_name':'倒计时', "image":"https://h5static.m.jd.com/babel-tpls/babel_tower/static_image/倒计时-默认.png"},
              {'category_name':'楼层标题', "image":"https://h5static.m.jd.com/babel-tpls/babel_tower/static_image/%E6%A5%BC%E5%B1%82%E6%A0%87%E9%A2%98-%E9%BB%98%E8%AE%A4.png"},
              {'category_name':'分割线', "image":"https://h5static.m.jd.com/babel-tpls/babel_tower/static_image/%E6%A5%BC%E5%B1%82%E6%A0%87%E9%A2%98-%E9%BB%98%E8%AE%A4.png"},
              {'category_name':'全屏轮播', "image":"https://h5static.m.jd.com/babel-tpls/babel_tower/static_image/全屏轮播-默认.png"},
              {'category_name':'自定义广告', "image":"https://h5static.m.jd.com/babel-tpls/babel_tower/static_image/图片资讯-默认.png"},
              {'category_name':'时间轴', "image":"https://h5static.m.jd.com/babel-tpls/babel_tower/static_image/时间轴-默认.png"},
              {'category_name':'活动预约', "image":"https://h5static.m.jd.com/babel-tpls/babel_tower/static_image/活动预约-默认.png"},
          {'category_name':'浮层图标', "image":"https://h5static.m.jd.com/babel-tpls/babel_tower/static_image/浮层icon-默认.png"},
              {'category_name':'吸底banner', "image":"https://h5static.m.jd.com/babel-tpls/babel_tower/static_image/吸底banner-默认.png"},
        ]}]
    this.setState({
      data: [
        {'category_name':'图文广告','cateList': defaultRight},
        {'category_name':'导航组件','cateList':[
            {'category_name':'基础导航','cateList':[
                {'category_name':'锚点导航', "image":"https://h5static.m.jd.com/babel-tpls/babel_tower/static_image/锚点导航-默认.png"},
                {'category_name':'底部导航', "image":"https://h5static.m.jd.com/babel-tpls/babel_tower/static_image/%E5%BA%95%E9%83%A8%E5%AF%BC%E8%88%AA-%E9%BB%98%E8%AE%A4.png"},
                {'category_name':'顶部导航', "image":"https://h5static.m.jd.com/babel-tpls/babel_tower/static_image/顶部导航-默认.png"},
                {'category_name':'多栏切换', "image":"http://storage.360buyimg.com/tpls/%E5%A4%9ATAB%E5%88%87%E6%8D%A2-%E9%BB%98%E8%AE%A4.png"},
              ]},
            {'category_name':'复杂导航','cateList':[
                {'category_name':'吸底导航', "image":"https://h5static.m.jd.com/babel-tpls/babel_tower/static_image/吸底导航-默认.png"},
                {'category_name':'分类导航', "image":"https://h5static.m.jd.com/babel-tpls/babel_tower/static_image/分类-默认.png"},
                {'category_name':'feed流导航', "image":"http://storage.360buyimg.com/tpls/feed%E6%B5%81-%E9%BB%98%E8%AE%A4.png"},
                {'category_name':'feed流导航', "image":"http://storage.360buyimg.com/tpls/feed%E6%B5%81-%E9%BB%98%E8%AE%A4.png"},
              ]},
          ]},
        {'category_name':'营销工具','cateList':[
            {'category_name':'营销工具','cateList':[
                {'category_name':'优惠券', "image":"https://h5static.m.jd.com/babel-tpls/babel_tower/static_image/金融券-默认.png"},
                {'category_name':'福袋', "image":"https://h5static.m.jd.com/babel-tpls/babel_tower/static_image/福袋-默认.png"},
              ]}]}
      ],
      right: defaultRight
    })

  }
}
