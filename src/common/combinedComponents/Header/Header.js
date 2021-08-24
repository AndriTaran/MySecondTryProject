import React from "react";
import { Text } from "react-native";
import { View } from "../../simpleComponents/View";
import BluetoothIcon from "../../../assets/icons/bluetooth_black_24dp.svg";
import SensorIcon from "../../../assets/icons/sensors_black_24dp.svg";
import CloudIcon from "../../../assets/icons/cloud_queue_black_24dp.svg";

const Header = () =>
  <View
    pr={"20px"}
    pl={"20px"}
    flexDirection={"row"}
    width={"100%"}
    justifyContent={"space-between"}
  >
    <View flexDirection={"row"} width={"33%"}>
      <BluetoothIcon width={40} height={40} />
      <Text fontSize={"25px"} color={"black"}>
        100%
      </Text>
    </View>
    <View width={"33%"}>
      <SensorIcon width={40} height={40} />
    </View>
    <View width={"33%"} alignItm={"flex-end"}>
      <CloudIcon width={40} height={40} />
    </View>
  </View>;

export default Header;
