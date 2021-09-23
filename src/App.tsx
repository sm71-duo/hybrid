import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import CallScreen from './screens/CallScreen';

export type RootStackParamList = {
  LoginScreen: undefined;
  CallScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CallScreen" component={CallScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
