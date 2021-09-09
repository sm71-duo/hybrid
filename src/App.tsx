import React, { useEffect } from 'react';
import { View } from 'react-native';

const App = () => {
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3000');

    ws.onmessage = (event: WebSocketMessageEvent) => {
      const data = JSON.parse(event.data);
      console.log(data);
    };

    ws.onerror = (error: any) => {
      console.log(error);
    };
  });

  return <View />;
};

export default App;
