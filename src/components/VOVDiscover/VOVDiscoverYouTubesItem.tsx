import React                             from "react";
import { PixelRatio, StyleSheet, View }  from "react-native";
import { Card, Colors, Image, Spacings } from "react-native-ui-lib";

import { YouTubeVideo } from "~commons/interfaces/VOVTube";
import { Devices }      from "~commons";

const VOVDiscoverYouTubesItem = ( { item }: { item: YouTubeVideo } ) => {
    return (
        <Card
            style={ [ styles.cardContainer ] }
            onPress={ () => console.log( "press on a card" ) }
        >
            <View style={ styles.cardItemImage }>
                <Card.Image source={ { uri: item.snippet.thumbnails.default.url } } style={ styles.cardCover }
                            overlayColor={ Colors.grey1 }
                            overlayType={ Image.overlayTypes.BOTTOM }/>

                <Card.Section
                    flex
                    content={ [
                        item.snippet.liveBroadcastContent == "live" ? { text: item.snippet.liveBroadcastContent, cardBodyHighLight: true } : undefined,
                        { text: item.snippet.title, cardTitleOverlaySmall: true, numberOfLines: 2 },
                        //  { text: item.content, text100: true, $textGeneral: true, numberOfLines: 1, color: Colors.white }
                    ] }
                    contentStyle={ {
                        flex:             1,
                        alignItems:       "flex-start",
                        justifyContent:   "flex-end",
                        marginHorizontal: Spacings.s2,
                        marginBottom:     Spacings.s2

                    } }
                    containerStyle={ {
                        zIndex: 99
                    } }
                />

            </View>
        </Card>
    );
};

export default VOVDiscoverYouTubesItem;


const coverWidth  = PixelRatio.roundToNearestPixel( Devices.width / 3 * 2 );
export const coverHeight = PixelRatio.roundToNearestPixel( coverWidth / 16 * 9 );

const styles = StyleSheet.create( {
    cardContainer: {
        width:            coverWidth,
        height:           coverHeight,
        marginHorizontal: Spacings.s1,
    },
    cardItemImage: {
        width:  coverWidth,
        height: coverHeight,
        //backgroundColor: "#fff",
        borderRadius: Spacings.s1,
    },
    cardCover:     {
        ...StyleSheet.absoluteFillObject
    },
} )