import { Text, View } from "react-native";
import { styles } from "../../../App";
import PaymentForm from "../../components/payment/pay";

export const HomeScreen: React.FC = () => (
  <View style={styles.screen}>
    <PaymentForm/>
    <Text style={styles.title}>Trang chủ</Text>
  </View>
);