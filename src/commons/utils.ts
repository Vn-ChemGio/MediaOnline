import {isBiggestPhoneScreen, isBigScreen, isNormalScreen} from "./devices";

export const normalizedSpacingSize = (defaultSize: number, sizeNormal?: number, sizeBig?: number, sizeBiggest?: number): number => {
    if (isNormalScreen)
        return sizeNormal || defaultSize;

    if (isBigScreen)
        return sizeBig || sizeNormal || defaultSize;

    if (isBiggestPhoneScreen)
        return sizeBiggest || sizeBig || sizeNormal || defaultSize;

    return defaultSize;
};
export const getCloser = (value: number, checkOne: number, checkTwo: number): number =>
    Math.abs(value - checkOne) < Math.abs(value - checkTwo) ? checkOne : checkTwo;
