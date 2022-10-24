import * as React                                                  from "react";
import { FlatList, PixelRatio, StyleSheet }                        from "react-native";
import { Card, Colors, Image, Spacings, Text, ThemeManager, View } from "react-native-ui-lib";
import { Devices }                                                 from "~commons";

const data             = [
    {
        "kind":    "youtube#searchResult",
        "etag":    "oQ1b03DPTGEW6m7ifV8Am4TeUxw",
        "id":      {
            "kind":    "youtube#video",
            "videoId": "EWybbFy__mw"
        },
        "snippet": {
            "publishedAt":          "2021-08-31T11:00:20Z",
            "channelId":            "UC_YlqtZlCE7wUXaxCt2M3-g",
            "title":                "Đến tận cuối đời Bác mới thổ lộ lý do Bác không lập gia đình #shorts",
            "description":          "Đến tận cuối đời Bác mới thổ lộ lý do Bác không lập gia đình #shorts Truyện Đêm Khuya VOV Hay Nhất : https://bit.ly/32US1fX ...",
            "thumbnails":           {
                "default": {
                    "url":    "https://i.ytimg.com/vi/EWybbFy__mw/default.jpg",
                    "width":  120,
                    "height": 90
                },
                "medium":  {
                    "url":    "https://i.ytimg.com/vi/EWybbFy__mw/mqdefault.jpg",
                    "width":  320,
                    "height": 180
                },
                "high":    {
                    "url":    "https://i.ytimg.com/vi/EWybbFy__mw/hqdefault.jpg",
                    "width":  480,
                    "height": 360
                }
            },
            "channelTitle":         "VOV Live - Đọc Truyện",
            "liveBroadcastContent": "none",
            "publishTime":          "2021-08-31T11:00:20Z"
        }
    },
    {
        "kind":    "youtube#searchResult",
        "etag":    "7lRvBTXWmjncJBZc_jarPIwB0JU",
        "id":      {
            "kind":    "youtube#video",
            "videoId": "0Fn0A3HumLc"
        },
        "snippet": {
            "publishedAt":          "2022-06-02T03:00:00Z",
            "channelId":            "UC_YlqtZlCE7wUXaxCt2M3-g",
            "title":                "Trước Lúc Vĩnh Biệt Bác Nói: Bác Không Thể Bỏ Dân Mà Đi Được | Tư Liệu Lịch Sử Việt Nam #shorts",
            "description":          "Trước Lúc Vĩnh Biệt Bác Nói: Bác Không Thể Bỏ Dân Mà Đi Được | Tư Liệu Lịch Sử Việt Nam #shorts Truyện Đêm Khuya VOV ...",
            "thumbnails":           {
                "default": {
                    "url":    "https://i.ytimg.com/vi/0Fn0A3HumLc/default.jpg",
                    "width":  120,
                    "height": 90
                },
                "medium":  {
                    "url":    "https://i.ytimg.com/vi/0Fn0A3HumLc/mqdefault.jpg",
                    "width":  320,
                    "height": 180
                },
                "high":    {
                    "url":    "https://i.ytimg.com/vi/0Fn0A3HumLc/hqdefault.jpg",
                    "width":  480,
                    "height": 360
                }
            },
            "channelTitle":         "VOV Live - Đọc Truyện",
            "liveBroadcastContent": "none",
            "publishTime":          "2022-06-02T03:00:00Z"
        }
    },
    {
        "kind":    "youtube#searchResult",
        "etag":    "r8DYzC_HrskmkYnB69M40Cj-1YU",
        "id":      {
            "kind":    "youtube#video",
            "videoId": "4SdWx295YAk"
        },
        "snippet": {
            "publishedAt":          "2022-05-17T03:00:03Z",
            "channelId":            "UC_YlqtZlCE7wUXaxCt2M3-g",
            "title":                "Kể Chuyện Về Bác Hồ - Là Người Việt Nam Bạn Cần Ghi Nhớ | Tư Liệu Lịch Sử Việt Nam #shorts",
            "description":          "Kể Chuyện Về Bác Hồ - Là Người Việt Nam Bạn Cần Ghi Nhớ | Tư Liệu Lịch Sử Việt Nam #shorts Truyện Đêm Khuya VOV Hay ...",
            "thumbnails":           {
                "default": {
                    "url":    "https://i.ytimg.com/vi/4SdWx295YAk/default.jpg",
                    "width":  120,
                    "height": 90
                },
                "medium":  {
                    "url":    "https://i.ytimg.com/vi/4SdWx295YAk/mqdefault.jpg",
                    "width":  320,
                    "height": 180
                },
                "high":    {
                    "url":    "https://i.ytimg.com/vi/4SdWx295YAk/hqdefault.jpg",
                    "width":  480,
                    "height": 360
                }
            },
            "channelTitle":         "VOV Live - Đọc Truyện",
            "liveBroadcastContent": "none",
            "publishTime":          "2022-05-17T03:00:03Z"
        }
    }
]
const CardDiscoverTube = () => {
    return (
        <View style={ styles.container }>
            <Text sectionTitle>VOVTube Update</Text>
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
                                      imageSource={ { uri: item.snippet.thumbnails.default.url } }
                                      imageStyle={ styles.cardItemImage }
                                      overlayType={ Image.overlayTypes.BOTTOM }
                                      content={ [
                                          ...(
                                              item.snippet.liveBroadcastContent ? [] : [
                                                  {
                                                      text:          item.snippet.title,
                                                      text90:        true,
                                                      $textGeneral:  true,
                                                      numberOfLines: 1,
                                                      color:         Colors.white
                                                  }
                                              ]
                                          )
                                      ].concat( [
                                          { text: item.snippet.title, text90: true, $textGeneral: true, numberOfLines: 2, color: Colors.white },
                                      ] ) }
                                      contentStyle={ {
                                          flex:             1,
                                          alignItems:       "flex-start",
                                          justifyContent:   "flex-end",
                                          marginHorizontal: Spacings.s2,
                                          marginBottom: Spacings.s4

                                      } }
                                  />

                              </View>
                          </Card>

                      ) }
                      keyExtractor={ ( item, index ) => `Discovery-Card-Tube-${ item.etag }` }
            />
        </View>
    );
};

export default CardDiscoverTube;


const coverWidth  = PixelRatio.roundToNearestPixel( Devices.width / 3 * 2 );
const coverHeight = PixelRatio.roundToNearestPixel( coverWidth / 16 * 9 );

const styles = StyleSheet.create( {
    container:     {
        height:    coverHeight + 24 + Spacings.s4,
        marginTop: Spacings.s2,
    },
   
    cardContainer: {
        width:            coverWidth,
        height:           coverHeight,
        marginHorizontal: Spacings.s1,
    },
    cardItemImage: {
        width:  coverWidth,
        height: coverHeight,
        //backgroundColor: "#fff",
        borderRadius: Spacings.s1,
    },

} )