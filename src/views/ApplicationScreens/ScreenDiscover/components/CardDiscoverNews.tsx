import React                      from "react";
import { StyleSheet, Text, View } from "react-native";

const CardDiscoverNews = () => {
    return (
        <View style={ styles.container }>
            <Text>CardDiscoverNews</Text>
        </View>
    );
};

export default CardDiscoverNews;

const styles = StyleSheet.create( {
    container: {
        flex:           1,
        justifyContent: "center",
        alignItems:     "center"
    }
} )