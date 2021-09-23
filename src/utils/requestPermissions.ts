import { PermissionsAndroid } from 'react-native';

export async function requestAudioPermission() {
  try {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO, {
      title: 'Example App',
      message: 'Example App access to your audio ',
      buttonPositive: 'test'
    });
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the audio');
    } else {
      console.log('audio permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}
