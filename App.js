import {createStackNavigator} from "react-navigation-stack"
import { createAppContainer } from 'react-navigation';
import SearchScreen from "./src/Screens/searchScreen"
import ResultShowScreen from "./src/Screens/ResultShowScreen"

const navigator = createStackNavigator({
  Search : SearchScreen,
  Result : ResultShowScreen
},{
  initialRouteName : "Search",
  defaultNavigationOptions: {
    title : "Business Search"
  }
})
export default createAppContainer(navigator)