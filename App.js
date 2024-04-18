// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cam from './cam';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Camera" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Camera" component={Cam} options={{ title: 'Camera' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}