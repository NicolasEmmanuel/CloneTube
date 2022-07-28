import { StyleSheet, Text, View, } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react'
import { Icon } from "@rneui/themed";


const Header = () => {
  return (
    <View style={styles.header}>
        <Icon
            name='menu'
            type=''
            size={35}
            /> 

        <Icon
            name='search'
            type=''
            size={35}
            /> 

    </View>
  )
}

export default Header

const styles = StyleSheet.create({

    header:{
      
        height: 55,
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"rgb(189, 205, 231 )",

    }
})