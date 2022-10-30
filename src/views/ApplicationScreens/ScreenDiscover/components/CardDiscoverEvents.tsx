import React                                                   from "react";
import { FlatList, PixelRatio, StyleSheet, View }              from "react-native";
import { Avatar, Button, Card, Colors, Image, Spacings, Text } from "react-native-ui-lib";
import IonIcon                                                 from "react-native-vector-icons/Ionicons";

import { Devices, DiscoveryScreenNavigationProp } from "~commons";
import { NewsItem }                               from "~commons/interfaces/VOVNews";
import { useNavigation } from "@react-navigation/native";


const CardDiscoverEvents = ( { data }: { data: NewsItem[] } ) => {
    const navigation = useNavigation<DiscoveryScreenNavigationProp>()
    return (
        <View style={ styles.container }>
            <Text sectionTitle>Sự kiện trong tuần</Text>
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
                              onPress={ () => navigation.navigate('ScreenVOVNews') }
                          >

                              <View style={ styles.cardItemImage }>
                                  <Card.Image source={ { uri: item.thumbnail } } style={ styles.cardCover }
                                              overlayColor={ Colors.grey1 }
                                              overlayType={ Image.overlayTypes.BOTTOM }/>

                                  <Card.Section
                                      flex
                                      content={ [
                                          { text: "Trong nước", cardBodyHighLight: true },
                                          { text: item.title, cardTitleOverlaySmall: true, numberOfLines: 2 },
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

                              <View style={ styles.cardContent }>
                                  <View style={ { flex: 1 } }>
                                      <Text style={ { fontSize: 8, color: Colors.grey50, lineHeight: 10, } }
                                            numberOfLines={ 1 }>100 người quan tâm: </Text>
                                      <View style={ { flexDirection: "row", justifyContent: "flex-start", alignItems: "center" } }>
                                          <Avatar size={ 16 } source={ require( "~/assets/images/avatar-03.png" ) } animate={ true }/>
                                          <Avatar size={ 16 } source={ require( "~/assets/images/avatar-04.png" ) } animate={ true }
                                                  containerStyle={ { marginLeft: -Spacings.s2 } }/>
                                          <Avatar size={ 16 } source={ require( "~/assets/images/avatar-03.png" ) } animate={ true }
                                                  containerStyle={ { marginLeft: -Spacings.s2 } }/>
                                          <Avatar size={ 16 } animate={ true } containerStyle={ { marginLeft: -Spacings.s2 } } name={ "JQ" } backgroundColor={ Colors.red80 }/>
                                          <Avatar size={ 16 } animate={ true } containerStyle={ { marginLeft: -Spacings.s2 } } name={ "Q" } backgroundColor={ Colors.grey50 }/>
                                          <Avatar size={ 16 } source={ require( "~/assets/images/avatar-04.png" ) } animate={ true }
                                                  containerStyle={ { marginLeft: -Spacings.s2 } }/>
                                      </View>
                                  </View>
                                  <View style={ { width: coverWidth / 3 } }>
                                      <Button label={ "Theo dõi" } size={ Button.sizes.xSmall } backgroundColor={ Colors.red30 } iconOnRight={ false }
                                              iconSource={ () => <IonIcon name="add" size={ 14 } color={ Colors.white }/> } labelStyle={ {
                                          fontSize: 8
                                      } }/>
                                  </View>

                              </View>
                          </Card>

                      ) }
                      keyExtractor={ ( item, index ) => `Discovery-Card-Event-${ index }` }
            />
        </View>
    );
};

export default CardDiscoverEvents;

const coverWidth  = PixelRatio.roundToNearestPixel( Devices.width / 6 * 3 );
const coverHeight = PixelRatio.roundToNearestPixel( coverWidth / 3 * 2 );

const styles = StyleSheet.create( {
    container:     {
        height:    coverHeight + 40 + 24 + Spacings.s4,
        marginTop: Spacings.s2,
    },
    cardContainer: {
        width:            coverWidth,
        height:           coverHeight + 40,
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
    cardContent:   {
        flex:             1,
        flexDirection:    "row",
        alignItems:       "center",
        justifyContent:   "space-between",
        marginHorizontal: Spacings.s1,

    },


} )
