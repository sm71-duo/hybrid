import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeOverview from 'views/HomeOverview';
import ProfileOverview from 'views/ProfileOverview';

const App = () => {
    const Tab = createBottomTabNavigator();

    return (
        <SafeAreaProvider>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeOverview} />
                <Tab.Screen name="Profile" component={ProfileOverview} />
            </Tab.Navigator>
        </SafeAreaProvider>
    );
};

export default App;
