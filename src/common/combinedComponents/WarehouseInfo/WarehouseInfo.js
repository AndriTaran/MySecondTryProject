import React from "react";
import { View, Text } from "../../simpleComponents/";
import BoxIcon from "../../../assets/icons/closed-cardboard-box.svg";
import LabelIcon from "../../../assets/icons/price-label-svgrepo-com.svg";

const WarehouseInfo = ({ number, label, storage }) => (
  <View
    pt={"10px"}
    pb={"10px"}
    bc={"#E5E5E5"}
    borderBottomCollor={"grey"}
    borderTopCollor={"grey"}
    flexDirection={"row"}
    width={"100%"}
    borderBottomWidth={"1px"}
    borderTopWidth={"1px"}
  >
    {storage ?
      <View justifyContent={"space-between"} flexDirection={"row"}>
        <View flex={1} alignItm={"flex-start"}>
          <Text pl={"5px"} color={"black"}>
            {storage}
          </Text>
        </View>
        <View
          justifyContent={"flex-end"}
          pr={"10px"}
          flexDirection={"row"}
        >
          <BoxIcon width={20} height={20} fill={"black"} />
          <Text pl={"5px"} color={"black"}>
            {number}
          </Text>
        </View>
        <View
          justifyContent={"flex-end"}
          pr={"10px"}
          flexDirection={"row"}
        >
          <LabelIcon width={"20px"} height={"20px"} fill={"black"} />
          <Text pl={"5px"} color={"black"}>
            {label}
          </Text>
        </View>
      </View>
      :
      <>
        <View
          width={"50%"}
          justifyContent={"flex-start"}
          pl={"10px"}
          flexDirection={"row"}
        >
          <BoxIcon width={20} height={20} fill={"black"} />
          <Text pl={"5px"} color={"black"}>
            {number}
          </Text>
        </View>
        <View
          width={"50%"}
          justifyContent={"flex-end"}
          pr={"10px"}
          flexDirection={"row"}
        >
          <LabelIcon width={"20px"} height={"20px"} fill={"black"} />
          <Text pl={"5px"} color={"black"}>
            {label}
          </Text>
        </View>
      </>}
  </View>
);

export default WarehouseInfo;
