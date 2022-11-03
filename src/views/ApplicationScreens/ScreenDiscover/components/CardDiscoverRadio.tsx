import * as React                             from "react";
import { FlatList, StyleSheet }               from "react-native";
import { Spacings, Text, ThemeManager, View } from "react-native-ui-lib";

import { RadioItem }                                          from "~commons/interfaces/VOVRadio";
import { VOVDiscoverRadiosItem, VOVDiscoverRadiosItemHeight } from "~components";

ThemeManager.setComponentTheme( "Card", {
    borderRadius: Spacings.s1,
} );


const CardDiscoverRadio = ( { data }: { data: RadioItem[] } ) => {
    return (
        <View style={ styles.container }>
            <Text sectionTitle>Radio Online</Text>
            <FlatList horizontal
                      data={ data }
                      showsHorizontalScrollIndicator={ false }
                      contentContainerStyle={ styles.contentContainerStyle }
                      keyExtractor={ ( item, index ) => `${ item.id }-${ index }` }
                      renderItem={ props => (
                          <VOVDiscoverRadiosItem { ...props }/>
                      ) }
            />
        </View>
    );
}

export default CardDiscoverRadio;

const styles = StyleSheet.create( {
    container:             {
        height:    VOVDiscoverRadiosItemHeight + 25 + 24 + Spacings.s4,
        marginTop: Spacings.s2,
    },
    contentContainerStyle: {
        paddingHorizontal: Spacings.s3
    },
} )
