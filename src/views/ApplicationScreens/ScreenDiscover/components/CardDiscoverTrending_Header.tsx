import React                      from "react";
import { StyleSheet, Text, View } from "react-native";
import { ReText, Vector, round }  from "react-native-redash";
import Animated, {
    interpolate,
    useAnimatedStyle,
    useDerivedValue
}                                 from "react-native-reanimated";

import { GraphIndex, SIZE, graphs } from "./CardDiscoverTrending_CommonModels";


interface CardDiscoverTrendingHeaderProps {
    translation: Vector<Animated.SharedValue<number>>;
    index: Animated.SharedValue<GraphIndex>;
}


const CardDiscoverTrendingHeader = ( { translation, index }: CardDiscoverTrendingHeaderProps ) => {
    const data = useDerivedValue( () => graphs[ index.value ].data );

    const price         = useDerivedValue( () => {
        const p = interpolate(
            translation.y.value,
            [ 0, SIZE ],
            [ data.value.maxPrice, data.value.minPrice ]
        );
        return `$ ${ round( p, 2 ).toLocaleString( "en-US", { currency: "USD" } ) }`;
    } );
    const percentChange = useDerivedValue(
        () => `${ round( data.value.percentChange, 3 ) }%`
    );
    const label         = useDerivedValue( () => data.value.label );
    const name         = useDerivedValue( () => "Etherum" );
    const style         = useAnimatedStyle( () => (
        {
            fontWeight: "500",
            fontSize:   18,
            color:      data.value.percentChange > 0 ? "green" : "red",
        }
    ) );
    return (
        <View style={ styles.values }>
            <View>
                <ReText style={ style } text={ price }/>
                <ReText style={ styles.label } text={ name }/>
            </View>
            <View>
                <ReText style={ style } text={ percentChange }/>
                <ReText style={ styles.label } text={ label }/>
            </View>
        </View>
    );
};

export default CardDiscoverTrendingHeader;

const styles = StyleSheet.create( {
    values: {
        flexDirection:  "row",
        justifyContent: "space-between",
    },
    value:  {
        fontWeight: "500",
        fontSize:   18,
    },
    label:  {
        fontSize: 14,
    },
} )