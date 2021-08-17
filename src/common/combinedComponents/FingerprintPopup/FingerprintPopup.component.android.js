import React, { useEffect, useState } from "react";
import {
   Alert,
   Text,
   TouchableOpacity,
   View,
   Platform,
} from "react-native";
import FingerprintScanner from "react-native-fingerprint-scanner";


const BiometricPopup = ({ handlePopupDismissed }) => {

   const [errorMessageLegacy, setErrorMessageLegacy] = useState(null);
   const [biometricLegacy, setBiometricLegacy] = useState(null);
   const [description, setDescription] = useState(null);

   useEffect(() => {
      requiresLegacyAuthentication() ? authLegacy() : authCurrent();
      return () => {
         FingerprintScanner.release()};
   }, [authCurrent, authLegacy]);


   const requiresLegacyAuthentication = () => {
      return Platform.Version < 23;
   };

   const authCurrent = () => {
      FingerprintScanner
         .authenticate({ description: description || "Log in with Biometrics" })
         .then(() => {
            Alert.alert("Fingerprint Authentication", "Authenticated successfully");
         })
         .catch((error) => {
            Alert.alert("Fingerprint Authentication", error.message);
            handlePopupDismissed()
         });
   };

   const authLegacy = () => {
      FingerprintScanner
         .authenticate({ onAttempt: handleAuthenticationAttemptedLegacy })
         .then(() => {
            handlePopupDismissed();
            Alert.alert("Fingerprint Authentication", "Authenticated successfully");
         })
         .catch((error) => {
            setErrorMessageLegacy(error.message);
            setBiometricLegacy(error.biometric);
            setDescription(description.shake)
         });
   };

   const handleAuthenticationAttemptedLegacy = (error) => {
      setErrorMessageLegacy(error.message);
      setDescription(description.shake)
   };

   if ( !requiresLegacyAuthentication()) {
      return null
   }
   return (
         <View>
            <View>
               <TouchableOpacity
                  onPress={handlePopupDismissed}
               >
                  <Text>
                     BACK TO MAIN
                  </Text>
               </TouchableOpacity>
            </View>
         </View>
   );


};


export default BiometricPopup;
