import App from './App';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-elements';
import { elementsStyle } from 'shared/styling';

const Root = (): JSX.Element => {
    return (
        <View>
            <ThemeProvider theme={elementsStyle}>
                <NavigationContainer>
                    <App />
                    <StatusBar barStyle="default" />
                </NavigationContainer>
            </ThemeProvider>
        </View>
    );
};

export default Root;
