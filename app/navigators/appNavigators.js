
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import MainRouters from './mainNavigators'
import LoginScreen from '../pages/login'

const AppNavigator = createSwitchNavigator({
  Main: {
    screen: MainRouters,
  },
  LoginScreen,
}, {
  initialRouteName: 'Main',
})

export default createAppContainer(AppNavigator)
