import React                    from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ScreenLogin }          from "./ScreenLogin";
import { ScreenRegister }       from "./ScreenRegister";
import { ScreenForgotPassword } from "./ScreenForgotPassword";

const Stack = createStackNavigator();

const AuthenticateNavigation = () => (
    <Stack.Navigator screenOptions={ { headerShown: false } }>
        <Stack.Screen name="Register" component={ ScreenRegister }/>
        <Stack.Screen name="Login" component={ ScreenLogin }/>
        <Stack.Screen name="ForgotPassword" component={ ScreenForgotPassword }/>
    </Stack.Navigator>
);

export default AuthenticateNavigation;
