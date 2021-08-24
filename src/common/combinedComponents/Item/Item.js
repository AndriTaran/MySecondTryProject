import React from "react";
import { View, Image, Text, Button } from "../../simpleComponents/";

const Item = ({ color, size, brand, amount, picture, name, drag }) => (
  <Button
    onPressIn={drag}
    flex={1}
    flexDirection={"row"}
    bc={"white"}
    activeOpacity={1}
  >
    <View
      flexDirection={"row"}
      width={"100%"}
      borderBottomCollor={"grey"}
      pt={"20px"}
      pb={"20px"}
      pl={"10px"}
      borderBottomWidth={"1px"}
    >
      <Image source={{ uri: picture }} height={"70px"} width={"50px"} />
      <View
        flexDirection={"column"}
        alignItm={"flex-start"}
        pl={"10px"}
        flex={1}
      >
        <Text pt={"3px"} pb={"3px"} color={"black"}>
          {name}
        </Text>
        <Text pt={"3px"} pb={"3px"} color={"black"}>
          {color} {size}
        </Text>
        <Text pt={"3px"} pb={"3px"} color={"black"}>
          {brand}
        </Text>
      </View>
      <View flexDirection={"row"}>
        <View
          bc={"green"}
          width={"100px"}
          justifyContent={"center"}
          borderRadius={"10px"}
          flexDirection={"row"}
        >
          <Text color={"white"}>
            {amount}
          </Text>
        </View>
        <Text color={"black"}>
          >
        </Text>
      </View>
    </View>
  </Button>
);

export default Item;
