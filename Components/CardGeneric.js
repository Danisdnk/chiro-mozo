import React, { useEffect } from 'react';
import { FlatList, useWindowDimensions } from 'react-native'

import { ScrollView, View, Text, Image, StyleSheet, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native';

export default function CardGeneric({ title,
    xOffset,
    yOffset, shadowcolor,
    shadowOpacity,
    shadowRadius,
    elevation,
}) {
    const img = source = require('../assets/bg-card.png');
    const manos = source = require('../assets/manitos.png');
    const { width, height } = useWindowDimensions();
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

        <View style={[styles.card, styles.boxShadow]}>
            <View>
                <Text style={styles.heading}>
                    {title}
                </Text>
            </View>
            <Text style={styles.heading}>{title}</Text>

        </View>


    )
}


const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 13,
        color: 'black'
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 45,
        paddingHorizontal: 25,
        width: '100%',
        marginVertical: 10,
    },
    elevation: {
        elevation: 20,
        shadowColor: '#52006A',
    },

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
        top: -40,

    },
});

{/* Modficacion de la chirocard en curso <View style={[styles.card, styles.boxShadow]} >

                <View style={styles.heading} className="flex flex-row flex-shrink p-10 items-center justify-center">
                    <Text className="flex flex-wrap flex-shrink  bg-dark  text-2xl "  >
                        {title}
                    </Text>
                </View>
                <View className="flex flex-row">
                    <Image style={styles.hands} source={manos} />
                </View>
                <Text style={styles.heading}>{title}</Text>

            </View> */}



