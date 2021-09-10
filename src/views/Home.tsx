import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'App';
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { io } from 'socket.io-client';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: Props) => {
  useEffect(() => {
    const socket = io('http://localhost:3000');

    socket.on('connect', () => {
      console.log(socket.id);
    });

    socket.on('connect_error', (err) => {
      console.log(err.message);
    });

    socket.on('hello', (arg) => {
      console.log(arg);
    });

    socket.on('disconnect', () => {
      console.log('disconnected');
    });
  });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
    </View>
  );
};

export default Home;
