import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from './Text'

export const CurrentWeather = () => {
  return (
    <View style={styles.outerContainer}>
      <Text>Clear. Feels like 58.</Text>
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
