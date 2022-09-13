import React                      from "react";
import {
    StatusBar, StyleSheet, View,
    useColorScheme,
}                                 from "react-native";
import { AvatarHeaderScrollView } from "react-native-sticky-parallax-header";
import Icon                       from "react-native-vector-icons/Ionicons"
import { Colors }                 from "react-native-ui-lib";
import { Devices }                from "~commons";

const ScreenVOVNews = () => {
    const isDarkTheme = useColorScheme() === "dark";

    return (
        <>
            <AvatarHeaderScrollView
                leftTopIconOnPress={ () => {
                } }
                rightTopIcon={ () => <Icon name="options-outline" size={ 24 } color={ Colors.white }/> }
                rightTopIconOnPress={ () => {
                } }
                contentContainerStyle={ [
                    isDarkTheme ? styles.darkBackground : styles.lightBackground,
                ] }
                containerStyle={ styles.stretchContainer }
                // contentIcon={ require('~assets/images/momo/avatar.png') }
                // contentIconNumber={ 10 }
                backgroundColor={ "rgb(234,17,126)" }
                hasBorderRadius
                image={ require( "~assets/images/logo-light.png" ) }
                title={ "VOV News" }
                titleStyle={ styles.title }
                showsVerticalScrollIndicator={ false }
                subtitle={ "Thông tin nhanh chóng, chính xác.\nTin tức cập nhật liên tục! " }
                parallaxHeight={ Devices.height * 0.4 }
            >
                <View style={ styles.content }>

                </View>
            </AvatarHeaderScrollView>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
        </>
    );
};

export default ScreenVOVNews;

const styles = StyleSheet.create( {
    container:        {
        flex: 1,
    },
    content:          {
        alignItems:        "center",
        flex:              1,
        paddingHorizontal: 24,
        minHeight:         Devices.height
    },
    darkBackground:   {
        backgroundColor: Colors.black,
    },
    lightBackground:  {
        backgroundColor: Colors.white,
    },
    stretchContainer: {
        alignSelf: "stretch",
        flex:      1,
    },
    title:            {
        fontFamily: "AvertaStd-Regular",
    },
} )

