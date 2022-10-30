import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import React from "react";
import { ImageSourcePropType, PixelRatio, StyleSheet, View } from "react-native";
import { Badge, Button, Card, Colors, Image, Spacings, Text } from "react-native-ui-lib";


import { Devices, NewsScreenNavigationProp, VOVNewsChannelItem } from "~commons";
import { NewsItem } from "~commons/interfaces/VOVNews";
import Icon from "react-native-vector-icons/MaterialIcons";


export interface VOVTubeCardItemProps {
    title: string;
    description: string;
    image: ImageSourcePropType;
    published: number;
    link: string
}

const VOVNewsCardItem = ({ item, channel, index }: { item: NewsItem, channel: VOVNewsChannelItem, index: number }) => {
    const navigation = useNavigation<NewsScreenNavigationProp>();

    return (
            <Card
                    style={styles.cardContainer}
                    key={index}
            >
                <View style={styles.cardItemImage}>
                    <Card.Image source={{ uri: item.thumbnail }} style={styles.cardCover}
                                overlayColor={Colors.grey1}
                                overlayType={Image.overlayTypes.BOTTOM}/>

                    <Card.Section
                            flex
                            content={[
                                { text: item.title, cardTitleOverlay: true, numberOfLines: 2 },
                                { text: `by ${channel.source}`, cardSubTitleOverlay: true, numberOfLines: 1 },
                            ]}
                            contentStyle={styles.cardSectionContent}
                            containerStyle={{
                                zIndex: 99
                            }}
                    />
                </View>

                <View style={styles.cardContent}>
                    <Text cardContentOverlay numberOfLines={3}>{item.content}</Text>
                </View>

                <View style={styles.cardAction}>
                    <View>
                        <Button label={"Chi tiết"} size={Button.sizes.large} link
                                labelStyle={{ textTransform: "uppercase" }}
                                onPress={() => navigation.navigate("ScreenWebView", { uri: item.link })}
                        />
                    </View>
                    <View style={styles.cardActionButtonGroup}>
                        <Icon name="favorite" size={18}
                              color={Math.random() > 0.3 ? Colors.red10 : "rgba(0, 0, 0, 0.54)"}
                              style={{ padding: Spacings.s2 }}/>
                        <Icon name="bookmarks" size={18} color={"rgba(0, 0, 0, 0.54)"}
                              style={{ padding: Spacings.s2 }}/>
                        <Icon name="share" size={18} color={"rgba(0, 0, 0, 0.54)"} style={{ padding: Spacings.s2 }}/>

                    </View>

                </View>
            </Card>
    );
};

export default VOVNewsCardItem;

const coverWidth = Devices.width - Spacings.s4 * 2;
const coverHeight = PixelRatio.roundToNearestPixel(150);

const styles = StyleSheet.create({
    cardContainer: {
        width: coverWidth,
        height: coverHeight + 18 * 3 + Spacings.s2 * 2 + +24 + Spacings.s2 * 2,
        marginHorizontal: Spacings.s2,
        marginTop: Spacings.s4
    },
    cardItemImage: {
        width: coverWidth,
        height: coverHeight,
        //backgroundColor: "#fff",
        borderRadius: Spacings.s4,
    },
    cardCover: {
        ...StyleSheet.absoluteFillObject
    },
    cardSectionContent: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        marginHorizontal: Spacings.s4,
        marginBottom: Spacings.s4
    },
    cardContent: {
        flex: 1,
        justifyContent: "flex-start",
        marginVertical: Spacings.s2,
    },

    cardAction: {
        height: 24 + Spacings.s2 * 2,
        marginHorizontal: Spacings.s4,
        borderTopColor: Colors.grey70,
        borderTopWidth: 0.5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    cardActionButtonGroup: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    }
})
