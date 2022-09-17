import React            from "react";
import { Colors, View } from "react-native-ui-lib";
import Icon             from "react-native-vector-icons/Ionicons";

import { AvatarHeaderScrollView } from "~components";

const ScreenDiscover = () => {
    return (
        <AvatarHeaderScrollView
            rightTopIcon={ () => <Icon name="ios-search" size={ 24 } color={ Colors.white }/> }
            rightTopIconOnPress={ () => {
            } }
            backgroundColor={ "rgb(255, 145, 0)" }
            title={ "VOV Center" }
            subtitle={ "Ứng dụng nghe thông tin độc quyền của \nĐài Tiếng Nói Việt Nam. \nMake with ❤ by WindBlade" }
        >
            <View>
            </View>
        </AvatarHeaderScrollView>
    );
};

export default ScreenDiscover;

