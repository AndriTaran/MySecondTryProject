import React from "react";
import { Text, TextInput } from "../../simpleComponents";

const CustomInput = (props) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;
  const hasError = errors[name] && touched[name];

  return (
    <>
      <TextInput
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        {...inputProps}
        borderBottomColor={hasError ? "red" : "grey"}
        borderTopColor={hasError ? "red" : "white"}
        borderRightColor={hasError ? "red" : "white"}
        borderLeftColor={hasError ? "red" : "white"}
        borderTopWidth={"1px"}
        borderRightWidth={"1px"}
        borderLeftWidth={"1px"}
        borderBottomWidth={"1px"}
        borderStyle={"solid"}
        width={"100%"}
        fontSize={"20px"}
      />
      {hasError && <Text color={"red"}>{errors[name]}</Text>}
    </>
  );
};

export default CustomInput;
