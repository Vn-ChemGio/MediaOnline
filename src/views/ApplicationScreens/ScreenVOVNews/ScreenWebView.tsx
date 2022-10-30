import React                from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { WebView }          from "react-native-webview";

import { ScreenVOVNewsNavigationParamList } from "~commons";

const ScreenVOVNewsChannel = ( props: StackScreenProps<ScreenVOVNewsNavigationParamList, "ScreenWebView"> ) => {

    return <WebView source={ { uri: props.route.params.uri } }/>;
};

export default ScreenVOVNewsChannel;

