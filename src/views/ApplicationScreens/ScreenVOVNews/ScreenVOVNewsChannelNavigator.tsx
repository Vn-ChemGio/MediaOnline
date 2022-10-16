import React                      from "react";
import { DrawerScreenProps }      from "@react-navigation/drawer";
import { createStackNavigator }   from "@react-navigation/stack";

import ScreenVOVNewsChannel from "./ScreenVOVNewsChannel";
import ScreenWebView        from "./ScreenWebView";

import { ScreenVOVNewsChannelStackNavigationParamList, ScreenVOVNewsNavigationParamList } from "~commons";


const Stack                         = createStackNavigator<ScreenVOVNewsChannelStackNavigationParamList>();
const ScreenVOVNewsChannelNavigator = ( props: DrawerScreenProps<ScreenVOVNewsNavigationParamList> ) => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="ScreenVOVNewsChannel" component={ ScreenVOVNewsChannel }
                              options={ { headerShown: false } }
                              initialParams={ props.route.params }
                />
                <Stack.Screen name="ScreenWebView" component={ ScreenWebView } initialParams={ { uri: "" } }/>
            </Stack.Navigator>
        </>
    );
};

export default ScreenVOVNewsChannelNavigator;

