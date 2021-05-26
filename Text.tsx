import React, { ComponentChildren } from 'react'
import { StyleSheet, Text as NativeText } from 'react-native'

interface TextProps {
  children: ComponentChildren
}

export const Text = ({ children }: TextProps) => (
  <NativeText style={styles.base}>
    {children}
  </NativeText>
)

const styles = StyleSheet.create({
  base: {
    'fontFamily': 'Lato_400Regular',
  }
})
