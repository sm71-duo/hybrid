import React from 'react';
import { View } from 'react-native';
import LiveAudioStreamView from 'Views/LiveAudioStreamView';
import RecordingView from 'Views/RecordingView';

const App = () => {
    return (
        <View>
            <RecordingView />
        </View>
    );
};

export default App;
