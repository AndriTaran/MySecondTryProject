import React, { useEffect } from "react";
import SplashScreen from 'react-native-splash-screen'
import { Text, Block, KeyboardAvoidingView } from "../../common/simpleComponents/";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import FormComponent from "./component/FormComponent";

const AuthorizationScreen = () => {
   useEffect(()=>SplashScreen.hide(),[]);

   return (
   <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Block
         flex={1}
         width={"100%"}
         bc={"white"}
      >
         <Block
            height={"40%"}
            bc={"orange"}
            justifyContent={"center"}
            width={"100%"}
         >
            <Block
               justifyContent={"center"}
               position={"relative"}
            >
               <Text
                  color={"white"}
                  fontSize={"120px"}
               >D
               </Text>
               <Block
                  position={"absolute"}
                  top={"20px"}
                  right={"-10px"}
               >
                  <Text
                     fontSize={"30px"}
                     color={"white"}
                  >®
                  </Text>
               </Block>
            </Block>
         </Block>
         <Block
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
         </Block>
      </Block>
   </TouchableWithoutFeedback>
   )
};

export default AuthorizationScreen;
