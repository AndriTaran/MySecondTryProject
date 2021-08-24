import styled from "styled-components/native";
import { borderStyles, dimensionStyles, marginStyles, paddingStyles } from "./Mixins";

export const TextInput = styled.TextInput`
  ${dimensionStyles}
  ${marginStyles}
  ${paddingStyles}
  ${borderStyles}
  ${({flex}) => flex && `flex: ${Number(flex)}`}
  ${({flexDirection}) => flexDirection && `flex-direction: ${flexDirection}`}
  ${({bc}) => bc && `background-color: ${bc}`}
  ${({justifyContent}) => justifyContent && `justify-content: ${justifyContent}`}
  align-items: ${props => props.alignItm || 'center'};
  ${({fontSize}) => fontSize && `font-size: ${fontSize}`};
`;
