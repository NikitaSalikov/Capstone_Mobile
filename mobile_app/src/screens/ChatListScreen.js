import { Text, View, FlatList, Button, StyleSheet } from 'react-native';
import ChatList from '../components/ChatList';


import { API, Auth, graphqlOperation} from 'aws-amplify';
import {getChatGroup, setChatGroup, listChatGroups, getUse, listUsers} from '../graphql/queries'
import { useEffect, useState } from "react";

const ChatScreen = () => {
    const [sender, setSenderID] = useState("");
    const [chatGroup, setChatGroup] = useState([]);
    const [activeChat, setActiveChat] = useState(null);
    const [currUser, setCurrUser] = useState([]);

    useEffect(() => {
      const setUser = async () => {
        // set user based on cognito sub id
  
        const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
        try {
          const result = await API.graphql({
            query: listUsers,
            variables: {
              filter: {
                cognitoUser: {
                  eq: authUser.attributes.sub // the current cognito user id
                }
              }
            }
          });
          setCurrUser(result.data.listUsers.items[0].id);
        } catch (error) {
          console.error("Error fetching current user:", error);
        }
      }
  
      async function fetchChatGroups() {
        try {
          const result = await API.graphql({
            query: listChatGroups,
            variables: {
              filter: {
                userID: {
                  eq: currUser // the current cognito user id
                }
              }
            }
          });
          setChatGroup(result.data.listChatGroups.items);
        } catch (error) {
          console.error("Error fetching chat groups:", error);
        }
      }
      setUser();
      fetchChatGroups();
    }, [currUser])

    const handleSignOut = async () => {
      try {
          await Auth.signOut();
          setChatGroup([]);
      } catch (error) {
          console.error('Error signing out: ', error);
      }
    };

    return (

      <View style={styles.container}>
      <FlatList 
          data={chatGroup}
          renderItem={({item}) => <ChatList chat={item} />}
          keyExtractor={item => item.id}
      />
      <Button title="Sign Out" onPress={handleSignOut} />
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
}
});


export default ChatScreen;