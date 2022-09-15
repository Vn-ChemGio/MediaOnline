import React from 'react';
import {StyleSheet, ScrollView, StatusBar} from 'react-native';
import {Colors, View} from "react-native-ui-lib";


import {Banner, Banner2, Events, Header, Musics, NavigationMenu, News, Playing} from "./components";
import Animated, {useAnimatedScrollHandler, useSharedValue} from "react-native-reanimated";

import {Devices} from "~commons/device";

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView)

const HomeScreen = () => {

    // create a value that can be shared / used both on UI and JS threads
    // used to hold animation value / progress

    const headerScroll = useSharedValue(0);

    // scroll event handler reference
    const scrollHandler = useAnimatedScrollHandler((event) => {
        headerScroll.value = event.contentOffset.y;
    });


    return (
        <View backgroundColor={Colors.white}>
            <StatusBar translucent backgroundColor={Colors.primary} barStyle={"light-content"}/>
            <Header scroll={headerScroll}/>
            <Playing scroll={headerScroll}/>
            <AnimatedScrollView contentContainerStyle={{
                //paddingTop: HEADER_FULL_HEIGHT + SEARCH_BAR_HEIGHT + PADDING_TOP_BAR * 2,
                backgroundColor: Colors.white
            }}
                                keyboardShouldPersistTaps='never'
                                onScroll={scrollHandler}
                                scrollEventThrottle={16}
                                bounces={false}
            >
                <View style={styles.container}>


                    <NavigationMenu/>

                    <Events/>

                    <Banner/>



                    <Banner2/>

                    <Musics/>

                    <View marginB-100/>
                    <View marginB-100/>
                    <View marginB-100/>
                </View>
            </AnimatedScrollView>


        </View>
    );
};

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        minHeight: Devices.height,
        backgroundColor: Colors.white,
        width:Devices.width
    },
    header: {
        position: "absolute",
        left: 0,
        right: 0,
        zIndex: 1
    }
})
