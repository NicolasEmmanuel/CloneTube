import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import {Image} from '@rneui/themed';
import { useNavigation, } from '@react-navigation/native';

const BottomCards = ({item}) => {

  const navigation = useNavigation();
    
  return (
    <View style={styles.ViewBottomCards}>

          <Text style={styles.text}>{item.titre}</Text>

           <Image
          source={item.image}
          resizeMode="cover"
          style={styles.image}
          onPress={() => navigation.navigate('Detail',{
            item: item,
          })}/>

    </View>
   
  )
}

export default BottomCards

const styles = StyleSheet.create({

  ViewBottomCards:{
 
  },

  image: {
    height: 280,
    width: 390,
    marginLeft: 10,
    marginBottom:10,
  },
      
  text: {
    color: 'white',
    backgroundColor: '#000000c0',
    marginLeft:10,
    paddingLeft:10,
    width:390,
  },
})