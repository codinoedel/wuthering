import React from 'react'

import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import {
  useFonts,
  Lato_400Regular
} from '@expo-google-fonts/lato'


import { CurrentWeather } from './CurrentWeather'
import { configureStore } from './store'

export default function App() {
  let [ fontsLoaded ] = useFonts({
    Lato_400Regular
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Provider store={configureStore()}>
      <View style={styles.container}>
        <CurrentWeather />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#318DCF',
    minHeight: '100%',
  },
})
