import React    from "react";
import { View } from "react-native";
import { MD2Colors }        from "react-native-paper";
import { Colors, Spacings } from "react-native-ui-lib";
import Icon                 from "react-native-vector-icons/Ionicons";

import { AvatarHeaderScrollView }                                  from "~components";
import { CardDiscoverEvents, CardDiscoverNews, CardDiscoverRadio } from "./components";


const ScreenDiscover = () => {
    return (
        <AvatarHeaderScrollView
            rightTopIcon={ () => <Icon name="ios-search" size={ 24 } color={ MD2Colors.white }/> }
            rightTopIconOnPress={ () => {
            } }
            backgroundColor={ Colors.primaryVOVNews }
            title={ "VOV Center" }
            subtitle={ "Ứng dụng nghe thông tin độc quyền của \nĐài Tiếng Nói Việt Nam. \nMake with ❤ by WindBlade" }
        >

            <CardDiscoverRadio/>

            <CardDiscoverEvents/>

            <CardDiscoverNews/>

            <View style={ { height: Spacings.s4 } }/>


        </AvatarHeaderScrollView>
    );
};

export default ScreenDiscover;

