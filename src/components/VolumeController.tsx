import React, {useEffect, useState} from 'react';

import VolumeControl, {VolumeControlEvents} from "react-native-volume-control";
import {Colors, Slider} from "react-native-ui-lib";
import { StyleSheet, View } from "react-native";
//import Slider from '@react-native-community/slider';

const VolumeController = () => {
  let [volume, setVolume] = useState<number>(1)

  //
  // useEffect(() => {
  //   (async () => setVolume(await VolumeControl.getVolume()))()
  //
  //   //@ts-ignore
  //   let volEvent = VolumeControlEvents.addListener(
  //     "VolumeChanged",
  //     volumeEvent,
  //   );
  //   return () => {
  //     volEvent.remove()
  //   };
  // })
  //
  // // Updates Slider UI when hardware buttons change volume
  // const volumeEvent = (event: { volume: number }) => {
  //   setVolume(event.volume);
  // };
  //
  // // Updates device volume
  const sliderChange = (value: number) => {
   // VolumeControl.change(value);
  }


  return (
    <View/>
      // <Slider/>
  )
}

export default VolumeController;

const styles = StyleSheet.create({
  thumb: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderColor: Colors.red60,
    borderWidth: 5,
    shadowColor: Colors.white,
  },
  activeThumb: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
  },
})

