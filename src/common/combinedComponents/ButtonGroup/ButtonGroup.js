import { View } from "../../simpleComponents/View";
import { Button } from "../../simpleComponents/Button";
import { Text } from "../../simpleComponents/Text";
import React from "react";

const ButtonGroup = ({ text, goBack, goForward }) => (

  <View
    pt={"15px"}
    pb={"15px"}
    flexDirection={"row"}
    width={"100%"}
    justifyContent={"space-between"}
  >
    <Button width={"80px"} onPress={goBack ? goBack : null}>
      <Text color={"blue"} fontSize={"20px"}>
        {goBack ? "Back" : "Cancel"}
      </Text>
    </Button>
    <Text fontSize={"20px"} color={"black"}>
      {text}
    </Text>
    <Button width={"80px"} onPress={goForward ? goForward : null}>
      <Text color={"blue"} fontSize={"20px"}>
        {goForward ? "Forward" : "Confirm"}
      </Text>
    </Button>
  </View>
);

export default ButtonGroup;
