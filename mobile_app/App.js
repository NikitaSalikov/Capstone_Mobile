
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/nav';
import { API, Amplify, Auth, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from 'aws-amplify-react-native';
import awsconfig from "./src/aws-exports";
import { useEffect, useState } from 'react';
import {  getUser, listUsers } from './src/graphql/queries';


Amplify.configure(awsconfig);



function App() {
  return (
      <View style={styles.container}>
        <Navigator/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 40,
    backgroundColor: '#fff',
  },
});

export default withAuthenticator(App);
