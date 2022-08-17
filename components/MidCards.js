import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

import {Button} from '@rneui/themed';
import {Categories} from './constantes/Categories';


const MidCards = () => {
  return (
    <View style={styles.MidCardsView}>
      <Text style={styles.MidCardsText}>Categories</Text>

      <FlatList
        horizontal
        data={Categories}
        renderItem={({item}) => (

          <Button
              title={item.titre}
              buttonStyle={{
                backgroundColor: 'rgba(255, 193, 7, 1)',
                height:40,
                width:100,
                borderRadius: 30,
                marginLeft: 35,
                marginTop: 20,
            }}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default MidCards;

const styles = StyleSheet.create({

  MidCardsText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
    color: 'white',
  },

  MidCardsView: {
    height: 110,
    backgroundColor: 'rgb(0, 60, 153  )',
  },

  
});
