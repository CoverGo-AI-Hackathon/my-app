// App.tsx
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { RootStackNavigator } from './src/navigations/root.navigate';
import * as Linking from 'expo-linking';
import AsyncStorage from '@react-native-async-storage/async-storage';

const prefix = Linking.createURL('/auth/callback');

// Main App với Tab Navigator
const App: React.FC = () => {

  useEffect(() => {
    const handleDeepLink = async (event: { url: string }) => {
      const data = Linking.parse(event.url);
      const token = data.queryParams?.access_token;
      if (token && token.length > 0 && token !== undefined) {
        console.log(token)
        Alert.alert('Đăng nhập thành công!', `Token: ${token}`);
        await AsyncStorage.setItem('accessToken', String(token));
      }
      
    };

    const subscription = Linking.addEventListener('url', handleDeepLink);

    return () => {
      subscription.remove();
    };
  }, []);



  return (
    <NavigationContainer >
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  navLink: {
    color: '#3498db',
    fontSize: 16,
    padding: 10,
    textDecorationLine: 'underline',
  }
});

export default App;