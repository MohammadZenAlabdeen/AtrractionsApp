import { FlatList, Image, SafeAreaView, Pressable, } from 'react-native'
import React from 'react'
import Styles from './Styles';

const Gallery = ({route,navigation}) => {
    const {allImages}=route?.params||{};
  return (
    <SafeAreaView style={Styles.container}>
        <FlatList
        data={allImages}
        showsVerticalScrollIndicator={false}
        renderItem={({item,index})=>(
          <Image
          source={{uri:item}}
          style={Styles.img}/>
          )}/>
      <Pressable
        style={Styles.buttons}
        hitSlop={8}
        onPress={()=>{navigation.goBack()}}
        >
          <Image
          source={require('./../../assets/back.png')}
          />
      </Pressable>
    </SafeAreaView>
  )
}

export default React.memo(Gallery)