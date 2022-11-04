import React                             from "react";
import { PixelRatio, StyleSheet }        from "react-native";
import { Card, Colors, Image, Spacings } from "react-native-ui-lib";

import { YouTubeVideo } from "~commons/interfaces/VOVTube";
import { Devices }      from "~commons";

const VOVDiscoverYouTubesItem = ( { item }: { item: YouTubeVideo } ) => {
    return (
        <Card flex
              onPress={ () => console.log( "press on a card" ) }
        >
            <Card.Image source={ { uri: item.snippet.thumbnails.default.url } } style={ styles.cover } overlayColor={ Colors.grey1 } overlayType={ Image.overlayTypes.BOTTOM }/>

            <Card.Section flex contentStyle={ styles.content }
                          content={ [
                              item.snippet.liveBroadcastContent == "live" ? { text: item.snippet.liveBroadcastContent, cardBodyHighLight: true } : undefined,
                              { text: item.snippet.title, cardTitleOverlay: true, numberOfLines: 2 },
                          ] }
            />
        </Card>
    );
};

export default VOVDiscoverYouTubesItem;


const coverWidth         = PixelRatio.roundToNearestPixel( Devices.width / 3 * 2 );
export const coverHeight = PixelRatio.roundToNearestPixel( coverWidth / 16 * 9 );

const styles = StyleSheet.create( {
    cover:   {
        borderRadius: Spacings.s2,
        ...StyleSheet.absoluteFillObject,
    },
    content: {
        flex:             1,
        alignItems:       "flex-start",
        justifyContent:   "flex-end",
        marginHorizontal: Spacings.s4,
        marginBottom:     Spacings.s4
    },

} )