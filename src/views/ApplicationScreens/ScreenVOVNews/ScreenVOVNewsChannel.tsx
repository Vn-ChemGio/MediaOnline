import React, { useEffect, useState } from "react";
import { StatusBar }                  from "react-native";
import { Colors }                     from "react-native-ui-lib";
import Icon                           from "react-native-vector-icons/Ionicons"
import parse                          from "rss-to-json";

import { useNavigation } from "@react-navigation/native";

import { RSSItemNews, RSSParseInterface, getRssData } from "~commons";
import { AvatarHeaderFlatList, VOVNewsCardItem }      from "~components";
import { DrawerScreenProps }                          from "@react-navigation/drawer";
import { ScreenVOVNewsParamList }                     from "~views/ApplicationScreens/ScreenVOVNews/ScreenVOVNews";

const ScreenVOVNewsChannel = ( props: DrawerScreenProps<ScreenVOVNewsParamList> ) => {

    let [ data, setData ] = useState<RSSItemNews[]>( [] )
    let channel           = props.route.params.channel;

    useEffect( () => {
        (
            async () => {
                let rss: RSSParseInterface = await parse( channel.rssUrl );

                setData( getRssData( rss, 30 ) )
            }
        )();
    }, [ channel.rssUrl ] )

    return (
        <>

            <AvatarHeaderFlatList
                rightTopIcon={ () => <Icon name="options-outline" size={ 24 } color={ Colors.white }/> }
                rightTopIconOnPress={ () => {
                    props.navigation.toggleDrawer();
                } }
                backgroundColor={ "rgb(234,17,126)" }
                hasBorderRadius
                title={ "VOV News" }
                subtitle={ "Thông tin nhanh chóng, chính xác.\nTin tức cập nhật liên tục! " }
                data={ data }
                keyExtractor={ ( item: RSSItemNews ) => item.link }
                renderItem={ ( { item: { description, published, title, thumbnail, link } }: { item: RSSItemNews } ) => (
                    <VOVNewsCardItem { ...{ description, published, title, link, image: { uri: thumbnail } } }/>
                ) }
            />
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
        </>
    );
};

export default ScreenVOVNewsChannel;

