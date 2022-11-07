import * as React from 'react';
import { useState } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, Switch, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import Wallet from './Wallet';
import AlarmContainer from './AlarmContainer';
import { useColorScheme } from 'nativewind';
import ChiroCard from './ChiroCard';
import Modal from './Modal';


const Home = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    // <View className="flex-1 items-center justify center bg-gray-200">

    <SafeAreaView className="flex flex-auto" style={{ backgroundColor: "#E5E9F2" }}>

      <Modal yOffset={-5}
        xOffset={-5}
        shadowcolor={'#171717'}
        shadowOpacity={1}
        shadowRadius={0.9}
        elevation={10}
        title={'Retiro Exitoso jajant'}
        btnText={'Volve al inicio'}
       />

      {/* <ChiroCard className="w-full m-0 p-0 " /> */}
      {/* <StatusBar barStyle={colorScheme === "dark" ? "light-content" : "dark-content"} animated={true} />
         <Switch value={colorScheme === "dark"} onChange={toggleColorScheme}></Switch>
  
 */}


      {/* 
   </View> */}


    </SafeAreaView>
  );
}

export default Home;