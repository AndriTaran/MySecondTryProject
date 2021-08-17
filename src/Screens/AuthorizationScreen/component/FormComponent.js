import Schemas from "../../../assets/validation/validationSchema";
import { Block, Text, ScrollView, Button } from "../../../common/simpleComponents";
import { Field, Formik } from "formik";
import CustomInput from "../../../common/combinedComponents/CustomInput/CustomInput";
import validator from "../../../assets/validation/validator";
import React, { useRef } from "react";
import FingerprintButton from "../../../common/combinedComponents/FingerPrintButton/FingerPrintButton";

const FormComponent = () => {
   const scrollViewRef = useRef();
   return (
      <Formik
         initialValues={{
            email: "",
            password: "",
         }}
         validate={validator(Schemas.LoginSchema)}
         onSubmit={(values) => {
            console.log(values);
         }}
      >
         {({ handleSubmit }) => (
            <ScrollView
               bounces={true}
               ref={scrollViewRef}
               contentInset={{ bottom: 350 }}
            >
               <Block
                  width={"100%"}
                  mt={"30px"}
                  pr={"20px"}
                  pl={"20px"}
                  justifyContent={"center"}
                  flex={1}
               >

                  <Text
                     textAlign={"left"}
                     width={"100%"}
                     fontSize={"15px"}
                  >USERNAME
                  </Text>
                  <Field
                     component={CustomInput}
                     name="email"
                     keyboardType="email-address"
                  />
                  <Text
                     textAlign={"left"}
                     width={"100%"}
                     mt={"20px"}
                     fontSize={"15px"}
                  >PASSWORD
                  </Text>
                  <Field
                     component={CustomInput}
                     name="password"
                     secureTextEntry
                  />
                  <Button
                     onPress={handleSubmit}
                     bc={"blue"} mt={"30px"}
                     height={"40px"}
                     justifyContent={"center"}
                     width={"70%"}
                  >
                     <Text
                        fontSize={"20px"}
                        color={"white"}
                     >LOGIN
                     </Text>
                  </Button>
                  <Button
                     mt={"10px"}
                     color={"black"}
                     height={"30px"}
                     justifyContent={"center"}
                  >
                     <Text
                        fontSize={"20px"}
                        color={"blue"}
                     >Forgot password?
                     </Text>
                  </Button>
                  <FingerprintButton/>
                  <Text
                     mt={"10px"}
                     color={"grey"}
                  >2.3.23(35353466324234)-DEBUG</Text>
               </Block>
            </ScrollView>
         )}
      </Formik>
   );
};

export default FormComponent;
