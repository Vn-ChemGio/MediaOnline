import React from 'react';
import {View} from "react-native-ui-lib";
import {StyleSheet} from "react-native";
import Carousel from 'react-native-reanimated-carousel';
import { interpolate } from "react-native-reanimated";
import { Devices } from "~commons";
const PAGE_WIDTH = Devices.width;
const NewsCarousel = () => {

    return (
            <View style={styles.container} center marginH-s4 marginB-s4>

            </View>
    )
};

export default NewsCarousel;
const styles = StyleSheet.create({
    container: {
        height: 120,
        width: '100%',
        backgroundColor: "red"
    }
})
