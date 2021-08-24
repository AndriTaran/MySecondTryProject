import styled from "styled-components/native";
import MapView from "react-native-maps";

export const GoogleMapView = styled(MapView)`
  ${({ flex }) => flex && `flex: ${flex}`};
`
