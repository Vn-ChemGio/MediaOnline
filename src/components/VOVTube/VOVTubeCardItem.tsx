import React                             from "react";
import { PixelRatio, StyleSheet, View }  from "react-native";
import { Card, Colors, Image, Spacings } from "react-native-ui-lib";

import { Devices } from "~commons";

import VOVTubeInfoFollow   from "./VOVTubeInfoFollow";
import VOVTubeButtonFollow from "./VOVTubeButtonFollow";

import { YouTubeVideo } from "~commons/interfaces/VOVTube";


const VOVTubeCardItem = ( { item, index }: { item: YouTubeVideo, index: number } ) => {
    return (

        <Card
            style={ styles.cardContainer }
            onPress={ () => console.log( "press on a card" ) }
            key={ index }
        >
            <View style={ styles.cardItemImage }>
                <Card.Image source={ { uri: item.snippet.thumbnails.high.url } } style={ styles.cardCover }
                            overlayColor={ Colors.grey1 }
                            overlayType={ Image.overlayTypes.BOTTOM }/>

                <Card.Section
                    flex
                    content={ [
                        item.snippet.liveBroadcastContent == "live" ? { text: item.snippet.liveBroadcastContent, cardBodyHighLight: true } : undefined,
                        { text: item.snippet.title, bodyTitle: true, numberOfLines: 2, color: Colors.white },
                    ] }
                    contentStyle={ styles.cardSectionContent }
                    containerStyle={ {
                        zIndex: 99
                    } }
                />
            </View>

            <View style={ styles.cardContent }>
                <VOVTubeInfoFollow name={ item.snippet.channelTitle } follower={ 555 }/>
                <VOVTubeButtonFollow onPress={ () => {
                } }/>
            </View>
        </Card>
    );
};

export default VOVTubeCardItem;
const coverWidth  = Devices.width - Spacings.s4 * 2;
const coverHeight = PixelRatio.roundToNearestPixel( coverWidth / 16 * 9 );

const styles = StyleSheet.create( {
    cardContainer:      {
        width:            coverWidth,
        height:           coverHeight + Spacings.s8 * 2,
        marginHorizontal: Spacings.s2,
        marginTop:        Spacings.s4
    },
    cardItemImage:      {
        width:  coverWidth,
        height: coverHeight,
        //backgroundColor: "#fff",
        borderRadius: Spacings.s4,
    },
    cardCover:          {
        ...StyleSheet.absoluteFillObject
    },
    cardSectionContent: {
        flex:             1,
        alignItems:       "flex-start",
        justifyContent:   "flex-end",
        marginHorizontal: Spacings.s2,
        marginBottom:     Spacings.s4
    },
    cardContent: {
        flex:             1,
        flexDirection:    "row",
        alignItems:       "center",
        justifyContent:   "space-between",
        marginHorizontal: Spacings.s2,

    },


} )
