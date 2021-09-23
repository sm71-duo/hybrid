import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'App';
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Button } from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

const LoginScreen = ({ navigation }: Props) => {
  const [userId, setUserId] = useState('');

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
    marginBottom: 10,
    color: '#000',
    borderWidth: 1,
    borderRadius: 10
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

export default LoginScreen;
