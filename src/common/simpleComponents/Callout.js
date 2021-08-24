import styled from "styled-components/native";
import { dimensionStyles, marginStyles, paddingStyles, borderStyles } from "./Mixins";
import { Callout } from "react-native-maps";

export const CalloutComponent = styled(Callout)`
background-color: #00FA99;
  ${borderStyles}
  ${dimensionStyles}
  ${marginStyles}
  
`
