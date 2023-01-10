import React, { ComponentChildren, CSSProperties } from 'react'
import { StyleSheet, Text as NativeText } from 'react-native'

interface Props {
  children: ComponentChildren
}

export const P = ({ children }: Props) => (
  <NativeText style={styles.p}>{children}</NativeText>
)

export const H1 = ({ children }: Props) => (
  <NativeText style={styles.h1}>{children}</NativeText>
)

const styles = StyleSheet.create({
  p: {
    'color': 'white',
    'fontFamily': 'Roboto_400Regular',
    'fontSize': '18px',
  },

  h1: {
    'color': 'white',
    'fontFamily': 'Roboto_100Thin',
    'fontSize': '115px',
  }
})
