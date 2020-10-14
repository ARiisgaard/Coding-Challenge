import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Map from "./components/Map"

import { Icon } from 'react-native-elements'
import MapButton from './components/MapButton.js';
import ProfileScreen from "./components/ProfileScreen"

// Here the different screens for the app get added
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
            />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Navigator>
        </NavigationContainer>
  );
};

//Adding the map and buttons to navigate to profile
const HomeScreen = ({ navigation }) => {
  return (
    <div>
    <Map/>
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
              <MapButton
              onClick={() => navigation.navigate('Profile')}>
              <Icon
              type='font-awesome-5'
              name='user'
              />
                <span>Profile</span>
              </MapButton>
            </div>
    </div>
  );
};



export default App;