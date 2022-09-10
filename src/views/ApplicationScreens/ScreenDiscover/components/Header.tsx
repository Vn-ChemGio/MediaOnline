import React from 'react';

import {useNavigation} from "@react-navigation/native";
import {Avatar, Colors, Text, View} from "react-native-ui-lib";
import Animated, {Extrapolate, interpolate, useAnimatedStyle} from "react-native-reanimated";
import {normalizedFontSize} from "~commons";
import {
    HEADER_FULL_HEIGHT,
    HEADER_MIN_HEIGHT,
    HEADER_PROFILE_PADDING_VERTICAL,
    HEADER_SCROLL_DISTANCE
} from "~models/layout";

interface HeaderProps {
    scroll: Animated.SharedValue<number>;
}

const AnimatedHeaderView = Animated.createAnimatedComponent(View);

const Header = ({scroll}: HeaderProps) => {
    const navigation = useNavigation()
    // animated style based on scroll shared value from parent
    const headerAnimatedStyle = useAnimatedStyle(() => {
        const height = interpolate(
            scroll.value,
            [0, HEADER_SCROLL_DISTANCE],
            [HEADER_FULL_HEIGHT, HEADER_MIN_HEIGHT],
            Extrapolate.CLAMP
        );
        return {
            height,
        };
    });

    const headerUserProfileStyle = useAnimatedStyle(() => {
        const opacity = interpolate(
            scroll.value,
            [0, HEADER_SCROLL_DISTANCE / 2],
            [1, 0],
            Extrapolate.CLAMP
        );
        const marginBottom = interpolate(
            scroll.value,
            [0, HEADER_SCROLL_DISTANCE / 2],
            [0, HEADER_PROFILE_PADDING_VERTICAL],
            Extrapolate.CLAMP
        );

        return {
            marginBottom,
            opacity,
        };
    });
    const relativeHeaderUserProfileStyle = useAnimatedStyle(() => {

        const opacity = interpolate(
            scroll.value,
            [HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            [0, 1],
            Extrapolate.CLAMP
        );


        return {
            height: 40,
            top: HEADER_PROFILE_PADDING_VERTICAL / 2,
            bottom: HEADER_PROFILE_PADDING_VERTICAL / 2,
            opacity
        };
    });
    return (
        <AnimatedHeaderView
            style={[headerAnimatedStyle]} backgroundColor={Colors.primary}
        >
            <AnimatedHeaderView marginH-s4 absF row centerV style={headerUserProfileStyle}>
                <View flex left>
                    <Text welcomeText>Hi, Guest</Text>
                    <Text welcomeSubText>Welcome back!</Text>
                </View>
                <Avatar source={require('../../../../assets/images/avatar-04.png')}
                        size={normalizedFontSize(48)} onPress={() => {
                    // @ts-ignore
                    navigation.navigate('UserProfileScreen')
                }}/>
            </AnimatedHeaderView>
            <AnimatedHeaderView marginH-s4 absF row centerV style={relativeHeaderUserProfileStyle}>
                <View flex left>
                    <Text welcomeSubText>Hi, Guest</Text>
                </View>
                <Avatar source={require('../../../../assets/images/avatar-04.png')}
                        size={normalizedFontSize(24)} onPress={() => {
                    // @ts-ignore
                    navigation.navigate('UserProfileScreen')
                }}/>
            </AnimatedHeaderView>

        </AnimatedHeaderView>
    );
};

export default Header;
