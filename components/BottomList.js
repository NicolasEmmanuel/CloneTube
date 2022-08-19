import {StyleSheet, Text, View, FlatList, ImageBackground, PushNotificationIOS} from 'react-native';
import React, {useState} from 'react';

import {Videos} from './constantes/Videos';
import BottomCards from './BottomCards';
import MidCards from './MidCards';

const BottomList = ({}) => {

  const [getVideo, getVideos] = useState(Videos) 

  const filtreVideo = (categorieId) => { console.log('Bye',categorieId) }

  return (
    <View style={styles.BottomListView}>

      <MidCards
      videoFilter = {filtreVideo}
      />

      <Text style={styles.BottomListText}>Video</Text>


      <FlatList
        style={styles.BottomListCards}
        verticale
        data={getVideo}
        renderItem={({item}) => <BottomCards item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default BottomList;

const styles = StyleSheet.create({
  BottomListView: {
    height: 470,
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
