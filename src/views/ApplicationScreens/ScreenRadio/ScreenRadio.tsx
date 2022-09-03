import React                      from "react";
import { StyleSheet, Text, View } from "react-native";

const ScreenRadio = () => {
    return (
        <View style={ styles.container }>
            <Text>ScreenRadio</Text>
        </View>
    );
};

export default ScreenRadio;

const styles = StyleSheet.create( {
    container: {
        flex:           1,
        justifyContent: "center",
        alignItems:     "center"
    }
} )
