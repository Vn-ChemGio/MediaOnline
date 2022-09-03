import React                        from "react";
import LottieView                   from "lottie-react-native";
import Icon                         from "react-native-vector-icons/Ionicons"
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
                            filePath = require( "../assets/Lotties/BottomTabs/ScreenDiscover.json" );
                            return focused ? <Icon name="ios-planet" size={ 24 }/> : <Icon name="ios-planet-outline" size={ 24 }/>
                            break;

                        case "ScreenRadio":
                            filePath = require( "../assets/Lotties/BottomTabs/ScreenRadio.json" );
                            return focused ? <Icon name="disc" size={ 24 }/> : <Icon name="disc-outline" size={ 24 }/>
                        case "ScreenVOVCharts":
                            filePath = require( "../assets/Lotties/BottomTabs/ScreenVOVCharts.json" );
                            //return focused ? <Icon name="ios-pulse" size={ 24 }/> : <Icon name="ios-pulse-outline" size={ 24 }/>
                            break;
                        case "ScreenIndividual":
                            filePath = require( "../assets/Lotties/BottomTabs/ScreenIndividual.json" );
                            //return focused ? <Icon name="ios-compass" size={ 24 }/> : <Icon name="ios-compass-outline" size={ 24 }/>
                            break;
                        default:
                            filePath = require( "../assets/Lotties/BottomTabs/ScreenDiscover.json" );
                    }
                    // return <Ionicons name={iconName} size={size} color={color} />;
                    return <LottieView source={ filePath } autoPlay={ focused }/>;
                },
                headerShown:     false,
                tabBarShowLabel: false
            }
        ) }
        >
            <Tab.Screen name="ScreenDiscover" component={ ScreenDiscover }/>
            <Tab.Screen name="ScreenRadio" component={ ScreenRadio }/>
            <Tab.Screen name="ScreenVOVCharts" component={ ScreenVOVCharts }/>
            <Tab.Screen name="ScreenIndividual" component={ ScreenIndividual }/>
        </Tab.Navigator>
    );
};
