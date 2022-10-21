import React, { useCallback, useState } from "react";
import { View }                         from "react-native";
import { Colors, Spacings }             from "react-native-ui-lib";
import Icon                             from "react-native-vector-icons/Ionicons"

import { AvatarHeaderScrollView, IOSSegmentedControl, VOVTubeCardItem } from "~components";


const ScreenVOVTube = () => {
    const [ segmentsIndex, setSegmentsIndex ] = useState<number>( 0 )

    const onChangeIndex = useCallback( ( index: number ) => {
        setSegmentsIndex( index )
    }, [] );

    return (
        <AvatarHeaderScrollView
            rightTopIcon={ () => <Icon name="options-outline" size={ 24 } color={ Colors.white }/> }
            rightTopIconOnPress={ () => {
            } }
            backgroundColor={ Colors.primaryVOVTube }
            title={ "VOV Tube" }
            subtitle={ "Sóng xanh trên Internet.\nTruyền thông không giới hạn." }
        >
            <>
                <IOSSegmentedControl
                    segments={ [
                        {
                            label:      "Trực tiếp",
                            iconSource: Icon.getImageSourceSync( "radio-outline" ),
                            iconStyle:  { marginHorizontal: Spacings.s4, width: 16, height: 16 },
                        }, {
                            label:       "Đã phát",
                            iconSource:  Icon.getImageSourceSync( "calendar-outline" ),
                            iconStyle:   { marginHorizontal: Spacings.s4, width: 16, height: 16 },
                            iconOnRight: true
                        }
                    ] }
                    onChangeIndex={ onChangeIndex }
                    containerStyle={ {
                        width: "100%"
                    } }

                />
                <View>
                    {
                        (
                            () => {
                                switch ( segmentsIndex ) {
                                    case 0:
                                        return <VOVTubeCardItem title={ "Kể Chuyện Đêm Khuya!" } chanelName={ "VOV Live - Đọc Truyện" } chanelFollower={ 514 }
                                                                iconOnRight={ "📻" }
                                                                image={ { uri: "https://i3.ytimg.com/vi/HzvSKVI_twY/maxresdefault.jpg" } }/>

                                    case 1:
                                        return <>
                                            <VOVTubeCardItem title={ "Truyện Đêm Khuya: BIẾN HÌNH" } chanelName={ "VOV Live - Đọc Truyện" } chanelFollower={ 514 }
                                                             iconOnRight={ "📻" }
                                                             image={ { uri: "https://i3.ytimg.com/vi/zY3Dx4szras/maxresdefault.jpg" } }/>
                                            <VOVTubeCardItem title={ "Truyện Đêm Khuya: LÁ MẤN RƠI NGOÀI CỬA" } chanelName={ "VOV Live - Đọc Truyện" } chanelFollower={ 514 }
                                                             iconOnRight={ "📻" }
                                                             image={ { uri: "https://i3.ytimg.com/vi/RD9cik1KvL8/maxresdefault.jpg" } }/>
                                            <VOVTubeCardItem title={ "Kể Chuyện Đêm Khuya!" } chanelName={ "VOV Live - Đọc Truyện" } chanelFollower={ 514 } iconOnRight={ "📻" }
                                                             image={ { uri: "https://vcdn1-kinhdoanh.vnecdn.net/2022/09/12/-5148-1662993085.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=u9LBROjOEEp4Nc_TgWMv2Q" } }/>
                                        </>


                                    default:
                                        return null;
                                }
                            }
                        )()

                    }
                </View>
            </>
        </AvatarHeaderScrollView>
    );
};

export default ScreenVOVTube;
