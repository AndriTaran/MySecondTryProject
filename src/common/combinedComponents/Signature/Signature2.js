import styled from "styled-components/native";
import SignatureCapture from 'react-native-signature-capture';
import { borderStyles, dimensionStyles, marginStyles, paddingStyles } from "../../simpleComponents/Mixins";

export const Signature2 = styled(SignatureCapture)`
  ${dimensionStyles}
  ${marginStyles}
  ${paddingStyles}
  ${borderStyles}
  ${({flex}) => flex && `flex: ${Number(flex)}`}
  ${({justifyContent}) => justifyContent && `justify-content: ${justifyContent}`}
`
