import React                        from "react";
import { StyleSheet, View }         from "react-native";
import { PanGestureHandler }        from "react-native-gesture-handler";
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
}                                   from "react-native-reanimated";
import { Vector, getYForX }         from "react-native-redash";
import { GraphIndex, graphs, SIZE } from "./CardDiscoverTrending_CommonModels";
import { Spacings }                 from "react-native-ui-lib";


const CURSOR = 50;


interface CardDiscoverTrendingCursorProps {
    index: Animated.SharedValue<GraphIndex>;
    translation: Vector<Animated.SharedValue<number>>;
}


const CardDiscoverTrendingCursor = ( { index, translation }: CardDiscoverTrendingCursorProps ) => {
    const isActive       = useSharedValue( false );
    const onGestureEvent = useAnimatedGestureHandler( {
        onStart:  () => {
            isActive.value = true;
        },
        onActive: ( event ) => {
            if ( event.x < 0 || event.x > SIZE ) return;
            translation.x.value = event.x;
            translation.y.value =
                getYForX( graphs[ index.value ].data.path, translation.x.value ) || 0;
        },
        onEnd:    () => {
            isActive.value = false;
        },
    } );

    const style = useAnimatedStyle( () => {
        const translateX = translation.x.value - CURSOR / 2;
        const translateY = translation.y.value - CURSOR / 2;
        return {
            transform: [
                { translateX },
                { translateY },
                { scale: withSpring( isActive.value ? 1 : 0 ) },
            ],
        };
    } );

    return (
        <View style={ styles.container }>
            <PanGestureHandler { ...{ onGestureEvent } }>
                <Animated.View style={ StyleSheet.absoluteFillObject }>
                    <Animated.View style={ [ styles.cursor, style ] }>
                        <View style={ styles.cursorBody }/>
                    </Animated.View>
                </Animated.View>
            </PanGestureHandler>
        </View>
    );
};

export default CardDiscoverTrendingCursor;

const styles = StyleSheet.create( {
    container:  {
        ...StyleSheet.absoluteFillObject,
        paddingHorizontal: Spacings.s4,
    },
    cursor:     {
        width:           CURSOR,
        height:          CURSOR,
        borderRadius:    CURSOR / 2,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        justifyContent:  "center",
        alignItems:      "center",
    },
    cursorBody: {
        width:           15,
        height:          15,
        borderRadius:    7.5,
        backgroundColor: "black",
    },
} );