import styled from "styled-components/native";
import { dimensionStyles, marginStyles, paddingStyles } from "./Mixins";

export const ScrollView = styled.ScrollView`
  ${dimensionStyles}
  ${paddingStyles}
  ${marginStyles}
  ${({flex}) => flex && `flex: ${Number(flex)}`}
  ${({flexDirection}) => flexDirection && `flex-direction: ${flexDirection}`}
`;
