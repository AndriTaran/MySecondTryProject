import React from "react";
import { Text, Block, KeyboardAvoidingView } from "../../common/simpleComponents/";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import FormComponent from "./component/FormComponent";

const AuthorizationScreen = () => {

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Block height={"100%"}
             width={"100%"}
             bc={'white'}
      >
        <Block height={"40%"}
               bc={"orange"}
               justifyContent={"center"}
               width={"100%"}
        >
          <Block
            justifyContent={"center"}
            position={"relative"}
          >
            <Text color={"white"}
                  fontSize={"120px"}>D
            </Text>
            <Block
              position={"absolute"}
              top={"20px"}
              right={"-10px"}
            >
              <Text fontSize={"30px"}
                    color={"white"}>®
              </Text>
            </Block>
          </Block>
        </Block>
        <Block height={"100%"} width={"100%"}>
          <KeyboardAvoidingView height={"100%"} width={"100%"} behavior={Platform.OS === "ios" ? "padding" : "padding"}>
            <FormComponent />
          </KeyboardAvoidingView>
        </Block>
      </Block>
    </TouchableWithoutFeedback>
  );
};

export default AuthorizationScreen;
