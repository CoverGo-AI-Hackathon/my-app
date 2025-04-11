import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/home/home";
import { HomeDetailScreen } from "../screens/home/home.detail";

export type HomeStackParamList = {
  HomeScreen: undefined;
  HomeDetail: { itemId: number };
};


const HomeStack = createStackNavigator<HomeStackParamList>();


// Stack Navigator cho Home
export const HomeStackNavigator: React.FC = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen 
      name="HomeScreen" 
      component={HomeScreen} 
      options={{ title: 'Trang chủ' }} 
    />
    <HomeStack.Screen 
      name="HomeDetail" 
      component={HomeDetailScreen} 
      options={{ title: 'Chi tiết' }} 
    />
  </HomeStack.Navigator>
);