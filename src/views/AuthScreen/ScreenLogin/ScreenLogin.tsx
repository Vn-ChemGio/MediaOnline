import React                      from "react";
import { StyleSheet, Text, View } from "react-native";

const ScreenLogin = () => {
    return (
        <View style={ styles.container }>
            <Text>ScreenLogin</Text>
        </View>
    );
};

export default ScreenLogin;

const styles = StyleSheet.create( {
    container: {
        flex:           1,
        justifyContent: "center",
        alignItems:     "center",
    },
} );
