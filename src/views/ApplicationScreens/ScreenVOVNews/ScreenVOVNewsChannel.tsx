import React, { useEffect, useState }   from "react";
import { DrawerScreenProps }            from "@react-navigation/drawer";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import Icon                             from "react-native-vector-icons/Ionicons"
import parse                            from "rss-to-json";

import { RSSItemNews, RSSParseInterface, ScreenVOVNewsNavigationParamList, getRssData, theme } from "~commons";
import { ActivityIndicatorView, AvatarHeaderFlatList, VOVNewsCardItem }                        from "~components";

const ScreenVOVNewsChannel = ( props: DrawerScreenProps<ScreenVOVNewsNavigationParamList> ) => {

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

    return data.length ?
           (
               <AvatarHeaderFlatList
                   rightTopIcon={ () => <Icon name="options-outline" size={ 24 } color={ MD2Colors.white }/> }
                   rightTopIconOnPress={ () => {
                       props.navigation.toggleDrawer();
                   } }
                   title={ "VOV News" }
                   subtitle={ "Thông tin nhanh chóng, chính xác.\nTin tức cập nhật liên tục! " }
                   data={ data }
                   keyExtractor={ ( item: RSSItemNews ) => item.link }
                   renderItem={ ( { item: { description, published, title, thumbnail, link } }: { item: RSSItemNews } ) => (
                       <VOVNewsCardItem { ...{ description, published, title, link, image: { uri: thumbnail } } }/>
                   ) }
               />
           )
                       :
           (
               <ActivityIndicatorView theme={ theme } color={ theme.colors.primaryVOVNews }/>
           )


};

export default ScreenVOVNewsChannel;

