import React                      from "react";
import { StyleSheet, Text, View } from "react-native";

const ScreenVovCharts = () => {
    return (
        <View style={ styles.container }>
            <Text>ScreenVovCharts</Text>
        </View>
    );
};

export default ScreenVovCharts;

const styles = StyleSheet.create( {
    container: {
        flex:           1,
        justifyContent: "center",
        alignItems:     "center"
    }
} )
