import React            from "react";
import { Colors, View } from "react-native-ui-lib";
import Icon             from "react-native-vector-icons/Ionicons"

import { AvatarHeaderScrollView } from "~components";

import { EventCarousel, NewsCarousel } from "./components";


const ScreenRadio = () => {
    return (
        <AvatarHeaderScrollView
            rightTopIcon={ () => <Icon name="ios-search" size={ 24 } color={ Colors.white }/> }
            rightTopIconOnPress={ () => {
            } }
            backgroundColor={ "rgb(78,15,255)" }
            title={ "VOV Media" }
            subtitle={ "Ứng dụng nghe Radio Việt Nam trực tuyến độc quyền " }
        >
            <View>
                <EventCarousel/>
                <NewsCarousel/>
            </View>
        </AvatarHeaderScrollView>

    );
};

export default ScreenRadio;
