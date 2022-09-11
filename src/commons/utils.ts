import { isBigScreen, isBiggestPhoneScreen, isNormalScreen } from "./devices";

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

export const getFeatureViewAnimation = ( animatedValue, outputX: number ) => {
    const TRANSLATE_X_INPUT_RANGE = [ 0, 80 ];
    const translateY              = {
        translateY: animatedValue.interpolate( {
            inputRange:  [ 0, 100 ],
            outputRange: [ 0, -50 ],
            extrapolate: "clamp",
        } ),
    };
    return {
        transform: [
            {
                translateX: animatedValue.interpolate( {
                    inputRange:  TRANSLATE_X_INPUT_RANGE,
                    outputRange: [ 0, outputX ],
                    extrapolate: "clamp",
                } ),
            },
            translateY,
        ],
    };
};
