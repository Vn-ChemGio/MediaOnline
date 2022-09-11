import React                                                           from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Colors }                                                      from "react-native-ui-lib";

const UPPER_HEADER_HEIGHT      = 32;
const UPPER_HEADER_PADDING_TOP = 4;
const LOWER_HEADER_HEIGHT      = 96;

const ScreenRadio = () => {
    return (
        <View style={ styles.container }>
            <StatusBar translucent backgroundColor="transparent" barStyle={"light-content"}/>
            <SafeAreaView>
                <View style={ styles.upperHeaderPlaceholder }/>
            </SafeAreaView>
            <SafeAreaView style={ styles.header }>
                <View style={ styles.upperHeader }></View>
                <View style={ styles.lowerHeader }></View>
            </SafeAreaView>

            <ScrollView
                showsVerticalScrollIndicator={ false }

                scrollEventThrottle={ 16 }>
                <View style={ styles.spaceForHeader }/>
                <View style={ styles.scrollViewContent }/>
            </ScrollView>
        </View>
    );
};

export default ScreenRadio;

const styles = StyleSheet.create( {
    container: {
        flex:           1,
    },
    upperHeaderPlaceholder: {
        height:     UPPER_HEADER_HEIGHT + UPPER_HEADER_PADDING_TOP,
        paddingTop: UPPER_HEADER_PADDING_TOP,
    },
    header:                 {
        position:        "absolute",
        width:           "100%",
        backgroundColor: Colors.primary,
    },
    upperHeader:            {
        flexDirection:     "row",
        alignItems:        "center",
        paddingHorizontal: 16,
        height:            UPPER_HEADER_HEIGHT + UPPER_HEADER_PADDING_TOP,
        paddingTop:        UPPER_HEADER_PADDING_TOP,
    },
    lowerHeader:            {
        flexDirection:     "row",
        justifyContent:    "space-between",
        alignItems:        "center",
        width:             "100%",
        height:            LOWER_HEADER_HEIGHT,
        paddingHorizontal: 16,
    },
    spaceForHeader:         {
        height: LOWER_HEADER_HEIGHT,
    },
    scrollViewContent:      {
        height:          1000,
        backgroundColor: "white",
    },
} )
