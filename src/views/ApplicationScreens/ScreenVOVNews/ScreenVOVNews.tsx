import React, { useEffect, useState } from "react";
import { StatusBar }                  from "react-native";
import { Colors }                     from "react-native-ui-lib";
import Icon                           from "react-native-vector-icons/Ionicons"
import parse                          from "rss-to-json";

import { RSSItemNews, RSSParseInterface, getRssData } from "~commons";
import { AvatarHeaderFlatList, VOVNewsCardItem }      from "~components";

const ScreenVOVNews = () => {

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
                rightTopIcon={ () => <Icon name="options-outline" size={ 24 } color={ Colors.white }/> }
                rightTopIconOnPress={ () => {
                } }
                backgroundColor={ "rgb(234,17,126)" }
                hasBorderRadius
                title={ "VOV News" }
                subtitle={ "Thông tin nhanh chóng, chính xác.\nTin tức cập nhật liên tục! " }
                data={ data }
                keyExtractor={ ( item: RSSItemNews ) => item.link }
                renderItem={ ( { item }: { item: RSSItemNews } ) => (
                    <VOVNewsCardItem title={ item.title } image={ { uri: item.thumbnail } } description={ item.description } published={ item.published }/>
                ) }
            />
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
        </>
    );
};

export default ScreenVOVNews;

