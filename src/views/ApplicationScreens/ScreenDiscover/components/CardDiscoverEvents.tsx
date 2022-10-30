import React                          from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Spacings, Text }             from "react-native-ui-lib";

import { NewsItem }                                            from "~commons/interfaces/VOVNews";
import { VOVDiscoverEventsItem, VOVDiscoverEventsItemHeight, } from "~components";

const CardDiscoverEvents = ( { data }: { data: NewsItem[] } ) => {
    return (
        <View style={ styles.container }>
            <Text sectionTitle>Sự kiện trong tuần</Text>
            <FlatList horizontal
                      data={ data }
                      showsHorizontalScrollIndicator={ false }
                      contentContainerStyle={ styles.contentContainerStyle }
                      keyExtractor={ ( item, index ) => `Discovery-Card-Event-${ index }` }
                      renderItem={ props => (
                          <VOVDiscoverEventsItem { ...props }/>
                      ) }
            />
        </View>
    );
};

export default CardDiscoverEvents;

const styles = StyleSheet.create( {
    container:             {
        height:    VOVDiscoverEventsItemHeight + 40 + 24 + Spacings.s4,
        marginTop: Spacings.s2,
    },
    contentContainerStyle: {
        paddingHorizontal: Spacings.s2
    },


} )
