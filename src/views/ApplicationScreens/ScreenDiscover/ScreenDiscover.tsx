import React                      from "react";
import { StyleSheet, Text, View } from "react-native";

const ScreenDiscover = () => {
    return (
        <View style={ styles.container }>
            <Text>ScreenDiscover</Text>
        </View>
    );
};

export default ScreenDiscover;

const styles = StyleSheet.create( {
    container: {
        flex:           1,
        justifyContent: "center",
        alignItems:     "center"
    }
} )
