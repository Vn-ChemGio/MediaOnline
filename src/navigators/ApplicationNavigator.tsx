import React                        from "react";
import LottieView                   from "lottie-react-native";
import { BottomNavigation, Text } from 'react-native-paper';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    ScreenDiscover,
    ScreenRadio,
    ScreenVOVNews,
    ScreenVOVTube
} from "~views/ApplicationScreens";

export type ApplicationTabParamList = {
    ScreenDiscover: undefined;
    ScreenRadio: undefined;
    ScreenVOVCharts: undefined;
    ScreenIndividual: undefined;
    ScreenVOVNews: undefined;
    ScreenVOVTube: undefined;
};

const Tab = createBottomTabNavigator<ApplicationTabParamList>();

export const ApplicationNavigator = () => {
    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
        { key: 'music', title: 'Khám phá', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
        { key: 'albums', title: 'Radio & TV', focusedIcon: 'disc', unfocusedIcon: 'disc-outline' },
        { key: 'recents', title: 'VOV News', focusedIcon: 'newspaper', unfocusedIcon: 'newspaper-outline' },
        { key: 'notifications', title: 'VOV Tube', focusedIcon: 'ios-compass', unfocusedIcon: 'ios-compass-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        music: ScreenDiscover,
        albums: ScreenRadio,
        recents: ScreenVOVNews,
        notifications: ScreenVOVTube,
    });


    return (
            <BottomNavigation
                    navigationState={{ index, routes }}
                    onIndexChange={setIndex}
                    renderScene={renderScene}
                    sceneAnimationType={"shifting"}
                    safeAreaInsets={{bottom: 0}}
            />
    );
    return (
            <Tab.Navigator screenOptions={ ( { route } ) => (
                    {
                        tabBarIcon:      ( { focused, color, size } ) => {
                            let filePath;

                            switch ( route.name ) {
                                case "ScreenDiscover":
                                    filePath = require( "../assets/Lottie/BottomTabs/ScreenVOVCharts.json" );
                                    break;

                                case "ScreenRadio":
                                    filePath = require( "../assets/Lottie/BottomTabs/ScreenRadioMusic.json" );
                                    break;

                                case "ScreenVOVNews":
                                    filePath = require( "../assets/Lottie/BottomTabs/ScreenVOVNews.json" );
                                    break;

                                case "ScreenVOVTube":
                                    filePath = require( "../assets/Lottie/BottomTabs/ScreenDiscover.json" );
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
                    tabBarLabel:"Radio & TV"
                }}/>
                <Tab.Screen name="ScreenVOVNews" component={ ScreenVOVNews } options={{
                    tabBarLabel:"VOV News"
                }}/>
                <Tab.Screen name="ScreenVOVTube" component={ ScreenVOVTube } options={{
                    tabBarLabel:"#VOVTube"
                }}/>

            </Tab.Navigator>
    );
};
