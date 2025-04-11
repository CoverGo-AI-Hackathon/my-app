import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

type User = {
  email: string;
  displayName: string;
  picture: string;
  money: number;
  aboutMe: string;
  phone: string;
  dob: string | null;
  gender: string;
};

interface Props {
  user: User;
}

const UserProfile: React.FC<Props> = ({ user }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: user.picture }} style={styles.avatar} />
      <Text style={styles.name}>{user.displayName}</Text>
      <Text style={styles.email}>{user.email}</Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Giới tính:</Text>
        <Text style={styles.value}>{user.gender === 'unknown' ? 'Chưa cập nhật' : user.gender}</Text>

        <Text style={styles.label}>Ngày sinh:</Text>
        <Text style={styles.value}>{user.dob ?? 'Chưa cập nhật'}</Text>

        <Text style={styles.label}>Số điện thoại:</Text>
        <Text style={styles.value}>{user.phone || 'Chưa cập nhật'}</Text>

        <Text style={styles.label}>Tiền:</Text>
        <Text style={styles.value}>{user.money} VND</Text>

        <Text style={styles.label}>Giới thiệu:</Text>
        <Text style={styles.value}>{user.aboutMe || 'Chưa có mô tả'}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  infoBox: {
    width: '90%',
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    padding: 15,
  },
  label: {
    fontWeight: '600',
    marginTop: 10,
    fontSize: 14,
    color: '#333',
  },
  value: {
    fontSize: 14,
    color: '#555',
  },
});

export default UserProfile;
