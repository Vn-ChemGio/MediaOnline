import React from 'react';
import {View} from "react-native-ui-lib";
import {StyleSheet} from "react-native";
import Carousel from 'react-native-reanimated-carousel';
import { interpolate } from "react-native-reanimated";
import { Devices } from "~commons";
const PAGE_WIDTH = Devices.width;
const EventCarousel = () => {
    const animationStyle = React.useCallback(
            (value: number) => {
                'worklet';

                const zIndex = interpolate(value, [-1, 0, 1], [10, 20, 30]);
                const scale = interpolate(value, [-1, 0, 1], [1.25, 1, 0.25]);
                const opacity = interpolate(value, [-0.75, 0, 1], [0, 1, 0]);

                return {
                    transform: [{ scale }],
                    zIndex,
                    opacity,
                };
            },
            []
    );
    return (
            <View style={styles.container} center marginH-s4 marginB-s4>
                <View style={{ flex: 1 }}>
                    <Carousel
                            loop
                            style={{
                                width: PAGE_WIDTH,
                                height: 240,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            width={PAGE_WIDTH * 0.7}
                            height={240 * 0.7}
                            data={[...new Array(6).keys()]}
                            renderItem={({ index }) => {
                                return <View key={index} index={index} />;
                            }}
                            customAnimation={animationStyle}
                            panGestureHandlerProps={{
                                activeOffsetX: [-10, 10],
                            }}
                    />
                </View>
            </View>
    )
};

export default EventCarousel;
const styles = StyleSheet.create({
    container: {
        height: 120,
        width: '100%',
        backgroundColor: "red"
    }
})
