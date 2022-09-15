// @ts-ignore
import { parse } from "himalaya";

import { isBigScreen, isBiggestPhoneScreen, isNormalScreen } from "./devices";
import { RSSItemNews, RSSParseInterface }                    from "./interfaces";

export const normalizedSpacingSize = ( defaultSize: number, sizeNormal?: number, sizeBig?: number, sizeBiggest?: number ): number => {
    if ( isNormalScreen )
        return sizeNormal || defaultSize;

    if ( isBigScreen )
        return sizeBig || sizeNormal || defaultSize;

    if ( isBiggestPhoneScreen )
        return sizeBiggest || sizeBig || sizeNormal || defaultSize;

    return defaultSize;
};
export const getCloser             = ( value: number, checkOne: number, checkTwo: number ): number =>
    Math.abs( value - checkOne ) < Math.abs( value - checkTwo ) ? checkOne : checkTwo;


const getThumbnailAndDescriptionFromRSSDescription = ( description: string ): [ string, string ] => {

    let json = parse( description );
    if ( !json.length )
        return [ "", "" ];

    else {
        const [ elementData, data ] = json;


        let thumbnail = elementData.children?.find(
            ( children: { tagName: string, attribute: { key: string, value: string }[] } ) => children.tagName == "img" )?.attributes.find(
            ( attribute: { key: string, value: string } ) => attribute.key == "src"
        )
        return [ thumbnail ? thumbnail.value : "", data ? data.content : "" ]
    }


}

export const getRssData = ( rss: RSSParseInterface, length: number = 10 ): RSSItemNews[] => {
    return rss.items.map( ( { title, description, link, published } ) => {
        const [ thumbnail, textDescription ] = getThumbnailAndDescriptionFromRSSDescription( description )
        return {
            title,
            description: textDescription,
            link,
            published,
            thumbnail
        }
    } ).filter( ( { thumbnail, description } ) => !!thumbnail && !!description ).slice(0, length)
}
