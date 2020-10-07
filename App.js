import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';

const WEATHER_API_KEY = '99fe1bd524c3185e---34af554bc5fd9532';

export default function App() {
  const {errorMessage, setErrorMessage} = useState(null);
  useEffect(()=> {
    load();
  }, []);
  async function load() {
    try {
      let { status } = await Location.requestPermissionsAsync();
      if(status !== 'granted') {
        setErrorMessage('Access to location is needed to run the app')
        return
      }
      const location = await Location.getCurrentPositionAsync();
      const {latitude, longitude} = location.coords;
      alert(`Latitude: ${latitude}, Longitude: ${longitude}`);
    } catch (error) {
      
    }
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
