import React                    from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ScreenVOVNewsNavigationParamList, } from "~commons";
import ScreenVOVNewsChannel                  from "./ScreenVOVNewsChannel";
import ScreenWebView                         from "./ScreenWebView";


const Stack         = createStackNavigator<ScreenVOVNewsNavigationParamList>();
const ScreenVOVNews = () => (
    <Stack.Navigator screenOptions={ {
        presentation: "transparentModal"
    } }>
        <Stack.Screen name="ScreenVOVNewsChannel" component={ ScreenVOVNewsChannel }
                      options={ { headerShown: false } }
        />
        <Stack.Screen name="ScreenWebView" component={ ScreenWebView } initialParams={ { uri: "" } }/>
    </Stack.Navigator>
);

export default ScreenVOVNews;

