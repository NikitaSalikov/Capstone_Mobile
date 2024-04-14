import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { View } from "react-native";
import ChatBoxScreen from "../screens/ChatBoxScreen";
import ChatScreen from '../screens/ChatListScreen';

const Stack = createNativeStackNavigator();

const Navigator = () => {


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Chats' component={ChatScreen}  />
                <Stack.Screen name='Chat' component={ChatBoxScreen}  />
            </Stack.Navigator>

            
        </NavigationContainer>
    )
}

export default Navigator;