import React from "react";
import MapView, { Marker } from "react-native-maps";
import { Text } from "react-native";
import CustomMarker from "./components/CustomMarker";
import { CalloutComponent } from "../../common/simpleComponents/";

const coordinate = {
  latitude: 47.842677,
  longitude: 35.132220,
};

const MapsScreen = () => {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 47.842677,
        longitude: 35.132220,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
      mapPadding={{left: 20, right:10}}
    >
      <Marker coordinate={coordinate}
              pinColor={"#764ABC"}
      >
        <CustomMarker />
        <CalloutComponent width={'100px'}>
          <Text>You are here 😄</Text>
        </CalloutComponent>
      </Marker>
    </MapView>
  );
};

export default MapsScreen;
