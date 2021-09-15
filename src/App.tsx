import React from 'react';
import { View } from 'react-native';
import LiveAudioStreamView from 'Views/LiveAudioStreamView'; //Could be usefull
import RecordingView from 'Views/RecordingView'; //Not usefull
import SocketIoView from 'Views/SocketIoView';
import AudioRecordView from 'Views/AudioRecordView';
import NodeMediaPlayerView from 'Views/NodeMediaPlayerView';

const App = () => {
    return (
        <View>
            <NodeMediaPlayerView />
        </View>
    );
};

export default App;
