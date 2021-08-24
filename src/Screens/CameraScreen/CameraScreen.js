"use strict";
import React, { useEffect } from "react";
import { RNCamera } from "react-native-camera";
import { useDispatch } from "react-redux";
import { useCamera } from "react-native-camera-hooks";
import { addPhoto, getPhoto } from "../../redux/actions";
import { initialState } from "../../assets/data";
import ImageBar from "./components/ImageBar";
import { Block, Button, Text } from "../../common/simpleComponents/";
import { CameraView } from "../../common/combinedComponents/";

const CameraScreen = () => {

  const dispatch = useDispatch();

  useEffect(() => dispatch(getPhoto()), []);
  const [
    {
      cameraRef,
      type,
      flash,
      autoFocus,
      focusDepth,
      zoom,
      whiteBalance,
      autoFocusPoint,
      ratio,
    },
    {
      setIsRecording,
      takePicture,
    },
  ] = useCamera({ initialState });

  const takePhoto = async () => {
    try {
      setIsRecording(true);
      const data = await takePicture();
      await dispatch(addPhoto(data));
    } catch (e) {
      console.warn(e);
    } finally {
      setIsRecording(false);
    }
  };

  return (
    <Block
      flex={1}
      width={"100%"}
      flexDirection={"column"}
    >
      <CameraView
        flex={1}
        bc={"blue"}
        width={"100%"}
        justifyContent={"flex-end"}
        ref={cameraRef}
        type={type}
        flashMode={flash}
        autoFocus={autoFocus}
        autoFocusPointOfInterest={autoFocusPoint.normalized}
        zoom={zoom}
        whiteBalance={whiteBalance}
        ratio={ratio}
        focusDepth={focusDepth}
        faceDetectionLandmarks={
          RNCamera.Constants.FaceDetection.Landmarks
            ? RNCamera.Constants.FaceDetection.Landmarks.all
            : null
        }
      >
        <>
          <Button
            onPress={takePhoto}
            bc={"#fff"}
            borderRadius={"5px"}
            padding={"15px"}
            margin={"20px"}
          >
            <Text color={"black"} fontSize={"14px"}>
              SNAP
            </Text>
          </Button>
        </>
      </CameraView>
      <ImageBar />
    </Block>
  );

};

export default CameraScreen;
