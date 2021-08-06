import styled from "styled-components/native";
import {dimensionStyles, paddingStyles} from "./Mixins";

export const Button = styled.TouchableOpacity`
  ${dimensionStyles};
  ${paddingStyles};
  text-align: center;
  ${({flex}) => flex && `flex: ${flex}`}
  ${({flexDirection}) => flexDirection && `flex-direction: ${flexDirection}`}
  ${({bc}) => bc && `background-color: ${bc}`}
`;