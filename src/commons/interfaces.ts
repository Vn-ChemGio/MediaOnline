
import {ComponentType} from "react";


export interface TabBarItem {
   // type: typeof AntDesign ;
    icon:  string;
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
