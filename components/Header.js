import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {

  const navigation = useNavigation();
  
  return (
    <View style={styles.header}>
      <Icon
        style={styles.headerIconMenu}
        name="th-large"
        type=""
        size={20}
        color="white"
      />

      <Text style={styles.headerText}>CloneTube</Text>

      <Icon
        style={styles.headerIconSearch}
        name="search"
        type=""
        size={20}
        color="white"
      />

      <Icon
        style={styles.headerIconEllip}
        name="ellipsis-v"
        type=""
        size={20}
        color="white"
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 55,
    flexDirection: 'row',
    
    backgroundColor: 'rgb(64,196,255)',
  },

  headerIconMenu: {
    marginLeft: 10,
    marginTop: 15,
  },

  headerText: {
    fontWeight:'800',
    fontSize:15,
    marginTop: 15,
    marginLeft:10,
    color:'rgb(225,226,225)',
  },

  headerIconSearch: {
    marginRight: 10,
    marginTop: 15,
    marginLeft:250,
  },

  headerIconEllip: {
    marginRight: 10,
    marginTop: 15,

  },
});
