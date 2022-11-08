import React from 'react';
import { useWindowDimensions, TouchableOpacity } from 'react-native'

import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';


export default function Modal({ title,
    xOffset,
    yOffset, shadowcolor,
    shadowOpacity,
    shadowRadius,
    elevation,
}) {
    const cash = source = require('../assets/cash.png');
    const generateBoxShadowStyle = (
        xOffset,
        yOffset,
        shadowColorIos,
        shadowOpacity,
        shadowRadius,
        elevation,
        shadowColorAndroid,
    ) => {
        if (Platform.OS === 'ios') {
            styles.boxShadow = {
                shadowColor: shadowColorIos,
                shadowOffset: { width: xOffset, height: yOffset },
                shadowOpacity,
                shadowRadius,
            };
        } else if (Platform.OS === 'android') {
            styles.boxShadow = {
                elevation,
                shadowColor: shadowColorAndroid,
            };
        }
    };

    generateBoxShadowStyle(xOffset, yOffset, shadowcolor, shadowOpacity, shadowRadius, elevation, shadowcolor);


    return (
        <SafeAreaView className="flex flex-row justify-center items-center my-28 ">

            <View style={[styles.card, styles.boxShadow]} className="flex justify-center items-center p-5" >
                <View className="flex align-center justify-center ">
                    <View className=" flex flex-row justify-center align-center ">
                        <Text style={styles.heading}>{title}</Text>
                    </View>
                    <View className="flex flex-row align-center justify-center">
                        <Image style={styles.cash} source={cash} />
                    </View>
                    <TouchableOpacity style={[styles.btn, styles.boxShadow]} className=" flex flex-row justify-center align-center ">
                        <Text className=" flex flex-row text-xl p-5	" >volvé al inicio </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>


    )
}


const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        fontWeight: '600',
        marginBottom: 13,
        color: '#FC6868',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
    },

    btn: {
        backgroundColor: '#3D26C2',
        borderRadius: 10,
    },
    elevation: {
        elevation: 20,
        shadowColor: '#52006A',
    },


    cash: {
        height: 320,
        width: 320,
        position: 'relative',
        resizeMode: 'cover',
        flexDirection: 'column',
        marginStart: 00,

    },
});
