import React         from "react";
import { MD2Colors } from "react-native-paper";
import Icon          from "react-native-vector-icons/Ionicons";

import { AvatarHeaderScrollView }                                                      from "~components";
import { theme }                                                                                  from "~commons";
import { CardDiscoverEvents, CardDiscoverNews, CardDiscoverRadio, CardDiscoverTrending, CardDiscoverTube } from "./components";

const ScreenDiscover = () => {
    return (
        <AvatarHeaderScrollView
            rightTopIcon={ () => <Icon name="ios-search" size={ 24 } color={ MD2Colors.white }/> }
            rightTopIconOnPress={ () => {
            } }
            backgroundColor={ theme.colors.primaryVOVDiscover }
            title={ "VOV Center" }
            subtitle={ "Ứng dụng nghe thông tin độc quyền của \nĐài Tiếng Nói Việt Nam. \nMake with ❤ by WindBlade" }
        >


                <CardDiscoverRadio/>

                <CardDiscoverEvents/>

                <CardDiscoverNews/>




        </AvatarHeaderScrollView>
    );
};

export default ScreenDiscover;

