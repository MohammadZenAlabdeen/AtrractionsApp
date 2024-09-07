import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from '../../components/Title/Title'
import Styles from './Styles'
import Categories from '../../components/Categories/Categories'
import AtrractionCard from '../../components/AtrractionCard/AtrractionCard'
import AtrractionsJson from './../../data/Atrractions.json'
import CategoriesJson from './../../data/Categories.json'
export default React.memo(function Home({navigation}) {
  const All='ALL';
  const [selected,setSelected]=useState(All);
  const [atrractions,setAtrractions]=useState([])
  const [cat,setCat]=useState([])
  useEffect(()=>{
    setAtrractions(AtrractionsJson);
    setCat(CategoriesJson)
  },[])
  useEffect(()=>{
    if(selected===All){
      setAtrractions(AtrractionsJson)
    }else{
      const filtered=AtrractionsJson?.filter(item=>item?.categories.includes(selected));
      setAtrractions(filtered)
    }
  },[selected])

  return (
    <SafeAreaView style={Styles.container}> 
      <FlatList
      data={atrractions}
      showsVerticalScrollIndicator={false}
      style={{flexGrow:1}}
      numColumns={2}
      ListEmptyComponent={(<Text style={Styles.empty}>No item matches the selected category</Text>)}
      ListHeaderComponent={(<>
      <View style={{margin:32}}>
      <Title text={'Where do'} style={{fontWeight:'normal'}}></Title>
      <Title text={'you want to go?'}></Title>
      <Title text={'Explore Attractions'} style={Styles.subtitle}></Title>
      </View>
      <>
      <Categories selectedCategory={selected} onCategoryPress={setSelected} categories={[All,...cat]}></Categories>
      </>
     
      </>)}
      renderItem={({item,index})=>(
        <AtrractionCard
        style={index%2===0?{marginLeft:32,marginRight:12}:{marginRight:32}}
        key={item.id}
        title={item.name}
        onPress={()=>{navigation.navigate('Details',{item})}}
        subTitle={item.city}
        img={item.images?.length? item.images[0]:null}
        >
        </AtrractionCard>
  )}>
  </FlatList>
</SafeAreaView>
)})