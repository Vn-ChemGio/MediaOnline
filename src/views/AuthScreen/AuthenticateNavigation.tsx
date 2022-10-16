import React                    from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthenticateStackNavigationParamList } from "~commons";

import { ScreenLogin }          from "./ScreenLogin";
import { ScreenRegister }       from "./ScreenRegister";
import { ScreenForgotPassword } from "./ScreenForgotPassword";

const Stack = createStackNavigator<AuthenticateStackNavigationParamList>();

const AuthenticateNavigation = () => (
    <Stack.Navigator screenOptions={ { headerShown: false } }>
        <Stack.Screen name="ScreenLogin" component={ ScreenLogin }/>
        <Stack.Screen name="ScreenRegister" component={ ScreenRegister }/>
        <Stack.Screen name="ScreenForgotPassword" component={ ScreenForgotPassword }/>
    </Stack.Navigator>
);


export default AuthenticateNavigation;
