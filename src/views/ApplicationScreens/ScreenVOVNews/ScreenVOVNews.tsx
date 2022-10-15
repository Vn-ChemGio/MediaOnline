import axios from "axios";
import React, { useEffect, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { CustomDrawerContent } from "./components";
import { ICON_SIZE, SEGMENT, VOVNewsChannelItem } from "~commons";
import { API_HOST } from "@env";
import Icon from "react-native-vector-icons/Ionicons";
import ScreenVOVNewsChannelNavigator from "./ScreenVOVNewsChannelNavigator";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

export type ScreenVOVNewsParamList = {
    [screenName: string]: {
        channel: VOVNewsChannelItem
    }
}

const Drawer = createDrawerNavigator<ScreenVOVNewsParamList>();
const ScreenVOVNews = () => {
    console.log(API_HOST)
    const [listChannels, setListChannels] = useState<VOVNewsChannelItem[]>([]);
    useEffect(() => {
        (
                async () => {
                    let list: VOVNewsChannelItem[] = (
                            await axios.get(`${API_HOST}/VOVNews`)
                    ).data;

                    setListChannels(list);
                }
        )()
    }, [])


    return (
            listChannels.length ? <Drawer.Navigator screenOptions={{
                        headerShown: false,
                        drawerPosition: "right",
                        drawerActiveBackgroundColor: "rgb(234,17,126)",
                        drawerActiveTintColor: "#fff",
                        drawerInactiveTintColor: "#333",
                        drawerLabelStyle: {
                            marginLeft: -25,
                            //fontFamily:"Roboto-Medium",
                            fontSize: 15
                        }
                    }}
                                                    drawerContent={(props) => <CustomDrawerContent {...{
                                                        ...props,
                                                        listChannels
                                                    }} />}>

                        {
                            listChannels.map((channel, index) =>
                                    <Drawer.Screen name={channel.name} component={ScreenVOVNewsChannelNavigator}
                                                   initialParams={{ channel: channel }} options={{
                                        drawerIcon: ({ color, focused }) => <Icon
                                                name={focused ? channel.iconFocussed : channel.icon} {...{ color }}
                                                size={ICON_SIZE}/>
                                    }} key={index}/>
                            )}

                    </Drawer.Navigator>
                    : <ActivityIndicator animating={true} color={MD2Colors.red800}/>
    );
};

export default ScreenVOVNews;

