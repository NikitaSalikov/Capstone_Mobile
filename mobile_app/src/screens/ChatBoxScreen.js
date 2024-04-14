import { StyleSheet, Text, View, ImageBackground, FlatList, Style, KeyboardAvoidingView, Platform } from 'react-native';
import { useEffect, useState } from 'react';
import Message from '../components/Message';
import messages from '../../assets/data/messages.json';
import bg from '../../assets/BG.jpeg';
import InputBox from '../components/MessageSenBox';
import {useRoute, useNavigation } from '@react-navigation/native';
import {API, graphqlOperation} from 'aws-amplify';
import { getChatGroup, getLocation, getUser, chatMessagesByChatgroupID } from '../graphql/queries';
import { onCreateChatMessage } from '../graphql/subscriptions';

const ChatBoxScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const [currGroup, setCurrGroup] = useState('');
    const [currLocation, setCurrLocation] = useState('');
    const [currMessages, setCurrMessages] = useState('');
    const chatID = route.params.id;

    useEffect(() => {

        async function getCurrentGroup() {
            try {
              const result = await API.graphql({
                  query: getChatGroup,
                  variables: {
                      id: chatID
                  }
              });
              setCurrGroup(result.data.getChatGroup);
            } catch (error) {
              console.error("Error fetching chat groups:", error);
            }
          }
  
          getCurrentGroup();
      }, [chatID]); // Run this effect only when chatID changes
  
      useEffect(() => {
          async function getUserName() {
              if (!currGroup) {
                  return;
              }
              try {
                const result = await API.graphql({
                    query: getUser,
                    variables: {id: currGroup.locationID},
                });
                const userName = result.data?.getUser.givenName;
                setCurrLocation(userName);
                navigation.setOptions({ title: userName }); // Use the local variable, not the state
              } catch (error) {
                console.error("Error fetching location:", error);
              }
          }
  
          getUserName();
      }, [currGroup]); // Run this effect only when currGroup changes
  
      useEffect(() => {
          
        
        API.graphql(graphqlOperation(chatMessagesByChatgroupID, {
            chatgroupID: chatID,
        })).then((result) => {
            const fetchedMessages = result.data?.chatMessagesByChatgroupID.items;
            fetchedMessages.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            setCurrMessages(fetchedMessages)
        });
    

          const subscription = API.graphql(graphqlOperation(onCreateChatMessage)).subscribe({
            next: ({value}) => {
                setCurrMessages((currentMessages) => {
                    const newMessage = value.data.onCreateChatMessage;
                    // Check if the new message is already in the list
                    const messageExists = currentMessages.some(message => message.id === newMessage.id);
                    if (!messageExists) {
                        return [newMessage, ...currentMessages];
                    }
                    return currentMessages;  // Return the existing list if the message is a duplicate
                });
            },
            error: (e) => console.warn(e),
          })
          return () => subscription.unsubscribe();
      }, [currGroup]);

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.bg}>
    <ImageBackground source={bg} style={styles.bg}>
        <FlatList 
            data={currMessages}
            renderItem={({item}) => <Message message={item} userID={currGroup.userID} />}
            style={styles.list}
            inverted
            />

        <InputBox chatgroup = {currGroup}/>
    </ImageBackground>
    </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
    list: {
        padding: 12,
    }
});

export default ChatBoxScreen;