import React                                                      from "react";
import { ImageSourcePropType, View }                              from "react-native";
import { Colors, Spacings }                                       from "react-native-ui-lib";
import { Card, Divider, IconButton, MD3Colors, Paragraph, Title } from "react-native-paper"
import { Devices, ScreenVOVNewsChannelStackNavigationParamList }  from "~commons";
import { useNavigation }                                          from "@react-navigation/native";
import { StackNavigationProp }                                    from "@react-navigation/stack";


export interface VOVTubeCardItemProps {
    title: string;
    description: string;
    image: ImageSourcePropType;
    published: number;
    link: string
}

const VOVNewsCardItem = ( { image, title, description, published, link }: VOVTubeCardItemProps ) => {
    const navigation = useNavigation<StackNavigationProp<ScreenVOVNewsChannelStackNavigationParamList>>();
    const openNew    = () => {
        navigation.navigate( "ScreenWebView", { uri: link } )
    }
    return (
        <View style={ { width: Devices.width - Spacings.s8, paddingBottom: Spacings.s4 } }>
            <Title style={ { fontSize: 16, lineHeight: 22, fontWeight: "700", textAlign: "justify", marginBottom: Spacings.s4 } } numberOfLines={ 1 }
                   onPress={ openNew }>{ title }</Title>
            <Paragraph style={ { fontSize: 14, textAlign: "justify", marginBottom: Spacings.s2 } } numberOfLines={ 3 }>{ description } </Paragraph>
            <Card.Cover source={ image }/>

            <View style={ { flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center" } }>
                <Paragraph style={ {
                    fontSize: 12,
                    color:    Colors.grey30
                } }> { `${ new Date( published ).toLocaleDateString() } ${ new Date( published ).toLocaleTimeString() }` }</Paragraph>
                <View style={ { flex: 1, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" } }>
                    <IconButton
                        icon="heart"
                        iconColor={ MD3Colors.error50 }
                        size={ 20 }
                        onPress={ () => console.log( "Pressed" ) }
                    />
                    <IconButton
                        icon="bookmark"
                        iconColor={ MD3Colors.primary60 }
                        size={ 20 }
                        onPress={ () => console.log( "Pressed" ) }
                    />
                    <IconButton
                        icon="arrow-redo"
                        iconColor={ MD3Colors.primary50 }
                        size={ 20 }
                        onPress={ () => console.log( "Pressed" ) }
                    />
                </View>
            </View>
            <Divider bold style={ { marginTop: 10, backgroundColor: "rgb(234,17,126)" } }/>
        </View>
    );
};

export default VOVNewsCardItem;
