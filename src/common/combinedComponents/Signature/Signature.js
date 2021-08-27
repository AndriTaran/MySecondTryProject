import styled from "styled-components/native";
import SignatureScreen from "react-native-signature-canvas";
import { borderStyles, dimensionStyles, marginStyles, paddingStyles } from "../../simpleComponents/Mixins";

export const Signature = styled(SignatureScreen)`
  ${dimensionStyles}
  ${marginStyles}
  ${paddingStyles}
  ${borderStyles}
`
