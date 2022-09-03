import React                      from "react";
import { StyleSheet, Text, View } from "react-native";
import { IOSSegmentedControl }    from "../../../components";

const ScreenDiscover = () => {
    return (
        <View style={ styles.container }>
            <IOSSegmentedControl
                segments={ [ { label: "Bài hát" }, { label: "Album" }, { label: "Ca sĩ" } ] }
            />
        </View>
    );
};

export default ScreenDiscover;

const styles = StyleSheet.create( {
    container: {
        flex:            1,
        justifyContent:  "center",
        alignItems:      "center",
        backgroundColor: "#fff"
    }
} )
