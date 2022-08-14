import React                      from "react";
import { StyleSheet, Text, View } from "react-native";

const ScreenForgotPassword = () => {
    return (
        <View style={ styles.container }>
            <Text>ScreenForgotPassword</Text>
        </View>
    );
};

export default ScreenForgotPassword;

const styles = StyleSheet.create( {
    container: {
        flex:           1,
        justifyContent: "center",
        alignItems:     "center",
    },
} );
