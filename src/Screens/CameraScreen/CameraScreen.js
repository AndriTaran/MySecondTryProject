"use strict";
import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RNCamera } from "react-native-camera";
import PendingView from "./components/PendingView";
import CameraRoll from "@react-native-community/cameraroll";
import ImageBar from "./components/ImageBar";
import { useDispatch } from "react-redux";
import { fetchPhoto } from "../../redux/actions";

const CameraScreen = () => {
  const dispatch = useDispatch()
  useEffect(() => dispatch(fetchPhoto()),[])
  const takePicture = async (camera) => {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options)
      .then(
        data => {
          saveImage(data.uri)
        }
      )
      .catch(err => {
        console.log( 'capture picture error', err)
      });
  };

  const saveImage = async filePath => {
    try {
      await CameraRoll.save(filePath)
      dispatch(fetchPhoto())
    } catch (error) {
      console.log(error, 'saveImage err');
    }
  };

    return (
      <View style={styles.container}>
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          captureAudio={false}
          androidCameraPermissionOptions={{
            title: "Permission to use camera",
            message: "We need your permission to use your camera",
            buttonPositive: "Ok",
            buttonNegative: "Cancel",
          }}
          androidRecordAudioPermissionOptions={{
            title: "Permission to use audio recording",
            message: "We need your permission to use your audio",
            buttonPositive: "Ok",
            buttonNegative: "Cancel",
          }}
        >
          {({ camera, status, recordAudioPermissionStatus }) => {
            if (status !== "READY") return <PendingView />;
            return (
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <TouchableOpacity onPress={() => takePicture(camera)} style={styles.capture}>
                  <Text style={{ fontSize: 14 }}> SNAP </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
        <ImageBar/>
      </View>
    );

};

const styles = StyleSheet.create({
  text: {
    color: "black",
    width: "100%",
    height: 100,
    backgroundColor: "blue",
  },
  container: {
    flex: 1,
    width: "100%",
    height: "90%",
    flexDirection: "column",
    backgroundColor: "black",
  },
  preview: {
    flex: 1,
    backgroundColor: "blue",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    margin: 20,
  },
});

export default CameraScreen;
