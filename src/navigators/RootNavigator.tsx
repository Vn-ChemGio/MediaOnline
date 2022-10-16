import React                    from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { RootStackNavigationParamList } from "~commons";
import { AuthenticateNavigation }       from "../views/AuthScreen";
import { ApplicationNavigator }   from "./ApplicationNavigator";

const Stack          = createStackNavigator<RootStackNavigationParamList>();
const RootNavigation = () => (
    <Stack.Navigator screenOptions={ { headerShown: false } }>
        <Stack.Screen name="Application" component={ ApplicationNavigator }/>
        <Stack.Screen name="Authenticate" component={ AuthenticateNavigation }/>
    </Stack.Navigator>
);

export default RootNavigation;
