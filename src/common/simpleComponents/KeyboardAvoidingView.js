import styled from "styled-components/native";
import { dimensionStyles, marginStyles, paddingStyles } from "./Mixins";

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  ${dimensionStyles}
  ${paddingStyles}
  ${marginStyles}
  ${({flex}) => flex && `flex: ${Number(flex)}`}
`;
