import { useNavigation }                                                  from "@react-navigation/native";
import React                                                              from "react";
import { PixelRatio, StyleSheet, View }                                   from "react-native";
import { Avatar, Button, Card, Colors, Image, Spacings, Text, ViewProps } from "react-native-ui-lib";
import IonIcon                                                            from "react-native-vector-icons/Ionicons";

import { Devices, DiscoveryScreenNavigationProp } from "~commons";
import { NewsItem }                               from "~commons/interfaces/VOVNews";

const VOVDiscoverEventsItem = ( { item, containerStyle }: { item: NewsItem, containerStyle?: ViewProps["style"] } ) => {
    const navigation = useNavigation<DiscoveryScreenNavigationProp>();
    return (
        <Card
            style={ [ styles.cardContainer, containerStyle ] }
            onPress={ () => navigation.navigate( "ScreenWebView", {
                uri: item.link
            } ) }
        >

            <View style={ styles.cardItemImage }>
                <Card.Image source={ { uri: item.thumbnail } } style={ styles.cardCover }
                            overlayColor={ Colors.grey1 }
                            overlayType={ Image.overlayTypes.BOTTOM }/>

                <Card.Section
                    flex
                    content={ [
                        { text: "Trong nước", cardBodyHighLight: true },
                        {
                            text:                  item.title,
                            cardTitleOverlaySmall: true,
                            numberOfLines:         2
                        },
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
                    <View style={ {
                        flexDirection:  "row",
                        justifyContent: "flex-start",
                        alignItems:     "center"
                    } }>
                        <Avatar size={ 16 } source={ require( "~/assets/images/avatar-03.png" ) }
                                animate={ true }/>
                        <Avatar size={ 16 } source={ require( "~/assets/images/avatar-04.png" ) }
                                animate={ true }
                                containerStyle={ { marginLeft: -Spacings.s2 } }/>
                        <Avatar size={ 16 } source={ require( "~/assets/images/avatar-03.png" ) }
                                animate={ true }
                                containerStyle={ { marginLeft: -Spacings.s2 } }/>
                        <Avatar size={ 16 } animate={ true }
                                containerStyle={ { marginLeft: -Spacings.s2 } } name={ "JQ" }
                                backgroundColor={ Colors.red80 }/>
                        <Avatar size={ 16 } animate={ true }
                                containerStyle={ { marginLeft: -Spacings.s2 } } name={ "Q" }
                                backgroundColor={ Colors.grey50 }/>
                        <Avatar size={ 16 } source={ require( "~/assets/images/avatar-04.png" ) }
                                animate={ true }
                                containerStyle={ { marginLeft: -Spacings.s2 } }/>
                    </View>
                </View>
                <View style={ { width: coverWidth / 3 } }>
                    <Button label={ "Theo dõi" } size={ Button.sizes.xSmall }
                            backgroundColor={ Colors.red30 } iconOnRight={ false }
                            iconSource={ () => <IonIcon name="add" size={ 14 }
                                                        color={ Colors.white }/> } labelStyle={ {
                        fontSize: 8
                    } }/>
                </View>

            </View>
        </Card>

    );
};

export default VOVDiscoverEventsItem;

const coverWidth         = PixelRatio.roundToNearestPixel( Devices.width / 6 * 3 );
export const coverHeight = PixelRatio.roundToNearestPixel( coverWidth / 3 * 2 );

const styles = StyleSheet.create( {
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