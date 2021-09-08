import App from './App';
import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { elementsStyle } from 'shared/styling';

const Root = (): JSX.Element => {
    return (
        <ThemeProvider theme={elementsStyle}>
            <App />
        </ThemeProvider>
    );
};

export default Root;
