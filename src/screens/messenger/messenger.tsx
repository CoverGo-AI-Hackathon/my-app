import { Text, View } from "react-native";
import { styles } from "../../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MessengerStackParamList } from "../../navigations/messenger.naviagate";

type Props = NativeStackScreenProps<MessengerStackParamList, 'MessengerList'>;

export const MessengerListScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text
        style={styles.title}
        onPress={() =>
          navigation.navigate('ChatRoom', {
            chatId: '123',
            name: 'Người dùng A',
          })
        }
      >
        Danh sách tin nhắn (Chạm để mở chat)
      </Text>
    </View>
  );
};
