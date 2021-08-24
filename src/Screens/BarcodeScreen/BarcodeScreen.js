import React, { useEffect, useState } from "react";
import { View, SafeAreaView, Text } from "../../common/simpleComponents/index";
import { ButtonGroup, Footer, Header, WarehouseInfo } from "../../common/combinedComponents/index";
import ScanningIcon from "../../assets/icons/scanningIcon.svg";

const BarcodeScreen = () => {

  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("Pull the trigger to start reading");
  const [error, setError] = useState(false);

  const getRandomIntInclusive = () => {
    const randomIsTrue = Math.random() < 0.7;
    if (randomIsTrue) {
      setError(true);
      setText("Invalid barcode");
    } else {
      setError(false);
      setCounter(currentValue => currentValue + 1);
      setText("Pull the trigger to stop reading");
    }
  };

  useEffect(() => {
    let timerId = setTimeout(function tick() {
      getRandomIntInclusive();
      timerId = setTimeout(tick, 3000);
    }, 3000);
  }, []);

  return (
    <SafeAreaView>
      <View flexDirection={"column"} flex={1}>
        <Header />
        <ButtonGroup text={"Summary"} />
        <WarehouseInfo number={246} label={9} storage={"2810-LAS VEGAS(TST)"} />
        <View flex={1} justifyContent={"space-around"}>
          {text !== "Pull the trigger to start reading"
            ?
            <>
              <Text fontSize={"130px"} color={"#013555"}>{counter}</Text>
              <View justifyContent={"space-around"}>
                <ScanningIcon />
                <Text fontSize={"20px"} pt={"15px"} color={"grey"}>Reading RFID...</Text>
              </View>
            </>
            :
            null
          }
        </View>
        <Footer err={error} text={text} />
      </View>
    </SafeAreaView>
  );
};

export default BarcodeScreen;
