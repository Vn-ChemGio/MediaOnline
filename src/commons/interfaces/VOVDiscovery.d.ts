import { YouTubeVideo } from "~commons/interfaces/VOVTube";
import { NewsItem }     from "~commons/interfaces/VOVNews";
import { RadioItem }    from "~commons/interfaces/VOVRadio";


export interface VOVDiscovery {
    radioChannels: RadioItem[];
    news: NewsItem[];
    events: NewsItem [];
    VOVTube: YouTubeVideo[]
}