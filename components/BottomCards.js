import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import {Image} from '@rneui/themed';
import { useNavigation, } from '@react-navigation/native';

const BottomCards = ({item}) => {

  const navigation = useNavigation();
    
  return (
    <View>

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

        image: {
          height: 180,
          width: 300,
          marginLeft: 50,
          marginBottom:10,
        },
      
        text: {
          color: 'white',
          backgroundColor: '#000000c0',
          marginLeft:50,
          width:300,
        },
})