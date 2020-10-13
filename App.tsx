import { StatusBar } from "expo-status-bar"
import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { StyleSheet, Text, View } from "react-native"

export default function App() {

  const [viewport, setViewport] = useState({
  latitude: 55.66034382268525,
  longitude: 12.610791490293405,
  width: "100vw",
  height: "100vh",
  zoom: 10
});

  return (
    <View style={styles.container}>
    <ReactMapGL {...viewport}
  mapboxApiAccessToken="pk.eyJ1IjoiYXJpaXNnYWFyZCIsImEiOiJjam80NnNydW4xMWRiM2xtb2t4ZzZ6Y3Z0In0.zl26mr2ggKw3ywWTcvmsnA"
  mapStyle="mapbox://styles/ariisgaard/ckg2esi040nhv1apgiqlqlmor"
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
  >
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
