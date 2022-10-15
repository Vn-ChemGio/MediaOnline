import React            from "react";

import { WebView }                                from 'react-native-webview';
import { StackScreenProps }                       from "@react-navigation/stack";
import { ScreenVOVNewsChannelNavigatorParamList } from "~views/ApplicationScreens/ScreenVOVNews/ScreenVOVNewsChannelNavigator";


const ScreenVOVNewsChannel = (props: StackScreenProps<ScreenVOVNewsChannelNavigatorParamList, 'ScreenVOVNewsChannel'>) => {
    //@ts-ignore
    return <WebView source={{ uri: props.route.params.uri  }} />;
};

export default ScreenVOVNewsChannel;

