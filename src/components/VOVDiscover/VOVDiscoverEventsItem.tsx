import { useNavigation } from "@react-navigation/native";
import React             from "react";

import { StyleSheet }                    from "react-native";
import { Card, Colors, Image, Spacings } from "react-native-ui-lib";

import { DiscoveryScreenNavigationProp } from "~commons";
import { NewsItem }                      from "~commons/interfaces/VOVNews";

const VOVDiscoverEventsItem = ( { item, }: { item: NewsItem } ) => {
    const navigation = useNavigation<DiscoveryScreenNavigationProp>();
    return (
        <Card flex
              onPress={ () => navigation.navigate( "ScreenWebView", { title: item.title, uri: item.link } ) }
        >
            <Card.Image source={ { uri: item.thumbnail } } style={ styles.cover } overlayColor={ Colors.grey1 } overlayType={ Image.overlayTypes.BOTTOM }/>

            <Card.Section flex contentStyle={ styles.content }
                          content={ [
                              { text: "Trong nước", cardBodyHighLight: true },
                              { text: item.title, cardTitleOverlay: true, numberOfLines: 1 },
                              { text: item.content, cardContentOverlaySmall: true, numberOfLines: 2 },
                          ] }
            />
        </Card>

    );
};

export default VOVDiscoverEventsItem;

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
