import axios                          from "axios";
import React, { useEffect, useState } from "react";
import { createDrawerNavigator }      from "@react-navigation/drawer";

import ScreenVOVNewsChannel          from "./ScreenVOVNewsChannel";
import { CustomDrawerContent }       from "./components";
import { VOVNewsChannelItem }        from "~commons";
import { API_HOST }                  from "@env";
import Icon                          from "react-native-vector-icons/Ionicons";
import ScreenVOVNewsChannelNavigator from "./ScreenVOVNewsChannelNavigator";

export type ScreenVOVNewsParamList = {
    [screenName: string]: {
        channel: VOVNewsChannelItem
    }
}

const Drawer        = createDrawerNavigator<ScreenVOVNewsParamList>();
const ScreenVOVNews = () => {
    const [ listChannels, setListChannels ] = useState<VOVNewsChannelItem[]>( [] );
    const [ active, setActive ]             = React.useState<number>( 0 );
    useEffect( () => {
        (
            async () => {
                let list: VOVNewsChannelItem[] = (
                    await axios.get( `${ API_HOST }/VOVNews` )
                ).data;

                setListChannels( list );
            }
        )()
    }, [ active ] )


    return (
         listChannels.length ? <Drawer.Navigator screenOptions={ {
            headerShown:                 false,
            drawerPosition:              "right",
            drawerActiveBackgroundColor: "rgb(234,17,126)",
            drawerActiveTintColor:       "#fff",
            drawerInactiveTintColor:     "#333",
            drawerLabelStyle:{
                marginLeft: -25,
                fontFamily:"Roboto-Medium",
                fontSize:15
            }
        } }
                          drawerContent={ ( props ) => <CustomDrawerContent { ...{ ...props, listChannels } } /> }>

            {
                listChannels.map((channel, index)=>
                <Drawer.Screen name={channel.name} component={ ScreenVOVNewsChannelNavigator } initialParams={ { channel: channel } } options={{
                    drawerIcon: ({ color, focused })=> <Icon name={ focused ? "heart" : "heart-outline" } { ...{ color } } size={18}/>
                }} key={index}/>
            )}
            
        </Drawer.Navigator> 
         : null
    );
};

export default ScreenVOVNews;

