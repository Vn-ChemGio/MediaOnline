import React                        from "react";
import { StyleSheet, View }         from "react-native";
import { Carousel, Spacings, Text } from "react-native-ui-lib";

import { NewsItem }              from "~commons/interfaces/VOVNews";
import { VOVDiscoverEventsItem } from "~components";
import { Devices }               from "~commons";

const CardDiscoverEvents = ( { data }: { data: NewsItem[] } ) => {

    return (
        <View style={ styles.container }>
            <Text sectionTitle>Sự kiện trong tuần</Text>

            <Carousel
                key={ 0 }
                pageWidth={ Devices.width - Spacings.s4 }
                //containerMarginHorizontal={Spacings.s2}
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
                    <VOVDiscoverEventsItem item={ item } key={ `Discovery-Card-Event-${ index }` }/>
                ) ) }
            </Carousel>

        </View>
    );
};


export default CardDiscoverEvents;

const styles = StyleSheet.create( {
    container:             {
        height:    (
                       Devices.width - Spacings.s4
                   ) / 16 * 9 + 18,
        marginTop: Spacings.s2,
    },
    contentContainerStyle: {
        paddingHorizontal: Spacings.s3
    },


} )
