import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { Text, View, KeyboardAvoidingView } from "../../common/simpleComponents/";
import FormComponent from "./component/FormComponent";

const AuthorizationScreen = () => {

  useEffect(() => SplashScreen.hide(), []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View
        flex={1}
        width={"100%"}
        bc={"white"}
      >
        <View
          height={"40%"}
          bc={"orange"}
          justifyContent={"center"}
          width={"100%"}
        >
          <View
            justifyContent={"center"}
            position={"relative"}
          >
            <Text color={"white"} fontSize={"120px"}>D</Text>
            <View
              position={"absolute"}
              top={"20px"}
              right={"-10px"}
            >
              <Text fontSize={"30px"} color={"white"}>®</Text>
            </View>
          </View>
        </View>
        <View
          width={"100%"}
          flex={1}
        >
          <KeyboardAvoidingView
            flex={1}
            width={"100%"}
            behavior={"padding"}
          >
            <FormComponent />
          </KeyboardAvoidingView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AuthorizationScreen;
