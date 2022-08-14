import React                      from "react";
import { StyleSheet, Text, View } from "react-native";

const ScreenRegister = () => {
    return (
        <View style={ styles.container }>
            <Text>ScreenRegister</Text>
        </View>
    );
};

export default ScreenRegister;

const styles = StyleSheet.create( {
    container: {
        flex:           1,
        justifyContent: "center",
        alignItems:     "center",
    },
} );
