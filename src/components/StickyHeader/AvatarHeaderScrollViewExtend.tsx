import React                                                   from "react";
import { StatusBar, StyleSheet, useColorScheme }               from "react-native";
import { Colors, Spacings }                                    from "react-native-ui-lib";
import { AvatarHeaderScrollView, AvatarHeaderScrollViewProps } from "react-native-sticky-parallax-header";
import Icon                                                    from "react-native-vector-icons/Ionicons";

import { Devices } from "~commons";

const AvatarHeaderScrollViewExtend = ( props: AvatarHeaderScrollViewProps ) => {
    const isDarkTheme           = useColorScheme() === "dark";
    const { children, ...rest } = props;

    return (
        <>
            <AvatarHeaderScrollView
                leftTopIconOnPress={ () => {
                } }
                rightTopIcon={ () => <Icon name="options-outline" size={ 24 } color={ Colors.white }/> }
                rightTopIconOnPress={ () => {
                } }
                contentContainerStyle={ [
                    styles.content,
                    isDarkTheme ? styles.darkBackground : styles.lightBackground,
                ] }
                containerStyle={ styles.stretchContainer }
                backgroundColor={ "rgb(234,17,57)" }
                hasBorderRadius
                image={ require( "~assets/images/logo-light.png" ) }
                title={ "VOV Tube" }
                titleStyle={ styles.title }
                showsVerticalScrollIndicator={ false }
                subtitle={ "Sóng xanh trên Internet.\nTruyền thông không giới hạn." }
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
        paddingHorizontal: Spacings.s4,
        paddingTop:        Spacings.s4,
        minHeight:         Devices.height + Devices.height * 0.4 - 100,
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
