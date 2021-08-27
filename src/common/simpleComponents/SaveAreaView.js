import styled from "styled-components/native";

export const SafeAreaView = styled.SafeAreaView`
  background-color: white;
  height: 100%;
  width: 100%;
  ${({flex}) => flex && `flex: ${flex}`}
  ${({flexDirection}) => flexDirection && `flex-direction: ${flexDirection}`}
  ${({bc}) => bc && `background-color: ${bc}`}
`;
