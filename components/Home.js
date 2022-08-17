import { StyleSheet, Text, View, } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react'
import { Icon } from "@rneui/themed";

import Header from './Header';
import Tendance from './Tendances';
import MidCards from './MidCards';
import BottomList from './BottomList';

const Home = () => {
  return (
    <View>
        <Header/>
        <Tendance/>
        <MidCards/>
        <BottomList/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})