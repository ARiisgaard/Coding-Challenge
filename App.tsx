import { StatusBar } from "expo-status-bar"
import React, { useState } from 'react';
import ReactMapGL, { Marker } from "react-map-gl";
import { StyleSheet, Text, View } from "react-native";
import {mockData} from "./mockData.tsx";
import { Icon } from 'react-native-elements'

export default function App() {

  const [viewport, setViewport] = useState({
  latitude: 55.66034382268525,
  longitude: 12.610791490293405,
  width: "100vw",
  height: "100vh",
  zoom: 10
});
// This state is used for keeping track of which parking spot have been clicked
const [selectedParkingSpot, setSelectedParkingSpot] = useState(null);
  return (
    <View style={styles.container}>
    <ReactMapGL {...viewport}
  mapboxApiAccessToken="pk.eyJ1IjoiYXJpaXNnYWFyZCIsImEiOiJjam80NnNydW4xMWRiM2xtb2t4ZzZ6Y3Z0In0.zl26mr2ggKw3ywWTcvmsnA"
  mapStyle="mapbox://styles/ariisgaard/ckg2esi040nhv1apgiqlqlmor"
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
  >
  {mockData.map((parkingSpot) => (
      <Marker
      key={parkingSpot.id}
      latitude={parkingSpot.latitude}
      longitude={parkingSpot.longitude}



>
<Icon
type='font-awesome-5'
name='parking'
color='#517fa4'
/>


      </Marker>
    ))}
  </ReactMapGL>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
