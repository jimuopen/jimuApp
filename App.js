import * as React from 'react';
import { Button, Text, View ,Image, LogBox} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailScreen from "./app/frame/temp/DetailScreen";
import FindScreen from "./app/frame/temp/FindScreen";
import Category from "./app/frame/temp/CategoryPage";
import ListHost from "./app/frame/host/ListHost";
import FloorHost from "./app/frame/host/FloorHost";
import G3CategoryHost from "./app/frame/temp/host/G3CategoryHost";
import G3FloorHost from "./app/frame/temp/host/G3FloorHost";
//https://reactnavigation.org/docs/tab-based-navigation
function DetailsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Details function!</Text>
        </View>
    );
}

/*function HomeScreen111({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
            <Button
                title="Go to ddd"
                onPress={() => navigation.navigate('ddd')}
            />
            <Button
                title="Go to ccc"
                onPress={() => navigation.navigate('ccc')}
            />

        </View>
    );
}*/

/*function SettingsScreen({ navigation }) {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings screen</Text>
        <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
        />
      </View>
  );
}*/

const Stack = createStackNavigator();

function HomeStackScreen() {
    LogBox.ignoreAllLogs(true)
    return (
        <Stack.Navigator>
            <Stack.Screen name="find" component={FindScreen} />
            <Stack.Screen name="detailFunction" component={DetailsScreen} />
            <Stack.Screen name="detail" component={DetailScreen} />
            <Stack.Screen name="G3CategoryHost" component={G3CategoryHost} />
            <Stack.Screen name="G3FloorHost" component={G3FloorHost} />
        </Stack.Navigator>
    );
}

function home() {
    return <FloorHost page={'HomePage'} />
    /*  return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home2222!</Text>
        </View>
      );*/
}

function list() {
    return <ListHost page={'ListPage'} />
    /*  return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>list!</Text>
        </View>
      );*/
}

function cart() {
    return <FloorHost page={'CartPage'} />
    /*  return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>find!</Text>
        </View>
      );*/
}

function mine() {
    return <FloorHost page={'MinePage'} />
    /*  return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>mine!</Text>
        </View>
      );*/
}

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="home" tabBarOptions={{
                activeTintColor: '#d81e06',
            }}>
                <Tab.Screen name="home" component={home} options={{title:'首页',
                    tabBarIcon: ({ color, size,focused }) => (
                        <Image style={{ width: 20, height: 20 }}
                               source={focused ? require('./app/image/tab/home_check.png') : require('./app/image/tab/home.png') } />
                    ),}}/>
                <Tab.Screen name="list" component={Category} options={{title:'列表',
                    tabBarIcon: ({ color, size,focused }) => (
                        <Image
                            style={{ width: 20, height: 20 }}
                            source={focused ? require('./app/image/tab/list_check.png') :require('./app/image/tab/list.png')} />
                    ),}}/>

                <Tab.Screen name="HomeStackScreen" component={HomeStackScreen} options={{title:'发现',
                    tabBarIcon: ({ color, size,focused }) => (
                        <Image
                            style={{ width: 20, height: 20 }}
                            source={focused ? require('./app/image/tab/list_check.png') :require('./app/image/tab/list.png')} />
                    ),}}/>
                <Tab.Screen name="cart" component={cart} options={{title:'购物车',
                    tabBarIcon: ({ color, size,focused }) => (
                        <Image
                            style={{ width: 20, height: 20 }}
                            source={focused ? require('./app/image/tab/cart_check.png') :require('./app/image/tab/cart.png')} />
                    ),}}/>
                <Tab.Screen name="mine" component={mine} options={{title:'我的',
                    tabBarIcon: ({ color, size,focused }) => (
                        <Image
                            style={{ width: 20, height: 20 }}
                            source={focused ? require('./app/image/tab/mine_check.png') :require('./app/image/tab/mine.png')} />
                    ),}}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}