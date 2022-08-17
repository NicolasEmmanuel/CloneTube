import {StyleSheet, Text, View, FlatList, ImageBackground} from 'react-native';
import React from 'react';

import {Videos} from './constantes/Videos';
import BottomCards from './BottomCards';

const BottomList = ({}) => {

  return (
    <View style={styles.BottomListView}>

      <Text style={styles.BottomListText}>Video</Text>

      <FlatList
        style={styles.BottomListCards}
        verticale
        data={Videos}
        renderItem={({item}) => <BottomCards item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default BottomList;

const styles = StyleSheet.create({
  BottomListView: {
    height: 360,
    backgroundColor: 'rgb(225,226,225)',
  },

  BottomListText: {
    height:30,
    fontSize: 15,
    fontWeight:'bold',
    marginTop: 10,
    marginLeft: 10,
    color: 'rgb(64,196,255)',
  },

  BottomListCards: {},
});
