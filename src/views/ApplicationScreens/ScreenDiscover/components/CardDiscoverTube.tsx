import * as React                                    from "react";
import { FlatList, PixelRatio, StyleSheet }          from "react-native";
import { Card, Colors, Image, Spacings, Text, View } from "react-native-ui-lib";

import { Devices }      from "~commons";
import { YouTubeVideo } from "~commons/interfaces/VOVTube";


const CardDiscoverTube = ( { data }: { data: YouTubeVideo[] } ) => {
    return (
        <View style={ styles.container }>
            <Text sectionTitle>VOVTube Update</Text>
            <FlatList horizontal
                      data={ data }
                      showsHorizontalScrollIndicator={ false }
                      style={ { marginHorizontal: -Spacings.s1 } }
                      renderItem={ ( { item, index, separators } ) => (
                          <Card
                              style={ [
                                  styles.cardContainer,
                                  index == 0 ? { marginLeft: Spacings.s4 } : {},
                                  index == (
                                      data.length - 1
                                  ) ? { marginRight: Spacings.s4 } : {}
                              ] }
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

                      ) }
                      keyExtractor={ ( item, index ) => `Discovery-Card-Tube-${ item.etag }` }
            />
        </View>
    );
};

export default CardDiscoverTube;


const coverWidth  = PixelRatio.roundToNearestPixel( Devices.width / 3 * 2 );
const coverHeight = PixelRatio.roundToNearestPixel( coverWidth / 16 * 9 );

const styles = StyleSheet.create( {
    container: {
        height:    coverHeight + 24 + Spacings.s4,
        marginTop: Spacings.s2,
    },

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