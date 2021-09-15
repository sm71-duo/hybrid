import App from './App';
import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { elementsStyle } from 'shared/styling';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Root = (): JSX.Element => {
    return (
        <ThemeProvider theme={elementsStyle}>
            <SafeAreaProvider>
                <App />
            </SafeAreaProvider>
        </ThemeProvider>
    );
};

export default Root;
