import styled from "styled-components/native";
import {borderStyles, dimensionStyles, marginStyles, paddingStyles} from "./Mixins";

export const View = styled.View`
  ${dimensionStyles}
  ${marginStyles}
  ${paddingStyles}
  ${borderStyles}
  ${({flex}) => flex && `flex: ${Number(flex)}`}
  ${({border}) => border && `border: ${border}`}
  ${({flexDirection}) => flexDirection && `flex-direction: ${flexDirection}`}
  ${({bc}) => bc && `background-color: ${bc}`}
  ${({justifyContent}) => justifyContent && `justify-content: ${justifyContent}`}
  align-items: ${props => props.alignItm || 'center'};
  ${({position}) => position && `position: ${position}`}
  ${({top}) => top && `top: ${top}`}
  ${({left}) => left && `left: ${left}`}
  ${({right}) => right && `right: ${right}`}
`;
