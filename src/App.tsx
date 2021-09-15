import React from 'react';
import { View } from 'react-native';
import LiveAudioStreamView from 'Views/LiveAudioStreamView'; //Could be usefull
import RecordingView from 'Views/RecordingView'; //Not usefull
import SocketIoView from 'Views/SocketIoView';

const App = () => {
    return (
        <View>
            <LiveAudioStreamView />
        </View>
    );
};

export default App;
