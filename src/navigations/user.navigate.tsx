import { createStackNavigator } from "@react-navigation/stack";
import { ProfileScreen } from "../screens/auth/profile";
import { SettingsScreen } from "../screens/auth/setting";
import { EditProfileScreen } from "../screens/auth/edit";
import LoginScreen from "../screens/auth/login";

type UserStackParamList = {
  Profile: undefined;
  Settings: undefined;
  EditProfile: undefined;
  Login: undefined
};


const UserStack = createStackNavigator<UserStackParamList>();

// Stack Navigator cho User
export const UserStackNavigator: React.FC = () => (
  <UserStack.Navigator initialRouteName="Login">
    <UserStack.Screen 
      name="Profile" 
      component={ProfileScreen} 
      options={{ title: 'Hồ sơ' }} 
    />
    <UserStack.Screen 
      name="Settings" 
      component={SettingsScreen} 
      options={{ title: 'Cài đặt' }} 
    />
    <UserStack.Screen 
      name="EditProfile" 
      component={EditProfileScreen} 
      options={{ title: 'Chỉnh sửa hồ sơ' }} 
    />
    <UserStack.Screen
      name="Login"
      component={LoginScreen}
    />
  </UserStack.Navigator>
);