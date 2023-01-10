import React from 'react'
import { StyleSheet, View } from 'react-native'

import { H1, P } from './Text'
import { useAppSelector } from './hooks'
import {
  getFeelsLike,
  getTemp,
  getWeatherDescription
} from './store/current/selectors'

export const CurrentWeather = () => {
  const feelsLike = useAppSelector(getFeelsLike)
  const temp = useAppSelector(getTemp)
  const weather = useAppSelector(getWeatherDescription)

  return (
    <View style={styles.outerContainer}>
      <H1>{ temp }</H1>
      <P>{ weather }. Feels like { feelsLike }.</P>
    </View>
  )
}

const styles = StyleSheet.create({
  outerContainer: {
    paddingTop: '58px',
    paddingLeft: '44px',
    paddingRight: '44px',
    paddingBottom: '58px'
  },
})
