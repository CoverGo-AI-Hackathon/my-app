import { createStackNavigator } from "@react-navigation/stack";
import { MessengerListScreen } from "../screens/messenger/messenger";
import { ChatRoomScreen } from "../screens/messenger/messenger.room";

export type MessengerStackParamList = {
  MessengerList: undefined;
  ChatRoom: { chatId: string; name: string };
};


const MessengerStack = createStackNavigator<MessengerStackParamList>();

// Stack Navigator cho Messenger

export const MessengerStackNavigator: React.FC = () => (
  <MessengerStack.Navigator>
    <MessengerStack.Screen 
      name="MessengerList" 
      component={MessengerListScreen} 
      options={{ title: 'Tin nhắn' }} 
    />
    <MessengerStack.Screen 
      name="ChatRoom" 
      component={ChatRoomScreen} 
      options={({ route }) => ({ title: route.params.name })} 
    />
  </MessengerStack.Navigator>
);
