import React, { ReactNode }                  from "react";
import { ScrollView, StatusBar, StyleSheet } from "react-native";

import { useSafeAreaInsets }                                 from "react-native-safe-area-context";
import { AvatarHeaderScrollViewProps as DefaultHeaderProps } from "react-native-sticky-parallax-header";
import { Colors, View }                                      from "react-native-ui-lib";


const DefaultHeader = ( props: DefaultHeaderProps ) => {
    const inset                 = useSafeAreaInsets();
    const HEADER_HEIGHT         = inset.top + 50
    const { children, ...rest } = props;
    return (
        <>
            <StatusBar barStyle={ "light-content" } backgroundColor="transparent"/>
            <View style={ styles.container }>
                <ScrollView
                    //contentInsetAdjustmentBehavior="automatic"
                    style={ { ...StyleSheet.absoluteFillObject, paddingTop: HEADER_HEIGHT } }
                >
                    
                    { children as ReactNode }
                </ScrollView>

                <View absF style={ { top: 0, height: HEADER_HEIGHT, backgroundColor: Colors.primaryVOVNews } }>

                </View>
            </View>


        </>
    );
};

export default DefaultHeader;

const styles = StyleSheet.create( {
    container: {
        flex: 1
    }
} )