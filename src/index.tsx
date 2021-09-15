import App from './App';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Root = (): JSX.Element => {
    return (
        <View>
            <NavigationContainer>
                <App />
                <StatusBar barStyle="default" />
            </NavigationContainer>
        </View>
    );
};

export default Root;
