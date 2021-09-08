import React, { useEffect } from 'react';
import RNPermissions from 'react-native-permissions';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
import { spacing, variables, palette } from 'shared/styling';
import Recording from 'react-native-recording';

const RecordingView = () => {
    useEffect(() => {
        RNPermissions.request('android.permission.RECORD_AUDIO').then((permission) => {
            Recording.init({
                bufferSize: 4096,
                sampleRate: 44100,
                bitsPerChannel: 16,
                channelsPerFrame: 1
            });
        });
    }, []);

    const listener = Recording.addRecordingEventListener((data) => console.log(data));

    const startRecording = () => {
        Recording.start();
    };

    const stopRecording = () => {
        Recording.stop();
        listener.remove();
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

export default RecordingView;
