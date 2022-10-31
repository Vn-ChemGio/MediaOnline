import { API_HOST }                               from "@env";
import axios                                      from "axios";
import React, { useEffect, useState }             from "react";
import { View }                                   from "react-native";
import { Avatar, Colors, LoaderScreen, Spacings } from "react-native-ui-lib";
import Feather                                    from "react-native-vector-icons/Feather";

import { AvatarHeaderScrollView } from "~components";
import {
    CardDiscoverEvents,
    CardDiscoverNews,
    CardDiscoverRadio,
    CardDiscoverTrending,
    CardDiscoverTube
}                                 from "./components";

import { VOVDiscovery } from "~commons/interfaces/VOVDiscovery";
import {
    Devices,
    DiscoveryScreenNavigationProp,
}                       from "~commons";


const ScreenDiscover = ( { navigation }: { navigation: DiscoveryScreenNavigationProp } ) => {
    const [ loading, setLoading ] = useState<boolean>( true );
    const [ data, setData ]       = useState<VOVDiscovery>( {
        news:          [],
        events:        [],
        radioChannels: [],
        VOVTube:       []
    } );

    useEffect( () => {
        (
            async () => {
                try {
                    !loading && setLoading( true );
                    let dataFetch: VOVDiscovery = (
                        await axios.get( `${ API_HOST }/VOVDiscovery` )
                    ).data;
                    setData( dataFetch );

                } catch ( e ) {

                } finally {
                    setLoading( false )
                }

            }
        )()
    }, [] )


    return (
        <AvatarHeaderScrollView
            rightTopIcon={ () => <Feather name={"user"} size={32} color={Colors.white}/> }
            rightTopIconOnPress={ () => {
                navigation.navigate( "ScreenPersonal" )
            } }
            backgroundColor={ Colors.primaryVOVNews }
            title={ "VOV Center" }
            subtitle={ "Ứng dụng nghe thông tin độc quyền của \nĐài Tiếng Nói Việt Nam. \nMake with ❤ by WindBlade" }
        >
            {
                loading ?
                <View style={ { height: Devices.height * 0.3 } }>
                    <LoaderScreen message={ "Đang tải dữ liệu" } color={ Colors.grey40 }/>
                </View>
                        :
                <>
                    { data.radioChannels.length && <CardDiscoverRadio data={ data.radioChannels }/> }

                    { data.events.length &&
                      <CardDiscoverEvents data={ data.events }/> }

                    { data.news.length && <CardDiscoverNews data={ data.news }/> }

                    { data.VOVTube.length && <CardDiscoverTube data={ data.VOVTube }/> }

                    {/*<CardDiscoverTrending/>*/ }
                </>
            }
            <View style={ { height: Spacings.s4 } }/>


        </AvatarHeaderScrollView>
    );
};

export default ScreenDiscover;

