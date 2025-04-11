import { Text, View } from "react-native";
import { styles } from "../../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MessengerStackParamList } from "../../navigations/messenger.naviagate";

type Props = NativeStackScreenProps<MessengerStackParamList, 'ChatRoom'>;

export const ChatRoomScreen: React.FC<Props> = ({ route }) => (
  <View style={styles.screen}>
    <Text style={styles.title}>Chat với {route.params.name}</Text>
    <Text>Chat ID: {route.params.chatId}</Text>
  </View>
);
