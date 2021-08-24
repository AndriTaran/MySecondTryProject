import styled from "styled-components/native";
import { borderStyles, dimensionStyles, marginStyles, paddingStyles } from "./Mixins";

export const Text = styled.Text`
  ${dimensionStyles}
  ${marginStyles};
  ${paddingStyles};
  ${borderStyles};
  ${({fontSize}) => fontSize && `text-align: ${fontSize}`};
  text-align: ${props=> props.textAlign || 'center'};
  ${({fontSize}) => fontSize && `font-size: ${fontSize}`};
  ${({color}) => color && `color: ${color}`};
`
