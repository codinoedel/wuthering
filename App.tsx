import React from 'react'

import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import {
  useFonts,
  Roboto_100Thin,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'


import { CurrentWeather } from './CurrentWeather'
import { Initializer } from './Initializer'
import { configureStore } from './store'

export default function App() {
  let [ fontsLoaded ] = useFonts({
    Roboto_100Thin,
    Roboto_400Regular,
    Roboto_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Provider store={configureStore()}>
      <Initializer>
        <View style={styles.container}>
          <CurrentWeather />
          <StatusBar style="auto" />
        </View>
      </Initializer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#318DCF',
    minHeight: '100%',
  },
})
