import styled from "styled-components/native";
import Modal from "react-native-modal";
import { borderStyles, dimensionStyles, marginStyles, paddingStyles } from "../../../simpleComponents/Mixins";

export const ModalComponent = styled(Modal)`
  ${dimensionStyles}
  ${marginStyles}
  ${paddingStyles}
  ${borderStyles}
  ${({justifyContent}) => justifyContent && `justify-content: ${justifyContent}`}
  align-items: ${props => props.alignItm || 'center'};
  ${({bc}) => bc && `background-color: ${bc}`}
`
