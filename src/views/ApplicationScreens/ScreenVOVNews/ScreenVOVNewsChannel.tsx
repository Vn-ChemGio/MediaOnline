import React, { useEffect, useState }     from "react";
import { DrawerScreenProps }              from "@react-navigation/drawer";
import { Colors, LoaderScreen, Spacings } from "react-native-ui-lib";
import Icon                               from "react-native-vector-icons/Ionicons"
import parse                              from "rss-to-json";

import { Devices, RSSParseInterface, ScreenVOVNewsNavigationParamList }                                          from "~commons";
import { ActivityIndicatorView, AvatarHeaderFlatList, AvatarHeaderScrollView, VOVNewsCardItem, VOVTubeCardItem } from "~components";
import { NewsItem }                                                                                              from "~commons/interfaces/VOVNews";
import axios                                                                                                     from "axios";
import { API_HOST }                                                                                              from "@env";
import { View }                                                                                                  from "react-native";

const ScreenVOVNewsChannel = ( props: DrawerScreenProps<ScreenVOVNewsNavigationParamList> ) => {

    let [ data, setData ]         = useState<NewsItem[]>( [] )
    let [ skip, setSkip ]         = useState<number>( 0 )
    let [ limit, setLimit ]       = useState<number>( 10 )
    const [ loading, setLoading ] = useState<boolean>( true );
    let channel                   = props.route.params.channel;

    useEffect( () => {
        (
            async () => {
                try {
                    !loading && setLoading( true );
                    let dataFetch: NewsItem[] = (
                        await axios.get( `${ API_HOST }/VOVNews/${ channel.path }?skip=${ skip }&limit=${ limit }` )
                    ).data;

                    console.log( `${ API_HOST }/VOVNews/${ channel.path }?skip=${ skip }&limit=${ limit }`, dataFetch )
                    setData( dataFetch );

                } catch ( e ) {

                } finally {
                    setLoading( false )
                }

            }
        )()
    }, [ channel.rssUrl ] )

    return (
        <AvatarHeaderScrollView
            rightTopIcon={ () => <Icon name="options-outline" size={ 24 } color={ Colors.white }/> }
            rightTopIconOnPress={ () => {
                props.navigation.toggleDrawer();
            } }
            backgroundColor={ Colors.primaryVOVNews }
            title={ "VOV News" }
            subtitle={ "Thông tin nhanh chóng, chính xác.\nTin tức cập nhật liên tục! " }
        >
            {
                loading ?
                <View style={ { height: Devices.height * 0.3 } }>
                    <LoaderScreen message={ "Đang tải dữ liệu" } color={ Colors.grey40 }/>
                </View>
                        :
                data.map( ( item, index ) => (
                    <VOVNewsCardItem item={ item } channel={ channel } index={ index } key={ index }/>
                ) )
            }

            <View style={ { height: Spacings.s4 } }/>
        </AvatarHeaderScrollView>
    )


};

export default ScreenVOVNewsChannel;

