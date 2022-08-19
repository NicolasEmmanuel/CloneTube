import { StyleSheet, Text, View, } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react'
import { Icon } from "@rneui/themed";
import { useNavigation } from '@react-navigation/native';

import Header from './Header';
import Tendance from './Tendances';
import MidCards from './MidCards';
import BottomList from './BottomList';
import Detail from './Detail';
import TopCards from './TopCards';

const Home = () => {

  const navigation = useNavigation();

  return (
    <View>
        <Header navigation={navigation}/>
        <Tendance/>
        <BottomList/>
        
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})