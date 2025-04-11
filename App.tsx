// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';
import { RootStackNavigator } from './src/navigations/root.navigate';



// Main App với Tab Navigator
const App: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator/>
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