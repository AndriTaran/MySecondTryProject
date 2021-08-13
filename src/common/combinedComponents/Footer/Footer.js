import { Block } from "../../simpleComponents/Block";
import { Button } from "../../simpleComponents/Button";
import React from "react";
import { Text } from "../../simpleComponents/Text";


const Footer = ({ text, err }) => {
  return (
    <Block
      justifyContent={"center"}
      flexDirection={"row"}
      width={"100%"}
      pt={"20px"}
      pb={"40px"}
    >
      <Block
        justifyContent={"center"}
        pt={"15px"}
        pb={"15px"}
        bc={err ? "#B51B44" : null}
        width={"85%"}
        borderRadius={"5px"}
        border={err ? "2px solid #B51B44" : "2px solid #618296"}
      >
        <Button>
          <Text fontSize={"18px"} color={err ? "white" : "#315B75"}>{text}</Text>
        </Button>
      </Block>
    </Block>
  );
};

export default Footer;
