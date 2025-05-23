import { createStackNavigator } from "@react-navigation/stack";
import { ProfileScreen } from "../screens/auth/profile";
import { SettingsScreen } from "../screens/auth/setting";
import { EditProfileScreen } from "../screens/auth/edit";
import LoginScreen from "../screens/auth/login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import Loading from "../components/loading/loading";
import { info } from "../services/auth";

export type UserStackParamList = {
  Profile: undefined;
  Settings: undefined;
  EditProfile: undefined;
  Login: undefined
};


const UserStack = createStackNavigator<UserStackParamList>();

// Stack Navigator cho User
export const UserStackNavigator: React.FC = () => {
  const [ loading, setLoading ] = useState<any>(undefined)
  const [ user, setUser ] = useState<any>()
  // const [ ]
  useEffect(() => {
    const getUser = async () => {
      const token = await AsyncStorage.getItem('accessToken');
      console.log(token)
      if (token) {
        setLoading(1)
      }
      else {
        setLoading(2)
      }
    }
    getUser()
  },[])
  if (!loading) return <Loading />
  return (
    <UserStack.Navigator initialRouteName={loading === 1?'Profile':'Login'}>
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
  )
};