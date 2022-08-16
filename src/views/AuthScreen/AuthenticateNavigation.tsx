import React                    from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ScreenLogin }          from "./ScreenLogin";
import { ScreenRegister }       from "./ScreenRegister";
import { ScreenForgotPassword } from "./ScreenForgotPassword";

export type AuthenticateStackParamList = {
    ScreenLogin: undefined;
    ScreenRegister: undefined;
    ScreenForgotPassword: undefined;
};

const Stack = createStackNavigator<AuthenticateStackParamList>();

const AuthenticateNavigation = () => (
    <Stack.Navigator screenOptions={ { headerShown: false } }>
        <Stack.Screen name="ScreenLogin" component={ ScreenLogin }/>
        <Stack.Screen name="ScreenRegister" component={ ScreenRegister }/>
        <Stack.Screen name="ScreenForgotPassword" component={ ScreenForgotPassword }/>
    </Stack.Navigator>
);


export default AuthenticateNavigation;
