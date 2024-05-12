
# Chat Application Documentation
This documentation provides an overview of the structure and functionality of a mobile chat application developed using React Native and AWS Amplify. The application allows users to chat with each other in different chat groups.

## 1. Project Structure
- App.js: Main component rendering the navigation container.
- src/nav/index.js: Navigation component using createNativeStackNavigator from @react-navigation/native.
- screens/ChatListScreen.js: Screen displaying a list of chat groups.
- screens/ChatBoxScreen.js: Screen displaying messages in a chat group and allowing users to send messages.
- components/ChatList/index.js: Component rendering a single chat group item in the list.
- components/Message/index.js: Component rendering a single chat message.
- components/MessageSendBox/index.js: Component providing an input box for sending messages.

## 2. Features
- User Authentication: Uses AWS Cognito for user authentication.
- Chat Groups: Users can join chat groups and view messages.
- Real-time Messaging: Messages are updated in real-time using GraphQL subscriptions.

## 3. Functionality

### App.js:

- Imports necessary components from react-native, aws-amplify, and your project files.
- Configures Amplify with your awsconfig.
- Defines the main App component that renders a View containing your Navigator.

### Navigator (from src/nav/index.js):

- Imports NavigationContainer and createNativeStackNavigator from @react-navigation/native.
- Defines a Stack navigator with two screens: ChatScreen and ChatBoxScreen.
- Wraps the Stack.Navigator in a NavigationContainer to provide the navigation context for the screens.

### ChatListScreen.js:

- Uses state hooks to manage the current user, chat groups, active chat, and current user's ID.
- Uses useEffect to fetch the current user's ID and chat groups based on that ID.
- Provides a button to sign out the user.

### ChatBoxScreen.js:

- Uses state hooks to manage the current chat group, location, and messages.
- Uses useEffect to fetch the current chat group based on the chatID parameter, fetch the location name based on the chat group's locationID, and fetch chat messages based on the chat group's chatgroupID.
- Subscribes to the onCreateChatMessage subscription to update the messages in real-time.
- Renders a KeyboardAvoidingView with an ImageBackground, displaying the chat messages in a FlatList and an InputBox component for sending messages.

### ChatList (components/ChatList/index.js):

- Displays a list item for each chat group.
- Uses random avatars for each chat group.
- Navigates to the ChatBoxScreen when pressed, passing the chat group ID and name as navigation params.
- Shows the chat group name, last message, and time since the last message.

### Message (components/Message/index.js):

- Displays a message bubble for each chat message.
- Determines if the message is from the current user (isMyMessage).
- Shows the message content and time since the message was sent.

### InputBox (components/MessageSendBox/index.js):

- Provides an input box for the user to type a new message.
- Allows the user to send the message.
- Uses GraphQL mutations to create a new chat message and update the chat group's last message.


## 4. Dependencies

- react-native: Framework for building native mobile applications.
- @react-navigation/native: Library for navigation in React Native.
- aws-amplify: Library for integrating AWS services in the application:
```npm install aws-amplify aws-amplify-react-native amazon-cognito-identity-js @react-native-community/netinfo @react-native-async-storage/async-storage```
- dayjs: Library for parsing, validating, manipulating, and formatting dates.

## 5. Usage
- Clone the project from the repository.
- Install dependencies using npm install or yarn install.
- Configure AWS Amplify with your AWS account credentials.
- Run the application using npm start or yarn start.

## 6. Future Improvements
- Implement user profiles and settings.
- Add multimedia message support (file management).
- Improve UI/UX design for better user experience.

## 7. Conclusion
- The chat application provides a basic platform for users to communicate in chat groups.
- It utilizes AWS services for user authentication and real-time messaging.
- The application can be extended and customized to add more features and improve functionality.
