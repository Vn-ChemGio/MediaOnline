import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Colors, Text, View} from "react-native-ui-lib";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import Animated, {Extrapolate, interpolate, useAnimatedStyle} from "react-native-reanimated";
import {HEADER_SCROLL_DISTANCE, PLAYING_HEIGHT} from "~models/layout";
import {normalizedFontSize} from "~commons";
import {VolumeController} from "~components";

interface PlayingProps {
    scroll: Animated.SharedValue<number>;
}

const AnimatedHeaderView = Animated.createAnimatedComponent(View);


const Playing = ({scroll}: PlayingProps) => {
    const animatedStyle = useAnimatedStyle(() => {
        const borderRadius = interpolate(
            scroll.value,
            [0, HEADER_SCROLL_DISTANCE],
            [PLAYING_HEIGHT / 2, 0],
            Extrapolate.CLAMP
        );
        return {
            borderBottomRightRadius: borderRadius,
            borderBottomLeftRadius: borderRadius,
        };
    });
    return (
        <View style={styles.container}>
            <AnimatedHeaderView absT height={PLAYING_HEIGHT / 2} backgroundColor={Colors.primary} width='100%'
                                style={animatedStyle}/>
            <View marginH-s4 absF style={styles.content}>
                <Card borderRadius={16} flex-1 enableShadow style={styles.card}>
                    <View flex-1 marginH-s4 marginV-s2 spread>
                        <View row spread left centerV>
                            <View center height={48} width={48}>
                                <FontAwesome name="play-circle" color={Colors.primary}
                                             size={normalizedFontSize(48)}
                                             onPress={() => console.log('Pressed')}/>
                            </View>
                            <View flex-1 spread right centerV>
                                <Text playingDescription>360 độ sức khỏe</Text>
                                <Text playingTitle>VOV1 - Kênh thời sự!</Text>

                            </View>
                        </View>
                        <View flex>
                            <VolumeController/>

                        </View>
                    </View>
                </Card>
            </View>
        </View>
    );
};

export default Playing;

const styles = StyleSheet.create({
    container: {
        height: PLAYING_HEIGHT,
        backgroundColor: Colors.white
    },
    content: {
        height: PLAYING_HEIGHT
    },
    card: {
        backgroundColor: Colors.white,
        borderRadius: 8,
        borderBottomWidth: 4,
        borderBottomColor: '#B0BCFD',
        borderTopWidth: 1,
        borderTopColor: '#e5e4ec',
    },

    volumeBar: {
        borderRadius: 5,
        borderWidth: 0.2,
        borderBottomWidth: 1,
        borderColor: '#e5e4e7',
    },
    thumb: {
        width: 26,
        height: 26,
        borderRadius: 13,
        borderColor: Colors.red60,
        borderWidth: 5,
        shadowColor: Colors.white,
    },
    activeThumb: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
    },
})
