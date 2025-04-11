import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007AFF" />
      <Text style={styles.text}>Đang tải...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.9)', // nền trắng đục
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', // full màn hình
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999
  },
  text: {
    marginTop: 12,
    fontSize: 16,
    color: '#555'
  }
});
