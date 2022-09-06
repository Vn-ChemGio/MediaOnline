import React from "react";

import { StyleSheet, View } from "react-native";
import Svg, { G, Path }     from "react-native-svg";

import Animated, { Value, block, onChange, set, useCode }   from "react-native-reanimated";
//import Icon                                                         from "react-native-vector-icons/Ionicons"
import { BottomTabBarProps, createBottomTabNavigator }              from "@react-navigation/bottom-tabs";
import {
    ScreenDiscover, ScreenIndividual,
    ScreenRadio, ScreenVOVCharts
}                                                                   from "../views/ApplicationScreens";
import { Colors, DURATION, ICON_SIZE, IconProps, PADDING, SEGMENT } from "../commons/defined";
import { TabBarNavigationItem, TabBarNavigationWeave }              from "../components";
import { timing, withTransition }                                           from "react-native-redash";


export type ApplicationTabParamList = {
    ScreenDiscover: undefined;
    ScreenRadio: undefined;
    ScreenVOVCharts: undefined;
    ScreenIndividual: undefined;
};
const Icon = ( { active }: IconProps ) => (
    <Svg width={ ICON_SIZE } height={ ICON_SIZE } viewBox="0 0 20 22">
        <G
            stroke={ active ? Colors.primary : Colors.border }
            strokeWidth={ 2 }
            fill={ active ? Colors.primary : "none" }
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Path d="M16 7A6 6 0 104 7c0 7-3 9-3 9h18s-3-2-3-9M11.73 20a2 2 0 01-3.46 0"/>
        </G>
    </Svg>
)

const TabBar = ( { state, descriptors, navigation, insets }: BottomTabBarProps ) => {

    const active           = new Value<number>( 0 );
    const transition       = withTransition( active, { duration: DURATION } );
    const activeTransition = new Value( 0 );
    useCode(
        () =>
            block( [
                onChange( active, set( activeTransition, 0 ) ),
                set( activeTransition, timing( { duration: DURATION } ) ),
            ] ),
        [ active, activeTransition ]
    );

    return (
        <View style={ styles.tabsContainer }>
            { state.routes.map( ( route, index ) => {
                const { options } = descriptors[ route.key ];
                const label       =
                          options.tabBarLabel !== undefined
                          ? options.tabBarLabel
                          : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit( {
                        type:              "tabPress",
                        target:            route.key,
                        canPreventDefault: true,
                    } );

                    if ( !isFocused && !event.defaultPrevented ) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate( { name: route.name, merge: true } );
                    }
                };

                const onLongPress = () => {
                    navigation.emit( {
                        type:   "tabLongPress",
                        target: route.key,
                    } );
                };

                return (
                    /*  <TouchableOpacity
                          accessibilityRole="button"
                          accessibilityState={ isFocused ? { selected: true } : {} }
                          accessibilityLabel={ options.tabBarAccessibilityLabel }
                          testID={ options.tabBarTestID }
                          onPress={ onPress }
                          onLongPress={ onLongPress }
                          style={ { flex: 1 } }
                      >
                          <Text style={ { color: isFocused ? "#673ab7" : "#222" } }>
                              { label }
                          </Text>
                      </TouchableOpacity>*/
                    <View key={ index } style={ styles.tab }>
                        {/*<TabBarNavigationWeave { ...{ active, transition, index } } />*/}
                        <TabBarNavigationItem
                            onPress={ () => active.setValue( index ) }
                            { ...{ active, transition, index } }
                        >
                            <Icon/>
                        </TabBarNavigationItem>
                    </View>
                );
            } ) }
        </View>
    );
}


const Tab = createBottomTabNavigator<ApplicationTabParamList>();


export const ApplicationNavigator = () => {
    return (
        <Tab.Navigator screenOptions={ ( { route } ) => (
            { headerShown: false, tabBarHideOnKeyboard: true }
        ) }
                       tabBar={ ( props ) => <TabBar { ...props }/> }
        >
            <Tab.Screen name="ScreenDiscover" component={ ScreenDiscover } options={ {
                tabBarLabel: "Khám phá",
                tabBarIcon:  ( { color, size, focused } ) => (
                    focused ? <Icon name="ios-planet" size={ 24 }/> : <Icon name="ios-planet-outline" size={ 18 }/>
                )
            } }/>
            <Tab.Screen name="ScreenRadio" component={ ScreenRadio } options={ {
                tabBarLabel: "Radio",
                tabBarIcon:  ( { color, size, focused } ) => (
                    focused ? <Icon name="disc" size={ 24 }/> : <Icon name="disc-outline" size={ 18 }/>
                )
            } }/>
            <Tab.Screen name="ScreenVOVCharts" component={ ScreenVOVCharts } options={ {
                tabBarLabel: "Xu hướng",
                tabBarIcon:  ( { color, size, focused } ) => (
                    focused ? <Icon name="ios-pulse" size={ 24 }/> : <Icon name="ios-pulse-outline" size={ 18 }/>
                )
            } }/>
            <Tab.Screen name="ScreenIndividual" component={ ScreenIndividual } options={ {
                tabBarLabel: "Cá nhân",
                tabBarIcon:  ( { color, size, focused } ) => (
                    focused ? <Icon name="ios-compass" size={ 24 }/> : <Icon name="ios-compass-outline" size={ 18 }/>
                )
            } }/>
        </Tab.Navigator>
    );
};
const styles                      = StyleSheet.create( {
    tabsContainer: {
        flexDirection: "row",
        alignItems:    "center"
    },
    tab:           {
        width:          SEGMENT,
        height:         ICON_SIZE + PADDING * 2,
        flexDirection:  "row",
        justifyContent: "center",
        alignItems:     "center",
    },
} )
