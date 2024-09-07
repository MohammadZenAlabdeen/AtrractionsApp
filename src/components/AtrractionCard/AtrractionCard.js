import { View,Image, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import Styles from './Styles'

export default function AtrractionCard({img,title,subTitle,style,onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={[Styles.card, style]}>
        <Image style={Styles.img} source={{uri:img}}/>
      <Text style={Styles.title}>{title}</Text>
      <View style={Styles.subContainer}>
        <Image style={Styles.icon} source={require('./../../assets/location.png')}></Image>
      <Text style={Styles.subTitle}>{subTitle}</Text>
      </View>
    </TouchableOpacity>
  )
}