import React                from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { WebView }          from "react-native-webview";

import { ScreenVOVNewsChannelStackNavigationParamList } from "~commons";


const ScreenVOVNewsChannel = ( props: StackScreenProps<ScreenVOVNewsChannelStackNavigationParamList, "ScreenWebView"> ) => {
    return <WebView source={ { uri: props.route.params.uri } }/>;
};

export default ScreenVOVNewsChannel;

