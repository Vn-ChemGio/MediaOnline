import React                             from "react";
import { StyleSheet }                    from "react-native";
import { Card, List }                    from "react-native-paper";
import { Spacings, Text, View }          from "react-native-ui-lib";
import { NewsItem }                      from "~commons/interfaces/VOVNews";
import { useNavigation }                 from "@react-navigation/native";
import { DiscoveryScreenNavigationProp } from "~commons";

const CardDiscoverNews = ( { data }: { data: NewsItem[] } ) => {
    const navigation = useNavigation<DiscoveryScreenNavigationProp>();

    return (
        <View style={ styles.container }>
            <Text sectionTitle>Tin mới cập nhật</Text>
            <Card style={ { marginLeft: Spacings.s4, marginRight: Spacings.s4 } }>

                {
                    data.map( ( item, index ) => (
                        <List.Item
                            title={ item.title }
                            titleStyle={ { fontWeight: "700" } }
                            description={ item.content }
                            right={ props => <List.Icon { ...props } icon="play"/> }
                            key={ index }
                            onPress = {()=>{ navigation.navigate('ScreenWebView',{
                                title: item.title,
                                uri: item.link
                            })}}
                        />
                    ) )
                }
            </Card>
        </View>
    );
};

export default CardDiscoverNews;

const styles = StyleSheet.create( {
    container: {
        width:     "100%",
        marginTop: Spacings.s2,
    }
} )
