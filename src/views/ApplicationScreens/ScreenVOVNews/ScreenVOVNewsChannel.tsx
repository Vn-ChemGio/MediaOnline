import axios                          from "axios";
import React, { useEffect, useState } from "react";
import { API_HOST }                   from "@env";
import { createDrawerNavigator }      from "@react-navigation/drawer";
import { Colors }                     from "react-native-ui-lib";
import Icon                           from "react-native-vector-icons/Ionicons"


import { ICON_SIZE, ScreenVOVNewsChannelNavigationParamList, VOVNewsChannelItem } from "~commons";
import { ActivityIndicatorView }                                                  from "~components";
import { CustomDrawerContent }                                                    from "./components";
import ScreenVOVNewsChannelItem                                                   from "./ScreenVOVNewsChannelItem";

const Drawer = createDrawerNavigator<ScreenVOVNewsChannelNavigationParamList>();

const ScreenVOVNewsChannel = () => {
    const [ listChannels, setListChannels ] = useState<VOVNewsChannelItem[]>( [] );
    useEffect( () => {
        (
            async () => {
                let list: VOVNewsChannelItem[] = (
                    await axios.get( `${ API_HOST }/VOVNews` )
                ).data;

                setListChannels( list );
            }
        )()
    }, [] )


    return (
        listChannels.length ? <Drawer.Navigator screenOptions={ {
                                headerShown:                 false,
                                drawerPosition:              "right",
                                drawerActiveBackgroundColor: Colors.primaryVOVNews,
                                drawerActiveTintColor:       "#fff",
                                drawerInactiveTintColor:     "#333",
                                drawerLabelStyle:            {
                                    marginLeft: -25,
                                    //fontFamily:"Roboto-Medium",
                                    fontSize: 15
                                }
                            } }
                                                drawerContent={ ( props ) => <CustomDrawerContent { ...{
                                                    ...props,
                                                    listChannels
                                                } } /> }>

                                {
                                    listChannels.map( ( channel, index ) =>
                                        <Drawer.Screen name={ channel.name } component={ ScreenVOVNewsChannelItem }
                                                       initialParams={ { channel: channel } } options={ {
                                            drawerIcon: ( { color, focused } ) => <Icon
                                                name={ focused ? channel.iconFocussed : channel.icon } { ...{ color } }
                                                size={ ICON_SIZE }/>
                                        } } key={ index }/>
                                    ) }

                            </Drawer.Navigator>
                            : <ActivityIndicatorView color={ Colors.primaryVOVNews }/>
    );
};

export default ScreenVOVNewsChannel;

