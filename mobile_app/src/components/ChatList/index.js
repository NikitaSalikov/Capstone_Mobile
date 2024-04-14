import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"
import {onUpdateChatGroup} from "../../graphql/subscriptions"
import { useEffect, useState } from "react";
import {busPic} from '../../../assets/businessImage.png';
import image1 from '../../../assets/image1.jpg';
import image2 from '../../../assets/image2.jpg';
import image3 from '../../../assets/image3.jpg';
import image4 from '../../../assets/image4.jpg';
import image5 from '../../../assets/image5.jpg';
import { getChatMessage } from "../../graphql/queries";
dayjs.extend(relativeTime);

const ChatList = ({ chat }) => {

  const navigation = useNavigation();

  const [user, setUser] = useState(null);
  const [chatRoom, setChatRoom] = useState(chat);
  const [lastmessage, setLastMessage] = useState();


  const myChatUser = chat.Users?.items[1]?.user;
  const images = [image1, image2, image3, image4, image5];
  
  const fullName = `${myChatUser?.givenName || ''} ${myChatUser?.familyName || ''}`.trim();

  const getRandomAvatar = () => {
    const randomNumber = Math.floor(Math.random() * images.length); // Adjust this to the number of images
    return images[randomNumber];
};

  const randomAvatar = getRandomAvatar();
    return (
      <Pressable onPress={() => {
        
        navigation.navigate('Chat', { id:chat.id, name: fullName });}} style={styles.container}>
          <Image
              source={ randomAvatar }
              style={styles.image}
              onError={(e) => console.log('Failed to load image:', e.nativeEvent.error)}
          />
          <View style={styles.content}>
              <View style={styles.row}>
                  <Text style={styles.name}>{fullName}</Text>
                  <Text style={styles.subTitle}>{dayjs(chat.LastChatMessage?.createdAt).fromNow()}</Text>
              </View>
              <Text numberOfLines={2} style={styles.subTitle}>{chat.LastChatMessage?.data}</Text>
          </View>
      </Pressable>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      marginHorizontal: 10,
      marginVertical: 5,
      height: 70,
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginRight: 10,
    },
    content: {
      flex: 1,
  
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: "lightgray",
    },
    row: {
      flexDirection: "row",
      marginBottom: 4,
    },
    name: {
      flex: 1,
      fontWeight: "bold",
    },
    subTitle: {
      color: "gray",
    },
  });

  export default ChatList;