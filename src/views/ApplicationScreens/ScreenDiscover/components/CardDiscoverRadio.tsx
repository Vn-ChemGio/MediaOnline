import { API_HOST }                                         from "@env";
import * as React                                           from "react";
import { FlatList, PixelRatio, StyleSheet }                 from "react-native";
import { Card, Colors, Spacings, Text, ThemeManager, View } from "react-native-ui-lib";
import { Devices }                                          from "~commons";
import { RadioItem }                                        from "~commons/interfaces/VOVRadio";

ThemeManager.setComponentTheme( "Card", {
    borderRadius: Spacings.s1,
} );


const CardDiscoverRadio = ( { data }: { data: RadioItem[] } ) => {
    return (
        <View style={ styles.container }>
            <Text sectionTitle>Radio Online</Text>
            <FlatList horizontal
                      data={ data }
                      showsHorizontalScrollIndicator={ false }
                      style={ { marginHorizontal: -Spacings.s1 } }
                      keyExtractor={ ( item, index ) => `${item.id}-${index}` }
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
                              key={ index }
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

                      ) }
            />
        </View>
    );
}

export default CardDiscoverRadio;

const coverWidth  = PixelRatio.roundToNearestPixel( Devices.width / 7 * 2 );
const coverHeight = PixelRatio.roundToNearestPixel( coverWidth / 3 * 2 );

const styles = StyleSheet.create( {
    container:     {
        height:    coverHeight + 25 + 24 + Spacings.s4,
        marginTop: Spacings.s2,
    },
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
