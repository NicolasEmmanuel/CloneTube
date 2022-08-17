import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import React from 'react';
import {Icon} from '@rneui/themed';

const Header = () => {
  return (
    <View style={styles.header}>
      <Icon
        style={styles.headerIconMenu}
        name="menu"
        type=""
        size={35}
        color="white"
      />

      <Icon
        style={styles.headerIconSearch}
        name="search"
        type=""
        size={35}
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
    justifyContent: 'space-between',
    backgroundColor: 'rgb(0, 60, 153  )',
  },

  headerIconMenu: {
    marginLeft: 10,
    marginTop: 10,
  },

  headerIconSearch: {
    marginRight: 10,
    marginTop: 10,
  },
});
