import React      from "react";
import IonIcon    from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator }          from "@react-navigation/bottom-tabs";
import { ApplicationTabNavigationParamList } from "~commons";

import { ScreenDiscover, ScreenRadio, ScreenVOVNews, ScreenVOVTube } from "~views/ApplicationScreens";


const Tab = createBottomTabNavigator<ApplicationTabNavigationParamList>();

export const ApplicationNavigator = () => {
    return (
        <Tab.Navigator screenOptions={ ( { route } ) => (
            {
                headerShown:           false,
                tabBarActiveTintColor: "#797979"
            }
        ) }
        >
            <Tab.Screen name="ScreenDiscover" component={ ScreenDiscover } options={ {
                tabBarIcon:  () => <IonIcon name="heart" size={ 24 }/>,
                tabBarLabel: "Khám phá"
            } }/>
            <Tab.Screen name="ScreenRadio" component={ ScreenRadio } options={ {
                tabBarIcon:  () => <IonIcon name="disc" size={ 24 }/>,
                tabBarLabel: "Radio & TV"
            } }/>
            <Tab.Screen name="ScreenVOVNews" component={ ScreenVOVNews } options={ {
                tabBarIcon:  () => <IonIcon name="newspaper" size={ 24 }/>,
                tabBarLabel: "VOV News"
            } }/>
            <Tab.Screen name="ScreenVOVTube" component={ ScreenVOVTube } options={ {
                tabBarIcon:  () => <IonIcon name="ios-compass" size={ 24 }/>,
                tabBarLabel: "#VOVTube"
            } }/>
        </Tab.Navigator>
    );
};
