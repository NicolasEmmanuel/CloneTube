import { StyleSheet, Text, View, Image,  } from 'react-native'
import React from 'react'
import { Card } from "@rneui/themed";






const TopCards = ({item}) => {
   
  return (
    <View>
        
            <Text style={styles.TopSCardsview}></Text>

                <Card style={styles.TopSCardsTitle}>
                    <Card.Title>{item.titre}</Card.Title>
                
                    <Image
                        style={styles.imageTopCards}
                        source={{uri:'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',}}
                        />
                
                </Card>
        
      </View>
      
    
  )
}

export default TopCards

const styles = StyleSheet.create({

    TopCardsview:{
     width: 80,
    height: 60,
    paddingBottom: 20,
  },
  
    imageTopCards: {
   
  },

  
})