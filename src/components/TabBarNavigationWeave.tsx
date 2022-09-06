import React                         from "react";
import { StyleSheet, View }          from "react-native";
import Animated, { EasingNode, eq, interpolate, interpolateNode } from "react-native-reanimated";
import { mix, withTransition }        from "react-native-redash";
import { Colors, ICON_SIZE, PADDING } from "../commons/defined";

interface WeaveProps {
    active: Animated.Node<number>;
    index: number;
}

const SIZE = ICON_SIZE + PADDING * 2;
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center",
        alignItems: "center",
    },
    weave: {
        borderRadius: SIZE / 2,
        width: SIZE,
        height: SIZE,
        borderWidth: 4,
        borderColor: Colors.primary,
    },
});


const TabBarNavigationWeave = ({ active, index }: WeaveProps) => {
    const isActive = eq(active, index);
    const activeTransition = withTransition(isActive, { duration: 250, easing: EasingNode.linear });
    // scale=0 doesn't work on Android
    const scale = mix(activeTransition, 0.1, 1.5);
    // Because scale=0 doesn't work we need this interpolation
    const opacity = interpolateNode(activeTransition,  {
        inputRange : [0, 0.5, 1],
        outputRange:[0, 1, 0],

    });
    return (
        <View style={styles.container}>
            <Animated.View
                style={[styles.weave, { opacity, transform: [{ scale }] }]}
            />
        </View>
    );
};

export default TabBarNavigationWeave;
