import { Text, View } from "react-native";
import { styles } from "../../../App";

export const ProfileScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.title}>Hồ sơ người dùng</Text>
    <Text 
      style={styles.navLink}
      onPress={() => navigation.navigate('Settings')}
    >
      Đi đến Cài đặt
    </Text>
    <Text 
      style={styles.navLink}
      onPress={() => navigation.navigate('EditProfile')}
    >
      Chỉnh sửa hồ sơ
    </Text>
  </View>
);