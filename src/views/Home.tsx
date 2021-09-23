import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'App';
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { requestAudioPermission } from 'utils/requestPermissions';
import { SocketContext } from 'context/socket';
import { useWebRTC } from 'hooks/useWebRTC';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: Props) => {
  const socket = React.useContext(SocketContext);
  const { callUser, users } = useWebRTC(socket);

  useEffect(() => {
    (async () => {
      await requestAudioPermission();
    })();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text>{socket.id}</Text>
      {users.length > 0 &&
        users.map((user, i) => <Button title={user} key={i} onPress={() => callUser(user)} />)}
    </View>
  );
};

export default Home;
