import { View, Text, StyleSheet, TextInput } from 'react-native';
import {AntDesign, MaterialIcons} from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import {createChatMessage, updateChatGroup} from '../../graphql/mutations';
import {getChatGroup} from '../../graphql/queries';

const InputBox = ({ chatgroup }) => {

    console.log("ChatG Group passed: ", chatgroup.Users);
    const [newMessage, setNewMessage] = useState('');
    const onSend = async() => {
        console.warn('Message Sent!')

        const newMessageData = {
            chatgroupID: chatgroup.id,
            senderID: chatgroup.userID,
            receiverID: chatgroup.locationID,
            data: newMessage,
        };

        const lastMessageData = await API.graphql(graphqlOperation(
            createChatMessage, {input: newMessageData}
        ));

        setNewMessage("");

        console.log("UPDATING THE CHAT GROUP");
        await API.graphql(graphqlOperation(
            updateChatGroup, {
                input: {id: chatgroup.id,chatGroupLastChatMessageId: lastMessageData.data.createChatMessage.id, _version: chatgroup._version },
            }
        ))
        
    };



    return (
        <View style={styles.container}>
            <AntDesign name='plus' size={24} color='royalblue' />
            <TextInput value={newMessage} style={styles.input} placeholder='your message here' onChangeText={setNewMessage} />
            <MaterialIcons style={styles.sendButton} onPress={onSend} name="send" size={24} color="white" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        padding: 5,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    input: {
        flex:1,
        color: 'black',
        padding: 5,
        borderColor: 'lightgray',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 60,
        fontSize: 15,
        
    },
    sendButton:
    {
        backgroundColor: 'royalblue',
        padding: 5,
        borderRadius: 15,
        overflow: 'hidden',
    }
});

export default InputBox;