import styled from "styled-components/native";
import { borderStyles, dimensionStyles, marginStyles, paddingStyles } from "./Mixins";

export const Button = styled.TouchableOpacity`
  ${dimensionStyles};
  ${paddingStyles};
  ${marginStyles};
  ${borderStyles};
  text-align: center;
  ${({flex}) => flex && `flex: ${flex}`}
  ${({flexDirection}) => flexDirection && `flex-direction: ${flexDirection}`}
  ${({bc}) => bc && `background-color: ${bc}`}
  ${({justifyContent}) => justifyContent && `justify-content: ${justifyContent}`}
  align-items: ${props => props.alignItm || 'center'};
`;
