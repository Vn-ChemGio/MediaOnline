import { ComponentType }                                                        from "react";
import { CompositeNavigationProp, CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { BottomTabNavigationProp, BottomTabScreenProps }                        from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps }                                               from "react-native-screens/native-stack";
import { StackNavigationProp, StackScreenProps }                                from "@react-navigation/stack";
import ScreenPersonal                                                           from "~views/ApplicationScreens/ScreenPersonal/ScreenPersonal";

// Router NavigationParamList
export type RootStackNavigationParamList = {
    Application: NavigatorScreenParams<ApplicationTabNavigationParamList>,
    Authenticate: NavigatorScreenParams<AuthenticateStackNavigationParamList>,
    ScreenWebView: {
        uri: string
    }
}

export type ApplicationTabNavigationParamList = {
    ScreenDiscover: undefined;
    ScreenRadio: undefined;
    ScreenVOVCharts: undefined;
    ScreenIndividual: undefined;
    ScreenVOVNews: undefined;
    ScreenVOVTube: undefined;
    ScreenPersonal: undefined;
};

export type AuthenticateStackNavigationParamList = {
    ScreenLogin: undefined;
    ScreenRegister: undefined;
    ScreenForgotPassword: undefined;
};


export type ScreenVOVNewsChannelNavigationParamList = {
    [ screenName: string ]: {
        channel: VOVNewsChannelItem
    }
}

export type DiscoveryScreenNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<ApplicationTabNavigationParamList, "ScreenDiscover">,
    StackNavigationProp<RootStackNavigationParamList>>;

export type RadioScreenNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<ApplicationTabNavigationParamList, "ScreenRadio">,
    StackNavigationProp<RootStackNavigationParamList>>;

export type NewsScreenNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<ApplicationTabNavigationParamList, "ScreenVOVNews">,
    StackNavigationProp<RootStackNavigationParamList>>;

export type YouTubeScreenNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<ApplicationTabNavigationParamList, "ScreenVOVTube">,
    StackNavigationProp<RootStackNavigationParamList>>;


export interface TabBarItem {
    // type: typeof AntDesign ;
    icon: string;
    label: string;
    route: string;
    component: ComponentType<any> | undefined
}

export interface NewsItem {
    title: string,
    time: string,
    progress: number,
    id: number,
}


export interface MusicItem {
    title: string,
    artis: string,
    thumbnail: string,
    length: string,
    star?: number,
    id: number,

}

export interface VOVNewsChannelItem {
    source: string;
    path: string;
    name: string;
    icon: string;
    iconFocussed: string;
    rssUrl: string;
    imageUrl: string;

}

interface RSSParseItemInterface {
    title: string;
    description: string;
    link: string;
    published: number;
    created: number,
    category: string [];
    enclosures: string[];
    media: object
}

export interface RSSParseInterface {
    feedUrl?: string;
    title: string;
    description: string;
    link: string;
    items: RSSParseItemInterface []
}

export interface RSSItemNews {
    title: string;
    description: string;
    link: string;
    published: number;
    thumbnail: string
}
