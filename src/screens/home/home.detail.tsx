import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../navigations/home.navigate'; // đổi đường dẫn nếu cần

type Props = NativeStackScreenProps<HomeStackParamList, 'HomeDetail'>;

export const HomeDetailScreen: React.FC<Props> = ({ route }) => {
  const { itemId } = route.params;

  return (
    <View>
      <Text>Chi tiết mục có ID: {itemId}</Text>
    </View>
  );
};
