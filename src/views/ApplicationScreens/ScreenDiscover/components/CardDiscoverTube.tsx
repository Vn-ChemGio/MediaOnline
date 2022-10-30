import * as React               from "react";
import { FlatList, StyleSheet } from "react-native";
import { Spacings, Text, View } from "react-native-ui-lib";

import { YouTubeVideo }                                                                        from "~commons/interfaces/VOVTube";
import { VOVDiscoverRadiosItemHeight, VOVDiscoverYouTubesItem, VOVDiscoverYouTubesItemHeight } from "~components";


const CardDiscoverTube = ( { data }: { data: YouTubeVideo[] } ) => {
    return (
        <View style={ styles.container }>
            <Text sectionTitle>VOVTube Update</Text>
            <FlatList horizontal
                      data={ data }
                      showsHorizontalScrollIndicator={ false }
                      contentContainerStyle={ styles.contentContainerStyle }
                      keyExtractor={ ( item, index ) => `Discovery-Card-Tube-${ item.etag }-${index}` }
                      renderItem={ props => (
                          <VOVDiscoverYouTubesItem { ...props }/>
                      ) }

            />
        </View>
    );
};

export default CardDiscoverTube;

const styles = StyleSheet.create( {
    container:             {
        height:    VOVDiscoverYouTubesItemHeight + 25 + 24 + Spacings.s4,
        marginTop: Spacings.s2,
    },
    contentContainerStyle: {
        paddingHorizontal: Spacings.s2
    },
} )