import { API_HOST }                                from "@env";
import React                                       from "react";
import { PixelRatio, StyleSheet, View }            from "react-native";
import { Card, Colors, Spacings, Text, ViewProps } from "react-native-ui-lib";

import { RadioItem } from "~commons/interfaces/VOVRadio";
import { Devices }   from "~commons";

const VOVDiscoverRadiosItem = ( { item, containerStyle }: { item: RadioItem, containerStyle?: ViewProps["style"] } ) => {
    return (
        <Card
            style={ [ styles.cardContainer, containerStyle ] }
            onPress={ () => console.log( "press on a card" ) }
        >
            <View style={ styles.cardItemImage }>
                <Card.Image
                    source={ { uri: `${ API_HOST }${ item.avatarUrl }` } }
                    style={ styles.cardCover }
                    resizeMethod={ "scale" } resizeMode={ "contain" }
                />
            </View>


            <View style={ styles.cardContent }>
                <Text bodyTitle>{ item.title }</Text>

                <Text bodyContent>
                    { item.subTitle }
                </Text>
            </View>
        </Card>

    );
};

export default VOVDiscoverRadiosItem;


const coverWidth         = PixelRatio.roundToNearestPixel( Devices.width / 7 * 2 );
export const coverHeight = PixelRatio.roundToNearestPixel( coverWidth / 3 * 2 );

const styles = StyleSheet.create( {
    cardContainer: {
        width:            coverWidth,
        height:           coverHeight + 25,
        marginHorizontal: Spacings.s1,
    },
    cardItemImage: {
        width:           coverWidth,
        height:          coverHeight,
        backgroundColor: Colors.yellow50,
        borderRadius:    Spacings.s1
    },
    cardCover:     {
        height: 75,
    },
    cardContent:   {
        flex:             1,
        flexDirection:    "row",
        alignItems:       "center",
        justifyContent:   "space-between",
        marginHorizontal: Spacings.s1
    }
} )
