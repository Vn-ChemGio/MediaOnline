import React         from "react";
import { View }      from "react-native";
import { MD2Colors } from "react-native-paper";
import { Colors }    from "react-native-ui-lib";
import Icon          from "react-native-vector-icons/Ionicons"

import { AvatarHeaderScrollView } from "~components";


const ScreenRadio = () => {
    return (
        <AvatarHeaderScrollView
            rightTopIcon={ () => <Icon name="ios-search" size={ 24 } color={ MD2Colors.white }/> }
            rightTopIconOnPress={ () => {
            } }
            backgroundColor={ Colors.primaryVOVRadio }
            title={ "VOV Media" }
            subtitle={ "Ứng dụng nghe Radio Việt Nam trực tuyến độc quyền " }
        >
            <View>

            </View>
        </AvatarHeaderScrollView>

    );
};

export default ScreenRadio;
