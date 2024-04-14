
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/nav';
import { API, Amplify, Auth, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from 'aws-amplify-react-native';
import awsconfig from "./src/aws-exports";
import { useEffect, useState } from 'react';
import {  getUser, listUsers } from './src/graphql/queries';


Amplify.configure(awsconfig);



function App() {
  


  // useEffect(() => {
  //   const setUser = async () => {
  //     // set user based on cognito sub id

  //     const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
  //     console.log("CURRENT COGNITO USER ID: ", authUser.attributes.sub  );
  //     try {
  //       const result = await API.graphql({
  //         query: listUsers,
  //         variables: {
  //           filter: {
  //             cognitoUser: {
  //               eq: authUser.attributes.sub // the current cognito user id
  //             }
  //           }
  //         }
  //       });
  //       setCurrUser(result.data.listUsers.items[0].id);
  //     } catch (error) {
  //       console.error("Error fetching current user:", error);
  //     }
  //   }


  //   setUser();
  // }, [])




  return (
      <View style={styles.container}>
        <Navigator/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingVertical: 40,
  },
});

export default withAuthenticator(App);
