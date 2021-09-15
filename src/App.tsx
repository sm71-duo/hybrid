import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeView from 'views/HomeView';
import ProfileView from 'views/ProfileView';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen
                    name="Home"
                    component={HomeView}
                    options={{
                        headerShown: false
                    }}
                />
                <Tab.Screen name="Profile" component={ProfileView} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
