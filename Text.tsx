import React, { ComponentChildren } from 'react'
import { StyleSheet, Text as NativeText } from 'react-native'
interface TextProps {
  children: ComponentChildren
}

export const Text = ({ children }: TextProps) => (
  <Text style={styles.base}>
    {children}
  </Text>
)

const styles = StyleSheet.create({
  base: {
    'fontFamily': 'Lato_400Regular',
  }
})
