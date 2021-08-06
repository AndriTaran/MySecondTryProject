import styled from "styled-components/native";
import { RNCamera } from 'react-native-camera';

export const CameraView = styled(RNCamera)`
  ${({flex}) => flex && `flex: ${flex}`};
  justify-content: center;
  align-items: center;
`