import { Socket } from 'socket.io-client';
import {
  RTCPeerConnection,
  RTCSessionDescription,
  MediaStream,
  mediaDevices
} from 'react-native-webrtc';
import { useEffect, useState } from 'react';

export const useWebRTC = (socket: Socket) => {
  const configuration = { iceServers: [{ url: 'stun:stun.l.google.com:19302' }] };
  const pc = new RTCPeerConnection(configuration);

  const [users, setUsers] = useState<string[]>([]);
  // const [stream, setStream] = useState<MediaStream>();

  useEffect(() => {
    socket.on('connect', () => {
      // console.log(socket.id);
    });

    socket.on('update-user-list', (data) => {
      updateUserList(data.users);
    });

    socket.on('connect_error', (err) => {
      console.log(err.message);
    });

    socket.on('disconnect', (socketId: string) => {
      const currentUser = users.find((user) => user === socketId);
      if (currentUser) {
        setUsers(users.filter((user) => user !== socketId));
        console.log('disconnected user with socket id: ', currentUser);
      }
    });

    socket.on('call-made', async (data) => {
      console.log('call-made', data);
      await pc.setRemoteDescription(new RTCSessionDescription(data.offer));
      const answer = await pc.createAnswer();
      await pc.setLocalDescription(new RTCSessionDescription(answer));

      socket.emit('make-answer', {
        answer,
        to: data.socket
      });
    });

    socket.on('answer-made', async (data) => {
      console.log('answer-made', data);
      await pc.setRemoteDescription(new RTCSessionDescription(data.answer));
      callUser(data.socket);
    });

    return () => {
      if (socket.connected) socket.close();
    };
  }, [socket]);

  // useEffect(() => {
  //   if (!stream) {
  //     (async () => {
  //       const streamBuffer = await mediaDevices.getUserMedia({
  //         audio: true,
  //         video: false
  //       });

  //       setStream(streamBuffer as MediaStream);
  //     })();
  //   }
  // }, [stream]);

  const callUser = async (socketId: string) => {
    const offer = await pc.createOffer();
    await pc.setLocalDescription(new RTCSessionDescription(offer));

    socket.emit('call-user', {
      offer,
      to: socketId
    });
  };

  const updateUserList = (socketIds: string[]) => {
    socketIds.map((socketId) => {
      const alreadyExistingUser = users.find((user) => user === socketId);
      if (!alreadyExistingUser) {
        setUsers((oldArray) => [...oldArray, socketId]);
      }
    });
  };

  mediaDevices.enumerateDevices().then(() => {
    mediaDevices
      .getUserMedia({
        audio: true,
        video: false
      })
      .then((stream) => {
        console.log('stream:', stream);
        pc.addStream(stream as MediaStream);
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  });

  return {
    callUser,
    users
  };
};
