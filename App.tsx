import { StatusBar } from "expo-status-bar"
import React, { useState } from 'react';
import ReactMapGL, { Marker } from "react-map-gl";
import { StyleSheet, Text, View } from "react-native";
import {mockData} from "./mockData.tsx";
import { Icon } from 'react-native-elements'
import InfoPanel from './components/InfoPanel.js'
import MapButton from './components/MapButton.js';


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


function handleChange() {
  setSelectedParkingSpot(null);
}
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
onClick={e => {
e.preventDefault();
setSelectedParkingSpot(parkingSpot);
}}
/>



    </Marker>

    ))}


    {selectedParkingSpot ? (
      <InfoPanel
      data={selectedParkingSpot}
      onClose={handleChange}/>
      ) : null}
      <div
                style={{
                  position: 'absolute',
                  zIndex: 5,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  backgroundColor: '#faf6e0',
                  boxShadow: '0 2px 15px 0 rgba(69,36,28,0.40)',
                }}
              >
                <MapButton

                >
                <Icon
                type='font-awesome-5'
                name='map'
                />
                  <span>Map</span>
                </MapButton>
                <div
                  style={{
                    alignSelf: 'stretch',
                    width: 1,
                    borderRight: 'solid 1px #45241c21',
                  }}
                ></div>
                <MapButton >
                <Icon
                type='font-awesome-5'
                name='user'
                />
                  <span>Profile</span>
                </MapButton>
              </div>
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
