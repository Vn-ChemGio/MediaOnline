import * as React               from "react";
import { StyleSheet }           from "react-native";
import { Carousel, Spacings, Text, View } from "react-native-ui-lib";

import { YouTubeVideo }                                           from "~commons/interfaces/VOVTube";
import { VOVDiscoverYouTubesItem, VOVDiscoverYouTubesItemHeight } from "~components";
import { Devices }                                                from "~commons";


const CardDiscoverTube = ( { data }: { data: YouTubeVideo[] } ) => {
    return (
        <View style={ styles.container }>
            <Text sectionTitle>VOVTube Update</Text>

            <Carousel
                key={ 0 }
                pageWidth={ Devices.width - Spacings.s4 }
                itemSpacings={ Spacings.s4 }
                initialPage={ 0 }
                containerStyle={ {
                    height: (
                                Devices.width - Spacings.s4
                            ) / 16 * 9
                } }
                pageControlProps={ { limitShownPages: 3 } }
                pageControlPosition={ Carousel.pageControlPositions.UNDER }
                allowAccessibleLayout
            >
                { data.map( ( item, index ) => (
                    <VOVDiscoverYouTubesItem item={ item } key={ `Discovery-Card-Event-${ index }` }/>
                ) ) }
            </Carousel>
            
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
        marginVertical:    Spacings.s1,
        paddingHorizontal: Spacings.s3
    },
} )