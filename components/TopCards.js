import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React from 'react';
import {Card} from '@rneui/themed';

const TopCards = ({item}) => {
  return (
    <ImageBackground
          source={item.image}
          resizeMode="cover"
          style={styles.image}>

      <Text style={styles.text}>{item.titre}</Text>
      
    </ImageBackground>
  );
};

export default TopCards;

const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 150,
    marginLeft: 15,
  },

  text: {
    color: 'white',
    fontSize: 10,
    lineHeight: 20,
    fontWeight: 'bold',
    marginLeft: 8,
    backgroundColor: '#000000c0',
  },
});
