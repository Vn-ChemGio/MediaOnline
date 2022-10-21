import React                                                   from "react";
import { StatusBar, StyleSheet, useColorScheme }               from "react-native";
import { MD2Colors }                                           from "react-native-paper";
import { Colors, Spacings }                                    from "react-native-ui-lib";
import { AvatarHeaderScrollView, AvatarHeaderScrollViewProps } from "react-native-sticky-parallax-header";

import { Devices } from "~commons";


const AvatarHeaderScrollViewExtend = ( props: AvatarHeaderScrollViewProps ) => {
    const isDarkTheme           = useColorScheme() === "dark";
    const { children, ...rest } = props;

    return (
        <>
            <AvatarHeaderScrollView
                contentContainerStyle={ [
                    styles.content,
                    isDarkTheme ? styles.darkBackground : styles.lightBackground,
                ] }
                containerStyle={ styles.stretchContainer }
                backgroundColor={ Colors.primaryVOVTube }
                hasBorderRadius
                image={ require( "~assets/images/logo-light.png" ) }
                titleStyle={ styles.title }
                showsVerticalScrollIndicator={ false }
                parallaxHeight={ Devices.height * 0.4 }
                { ...rest }
            >
                { children }
            </AvatarHeaderScrollView>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
        </>
    );
};

export default AvatarHeaderScrollViewExtend;

const styles = StyleSheet.create( {
    container:        {
        flex: 1,
    },
    content:          {
        alignItems:        "center",
        //paddingHorizontal: Spacings.s4,
        paddingTop:        Spacings.s4,
        minHeight:         Devices.height + Devices.height * 0.4 - 100,
    },
    darkBackground:   {
        backgroundColor: MD2Colors.black,
    },
    lightBackground:  {
        backgroundColor: MD2Colors.white,
    },
    stretchContainer: {
        alignSelf: "stretch",
        flex:      1,
    },
    title:            {
        fontFamily: "AvertaStd-Regular",
    },
} )
