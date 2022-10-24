import React, { useCallback, useEffect, useState } from "react";
import { FlatList, PixelRatio, StyleSheet, View } from "react-native";
import { Card, Colors, Image, ListItem, LoaderScreen, Spacings } from "react-native-ui-lib";
import Icon from "react-native-vector-icons/Ionicons"

import { AvatarHeaderScrollView, IOSSegmentedControl, VOVTubeCardItem } from "~components";
import axios from "axios";
import { API_HOST } from "@env";
import { Devices } from "~commons";

const mockData: YouTubeVideo[] = [
    {
        "kind": "youtube#searchResult",
        "etag": "oQ1b03DPTGEW6m7ifV8Am4TeUxw",
        "id": {
            "kind": "youtube#video",
            "videoId": "EWybbFy__mw"
        },
        "snippet": {
            "publishedAt": "2021-08-31T11:00:20Z",
            "channelId": "UC_YlqtZlCE7wUXaxCt2M3-g",
            "title": "Đến tận cuối đời Bác mới thổ lộ lý do Bác không lập gia đình #shorts",
            "description": "Đến tận cuối đời Bác mới thổ lộ lý do Bác không lập gia đình #shorts Truyện Đêm Khuya VOV Hay Nhất : https://bit.ly/32US1fX ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/EWybbFy__mw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/EWybbFy__mw/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/EWybbFy__mw/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "VOV Live - Đọc Truyện",
            "liveBroadcastContent": "live",
            "publishTime": "2021-08-31T11:00:20Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "7lRvBTXWmjncJBZc_jarPIwB0JU",
        "id": {
            "kind": "youtube#video",
            "videoId": "0Fn0A3HumLc"
        },
        "snippet": {
            "publishedAt": "2022-06-02T03:00:00Z",
            "channelId": "UC_YlqtZlCE7wUXaxCt2M3-g",
            "title": "Trước Lúc Vĩnh Biệt Bác Nói: Bác Không Thể Bỏ Dân Mà Đi Được | Tư Liệu Lịch Sử Việt Nam #shorts",
            "description": "Trước Lúc Vĩnh Biệt Bác Nói: Bác Không Thể Bỏ Dân Mà Đi Được | Tư Liệu Lịch Sử Việt Nam #shorts Truyện Đêm Khuya VOV ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/0Fn0A3HumLc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/0Fn0A3HumLc/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/0Fn0A3HumLc/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "VOV Live - Đọc Truyện",
            "liveBroadcastContent": "none",
            "publishTime": "2022-06-02T03:00:00Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "r8DYzC_HrskmkYnB69M40Cj-1YU",
        "id": {
            "kind": "youtube#video",
            "videoId": "4SdWx295YAk"
        },
        "snippet": {
            "publishedAt": "2022-05-17T03:00:03Z",
            "channelId": "UC_YlqtZlCE7wUXaxCt2M3-g",
            "title": "Kể Chuyện Về Bác Hồ - Là Người Việt Nam Bạn Cần Ghi Nhớ | Tư Liệu Lịch Sử Việt Nam #shorts",
            "description": "Kể Chuyện Về Bác Hồ - Là Người Việt Nam Bạn Cần Ghi Nhớ | Tư Liệu Lịch Sử Việt Nam #shorts Truyện Đêm Khuya VOV Hay ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/4SdWx295YAk/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/4SdWx295YAk/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/4SdWx295YAk/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "VOV Live - Đọc Truyện",
            "liveBroadcastContent": "none",
            "publishTime": "2022-05-17T03:00:03Z"
        }
    }
]
export type YouTubeVideoThumbnail = {
    url: string;
    width: number;
    height: number;
}
export type YouTubeVideoLiveBroadcastContent = "none" | "live" | "completed";

export interface YouTubeVideo {
    kind: string,
    etag: string,
    id: {
        kind: string,
        videoId: string
    },
    snippet: {
        channelId: string,
        title: string,
        description: string,
        thumbnails: {
            default: YouTubeVideoThumbnail,
            medium: YouTubeVideoThumbnail,
            high: YouTubeVideoThumbnail
        },
        channelTitle: string,
        liveBroadcastContent: YouTubeVideoLiveBroadcastContent,
        publishTime: string,
        publishedAt: string,
    }
}

const ScreenVOVTube = () => {
    const [segmentsIndex, setSegmentsIndex] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<YouTubeVideo[]>(mockData);

    const onChangeIndex = useCallback((index: number) => {
        setSegmentsIndex(index)
    }, []);

    useEffect(() => {
        (async () => {
            try {
                !loading && setLoading(true);
                let dataFetch: YouTubeVideo[] = (await axios.get(`${API_HOST}/VOVTube?type=video&eventType=${segmentsIndex ? "none" : "live"}`)).data;
                setData(dataFetch);

            } catch (e) {

            } finally {
                setLoading(false)
            }

        })()
    }, [segmentsIndex])
    return (
            <AvatarHeaderScrollView
                    rightTopIcon={() => <Icon name="options-outline" size={24} color={Colors.white}/>}
                    rightTopIconOnPress={() => {
                    }}
                    backgroundColor={Colors.primaryVOVTube}
                    title={"VOV Tube"}
                    subtitle={"Sóng xanh trên Internet.\nTruyền thông không giới hạn."}
            >
                <>
                    <IOSSegmentedControl
                            segments={[
                                {
                                    label: "Trực tiếp",
                                    iconSource: Icon.getImageSourceSync("radio-outline"),
                                    iconStyle: { marginHorizontal: Spacings.s4, width: 16, height: 16 },
                                }, {
                                    label: "Đã phát",
                                    iconSource: Icon.getImageSourceSync("calendar-outline"),
                                    iconStyle: { marginHorizontal: Spacings.s4, width: 16, height: 16 },
                                    iconOnRight: true
                                }
                            ]}
                            onChangeIndex={onChangeIndex}
                            containerStyle={{
                                width: "100%"
                            }}

                    />
                    {
                        loading ?
                                <LoaderScreen message={'Message goes here'} color={Colors.grey40}/> :
                                data.map((item, index) =>
                                        (
                                                <VOVTubeCardItem title={item.snippet.title}
                                                                 chanelName={item.snippet.channelTitle}
                                                                 chanelFollower={514} iconOnRight={"📻"}
                                                                 image={{ uri: item.snippet.thumbnails.high.url }} key={index}/>

                                        )
                                )

                        /*  <FlatList
                                    data={ data }
                                    showsHorizontalScrollIndicator={ false }
                                    style={ { marginHorizontal: -Spacings.s1 } }
                                    renderItem={ ( { item, index, separators } ) => (


                                    ) }
                                    keyExtractor={ ( item, index ) => `Discovery-Card-Tube-${ item.etag }` }
                          />*/
                    }
                    {/* <View>
                        {
                            (
                                    () => {
                                        switch (segmentsIndex) {
                                            case 0:
                                                return <VOVTubeCardItem title={"Kể Chuyện Đêm Khuya!"}
                                                                        chanelName={"VOV Live - Đọc Truyện"}
                                                                        chanelFollower={514}
                                                                        iconOnRight={"📻"}
                                                                        image={{ uri: "https://i3.ytimg.com/vi/HzvSKVI_twY/maxresdefault.jpg" }}/>

                                            case 1:
                                                return <>
                                                    <VOVTubeCardItem title={"Truyện Đêm Khuya: BIẾN HÌNH"}
                                                                     chanelName={"VOV Live - Đọc Truyện"}
                                                                     chanelFollower={514}
                                                                     iconOnRight={"📻"}
                                                                     image={{ uri: "https://i3.ytimg.com/vi/zY3Dx4szras/maxresdefault.jpg" }}/>
                                                    <VOVTubeCardItem title={"Truyện Đêm Khuya: LÁ MẤN RƠI NGOÀI CỬA"}
                                                                     chanelName={"VOV Live - Đọc Truyện"}
                                                                     chanelFollower={514}
                                                                     iconOnRight={"📻"}
                                                                     image={{ uri: "https://i3.ytimg.com/vi/RD9cik1KvL8/maxresdefault.jpg" }}/>
                                                    <VOVTubeCardItem title={"Kể Chuyện Đêm Khuya!"}
                                                                     chanelName={"VOV Live - Đọc Truyện"}
                                                                     chanelFollower={514} iconOnRight={"📻"}
                                                                     image={{ uri: "https://vcdn1-kinhdoanh.vnecdn.net/2022/09/12/-5148-1662993085.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=u9LBROjOEEp4Nc_TgWMv2Q" }}/>
                                                </>


                                            default:
                                                return null;
                                        }
                                    }
                            )()

                        }
                    </View>*/}
                </>
            </AvatarHeaderScrollView>
    );
};

export default ScreenVOVTube;

const coverWidth = PixelRatio.roundToNearestPixel(Devices.width / 3 * 2);
const coverHeight = PixelRatio.roundToNearestPixel(coverWidth / 16 * 9);

const styles = StyleSheet.create({
    container: {
        height: coverHeight + 24 + Spacings.s4,
        marginTop: Spacings.s2,
    },

    cardContainer: {
        width: coverWidth,
        height: coverHeight,
        marginHorizontal: Spacings.s1,
    },
    cardItemImage: {
        width: coverWidth,
        height: coverHeight,
        //backgroundColor: "#fff",
        borderRadius: Spacings.s1,
    },
    cardCover: {
        ...StyleSheet.absoluteFillObject
    },
})
