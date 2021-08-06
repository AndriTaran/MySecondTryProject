import styled from "styled-components/native";
import Animated from "react-native-reanimated";


export const DeleteButton = styled(Animated.View)`
  flex: 1;
  background-color: red;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  ${({opacity}) => opacity && `opacity: ${opacity}`};
`