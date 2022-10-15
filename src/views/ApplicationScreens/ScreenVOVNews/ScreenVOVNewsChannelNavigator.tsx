import React                      from "react";
import { DrawerScreenProps }      from "@react-navigation/drawer";
import { ScreenVOVNewsParamList } from "~views/ApplicationScreens/ScreenVOVNews/ScreenVOVNews";
import { createStackNavigator }   from "@react-navigation/stack";

import ScreenVOVNewsChannel   from "./ScreenVOVNewsChannel";
import ScreenWebView          from "~views/ApplicationScreens/ScreenVOVNews/ScreenWebView";
import { VOVNewsChannelItem } from "~commons";

export type ScreenVOVNewsChannelNavigatorParamList = {
    ScreenVOVNewsChannel: {
        channel: VOVNewsChannelItem
    },
    ScreenWebView: {
        uri: string
    }
}
const Stack                         = createStackNavigator<ScreenVOVNewsChannelNavigatorParamList>();
const ScreenVOVNewsChannelNavigator = ( props: DrawerScreenProps<ScreenVOVNewsParamList> ) => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="ScreenVOVNewsChannel" component={ ScreenVOVNewsChannel }
                              options={ { headerShown: false } }
                                initialParams={props.route.params}
                />
                <Stack.Screen name="ScreenWebView" component={ ScreenWebView } initialParams={ { uri: "" } }/>
            </Stack.Navigator>
        </>
    );
};

export default ScreenVOVNewsChannelNavigator;

