import Schemas from "../../../assets/validation/validationSchema";
import { Block, Text, ScrollView, Button } from "../../../common/simpleComponents";
import { Field, Formik } from "formik";
import CustomInput from "../../../common/combinedComponents/CustomInput/CustomInput";
import React from "react";

const FormComponent = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Schemas.LoginSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit }) => (
        <ScrollView bounces={true} flex={1}>
          <Block height={"100%"}
                 width={"100%"}
                 mt={"30px"}
                 pr={"20px"}
                 pl={"20px"}
                 justifyContent={"center"}
          >

            <Text textAlign={"left"} width={"100%"} fontSize={"15px"}>USERNAME</Text>
            <Field
              component={CustomInput}
              name="email"
              keyboardType="email-address"
            />
            <Text textAlign={"left"} width={"100%"} mt={"20px"} fontSize={"15px"}>PASSWORD</Text>
            <Field
              component={CustomInput}
              name="password"
              secureTextEntry
            />
            <Text mt={"5px"}>Password must be at least 8 characters long, contain a capital letter, a lowercase letter,
              and a
              character</Text>
            <Button onPress={handleSubmit} bc={"blue"} mt={"30px"} height={"40px"} justifyContent={"center"}
                    width={"70%"}>
              <Text fontSize={"20px"} color={"white"}>LOGIN</Text>
            </Button>
            <Button mt={"10px"} color={"black"} height={"30px"} justifyContent={"center"}>
              <Text fontSize={"20px"} color={"blue"}>Forgot password?</Text>
            </Button>
            <Text mt={"10px"} color={"grey"}>2.3.23(35353466324234)-DEBUG</Text>
          </Block>
        </ScrollView>
      )}
    </Formik>
  );
};

export default FormComponent;
