import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import RNPermissions from 'react-native-permissions';
import { Button } from 'react-native-elements';
import { spacing, variables, palette } from 'shared/styling';
import AudioRecord, { Options } from 'react-native-audio-record';
import Sound from 'react-native-sound';

const options: Options = {
    sampleRate: 16000, // default 44100
    channels: 1, // 1 or 2, default 1
    bitsPerSample: 16, // 8 or 16, default 16
    audioSource: 6, // android only (see below)
    wavFile: 'test.wav' // default 'audio.wav'
};

AudioRecord.on('data', (data) => {
    // console.log(data);
});

const test = {
    url: require('../../assets/audio/testAudio.mp3')
};

const AudioRecordView = () => {
    const [audioFile, setAudioFile] = useState();

    var whoosh = new Sound(
        'https://22673.live.streamtheworld.com/SRGSTR05.mp3',
        Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            console.log(
                'duration in seconds: ' +
                    whoosh.getDuration() +
                    'number of channels: ' +
                    whoosh.getNumberOfChannels()
            );
        }
    );

    const startRecording = () => {
        RNPermissions.request('android.permission.RECORD_AUDIO').then((permission) => {
            AudioRecord.init(options);
            AudioRecord.start();
        });
    };

    const stopRecording = async () => {
        // const audioFile = await AudioRecord.stop();
        setAudioFile(AudioRecord.stop());
    };

    // {
    //   title: 'wav via require()',
    //   isRequire: true,
    //   url: require('./frog.wav'),
    // },

    const testPlaySound = () => {
        whoosh.play((success) => {
            if (success) {
                console.log('successfully finished playing');
            } else {
                console.log('playback failed due to audio decoding errors');
            }
        });
    };

    const testStopSound = () => {
        whoosh.pause();
    };

    return (
        <Wrapper>
            <TestButton title="start" onPress={startRecording} />
            <TestButton title="stop" onPress={stopRecording} />
            <TestButton title="log" onPress={() => console.log(audioFile)} />
            <TestButton title="play" onPress={testPlaySound} />
            <TestButton title="pause" onPress={testStopSound} />
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

export default AudioRecordView;
