import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'App';
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Button } from 'react-native';
import InCallManager from 'react-native-incall-manager';

import {
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  RTCView,
  MediaStream,
  MediaStreamTrack,
  mediaDevices,
  registerGlobals
} from 'react-native-webrtc';

type Props = NativeStackScreenProps<RootStackParamList, 'CallScreen'>;

const STUN_SERVER = 'stun1.l.google.com:19302';
const SOCKET_URL = 'http://192.168.1.163:3000';

const CallScreen = ({ navigation }: Props) => {
  const [userId, setUserId] = useState('');
  const [socketActive, setSocketActive] = useState(false);
  const [calling, setCalling] = useState(false);
  const [localStream, setLocalStream] = useState({ toURL: () => null });
  const [remoteStream, setRemoteStream] = useState({ toURL: () => null });

  const conn = useRef(new WebSocket(SOCKET_URL));

  const yourConn = useRef(
    new RTCPeerConnection({
      iceServers: [
        {
          urls: STUN_SERVER
        }
      ]
    })
  );

  const [callActive, setCallActive] = useState(false);
  const [incomingCall, setIncomingCall] = useState(false);
  const [otherId, setOtherId] = useState('');
  const [callToUsername, setCallToUsername] = useState('');
  const connectedUser = useRef(null);
  const offerRef = useRef(null);

  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <Text style={styles.heading}>Enter your id</Text>
        <TextInput onChangeText={(text) => setUserId(text)} style={styles.input} />

        <Button
          onPress={() => navigation.push('CallScreen')}
          title={'login'}
          disabled={userId.length === 0}>
          Login
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    // alignSelf: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center'
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: '600'
  },
  input: {
    height: 60,
    marginBottom: 10
  },
  btn: {
    height: 60,
    alignItems: 'stretch',
    justifyContent: 'center',
    fontSize: 18
  },
  btnContent: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60
  }
});

export default CallScreen;
