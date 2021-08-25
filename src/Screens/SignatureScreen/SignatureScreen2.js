import React, { useRef, useState } from "react";
import { View, Image, Button, Text, SafeAreaView } from "../../common/simpleComponents/";
import { Signature2 } from "../../common/combinedComponents/";

const SignatureScreen2 = () => {
  const ref = useRef();
  const [signature, setSign] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const handleClear = () => {
    ref.current.resetImage();
    setDisabled(true);
  };

  const handleConfirm = () => ref.current.saveImage();

  const _onSaveEvent = (result) => {
    setSign(`data:image/png;base64,${result.encoded}`);
    ref.current.resetImage();
    setDisabled(true);
  };

  const _onDragEvent = () => {
    setDisabled(false);
  };

  return (
    <SafeAreaView flex={1}>
      <View
        flex={1}
        mt={"10px"}
        backgroundColor={"#F8F8F8"}
        borderBottomColor={"black"}
        borderBottomWidth={"1px"}
      >
        {signature && (
          <Image width={"100%"} height={"100%"} source={{ uri: signature }} />
        )}
      </View>
      <Signature2
        flex={1}
        ref={ref}
        onSaveEvent={_onSaveEvent}
        onDragEvent={_onDragEvent}
        saveImageFileInExtStorage={false}
        showNativeButtons={false}
        showTitleLabel={false}
        viewMode={"portrait"}
        backgroundColor="#ff00ff"
        square={true}
      />
      <View
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <Button
          onPress={handleClear}
          bc={"#DB7092"}
          width={"25%"}
          padding={"10px"}
          margin={"10px"}
          borderRadius={"5px"}
        >
          <Text>CLEAR</Text>
        </Button>
        <Button
          onPress={handleConfirm}
          bc={"#DB7092"}
          width={"25%"}
          padding={"10px"}
          margin={"10px"}
          borderRadius={"5px"}
          disabled={disabled}
          accessibilityRole={"button"}
        >
          <Text>CONFIRM</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default SignatureScreen2;
