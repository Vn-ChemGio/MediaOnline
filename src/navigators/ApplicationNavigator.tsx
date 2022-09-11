import React                        from "react";
import LottieView                   from "lottie-react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    ScreenDiscover, ScreenIndividual,
    ScreenRadio, ScreenVOVCharts
}                                   from "../views/ApplicationScreens";

export type ApplicationTabParamList = {
    ScreenDiscover: undefined;
    ScreenRadio: undefined;
    ScreenVOVCharts: undefined;
    ScreenIndividual: undefined;
};

const Tab = createBottomTabNavigator<ApplicationTabParamList>();

export const ApplicationNavigator = () => {
    return (
        <Tab.Navigator screenOptions={ ( { route } ) => (
            {
                tabBarIcon:      ( { focused, color, size } ) => {
                    let filePath;

                    switch ( route.name ) {
                        case "ScreenDiscover":
                            filePath = require( "../assets/Lottie/BottomTabs/ScreenDiscover.json" );
                            break;

                        case "ScreenRadio":
                            filePath = require( "../assets/Lottie/BottomTabs/ScreenRadio.json" );
                            break;

                        case "ScreenVOVCharts":
                            filePath = require( "../assets/Lottie/BottomTabs/ScreenVOVCharts.json" );
                            break;

                        case "ScreenIndividual":
                            filePath = require( "../assets/Lottie/BottomTabs/ScreenIndividual.json" );
                            break;

                        default:
                            filePath = require( "../assets/Lottie/BottomTabs/ScreenDiscover.json" );
                    }
                    return <LottieView source={ filePath } autoPlay={ focused }/>;
                },
                headerShown:     false,
                tabBarActiveTintColor:"#797979"
            }
        ) }
        >
            <Tab.Screen name="ScreenDiscover" component={ ScreenDiscover } options={{
                tabBarLabel:"Khám phá"
            }}/>
            <Tab.Screen name="ScreenRadio" component={ ScreenRadio } options={{
                tabBarLabel:"Radio"
            }}/>
            <Tab.Screen name="ScreenVOVCharts" component={ ScreenVOVCharts } options={{
                tabBarLabel:"#VOV-Chart"
            }}/>
            <Tab.Screen name="ScreenIndividual" component={ ScreenIndividual } options={{
                tabBarLabel:"Cá nhân"
            }}/>
        </Tab.Navigator>
    );
};
