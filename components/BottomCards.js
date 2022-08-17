import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

const BottomCards = ({item}) => {
    console.log(item.titre)
  return (
    <ImageBackground
          source={item.image}
          resizeMode="cover"
          style={styles.image}>

      <Text style={styles.text}>{item.titre}</Text>
      
    </ImageBackground>
  )
}

export default BottomCards

const styles = StyleSheet.create({

        image: {
          height: 200,
          width: 300,
          marginLeft: 50,
          marginTop:20,
        },
      
        text: {
          color: 'white',
          fontSize: 15,
          lineHeight: 20,
          fontWeight: 'bold',
          marginLeft: 8,
          backgroundColor: '#000000c0',
          marginTop:5,
        },
})