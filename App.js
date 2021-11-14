import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';
  import { init } from './helpers/db';
import Registration from './screens/Registration';
 const Stack= createStackNavigator();

 init()
 .then(() => {
   console.log('Initialized database');
 })
 .catch(err => {
   console.log('Initializing db failed.');
   console.log(err);
 });

 const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2C6BED" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
  headerTitleAlign: "center",
};


export default function App() {
  return (
   
     <NavigationContainer>
       <Stack.Navigator screenOptions={globalScreenOptions}>
         <Stack.Screen name="Registration" component={Registration} />
       </Stack.Navigator>
      </NavigationContainer>
    
  )
}

const styles = StyleSheet.create({

});
