import React, { useEffect, useState } from "react";
import FingerprintScanner from "react-native-fingerprint-scanner";
import { AppState } from "react-native";
import { Button, Text } from "../../simpleComponents";
import FingerprintPopup from "../FingerprintPopup/FingerprintPopup.component";
import I18n from "../../../assets/locales/i18n";

const FingerprintButton = () => {
  const [errorMessage, setErrorMessage] = useState();
  const [biometric, setBiometric] = useState();
  const [popupShowed, setPopupShowed] = useState(false);
  const [appStateVisible, setAppStateVisible] = useState(AppState.currentState);

  const handleFingerprintShowed = () => setPopupShowed(true);

  const handleFingerprintDismissed = () => setPopupShowed(false);

  const detectFingerprintAvailable = () =>
    FingerprintScanner
      .isSensorAvailable()
      .catch(error => {
        setErrorMessage(error.message);
        setBiometric(error.biometric);
      });

  const handleAppStateChange = (nextAppState) => {

    if (appStateVisible.match(/inactive|background/) && nextAppState === "active") {
      FingerprintScanner.release();
      detectFingerprintAvailable().then(r => console.warn("fingerprint scanner is not available", r));
    }
    setAppStateVisible(nextAppState);
  };
  useEffect(() => {
    AppState.addEventListener("change", handleAppStateChange);
    return () => AppState.removeEventListener("change", handleAppStateChange);
  }, [handleAppStateChange]);

  return (
    <Button
      mt={"10px"}
      color={"black"}
      height={"30px"}
      justifyContent={"center"}
      onPress={handleFingerprintShowed}
    >
      <Text
        fontSize={"20px"}
        color={"blue"}
      >
        {I18n.t("logWithBiometric")}
      </Text>
      {
        popupShowed && (<FingerprintPopup handlePopupDismissed={handleFingerprintDismissed} />)
      }
      {
        errorMessage && (<Text>{errorMessage} {biometric}</Text>)
      }
    </Button>
  );
};

export default FingerprintButton;
