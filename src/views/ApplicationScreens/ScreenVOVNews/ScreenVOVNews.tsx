import React, { useEffect, useState }            from "react";
import { StatusBar, StyleSheet, useColorScheme } from "react-native";
import { Colors, Spacings }                      from "react-native-ui-lib";
import { AvatarHeaderFlatList }                  from "react-native-sticky-parallax-header";
import Icon                                      from "react-native-vector-icons/Ionicons"
import parse                                     from "rss-to-json";

import { Devices, RSSItemNews, RSSParseInterface, getRssData } from "~commons";
import { VOVNewsCardItem }                                     from "~components/VOVNews";

const ScreenVOVNews = () => {
    const isDarkTheme = useColorScheme() === "dark";

    let [ data, setData ] = useState<RSSItemNews[]>( [] )
    useEffect( () => {
        (
            async () => {
                let rss: RSSParseInterface = await parse( "https://vnexpress.net/rss/tin-moi-nhat.rss" );

                setData( getRssData( rss, 30 ) )
            }
        )();
    }, [] )
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
                data={ data }
                keyExtractor={ ( item ) => item.link }
                decelerationRate="normal"

                renderItem={ ( { item } ) => (
                    <VOVNewsCardItem title={ item.title } image={ { uri: item.thumbnail } } description={ item.description } published={ item.published }/>
                ) }
            />
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
        alignItems:       "center",
        paddingHorizontal: Spacings.s4,
        paddingTop:        Spacings.s4,
        minHeight:         Devices.height + Devices.height * 0.4 -100,
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

