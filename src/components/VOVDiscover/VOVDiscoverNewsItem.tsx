import { useNavigation }                 from "@react-navigation/native";
import React                             from "react";
import { PixelRatio, StyleSheet, View }  from "react-native";
import { Card, Colors, Image, Spacings } from "react-native-ui-lib";


import { Devices, DiscoveryScreenNavigationProp } from "~commons";
import { NewsItem }                               from "~commons/interfaces/VOVNews";


const VOVDiscoverNewsItem = ( { item }: { item: NewsItem } ) => {
    const navigation = useNavigation<DiscoveryScreenNavigationProp>();
    return (
        <Card style={ styles.cardContainer }
              onPress={ () => navigation.navigate( "ScreenWebView", {
                  title: item.title,
                  uri:   item.link
              } ) }
        >
            <View style={ styles.cardItemImage }>
                <Card.Image source={ { uri: item.thumbnail } } style={ styles.cardCover }
                            overlayColor={ Colors.grey1 }
                            overlayType={ Image.overlayTypes.BOTTOM }/>
                <Card.Section
                    flex
                    content={ [
                        { text: item.title, cardTitleOverlaySmall: true, numberOfLines: 1 },
                        { text: item.content, cardContentOverlaySmall: true, numberOfLines: 2 },
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

const coverWidth         = PixelRatio.roundToNearestPixel( (
                                                               Devices.width - Spacings.s4 * 2 - Spacings.s1 * 2
                                                           ) / 2 );
export const coverHeight = coverWidth * 9 / 16;

const styles = StyleSheet.create( {
    cardContainer:      {
        width:  coverWidth,
        height: coverHeight,
        margin: Spacings.s1
    },
    cardItemImage:      {
        width:        coverWidth,
        height:       coverHeight,
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
} )