import React, { useEffect } from "react";
import { NativeStackScreenProps } from "react-native-screens/native-stack";
import { WebView } from "react-native-webview";

import { RootStackNavigationParamList } from "~commons";

type ScreenWebViewProps = NativeStackScreenProps<RootStackNavigationParamList, "ScreenWebView">;

const ScreenWebView = (props: ScreenWebViewProps) => {
    const handleHome = () => {
        props.navigation.navigate("Application", {
            screen: "ScreenDiscover"
        })
    }
    return <WebView source={{ uri: props.route.params.uri }}/>;
};

export default ScreenWebView;

