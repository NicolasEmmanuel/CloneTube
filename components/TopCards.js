import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {Card, Image} from '@rneui/themed';

import { useNavigation } from '@react-navigation/native';

const TopCards = ({item}) => {

  const navigation = useNavigation();
  
  return (
    <View style={styles.TendenceView}>

        <Text style={styles.text}>{item.titre}</Text>
        
        <Image
              source={item.image}
              resizeMode="cover"
              style={styles.image}
              onPress={() => navigation.navigate('Detail',{
              item: item,
              })}/>
    </View>
    

  );
};

export default TopCards;

const styles = StyleSheet.create({
  
  TendenceView: {
   flexDirection:'column-reverse',
  },

  image: {
    height: 80,
    width: 150,
    marginLeft: 10,
  },

  text: {
    color: 'white',
    fontSize: 10,
    lineHeight: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    paddingLeft:5,
    backgroundColor: '#000000c0',
  },
});
