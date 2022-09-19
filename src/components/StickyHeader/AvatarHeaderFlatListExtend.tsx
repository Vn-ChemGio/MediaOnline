import React                                               from "react";
import { StatusBar, StyleSheet, useColorScheme }           from "react-native";
import { Colors, Spacings }                                from "react-native-ui-lib";
import { AvatarHeaderFlatList, AvatarHeaderFlatListProps } from "react-native-sticky-parallax-header";
import Icon                                                from "react-native-vector-icons/Ionicons"

import { Devices } from "~commons";

const AvatarHeaderFlatListExtend = ( props: AvatarHeaderFlatListProps<any> ) => {
    const isDarkTheme = useColorScheme() === "dark";

    return (
        <>
            <AvatarHeaderFlatList
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
                backgroundColor={ "rgb(234,17,126)" }
                hasBorderRadius
                image={ require( "~assets/images/logo-light.png" ) }
                title={ "VOV News" }
                titleStyle={ styles.title }
                showsVerticalScrollIndicator={ false }
                subtitle={ "Thông tin nhanh chóng, chính xác.\nTin tức cập nhật liên tục! " }
                parallaxHeight={ Devices.height * 0.4 }
                decelerationRate="normal"
                { ...props }
            />
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
        </>
    );
};

export default AvatarHeaderFlatListExtend;


const styles = StyleSheet.create( {
    container:        {
        flex: 1,
    },
    content:          {
        alignItems:        "center",
      //  paddingHorizontal: Spacings.s4,
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
