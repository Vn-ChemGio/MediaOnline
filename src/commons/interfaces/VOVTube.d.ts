export type YouTubeVideoId = {
    kind: string;
    videoId: string;
}
export type YouTubeVideoThumbnailItem = {
    url: string;
    width: number;
    height: number;
}
export type YouTubeVideoThumbnails = {
    default: YouTubeVideoThumbnailItem;
    medium: YouTubeVideoThumbnailItem;
    high: YouTubeVideoThumbnailItem;
}

export type YouTubeVideoLiveBroadcastContent = "none" | "live" | "completed";

export type YouTubeVideoSnippet = {
    title: string,
    description: string;
    channelId: string;
    channelTitle: string;
    
    thumbnails: YouTubeVideoThumbnails;
    liveBroadcastContent: YouTubeVideoLiveBroadcastContent;
    
    publishTime: string;
    publishedAt: string;
}

export interface YouTubeVideo {
    kind: string;
    etag: string;
    id: YouTubeVideoId;
    snippet: YouTubeVideoSnippet
}