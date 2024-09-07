import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Styles from './Styles'

export default function Title({text,style}) {
  return (
    <Text style={[Styles.title,style]}>{text}</Text>
  )
}