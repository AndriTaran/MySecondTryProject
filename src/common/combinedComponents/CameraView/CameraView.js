import styled from "styled-components/native";
import { RNCamera } from "react-native-camera";
import { dimensionStyles } from "../../simpleComponents/Mixins";

export const CameraView = styled(RNCamera)`
  ${dimensionStyles}
  ${({ flex }) => flex && `flex: ${flex}`};
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent}`}
  align-items: ${props => props.alignItm || "center"};
`;
