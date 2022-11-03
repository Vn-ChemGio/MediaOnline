import React                                         from "react";
import { useNavigation }                             from "@react-navigation/native";
import { FlatList, PixelRatio, StyleSheet }          from "react-native";
import { Card, Colors, Image, Spacings, Text, View } from "react-native-ui-lib";

import { Devices, DiscoveryScreenNavigationProp } from "~commons";
import { NewsItem }                               from "~commons/interfaces/VOVNews";
import { VOVDiscoverNewsItem }                    from "~components";

const CardDiscoverNews = ( { data }: { data: NewsItem[] } ) => {
    const navigation = useNavigation<DiscoveryScreenNavigationProp>();

    let [ firstData, ...rest ] = data;
    return (
        <View style={ styles.container }>
            <Text sectionTitle>Tin mới cập nhật</Text>

            <Card
                style={ styles.cardContainer }
                onPress={ () => navigation.navigate( "ScreenWebView", {
                    uri:   firstData.link,
                    title: firstData.title
                } ) }
            >
                <View style={ styles.cardItemImage }>
                    <Card.Image source={ { uri: firstData.thumbnail } } style={ styles.cardCover }
                                overlayColor={ Colors.grey1 }
                                overlayType={ Image.overlayTypes.BOTTOM }/>

                    <Card.Section
                        flex
                        content={ [
                            { text: firstData.title, cardTitleOverlay: true, numberOfLines: 1 },
                            { text: firstData.content, cardSubTitleOverlay: true, numberOfLines: 3 },
                        ] }
                        contentStyle={ styles.cardSectionContent }
                        containerStyle={ {
                            zIndex: 99
                        } }
                    />
                </View>
            </Card>
            <FlatList horizontal nestedScrollEnabled={ true }
                      showsHorizontalScrollIndicator={ false }

                      contentContainerStyle={ styles.contentContainerStyle }
                      data={ rest.slice( 0, 6 ) }
                      keyExtractor={ ( item, index ) => `Discovery-Card-News-${ index }` }
                      renderItem={ props => (
                          <VOVDiscoverNewsItem { ...props }/>
                      ) }

            />
        </View>
    );
};

export default CardDiscoverNews;

const coverWidth  = Devices.width - Spacings.s4 * 2;
const coverHeight = PixelRatio.roundToNearestPixel( 150 );

const styles = StyleSheet.create( {
    container:             {
        width:     "100%",
        marginTop: Spacings.s4,
    },
    cardContainer:         {
        width:            coverWidth,
        height:           coverHeight,
        marginHorizontal: Spacings.s4,
        alignSelf:        "center"
    },
    cardItemImage:         {
        width:  coverWidth,
        height: coverHeight,
        //backgroundColor: "#fff",
        borderRadius: Spacings.s4,
    },
    cardCover:             {
        ...StyleSheet.absoluteFillObject
    },
    cardSectionContent:    {
        flex:             1,
        alignItems:       "flex-start",
        justifyContent:   "flex-end",
        marginHorizontal: Spacings.s4,
        marginBottom:     Spacings.s4
    },
    contentContainerStyle: {
        marginVertical:    Spacings.s1,
        paddingHorizontal: Spacings.s3
    },

} )
