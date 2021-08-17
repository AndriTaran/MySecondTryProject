import React, {useEffect, useRef, useState} from 'react';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import {AppState} from 'react-native';
import {Button, Text} from '../../simpleComponents';
import FingerprintPopup from '../FingerprintPopup/FingerprintPopup.component';

const FingerprintButton = () => {
  const appState = useRef(AppState.currentState);
  const [errorMessage, setErrorMessage] = useState();
   const [biometric, setBiometric] = useState();
   const [popupShowed, setPopupShowed] = useState(false);
   const [appStateVisible, setAppStateVisible] = useState(appState.current);

   useEffect(() => {
      AppState.addEventListener('change', handleAppStateChange);
      detectFingerprintAvailable();
      return () => AppState.removeEventListener('change', handleAppStateChange);
   }, [handleAppStateChange]);

   const handleFingerprintShowed = () => {
      setPopupShowed(true);
   };

   const handleFingerprintDismissed = () => {
      setPopupShowed(false);
   };

   const detectFingerprintAvailable = () => {
      FingerprintScanner
         .isSensorAvailable()
         .catch(error => {
            setErrorMessage(error.message);
            setBiometric(error.biometric);
         });
   };

   const handleAppStateChange = (nextAppState) => {
      if (appStateVisible.match(/inactive|background/) && nextAppState === 'active') {
         FingerprintScanner.release();
         detectFingerprintAvailable();
      }
      setAppStateVisible(nextAppState);
   };

   return (
      <Button
         mt={'10px'}
         color={'black'}
         height={'30px'}
         justifyContent={'center'}
         onPress={handleFingerprintShowed}
      >
         <Text
            fontSize={'20px'}
            color={'blue'}
         >Login with biometric
         </Text>
         {
            popupShowed && (
               <FingerprintPopup
                  handlePopupDismissed={handleFingerprintDismissed}
               />
            )
         }
         {errorMessage && (
            <Text>
               {errorMessage} {biometric}
            </Text>
         )}
      </Button>
   );
};

export default FingerprintButton;
