import React from 'react';
import LiveAudioStream, { Options } from 'react-native-live-audio-stream';
import styled from 'styled-components/native';
import RNPermissions from 'react-native-permissions';
import { Button } from 'react-native-elements';
import { spacing, variables, palette } from 'shared/styling';

const options: Options = {
    sampleRate: 32000,
    channels: 1,
    bitsPerSample: 16,
    audioSource: 6,
    bufferSize: 4096
};
let test = 0;

LiveAudioStream.on('data', (data) => {
    console.log(data);
});
const LiveAudioStreamView = () => {
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
        <Wrapper>
            <TestButton title="start" onPress={startRecording} />
            <TestButton title="stop" onPress={stopRecording} />
        </Wrapper>
    );
};

const Wrapper = styled.View`
    margin: 24px;
`;

const TestButton = styled(Button).attrs({
    buttonStyle: {
        marginVertical: spacing.s0,
        paddingVertical: spacing.s4,
        borderRadius: variables.borderRadius.medium,
        backgroundColor: palette.dark
    },
    containerStyle: {
        marginVertical: spacing.s1
    }
})``;

export default LiveAudioStreamView;
