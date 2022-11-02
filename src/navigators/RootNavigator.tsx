import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Colors, Spacings, TouchableOpacity, View } from "react-native-ui-lib";
import Feather from "react-native-vector-icons/Feather";

import { RootStackNavigationParamList } from "~commons";
import { AuthenticateNavigation } from "~views/AuthScreen";
import { ScreenWebView } from "~views/WebViewScreen";
import { ScreenPersonal } from "~views/ScreenPersonal";
import { ApplicationNavigator } from "./ApplicationNavigator";

const Stack = createStackNavigator<RootStackNavigationParamList>();

const RootNavigation = () => (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Application" component={ApplicationNavigator}/>
            <Stack.Screen name="Authenticate" component={AuthenticateNavigation}/>
            <Stack.Screen name="ScreenPersonal" component={ScreenPersonal} options={{
                headerShown: true,
                headerBackTitleVisible: false,
                headerShadowVisible: false,
                headerBackImage: (prop) => <Feather name="arrow-left" size={24} color={Colors.white}
                                                    style={{ marginLeft: Spacings.s4 }}/>,
                headerTitleAlign: "left",
                headerTitle: "Cá Nhân",
                headerTitleStyle: {
                    fontSize: 18,
                    lineHeight: 22,
                    fontFamily: "Roboto-Regular",
                    color: Colors.white,
                    textAlign: "justify",
                },
                headerRight: () => (<View row style={{ marginHorizontal: Spacings.s4 }}>
                    <TouchableOpacity onPress={() => {
                    }} style={{ marginLeft: Spacings.s4 }}>
                        <Feather name="search" size={24} color={Colors.white}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                    }} style={{ marginLeft: Spacings.s4 }}>
                        <Feather name="bell" size={24} color={Colors.white}/>
                    </TouchableOpacity>
                </View>),
                headerStyle: {
                    backgroundColor: Colors.primaryVOVDiscover,
                    borderBottomWidth: 0,
                    height: 100
                },

            }}/>
            <Stack.Screen name="ScreenWebView" component={ScreenWebView} options={({ route })=>({
                headerShown: true,
                headerBackTitleVisible: false,
                headerShadowVisible: false,
                headerBackImage: (prop) => <Feather name="arrow-left" size={24} color={Colors.white}
                                                    style={{ marginLeft: Spacings.s4 }}/>,
                headerTitleAlign: "left",
                headerTitle: route?.params?.title || "Chi tiết",
                headerTitleStyle: {
                    fontSize: 18,
                    lineHeight: 22,
                    fontFamily: "Roboto-Regular",
                    color: Colors.white,
                    textAlign: "justify",
                },
                headerStyle: {
                    backgroundColor: Colors.primaryVOVNews,
                    borderBottomWidth: 0,
                    height: 100
                },
            })}/>
        </Stack.Navigator>
);

export default RootNavigation;
