import React from 'react';
import { WebView } from 'react-native-webview';

const WebViewScreen = () => (
   <WebView
      source={{ uri: 'https://reactnative.dev/' }}
      onError={(syntheticEvent) => {
         const { nativeEvent } = syntheticEvent;
         console.warn('WebView error: ', nativeEvent);
      }}
      onHttpError={(syntheticEvent) => {
         const { nativeEvent } = syntheticEvent;
         console.warn(
            'Oops, something goes wrong. WebView received error status code: ',
            nativeEvent.statusCode,
         );
      }}
      originWhitelist={['https://*', 'git://*']}
   />
)

export default WebViewScreen
