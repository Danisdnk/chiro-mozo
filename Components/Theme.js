import {StyleSheet } from 'react-native';

export default generateBoxShadowStyle = (
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
    elevation: {
        elevation: 20,
        shadowColor: '#52006A',
    },

    cash_btn: {
        backgroundColor: '#3D26C2',
        borderRadius: 10,
    },
    cash: {
        height: 320,
        width: 320,
        position: 'relative',
        resizeMode: 'cover',
        flexDirection: 'column',
        marginStart: 0,
    },
});
