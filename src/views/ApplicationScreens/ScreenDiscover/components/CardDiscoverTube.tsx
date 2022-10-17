import React                      from "react";
import { StyleSheet, Text, View } from "react-native";

const CardDiscoverTube = () => {
    return (
        <View style={ styles.container }>
            <Text>CardDiscoverTube</Text>
        </View>
    );
};

export default CardDiscoverTube;

const styles = StyleSheet.create( {
    container: {
        flex:           1,
        justifyContent: "center",
        alignItems:     "center"
    }
} )