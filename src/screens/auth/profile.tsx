import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { info } from "../../services/auth";
import Loading from "../../components/loading/loading";

export const ProfileScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    const getUser = async () => {
      const token = await AsyncStorage.getItem("accessToken");
      if (token) {
        const data = await info(token);
        if (data) {
          setUser(data);
        }
      }
    };
    getUser();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("accessToken");
    navigation.replace("Login");
  };

  if (!user) return <Loading />;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate("EditProfile")}
        >
          <Text style={styles.editButtonText}>✏️</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <Image source={{ uri: user.picture }} style={styles.avatar} />
          <Text style={styles.name}>{user.displayName}</Text>
          <Text style={styles.email}>{user.email}</Text>

          <View style={styles.infoGroup}>
            <Text style={styles.label}>📞 Số điện thoại: </Text>
            <Text style={styles.value}>{user.phone || "Chưa có"}</Text>
          </View>
          <View style={styles.infoGroup}>
            <Text style={styles.label}>💬 Giới thiệu: </Text>
            <Text style={styles.value}>{user.aboutMe || "Chưa cập nhật"}</Text>
          </View>
          <View style={styles.infoGroup}>
            <Text style={styles.label}>💰 Tiền: </Text>
            <Text style={styles.value}>{user.money} VNĐ</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Settings")}
        >
          <Text style={styles.buttonText}>⚙️ Cài đặt</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.logout]} onPress={handleLogout}>
          <Text style={styles.buttonText}>🚪 Đăng xuất</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f8",
  },
  scrollContent: {
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  editButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 10,
  },
  editButtonText: {
    fontSize: 22,
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
  },
  infoGroup: {
    width: "100%",
    flexDirection: "row",
    marginVertical: 4,
  },
  label: {
    fontWeight: "600",
    width: 130,
  },
  value: {
    flex: 1,
    color: "#333",
  },
  button: {
    backgroundColor: "#3478f6",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 8,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  logout: {
    backgroundColor: "#ff4d4f",
  },
});
