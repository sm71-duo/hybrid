import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
import { spacing, variables, palette } from 'shared/styling';
import { NodeCameraView } from 'react-native-nodemediaclient';
import { Dimensions, PermissionsAndroid, View } from 'react-native';
import RNPermissions from 'react-native-permissions';

const config = {
    cameraConfig: {
        cameraId: 1,
        cameraFrontMirror: true
    },
    videoConfig: {
        preset: 4,
        bitrate: 2000000,
        profile: 2,
        fps: 30,
        videoFrontMirror: false
    },
    audioConfig: {
        bitrate: 128000,
        profile: 1,
        samplerate: 44100
    }
};

const NodeMediaPlayerView = () => {
    const { width, height } = Dimensions.get('window');

    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.requestMultiple(
                [
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
                ],
                {
                    title: 'Cool Photo App Camera And Microphone Permission',
                    message:
                        'Cool Photo App needs access to your camera ' +
                        'so you can take awesome pictures.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK'
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the camera');
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const cameraViewRef = React.useRef(null);
    const streamKey = '87fc8803-2629-0832-25f2-edf2ff751a6f';
    const url = `rtmps://global-live.mux.com:443/app/${streamKey}`;

    const testPlaySound = () => {
        cameraViewRef.current.start();
    };

    const testStopSound = () => {
        cameraViewRef.current.stop();
    };

    return (
        <Wrapper>
            <NodeCameraView
                style={{ height: 300 }}
                ref={cameraViewRef}
                outputUrl={url}
                camera={config.cameraConfig}
                audio={config.audioConfig}
                video={config.videoConfig}
                autopreview={true}
            />
            <TestButton title="play" onPress={testPlaySound} />
            <TestButton title="pause" onPress={testStopSound} />
            <TestButton title="request" onPress={requestCameraPermission} />
        </Wrapper>
    );
};

const Wrapper = styled.View`
    border: solid 1px red;
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

export default NodeMediaPlayerView;
