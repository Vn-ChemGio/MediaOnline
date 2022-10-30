import { useNavigation }                               from "@react-navigation/native";
import React                                           from "react";
import { PixelRatio, StyleSheet, View }                from "react-native";
import { Button, Card, Colors, Image, Spacings, Text } from "react-native-ui-lib";


import { Devices, DiscoveryScreenNavigationProp } from "~commons";
import { NewsItem }                               from "~commons/interfaces/VOVNews";
import Icon                                       from "react-native-vector-icons/MaterialIcons";

const VOVDiscoverNewsItem = ( { item }: { item: NewsItem } ) => {
    const navigation = useNavigation<DiscoveryScreenNavigationProp>();
    return (
        <Card
            style={ styles.cardContainer }
        >
            <View style={ styles.cardItemImage }>
                <Card.Image source={ { uri: item.thumbnail } } style={ styles.cardCover }
                            overlayColor={ Colors.grey1 }
                            overlayType={ Image.overlayTypes.BOTTOM }/>

                <Card.Section
                    flex
                    content={ [
                        { text: item.title, cardTitleOverlay: true, numberOfLines: 2 },
                        { text: `by VNExpress`, cardSubTitleOverlay: true, numberOfLines: 1 },
                    ] }
                    contentStyle={ styles.cardSectionContent }
                    containerStyle={ {
                        zIndex: 99
                    } }
                />
            </View>

           
        </Card>

    );
};

export default VOVDiscoverNewsItem;

const coverWidth         = PixelRatio.roundToNearestPixel( Devices.width / 6 * 4 );
export const coverHeight = PixelRatio.roundToNearestPixel( 150 );

const styles = StyleSheet.create( {
    cardContainer:      {
        width:            coverWidth,
        height:           coverHeight + 18 * 3 + Spacings.s2 * 2 + +24 + Spacings.s2 * 2,
        marginHorizontal: Spacings.s1,
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
        marginBottom:     Spacings.s2
    },
    cardContent:        {
        flex:           1,
        justifyContent: "flex-start",
        marginVertical: Spacings.s1,
    },

    cardAction:            {
        height:           24 + Spacings.s2 * 2,
        marginHorizontal: Spacings.s2,
        borderTopColor:   Colors.grey70,
        borderTopWidth:   0.5,
        flexDirection:    "row",
        justifyContent:   "space-between",
        alignItems:       "center"
    },
    cardActionButtonGroup: {
        flex:           1,
        flexDirection:  "row",
        justifyContent: "flex-end",
        alignItems:     "center"
    }
} )