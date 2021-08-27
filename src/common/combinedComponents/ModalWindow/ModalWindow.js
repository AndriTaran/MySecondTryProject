import React from "react";
import { Button, Text, View } from "../../simpleComponents";
import { ModalComponent } from "../";

const ModalWindow = ({isModalVisible, text, toggleModal}) =>(

  <ModalComponent
    isVisible={isModalVisible}
    height={"20%"}
    backdropColor="#B4B3DB"
    backdropOpacity={0.8}
    animationIn="zoomInDown"
    animationOut="zoomOutUp"
    animationInTiming={600}
    animationOutTiming={600}
    backdropTransitionInTiming={600}
    backdropTransitionOutTiming={600}
  >
    <View bc={"#9B6EFF"}>
      <Text margin={"30px"} color={"white"}>
        {text}
      </Text>
      <Button onPress={toggleModal} bc={"#79C0FF"}>
        <Text color={"white"} margin={"10px"}>
          Close
        </Text>
      </Button>
    </View>
  </ModalComponent>
)

export default ModalWindow
