import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import HomeScreen from '../pages/home/index'
import UserScreen from '../pages/user'
import DetailsScreen from '../pages/details'
/**
 * 书影音界面
 */
const HomeStack = createStackNavigator(
  {
    HomeScreen,
  },
)

/**
 * 我得界面
 */
const UserStack = createStackNavigator(
  {
    UserScreen,
  },
)

HomeStack.navigationOptions = {
  tabBarLabel: '书影音',
}

UserStack.navigationOptions = {
  tabBarLabel: '我的',
}

const BottomNavStack = createBottomTabNavigator({
  HomeStack,
  UserStack,
})

const RootStack = createStackNavigator({
  BottomNavStack,
  DetailsScreen,
},
{
  headerMode: 'none',
  initialRouteName: 'BottomNavStack',
})
export default createAppContainer(RootStack)
