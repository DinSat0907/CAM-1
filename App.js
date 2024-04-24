import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cam from './cam';
import Gal from './gal';


export default function App() {

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Camera" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Camera" component={Cam} />
        {/* <Stack.Screen name="Gallery" component={Gal} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}








