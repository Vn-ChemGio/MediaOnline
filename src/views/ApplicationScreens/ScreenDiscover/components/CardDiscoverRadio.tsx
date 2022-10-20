import * as React                                           from "react";
import { FlatList, StyleSheet }                             from "react-native";
import { Surface }                                          from "react-native-paper";
import { Card, Colors, Spacings, Text, ThemeManager, View } from "react-native-ui-lib";

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
        description: "Tây Nguyên",
        image:       require( "~assets/images/logo-vov4.png" )
    },
    {
        name:        "VOV 4",
        description: "Tây Bắc",
        image:       require( "~assets/images/logo-vov4.png" )
    },
    {
        name:        "VOV 4",
        description: "Tây Bắc",
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
        <Surface elevation={ 0 } style={ styles.container }>
            <Text title style={ styles.title }>Radio Online</Text>
            <FlatList horizontal
                      data={ data }
                      showsHorizontalScrollIndicator={ false }
                      style={ { marginHorizontal: -Spacings.s1 } }
                      renderItem={ ( { item } ) => (
                          <Card
                              style={ styles.cardContainer }
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
                                  <Text text90 $textDefault>
                                      { item.name }
                                  </Text>

                                  <Text text100 $textDefault>
                                      { item.description }
                                  </Text>
                              </View>
                          </Card>

                      ) }
            />
        </Surface>
    );
}

export default CardDiscoverRadio;

const styles = StyleSheet.create( {
    container:     {
        height:    150,
        marginTop: Spacings.s2
    },
    title:         {
        fontSize:     18,
        fontWeight:   "700",
        marginBottom: Spacings.s2
    },
    cardContainer: {
        width:            100,
        height:           100,
        marginHorizontal: Spacings.s1,
    },
    cardItemImage: {
        width:           100,
        height:          75,
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
