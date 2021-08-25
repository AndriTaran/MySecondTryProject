import React, { useRef, useState } from "react";
import RNFS from "react-native-fs";
import { View, Image, Button, Text, SafeAreaView } from "../../common/simpleComponents/";
import { Signature, ModalWindow } from "../../common/combinedComponents";

const SignatureScreen = () => {
  const ref = useRef();
  const [signature, setSign] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const path = RNFS.CachesDirectoryPath + "/sign.png";

  const handleOK = (signature) => {
    setSign(signature);
    RNFS.writeFile(path, signature.replace("data:image/png;base64,", ""), "base64")
      .catch(error => console.log(error));
    setModalVisible(true);
  };

  const handleEmpty = () => console.log("Empty");

  const handleClear = () => ref.current.clearSignature();

  const handleConfirm = () => ref.current.readSignature();

  const style = `.m-signature-pad--footer {display: none; margin: 0px;}`;

  return (
    <SafeAreaView flex={1}>
      <View
        flex={1}
        mt={"10px"}
        backgroundColor={"#F8F8F8"}
      >
        {signature && (
          <Image width={"100%"} height={"100%"} source={{ uri: signature }} />
        )}
      </View>
      <Signature
        ref={ref}
        onOK={handleOK}
        webStyle={style}
        onEmpty={handleEmpty}
        backgroundColor={"rgba(153, 253, 99)"}
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
        >
          <Text>CONFIRM</Text>
        </Button>
      </View>
      <ModalWindow
        toggleModal={toggleModal}
        text={'Done!'}
        isModalVisible={isModalVisible}
      />
    </SafeAreaView>
  );
};

export default SignatureScreen;
