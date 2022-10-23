import * as React                                           from "react";
import { FlatList, PixelRatio, StyleSheet }                 from "react-native";
import { Card, Colors, Spacings, Text, ThemeManager, View } from "react-native-ui-lib";
import { Devices }                                          from "~commons";

const data = [
    {
        name:        "VOV 1",
        description: "Thời sự",
        image:       require( "~assets/images/logo-vov1.png" )
    },
    {
        name:        "VOV 2",
        description: "VH - XH",
        image:       require( "~assets/images/logo-vov2.png" )
    },
    {
        name:        "VOV 3",
        description: "Âm Nhạc",
        image:       require( "~assets/images/logo-vov3.png" )
    },
   
    {
        name:        "VOV 4",
        description: "Đông Bắc",
        image:       require( "~assets/images/logo-vov4.png" )
    },
    {
        name:        "VOV 4",
        description: "Tây Bắc",
        image:       require( "~assets/images/logo-vov4.png" )
    },
    {
        name:        "VOV 4",
        description: "Tây Nguyên",
        image:       require( "~assets/images/logo-vov4.png" )
    },
    {
        name:        "VOV 4",
        description: "Tây Bắc",
        image:       require( "~assets/images/logo-vov4.png" )
    }, {
        name:        "VOV 4",
        description: "Tây Bắc",
        image:       require( "~assets/images/logo-vov4.png" )
    }
]


ThemeManager.setComponentTheme( "Card", {
    borderRadius: Spacings.s1,
} );


const CardDiscoverRadio = () => {
    return (
        <View style={ styles.container }>
            <Text sectionTitle>Radio Online</Text>
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
                                  <Card.Image
                                      source={ item.image }
                                      style={ styles.cardCover }
                                      resizeMethod={ "scale" } resizeMode={ "contain" }
                                  />
                              </View>


                              <View style={ styles.cardContent }>
                                  <Text bodyTitle>{ item.name }</Text>

                                  <Text bodyContent>
                                      { item.description }
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
        height:          coverHeight + 25 + 24 + Spacings.s4,
        marginTop:       Spacings.s2,
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
