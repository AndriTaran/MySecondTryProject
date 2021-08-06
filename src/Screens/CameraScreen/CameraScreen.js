// 'use strict';
// import React from 'react';
// import { PermissionsAndroid, StyleSheet, TouchableOpacity, View } from "react-native";
// import {SafeAreaView, Button, Text} from '../../common/simpleComponents/';
// import {CameraView} from "../../common/combinedComponents/CameraView/CameraView";
//
// const hasAndroidPermission = async () => {
//     const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
//     const hasPermission = await PermissionsAndroid.check(permission);
//     if (hasPermission) {
//         return true;
//     }
//     const status = await PermissionsAndroid.request(permission);
//     return status === 'granted';
// }
//
//
// const CameraScreen = () => {
//   const PendingView = () => (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: 'lightgreen',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <Text>Waiting</Text>
//     </View>
//   );
//     console.log(1)
//   const takePicture = async function(camera) {
//     const options = { quality: 0.5, base64: true };
//     const data = await camera.takePictureAsync(options);
//     //  eslint-disable-next-line
//     console.log(data.uri);
//   };
//
//     return (
//         <SafeAreaView flex={1} flexDirection={'column'} bc={'black'}>
//             <CameraView
//               style={styles.preview}
//               type={RNCamera.Constants.Type.back}
//               flashMode={RNCamera.Constants.FlashMode.on}
//               captureAudio={false}
//               androidCameraPermissionOptions={{
//                 title: 'Permission to use camera',
//                 message: 'We need your permission to use your camera',
//                 buttonPositive: 'Ok',
//                 buttonNegative: 'Cancel',
//               }}
//               androidRecordAudioPermissionOptions={{
//                 title: 'Permission to use audio recording',
//                 message: 'We need your permission to use your audio',
//                 buttonPositive: 'Ok',
//                 buttonNegative: 'Cancel',
//               }}
//             />
//           {({ camera, status, recordAudioPermissionStatus }) => {
//             if (status !== 'READY') return <PendingView />;
//             return (
//               <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
//                 <TouchableOpacity onPress={takePicture(camera)} style={styles.capture}>
//                   <Text style={{ fontSize: 14 }}> SNAP </Text>
//                 </TouchableOpacity>
//               </View>
//             );
//           }}
//         </SafeAreaView>
//     );
// }
//
// const styles = StyleSheet.create({
//   text: {
//     color:"black",
//     width: "100%",
//     height: 100,
//     backgroundColor: "blue"
//   },
//   container: {
//     width: "100%",
//     height: "90%",
//     flexDirection: 'column',
//     backgroundColor: 'black',
//   },
//   preview: {
//     backgroundColor: "blue",
//     height: "80%",
//     width: "100%",
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   capture: {
//     flex: 0,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     padding: 15,
//     paddingHorizontal: 20,
//     alignSelf: 'center',
//     margin: 20,
//   },
// });
//
// export default CameraScreen
'use strict';
import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
);

class ExampleApp extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          captureAudio={false}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        >
          {({ camera, status, recordAudioPermissionStatus }) => {
            if (status !== 'READY') return <PendingView />;
            return (
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
                  <Text style={{ fontSize: 14 }}> SNAP </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
      </View>
    );
  }

  takePicture = async function(camera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    console.log(data.uri);
  };
}

const styles = StyleSheet.create({
  text: {
    color:"black",
    width: "100%",
    height: 100,
    backgroundColor: "blue"
  },
  container: {
    flex: 1,
    width: "100%",
    height: "90%",
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    backgroundColor: "blue",
    width: "100%",
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default ExampleApp;
