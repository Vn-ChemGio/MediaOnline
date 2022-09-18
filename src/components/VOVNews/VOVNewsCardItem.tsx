import React                          from "react";
import { ImageSourcePropType, View }  from "react-native";
import { Spacings, Typography } from "react-native-ui-lib";
import { Avatar, Button, Card, IconButton, MD3Colors, Paragraph, Title, List } from "react-native-paper"
import { Devices } from "~commons";

Typography.loadTypographies(
    {
        titleNews:         { fontSize: 14, fontWeight: "500", lineHeight: 20 },
        publishedDateNews: { fontSize: 10, fontWeight: "300", lineHeight: 18 },
        descriptionNews:   { fontSize: 12, fontWeight: "400", lineHeight: 18 },
    } );

export interface VOVTubeCardItemProps {
    title: string;
    description: string;
    image: ImageSourcePropType;
    published: number;
}
export interface VOVTubeCardHeaderItemProps {
    title: string;
    published: number;
}


const HeaderNews =  ({ title, published }: VOVTubeCardHeaderItemProps)=> {
    return (
        <View/>
    )
}

const VOVNewsCardItem = ( { image, title, description, published }: VOVTubeCardItemProps ) => {
    return (
        <View style={{width : Devices.width - Spacings.s8, paddingBottom: Spacings.s4}}>
            <Card>
                <Card.Title
                        title={title}
                        subtitle={`${new Date( published ).toLocaleDateString()} ${new Date( published ).toLocaleTimeString()}`}
                       // left={(props) => <Avatar.Icon {...props} icon="newspaper" />}
                        right={(props) => <IconButton {...props} icon="ellipsis-vertical-outline" onPress={() => {}} />}
                />
                <Card.Cover source={image } />
                <Card.Content>
                    <Paragraph style={{textAlign :"justify", marginTop: Spacings.s4}}>{description}</Paragraph>
                </Card.Content>

                <Card.Actions>
                    <List.Icon
                            icon="heart"
                            color={MD3Colors.error50}
                    />
                    <List.Icon
                            icon="arrow-redo"
                            color={MD3Colors.primary50}
                    />
                </Card.Actions>
            </Card>

            {/*<Card c containerStyle={ { marginTop: Spacings.s4 } } onPress={ () => {
            } }>
                <Card.Section
                    content={ [
                        { text: title, titleNews: true, $textDefault: true, maxLines: 2, color: "rgb(3, 3, 3)" },
                    ] }
                    style={ { paddingHorizontal: Spacings.s2, marginVertical: Spacings.s1 } }
                    contentStyle={ { flexDirection: "row", justifyContent: "space-between" } }
                />
                <Card.Section
                    content={ [
                        { text: new Date( published ).toISOString(), publishedDateNews: true, $textDefault: true, maxLines: 1, color: "rgba(96,96,96,0.6)" },
                    ] }
                    style={ { paddingHorizontal: Spacings.s2, marginBottom: Spacings.s1 } }

                />

                <Card.Section center-H imageStyle={ { height: 240, width: Devices.width - Spacings.s8, resizeMode: "cover" } }
                              imageSource={ image }
                              style={ { paddingBottom: 10 } }
                />

                <Card.Section
                    content={ [
                        { text: description, descriptionNews: true, $textDefault: true, maxLines: 4, color: "rgb(69, 69, 69)" },
                    ] }
                    style={ { paddingHorizontal: Spacings.s2, marginVertical: Spacings.s2 } }
                    contentStyle={ { flexDirection: "row", justifyContent: "space-between" } }
                />
            </Card>*/}
        </View>
    );
};

export default VOVNewsCardItem;
