import { StyleSheet, Text, View, } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react'
import { Icon } from "@rneui/themed";

import Header from './components/Header';
import Tendance from './components/Tendances';



const App = () => {
  return (
    <View>
        <Header/>
          <Tendance/>
          

    </View>
  )
}

export default App

const styles = StyleSheet.create({})