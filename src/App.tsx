import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeOverview from 'views/HomeOverview';
import ProfileOverview from 'views/ProfileOverview';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeOverview} />
                <Tab.Screen name="Profile" component={ProfileOverview} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
