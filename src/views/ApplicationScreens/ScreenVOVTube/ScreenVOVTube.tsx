import { API_HOST } from "@env";
import axios        from "axios";

import React, { useCallback, useEffect, useState } from "react";
import { PixelRatio, StyleSheet, View }            from "react-native";
import { Colors, LoaderScreen, Spacings }          from "react-native-ui-lib";
import Icon                                        from "react-native-vector-icons/Ionicons"

import { AvatarHeaderScrollView, IOSSegmentedControl, VOVTubeCardItem } from "~components";
import { Devices }                                                      from "~commons";
import { YouTubeVideo }                                                 from "~commons/interfaces/VOVTube";

const ScreenVOVTube = () => {
          const [ segmentsIndex, setSegmentsIndex ] = useState<number>( 0 )
          const [ loading, setLoading ]             = useState<boolean>( true );
          const [ data, setData ]                   = useState<YouTubeVideo[]>( [] );

          const onChangeIndex = useCallback( ( index: number ) => {
              setSegmentsIndex( index )
          }, [] );

          useEffect( () => {
              (
                  async () => {
                      try {
                          !loading && setLoading( true );
                          let dataFetch: YouTubeVideo[] = (
                              await axios.get( `${ API_HOST }/VOVTube?type=video&eventType=${ segmentsIndex == 0 ? "live" : "none" }` )
                          ).data;
                          setData( dataFetch );

                      } catch ( e ) {

                      } finally {
                          setLoading( false )
                      }

                  }
              )()
          }, [ segmentsIndex ] )
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
                              marginHorizontal: Spacings.s8
                          } }

                      />
                      {
                          loading ?
                          <View style={ { height: Devices.height * 0.3 } }>
                              <LoaderScreen message={ "Đang tải dữ liệu" } color={ Colors.grey40 }/>
                          </View>
                                  :
                          data.map( ( item, index ) => (
                              <VOVTubeCardItem item={ item } index={ index } key={`Card-Tube-${ item.etag }-${index}`}/>
                          ) )
                      }
                  </>
                  <View style={ { height: Spacings.s4 } }/>

              </AvatarHeaderScrollView>
          );
      }
;

export default ScreenVOVTube;

const coverWidth
          =
          PixelRatio.roundToNearestPixel
          (
              Devices.width / 3 * 2 );
const coverHeight
          =
          PixelRatio.roundToNearestPixel
          (
              coverWidth / 16 * 9 );

const styles
          =
          StyleSheet.create
          (
              {
                  container:
                      {
                          height:    coverHeight + 24 + Spacings.s4,
                          marginTop: Spacings.s2,
                      }
                  ,

                  cardContainer:
                      {
                          width:            coverWidth,
                          height:           coverHeight,
                          marginHorizontal: Spacings.s1,
                      }
                  ,
                  cardItemImage:
                      {
                          width:  coverWidth,
                          height: coverHeight,
                          //backgroundColor: "#fff",
                          borderRadius: Spacings.s1,
                      }
                  ,
                  cardCover:
                      {
                          ...StyleSheet.absoluteFillObject
                      }
                  ,
              } )
