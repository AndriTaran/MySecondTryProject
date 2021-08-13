import React, { useEffect, useRef, useState } from "react";
import { Block, SafeAreaView, Text } from "../../common/simpleComponents/index";
import { ButtonGroup, Footer, Header, WarehouseInfo } from "../../common/combinedComponents/index";
import ScanningIcon from "../../assets/icons/scanningIcon.svg";

const BarcodeScreen = () => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("Pull the trigger to start reading");
  const [error, setError] = useState(false)
  const counterRef = useRef();
  counterRef.current = counter;

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    if (Math.floor(Math.random() * (max - min + 1)) + min > 70) {
      setError(true)
      setText("Invalid barcode");
    } else {
      setError(false)
      setCounter(currentValue => currentValue + 1);
      setText("Pull the trigger to stop reading");
    }
  }

  useEffect(() => {
    let timerId = setTimeout(function tick() {
      getRandomIntInclusive(1, 100);
      timerId = setTimeout(tick, 3000);
    }, 3000);
    return () => {
      clearTimeout(timerId);
    };
  }, []);


  return (
    <SafeAreaView>
      <Block flexDirection={"column"} flex={1}>
        <Header />
        <ButtonGroup text={"Summary"} />
        <WarehouseInfo number={246} label={9} storage={"2810-LAS VEGAS(TST)"} />
        <Block flex={1}
               justifyContent={'space-around'}>
          <Text fontSize={"130px"} color={'#013555'}>{counterRef.current}</Text>
          <ScanningIcon />
        </Block>
        <Footer err={error} text={text} />
      </Block>
    </SafeAreaView>
  );
};

export default BarcodeScreen;
