import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

import { Videos } from './constantes/Videos'


import TopCards from './TopCards'


const Tendance = () => {
  return (
    <View style={styles.tendanceView}>
        <Text style={styles.tendanceText}>Tendance</Text>
            <FlatList
                horizontal
                data={Videos}
                renderItem={({item})=><TopCards item={item}/>}
                keyExtractor={item => item.id}
                />
    </View>
  )
}

export default Tendance

const styles = StyleSheet.create({

    tendanceView:{
        height:150,
        backgroundColor:"rgb(1, 101, 255  )",
    },

    tendanceText:{
        fontSize: 15,
        fontWeight:"bold",
        marginTop:10,
        marginLeft: 10,
    },
    
})