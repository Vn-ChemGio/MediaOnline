import React                                                                from "react";
import { FlatList, PixelRatio, StyleSheet, Text, View }                     from "react-native";
import { Avatar, Button, Card, List, MD2Colors, Paragraph, Surface, Title } from "react-native-paper";
import { Devices }                                                          from "~commons";
import { Spacings }                                                         from "react-native-ui-lib";

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
        <View style={ { width: Devices.width - Spacings.s8 } }>
            <Title style={ { fontSize: 18, fontWeight: "700" } }>Sự kiện trong tuần</Title>
            <FlatList horizontal
                      data={ data }
                      showsHorizontalScrollIndicator={ false }
                      renderItem={ ( { item } ) => (
                          <View style={ styles.cardItem }>

                              <View>
                                  <Card>
                                      <Card.Cover source={ { uri: item.thumbnail } } resizeMethod={ "scale" } resizeMode={ "cover" } style={ styles.cardCover }/>
                                  </Card>

                                  <View style={ { ...StyleSheet.absoluteFillObject } }>
                                      <View style={ styles.cardContent }>

                                          {
                                              item.label && (<View style={{
                                                  flex: 1,
                                                  flexDirection: "row",
                                                  justifyContent: "flex-start"
                                              }}>
                                                  <Text style={{
                                                      backgroundColor: MD2Colors.red500,
                                                      color: MD2Colors.white,
                                                      borderRadius: 6,
                                                      padding: 3,
                                                      textTransform: "uppercase",
                                                      fontSize: 8,
                                                      fontWeight: "700"

                                                  }}>{item.label}</Text>
                                              </View>)
                                          }

                                          <Text style={ { fontSize: 12, fontWeight: "700", color: MD2Colors.white, lineHeight: 16, textTransform: "uppercase", marginTop:4 } }
                                                     numberOfLines={ 1 }>{ item.title }</Text>
                                          <Text style={ { fontSize: 10, fontWeight: "700", color: MD2Colors.white, lineHeight: 16 } }
                                                     numberOfLines={ 1 }>{ item.content }</Text>

                                      </View>
                                  </View>
                              </View>

                              <View style={ { flexDirection: "row", justifyContent: "space-between", alignItems: "center" } }>
                                  <View style={ { flex: 1 } }>
                                      <Paragraph style={ { fontSize: 8, color: MD2Colors.grey500, lineHeight: 10, } }
                                                 numberOfLines={ 1 }>100 người đã hóng: </Paragraph>
                                      <View style={ { flexDirection: "row", justifyContent: "flex-start", alignItems: "center" } }>
                                          <Avatar.Image size={ 16 } source={ require( "~/assets/images/avatar-03.png" ) }/>
                                          <Avatar.Image size={ 16 } source={ require( "~/assets/images/avatar-04.png" ) } style={ { marginLeft: -4 } }/>
                                          <Avatar.Image size={ 16 } source={ require( "~/assets/images/avatar-03.png" ) } style={ { marginLeft: -4 } }/>
                                          <Avatar.Image size={ 16 } source={ require( "~/assets/images/avatar-04.png" ) } style={ { marginLeft: -4 } }/>
                                      </View>
                                  </View>
                                  <View style={ { width: coverWidth / 3 } }>
                                      <View style={{
                                          flex: 1,
                                          flexDirection: "column",
                                          justifyContent: "center",
                                          alignItems:"center",
                                          borderRadius: 10,
                                      }}>
                                          <Text style={{
                                              backgroundColor: MD2Colors.purple700,
                                              color: MD2Colors.white,
                                              borderRadius: 6,
                                              padding: 3,
                                              textTransform: "uppercase",
                                              fontSize: 8,
                                              fontWeight: "700",
                                              justifyContent:"center",
                                              alignItems:"center"

                                          }}>Hóng tin</Text>
                                      </View>
                                  </View>
                              </View>
                          </View>
                      ) }
            />
        </View>
    );
};

export default CardDiscoverEvents;

const coverWidth  = PixelRatio.roundToNearestPixel( Devices.width / 6 * 3 );
const coverHeight = PixelRatio.roundToNearestPixel( coverWidth / 3 * 2 );

const styles = StyleSheet.create( {
    container:   {
        flex:      1,
        height:    150,
        marginTop: 10
    },
    cardItem:    {
        width:            coverWidth,
        height:           coverHeight + 50,
        marginHorizontal: 4,
        backgroundColor:  "#fff",
    },
    cardCover:   {
        height:       coverHeight,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    cardContent: {
        position:         "absolute",
        bottom:           10,
        marginHorizontal: 4
        //backgroundColor:"red"
    }
} )
