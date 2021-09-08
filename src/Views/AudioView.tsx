import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import LiveAudioStream, { Options } from 'react-native-live-audio-stream';
import styled from 'styled-components/native';
import RNPermissions, { PERMISSIONS } from 'react-native-permissions';

const options: Options = {
    sampleRate: 32000, // default is 44100 but 32000 is adequate for accurate voice recognition
    channels: 1, // 1 or 2, default 1
    bitsPerSample: 16, // 8 or 16, default 16
    audioSource: 6, // android only (see below)
    bufferSize: 4096, // default is 2048,
    wavFile: ''
};

LiveAudioStream.init(options);

LiveAudioStream.on('data', (data) => {
    console.log(data);
});

const AudioView = () => {
    useEffect(() => {
        LiveAudioStream.init(options);
    }, []);

    const startRecording = () => {
        RNPermissions.request('android.permission.RECORD_AUDIO').then((permission) => {
            LiveAudioStream.init(options);
            LiveAudioStream.start();
        });
    };

    const stopRecording = () => {
        LiveAudioStream.stop();
    };

    return (
        <View>
            <Text>yeet</Text>
            <TestButton title="start" onPress={startRecording} />
            <TestButton title="stop" onPress={stopRecording} />
        </View>
    );
};

const TestButton = styled.Button``;

export default AudioView;
