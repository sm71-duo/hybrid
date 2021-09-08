import React from 'react';
import { View } from 'react-native';
import LiveAudioStreamView from 'Views/LiveAudioStreamView'; //Could be usefull
import RecordingView from 'Views/RecordingView'; //Not usefull

const App = () => {
    return (
        <View>
            <RecordingView />
        </View>
    );
};

export default App;
