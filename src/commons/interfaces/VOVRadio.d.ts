export interface RadioItem {
    "id": string,
    "title": string,
    "subTitle": string,
    "avatarUrl": string,
    "mediaUrl": string,
    "isGroup": boolean,
    "order"?: number,
    "parentId"?: string,
    "channelType": "audio" | "video"
}