import React                                           from "react";
import { StatusBar, StyleSheet, View, useColorScheme } from "react-native";
import { Colors }                                      from "react-native-ui-lib";
import { AvatarHeaderScrollView }                      from "react-native-sticky-parallax-header";
import Icon                                            from "react-native-vector-icons/Ionicons"

import { Devices }                     from "~commons";
import { EventCarousel, NewsCarousel } from "./components";


const ScreenRadio = () => {
    const isDarkTheme = useColorScheme() === "dark";

    return (
        <>
            <AvatarHeaderScrollView
                leftTopIconOnPress={ () => {
                } }
                rightTopIcon={ () => <Icon name="ios-search" size={ 24 } color={ Colors.white }/> }
                contentContainerStyle={ [
                    isDarkTheme ? styles.darkBackground : styles.lightBackground,
                ] }
                containerStyle={ styles.stretchContainer }
                // contentIcon={ require('~assets/images/momo/avatar.png') }
                // contentIconNumber={ 10 }
                backgroundColor={ "rgb(78,15,255)" }
                hasBorderRadius
                image={ require( "~assets/images/logo-light.png" ) }
                title={ "VOVMedia" }
                titleStyle={ styles.title }
                showsVerticalScrollIndicator={ false }
                subtitle={ "Ứng dụng nghe Radio độc quyền của \nĐài Tiếng Nói Việt Nam. \nMake with ❤ by WindBlade" }
                parallaxHeight={ Devices.height * 0.4 }

            >
                <View style={ styles.content }>
                    <EventCarousel/>
                    <NewsCarousel/>


                </View>
            </AvatarHeaderScrollView>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
        </>
    );
};

export default ScreenRadio;

const styles = StyleSheet.create( {
    container:       {
        flex: 1,
    },
    content:         {
        alignItems:        "center",
        flex:              1,
        paddingHorizontal: 24,
        minHeight:         Devices.height,
    },
    darkBackground:  {
        backgroundColor: Colors.black,
    },
    lightBackground: {
        backgroundColor: Colors.white,
    },

    stretch:          {
        alignSelf: "stretch",
    },
    stretchContainer: {
        alignSelf: "stretch",
        flex:      1,
    },
    title:            {
        fontFamily: "AvertaStd-Regular",
    },
} )

