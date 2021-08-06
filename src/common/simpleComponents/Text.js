import styled from "styled-components/native";
import {borderStyles, marginStyles, paddingStyles} from "./Mixins";

export const Text = styled.Text`
  ${marginStyles};
  ${paddingStyles};
  ${borderStyles};
  text-align: center;
  ${({fontSize}) => fontSize && `font-size: ${fontSize}`};
  ${({color}) => color && `color: ${color}`};


`