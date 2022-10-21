import React                            from "react";
import { StyleSheet, View }             from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { UIActivityIndicatorProps }     from "react-native-indicators";

const ActivityIndicatorView = ( props: UIActivityIndicatorProps ) => {
    return (
        <View style={ styles.container }>
            <ActivityIndicator animating={ true } color={ MD2Colors.red800 } size={ 32 } { ...props }/>
        </View>
    );
};

export default ActivityIndicatorView;

const styles = StyleSheet.create( {
    container: {
        flex:           1,
        justifyContent: "center",
        alignItems:     "center"
    }
} )