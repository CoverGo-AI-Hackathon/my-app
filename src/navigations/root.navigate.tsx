import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeStackNavigator } from './home.navigate';
import { MessengerStackNavigator } from './messenger.naviagate';
import { UserStackNavigator } from './user.navigate';

// Định nghĩa kiểu dữ liệu cho Tab Navigator
type TabParamList = {
  HomeStack: undefined;
  MessengerStack: undefined;
  UserStack: undefined;
};


const Tab = createBottomTabNavigator<TabParamList>();

export const RootStackNavigator: React.FC = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName: string = '';

        if (route.name === 'HomeStack') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'MessengerStack') {
          iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
        } else if (route.name === 'UserStack') {
          iconName = focused ? 'person' : 'person-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#3498db',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
    })}
  >
    <Tab.Screen
      name="HomeStack"
      component={HomeStackNavigator}
      options={{ title: 'Trang chủ' }}
    />
    <Tab.Screen
      name="MessengerStack"
      component={MessengerStackNavigator}
      options={{ title: 'Tin nhắn' }}
    />
    <Tab.Screen
      name="UserStack"
      component={UserStackNavigator}
      options={{ title: 'Tài khoản' }}
    />
  </Tab.Navigator>
)
