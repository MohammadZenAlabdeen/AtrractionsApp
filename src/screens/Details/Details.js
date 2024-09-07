import { SafeAreaView, Text, ImageBackground, View,Image,Pressable, ScrollView } from 'react-native'
import { useEffect, useState } from 'react';
import React from 'react'
import Styles from './Styles';
import Share from 'react-native-share';
import ImgToBase64 from 'react-native-image-base64';
import RNImgToBase64 from 'react-native-image-base64';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
export default React.memo(function Details({route,navigation}) {
    const {item}=route?.params||{}
    const allImages=item?.images?.length? item.images:null;
    const slicedImages=item?.images?.length? item.images.slice(0,4):null;
    const [mainImage,setMainImage]=useState(item?.images?.length? item.images[0]:null);
    const rest=item?.images?.length-slicedImages?.length
    const [shareImg,setShareImg]=useState(null);
    const coordinates={
        latitude: item?.coordinates?.lat,
        longitude: item?.coordinates?.lon,
        latitudeDelta: 0.8,
        longitudeDelta: 0.8,
    }

    const onShare=async ()=>{
        try{
        const ext=mainImage.split(/[#?]/)[0].split('.').pop().trim();
        await RNImgToBase64.getBase64String(mainImage).then(base64String => setShareImg(base64String));
        Share.open({title:item?.name,message:"Hey!check out this amazing attraction!",url:'data:image/'+ext+';base64,'+shareImg})
        }catch(e){
        console.log("share error "+e);
        }}
  return (
    <SafeAreaView style={Styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>

        <ImageBackground style={Styles.mainImage} imageStyle={{borderRadius:20}} source={{uri:mainImage}}>
        <View style={Styles.buttonContainer}>
            <Pressable style={Styles.buttons} hitSlop={8} onPress={()=>{navigation.goBack()}}>
            <Image source={require('./../../assets/back.png')}></Image>
            </Pressable>
            <Pressable onPress={onShare} hitSlop={8} style={Styles.buttons}>
            <Image source={require('./../../assets/share.png')}></Image>
            </Pressable>
        </View>
        <View style={Styles.footer}>
            {slicedImages?.map((image,index)=>(   
                (slicedImages.length-1===index && item.images.length>slicedImages.length)?
                <Pressable onPress={()=>{navigation.navigate('Gallery',{allImages})}}
                style={Styles.lastImageContainer} key={index}>
                    <Image key={image} style={[Styles.miniImg]} source={{uri:image}}>
                    </Image>
                    <View style={Styles.lastImage}>
                    </View>
                    <Text style={Styles.lastImageText}>
                            {"+ "+rest}
                        </Text>
                </Pressable>:
                    <Pressable onPress={()=>{setMainImage(image)}} key={index}>
                    <Image key={image} style={Styles.miniImg} source={{uri:image}}></Image>
                    </Pressable>
            
            ))}
        </View>
        </ImageBackground>
        <View style={Styles.textContainer}>
            <View style={Styles.titleContainer}>
            <Text style={Styles.main}>{item?.name}</Text>
            <Text style={Styles.city}>{item?.city}</Text>
            </View>
            <Text style={Styles.main}>{item?.entry_price}</Text>
        </View>
        <View style={Styles.detailsContainer}>
            <View style={Styles.detailsContainerSecondary}>
            <View style={Styles.icon}>
                <Image  source={require('./../../assets/location-2.png')}></Image>
                </View>
                <Text style={Styles.detail}>{item?.address}</Text>
            </View>
            <View style={Styles.detailsContainerSecondary}>
                <View style={Styles.icon}>
                <Image  source={require('./../../assets/clock.png')}></Image>
                </View>
                <View style={Styles.detailsTextContainer}>
                    <Text style={Styles.detail}>OPEN</Text>
                    <Text style={Styles.detail}>{item?.opening_time}</Text>
                </View>
            </View>
        </View>
        <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={Styles.map}
       initialRegion={coordinates}
     >
        <Marker coordinate={coordinates} title={item?.name}>

        </Marker>
     </MapView>
     </ScrollView>

    </SafeAreaView>
  )
})