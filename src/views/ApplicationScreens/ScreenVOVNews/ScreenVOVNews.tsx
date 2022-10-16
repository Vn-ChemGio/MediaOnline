import { API_HOST }                   from "@env";
import { createDrawerNavigator }      from "@react-navigation/drawer";
import axios                          from "axios";
import React, { useEffect, useState } from "react";
import { useTheme }                   from "react-native-paper";
import Icon                           from "react-native-vector-icons/Ionicons";

import { ICON_SIZE, ScreenVOVNewsNavigationParamList, VOVNewsChannelItem, theme } from "~commons";
import { ActivityIndicatorView }                                                  from "~components";

import { CustomDrawerContent }       from "./components";
import ScreenVOVNewsChannelNavigator from "./ScreenVOVNewsChannelNavigator";


const Drawer        = createDrawerNavigator<ScreenVOVNewsNavigationParamList>();
const ScreenVOVNews = () => {
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
                                drawerActiveBackgroundColor: theme.colors.primaryVOVNews,
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
                                        <Drawer.Screen name={ channel.name } component={ ScreenVOVNewsChannelNavigator }
                                                       initialParams={ { channel: channel } } options={ {
                                            drawerIcon: ( { color, focused } ) => <Icon
                                                name={ focused ? channel.iconFocussed : channel.icon } { ...{ color } }
                                                size={ ICON_SIZE }/>
                                        } } key={ index }/>
                                    ) }

                            </Drawer.Navigator>
                            : <ActivityIndicatorView theme={ theme } color={ theme.colors.primaryVOVNews }/>
    );
};

export default ScreenVOVNews;

