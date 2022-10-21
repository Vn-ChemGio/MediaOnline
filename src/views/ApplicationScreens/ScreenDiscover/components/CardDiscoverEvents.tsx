import React                                                         from "react";
import { FlatList, PixelRatio, StyleSheet, View }                    from "react-native";
import { Avatar, Button, Card, Colors, Icon, Image, Spacings, Text } from "react-native-ui-lib";
import IonIcon                                                       from "react-native-vector-icons/Ionicons";
import { Devices }                                                   from "~commons";


const data               = [
    {
        "label":     "Trong nước",
        "title":     "Đại hội Đảng XVII",
        "content":   "Tổng thống Nga Putin tuyên bố thiết quân luật tại 4 tỉnh sáp nhập từ Ukraine.",
        "link":      "https://vnexpress.net/nga-ban-hanh-thiet-quan-luat-o-4-tinh-ukraine-4525535.html",
        "published": 1666181384000,
        "thumbnail": "https://vcdn1-vnexpress.vnecdn.net/2022/10/19/-9856-1666181264.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=NBvgQFbps-q5QcUnVSx9sw"
    },
    {
        "label":     "Trong nước",
        "title":     "Tin bão số 10",
        "content":   "iPhone 14 Pro Max nâng cấp đáng kể về camera với độ phân giải cao, chụp tối tốt, nhưng sự đơn giản trong sử dụng mới là lợi thế của sản phẩm.",
        "link":      "https://vnexpress.net/camera-tren-iphone-14-pro-max-don-gian-tao-khac-biet-4525452.html",
        "published": 1666181166000,
        "thumbnail": "https://vcdn1-sohoa.vnecdn.net/2022/10/19/-2676-1666174230.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=r3OkqSTXrl3jTz2mfMGLIw"
    },
    {
        "label":     "Quốc tế",
        "title":     "EU chuẩn bị trừng phạt Iran",
        "content":   "EU cảnh báo đang chuẩn bị biện pháp trừng phạt Iran sau khi \"thu thập đầy đủ bằng chứng\" rằng nước này cung cấp UAV cho Nga dùng ở Ukraine.",
        "link":      "https://vnexpress.net/eu-chuan-bi-trung-phat-iran-4525528.html",
        "published": 1666180897000,
        "thumbnail": "https://vcdn1-vnexpress.vnecdn.net/2022/10/19/-4029-1666179863.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=JpspWO5bjx5WTJepRpP8pQ"
    },
    {
        "title":     "Thiết bị phát điện từ sóng công suất lớn nhất thế giới",
        "content":   "Công ty Ocean Energy của Ireland đang phát triển một thiết bị năng lượng sóng nổi công suất lớn mang tên OE35 để khai thác sức mạnh của đại dương.",
        "link":      "https://vnexpress.net/thiet-bi-phat-dien-tu-song-cong-suat-lon-nhat-the-gioi-4525138.html",
        "published": 1666180800000,
        "thumbnail": "https://vcdn1-vnexpress.vnecdn.net/2022/10/19/-6537-1666155693.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=gzq7yXCbIeN6JzHbhMHebg"
    },

]
const CardDiscoverEvents = () => {
    return (
        <View style={ styles.container }>
            <Text title style={ styles.title }>Sự kiện trong tuần</Text>
            <FlatList horizontal
                      data={ data }
                      showsHorizontalScrollIndicator={ false }
                      style={ { marginHorizontal: -Spacings.s1 } }
                      renderItem={ ( { item, index, separators } ) => (
                          <Card
                              style={ [
                                  styles.cardContainer,
                                  index == 0 ? { marginLeft: Spacings.s4 } : {},
                                  index == (
                                      data.length - 1
                                  ) ? { marginRight: Spacings.s4 } : {}
                              ] }
                              onPress={ () => console.log( "press on a card" ) }
                          >
                              <View style={ styles.cardItemImage }>
                                  <Card.Section
                                      flex
                                      imageSource={ { uri: item.thumbnail } }
                                      imageStyle={ styles.cardItemImage }
                                      overlayType={ Image.overlayTypes.BOTTOM }
                                      content={ [
                                          { text: item.title, text90: true, $textGeneral: true, numberOfLines: 1, color: Colors.white },
                                          { text: item.content, text100: true, $textGeneral: true, numberOfLines: 1, color: Colors.white }
                                      ] }
                                      contentStyle={ {
                                          flex:             1,
                                          alignItems:       "flex-start",
                                          justifyContent:   "flex-end",
                                          marginHorizontal: Spacings.s2,

                                      } }
                                  />

                              </View>


                              <View style={ styles.cardFollowers }>
                                  <View style={ { flex: 1 } }>
                                      <Text style={ { fontSize: 8, color: Colors.grey50, lineHeight: 10, } }
                                            numberOfLines={ 1 }>100 người quan tâm: </Text>
                                      <View style={ { flexDirection: "row", justifyContent: "flex-start", alignItems: "center" } }>
                                          <Avatar size={ 16 } source={ require( "~/assets/images/avatar-03.png" ) } animate={ true }/>
                                          <Avatar size={ 16 } source={ require( "~/assets/images/avatar-04.png" ) } animate={ true }
                                                  containerStyle={ { marginLeft: -Spacings.s2 } }/>
                                          <Avatar size={ 16 } source={ require( "~/assets/images/avatar-03.png" ) } animate={ true }
                                                  containerStyle={ { marginLeft: -Spacings.s2 } }/>
                                          <Avatar size={ 16 } animate={ true } containerStyle={ { marginLeft: -Spacings.s2 } } name={ "JQ" } backgroundColor={ Colors.red80 }/>
                                          <Avatar size={ 16 } animate={ true } containerStyle={ { marginLeft: -Spacings.s2 } } name={ "Q" } backgroundColor={ Colors.grey50 }/>
                                          <Avatar size={ 16 } source={ require( "~/assets/images/avatar-04.png" ) } animate={ true }
                                                  containerStyle={ { marginLeft: -Spacings.s2 } }/>
                                      </View>
                                  </View>
                                  <View style={ { width: coverWidth / 3 } }>
                                      <Button label={ "Theo dõi" } size={ Button.sizes.xSmall } backgroundColor={ Colors.red30 } iconOnRight={ false }
                                              iconSource={ () => <IonIcon name="add" size={ 14 } color={ Colors.white }/> } labelStyle={ {
                                          fontSize: 8
                                      } }/>
                                  </View>

                              </View>
                          </Card>

                      ) }
            />
        </View>
    );
};

export default CardDiscoverEvents;

const coverWidth  = PixelRatio.roundToNearestPixel( Devices.width / 6 * 3 );
const coverHeight = PixelRatio.roundToNearestPixel( coverWidth / 3 * 2 );

const styles = StyleSheet.create( {
    container:     {
        height:          coverHeight + 40 + 24 + Spacings.s4,
        marginTop:       Spacings.s2,
    },
    title:         {
        fontSize:          18,
        lineHeight:        24,
        fontWeight:        "700",
        marginBottom:      Spacings.s2,
        paddingHorizontal: Spacings.s4,
    },
    cardContainer: {
        width:            coverWidth,
        height:           coverHeight + 40,
        marginHorizontal: Spacings.s1,
    },
    cardItemImage: {
        width:  coverWidth,
        height: coverHeight,
        //backgroundColor: "#fff",
        borderRadius: Spacings.s1,
    },
    cardCover:     {
        height: coverHeight,
    },
    cardFollowers: {
        flex:             1,
        flexDirection:    "row",
        alignItems:       "center",
        justifyContent:   "space-between",
        marginHorizontal: Spacings.s1,

    },


} )
