import React from 'react'
import { useWindowDimensions } from 'react-native'
import { View, StyleSheet } from 'react-native';
import CardGeneric from './ButtonBase';


export default ButtonBase = () => {
    const img = source = require('../assets/bg-card.png');
    const manos = source = require('../assets/manitos.png');
    const { width, height } = useWindowDimensions();

    return (
   
            <View className="flex flex-row p-10 align-center justify-center" width={width}>

                <CardGeneric yOffset={4}
                    shadowcolor={'#171717'}
                    shadowOpacity={'#FFFFFFF'}
                    shadowRadius={0.2} elevation={3}
                    shadowColorAndroid={4}
                    title={'carlos te atendio el 14 de octubre'}/>         
            </View>

    )
}



const styles = StyleSheet.create({

    text: {
        color: "black",
        fontSize: 20,
        lineHeight: 30,
        fontWeight: "bold",
    },

    hands: {
        height: 200,
        width: 200,
        position: 'relative',
        resizeMode: 'cover',
        flexDirection: 'row',
        marginStart: 0,
        top: -300,

    },

});