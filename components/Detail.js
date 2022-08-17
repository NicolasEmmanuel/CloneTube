import { StyleSheet, Text, View, } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react'
import { Icon } from "@rneui/themed";
import { useNavigation } from '@react-navigation/native';

const Detail = ({route}) => {

    const navigation = useNavigation();

    const { item } = route.params;
    console.log(item)

  return (
    <View style={styles.header}>
      
        <Icon
          style={styles.detailIconMenu}
          name="undo"
          type=""
          size={35}
          color="white"
          onPress={() => navigation.navigate('Home')}/>

          <Text style={styles.detailText}>{item.titre}</Text>

    </View>
  )
}

export default Detail

const styles = StyleSheet.create({

  header: {
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(64,196,255)',
  },

  detailIconMenu:{
    marginLeft: 10,
    marginTop: 10,
  },

  detailText:{
    marginRight:165,
    marginTop:15,
    fontSize:25,
    color:'white',
  },
  
})