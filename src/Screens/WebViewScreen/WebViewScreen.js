import React from "react";
import { WebView } from "react-native-webview";
import { Header, ButtonGroup } from "../../common/combinedComponents";
import { SafeAreaView } from "../../common/simpleComponents/SaveAreaView";

const WebViewScreen = () => (
   <SafeAreaView>
      <Header />
      <ButtonGroup text={"Web View"}/>
      <WebView
         source={{ uri: "https://reactnative.dev/" }}
         onError={(syntheticEvent) => {
            const { nativeEvent } = syntheticEvent;
            console.warn("WebView error: ", nativeEvent);
         }}
         onHttpError={(syntheticEvent) => {
            const { nativeEvent } = syntheticEvent;
            console.warn(
               "Oops, something goes wrong. WebView received error status code: ",
               nativeEvent.statusCode,
            );
         }}
         originWhitelist={["https://*", "git://*"]}
      />
   </SafeAreaView>
);

export default WebViewScreen;
