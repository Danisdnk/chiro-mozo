import React from 'react'
import { FlatList, useWindowDimensions } from 'react-native'
import { ScrollView, View, Text, Image, StyleSheet, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native';
import { Canvas, rrect, Box, Fill, rect, BoxShadow, Group } from "@shopify/react-native-skia";
import CardGeneric from './CardGeneric';

export default ChiroCard = () => {
    const img = source = require('../assets/bg-card.png');
    const manos = source = require('../assets/manitos.png');
    const { width, height } = useWindowDimensions();

    return (
        <View className="flex-1 mt-24" style={{ backgroundColor: "#E5E9F2" }} >
            <Image
                style={{ width: width, position: 'absolute', resizeMode: 'cover', backgroundColor: "#E5E9F2" }}
                source={img}
            />
            <View style={styles.productBar} className=" flex flex-row py-2  bg-dark">

                {/* <View style={styles.productElement}> */}

                <View className="flex flex-row flex-shrink p-10 items-center justify-center">
                    <Text className="flex flex-wrap flex-shrink  bg-dark  text-2xl "  >
                        Carlos te atendío el 14 de octubre
                    </Text>
                </View>
                <View className="flex flex-row">
                    <Image style={styles.hands} source={manos} />
                </View>

            </View>

            {/* <View className="flex flex-row p-10 align-center justify-center">
 
              <CardGeneric yOffset={4} 
        //             xOffset={2}
        //             shadowcolor={'#171717'}
        //             shadowOpacity={1}
        //             shadowRadius={0.2}
        //             elevation={20}
        //             title={'carlos te atendio el 14 de octubre'} />

        //     </View>*/}

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
        top: -40,

    },

});