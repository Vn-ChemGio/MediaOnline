import React, { ReactElement, cloneElement } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import Animated, {
    cond, EasingNode,
    eq,
    greaterThan,
    interpolate, interpolateNode,
} from "react-native-reanimated";
import { withTransition } from "react-native-redash";
import { DURATION, ICON_SIZE } from "../commons/defined";

interface TabProps {
    children: ReactElement;
    onPress: () => void;
    active: Animated.Node<number>;
    transition: Animated.Node<number>;
    index: number;
}

const TabBarNavigationItem = ({ children, active, transition, index, onPress }: TabProps) => {
    const isActive = eq(active, index);
    const activeTransition = withTransition(isActive, { duration: DURATION, easing: EasingNode.linear });
    const isGoingLeft = greaterThan(transition, active);
    const width = interpolateNode(activeTransition, { inputRange: [0, 1], outputRange: [0, ICON_SIZE] });
    const direction = cond<1|0>(
            isActive,
            cond(isGoingLeft, 1, 0),
            cond(isGoingLeft, 0, 1)
    );
    return (
            <TouchableWithoutFeedback {...{ onPress }}>
                <Animated.View
                        style={{
                            direction: !!direction,
                            width: ICON_SIZE,
                            height: ICON_SIZE,
                        }}
                >
                    <View style={StyleSheet.absoluteFill}>{children}</View>
                    <Animated.View style={[styles.icon, { width }]}>
                        {cloneElement(children, { active: true })}
                    </Animated.View>
                </Animated.View>
            </TouchableWithoutFeedback>
    );
};

export default TabBarNavigationItem;

const styles = StyleSheet.create({
    icon: {
        overflow: "hidden",
    }
})
