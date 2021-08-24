import React from "react";
import { Marker } from "react-native-maps";
import { CalloutComponent, Text } from "../../common/simpleComponents/";
import { coordinate, initialRegion } from "../../assets/data";
import { GoogleMapView } from "../../common/combinedComponents/MapView/MapView";
import MarkerIcon from "../../assets/icons/pin-maps-and-location-svgrepo-com.svg";

const MapsScreen = () => (

    <GoogleMapView
      flex={1}
      initialRegion={initialRegion}
      mapPadding={{ left: 20, right: 10 }}
    >
      <Marker coordinate={coordinate}>
        <MarkerIcon height={40} width={40} fill={'#764ABC'}/>
        <CalloutComponent width={"100px"}>
          <Text>You are here 😄</Text>
        </CalloutComponent>
      </Marker>
    </GoogleMapView>
  );

export default MapsScreen;
