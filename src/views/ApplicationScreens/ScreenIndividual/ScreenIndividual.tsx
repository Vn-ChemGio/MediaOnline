import React                      from "react";
import { StyleSheet, Text, View } from "react-native";

const ScreenIndividual = () => {
    return (
        <View style={ styles.container }>
            <Text>ScreenIndividual</Text>
        </View>
    );
};

export default ScreenIndividual;

const styles = StyleSheet.create( {
    container: {
        flex:           1,
        justifyContent: "center",
        alignItems:     "center"
    }
} )
