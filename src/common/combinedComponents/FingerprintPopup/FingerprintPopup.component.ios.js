import React, { useEffect } from "react";
import { Alert } from "react-native";
import FingerprintScanner from "react-native-fingerprint-scanner";

const FingerprintPopup = (props) => {

  useEffect(() => FingerprintScanner
    .authenticate({ description: "Scan your fingerprint on the device scanner to continue" })
    .then(() => {
      props.handlePopupDismissed();
      Alert.alert("Authenticated successfully");
    })
    .catch((error) => {
      props.handlePopupDismissed();
      Alert.alert(error.message);
    }), []);

  return false;
};

export default FingerprintPopup;
