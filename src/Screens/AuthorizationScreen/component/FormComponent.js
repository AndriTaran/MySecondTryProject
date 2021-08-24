import React, { useRef } from "react";
import { Field, Formik } from "formik";
import I18n from "../../../assets/locales/i18n";
import Schemas from "../../../assets/validation/validationSchema";
import CustomInput from "../../../common/combinedComponents/CustomInput/CustomInput";
import { View, Text, ScrollView, Button } from "../../../common/simpleComponents";
import validator from "../../../assets/validation/validator";
import FingerprintButton from "../../../common/combinedComponents/FingerPrintButton/FingerPrintButton";

const FormComponent = () => {

  const scrollViewRef = useRef();
  const onSubmit = (values) => (
    console.log(values)
  );

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={validator(Schemas.LoginSchema)}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <ScrollView
          bounces={true}
          ref={scrollViewRef}
          contentInset={{ bottom: 350 }}
        >
          <View
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
            >
              {I18n.t("username")}
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
            >
              {I18n.t("password")}
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
              <Text fontSize={"20px"} color={"white"}>
                {I18n.t("login")}
              </Text>
            </Button>
            <Button
              mt={"10px"}
              color={"black"}
              height={"30px"}
              justifyContent={"center"}
            >
              <Text fontSize={"20px"} color={"blue"}>
                {I18n.t("forgotPass")}
              </Text>
            </Button>
            <FingerprintButton />
            <Text mt={"10px"} color={"grey"}>
              2.3.23(35353466324234)-DEBUG
            </Text>
          </View>
        </ScrollView>
      )}
    </Formik>
  );
};

export default FormComponent;
