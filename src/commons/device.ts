import {Dimensions, PixelRatio, Platform} from "react-native";


const {width, height} = Dimensions.get("window");
const DeviceDimension = {width: width, height: height};

const DESIGN_DEVICE_WIDTH = 375;

export {DESIGN_DEVICE_WIDTH, DeviceDimension as Devices}

const responsiveHeight = (h: number) => height * (h / 100);
const responsiveWidth = (w: number) => width * (w / 100);

const breakpoints = {
    smallPhoneWidth: 320,
    smallPhoneHeight: 600,
    mediumPhoneWidth: 414,
    bigPhoneWidth: 480,
};

export function ifIphoneX(iphoneXStyle: number, regularStyle: number) {
    if (isIphoneX()) {
        return iphoneXStyle;
    }
    return regularStyle;
}

export const isIphoneX = (): boolean => {
    const dimen = Dimensions.get('window');
    return (
        Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        (dimen.height === 812 ||
         dimen.width === 812 ||
         dimen.height === 896 ||
         dimen.width === 896)
    );
}

const isSmallScreen = width <= breakpoints.smallPhoneWidth || height <= breakpoints.smallPhoneHeight;
const isNormalScreen = width > breakpoints.smallPhoneWidth && width < breakpoints.mediumPhoneWidth;
const isBigScreen = width >= breakpoints.mediumPhoneWidth;
const isBiggestPhoneScreen = width >= breakpoints.bigPhoneWidth;

const isAndroid = Platform.OS === 'android';

const normalizedFontSize = (basicFontSize: number): number => {
    if (isSmallScreen) {
        return basicFontSize - 6;
    }
    if (isNormalScreen) {
        return basicFontSize;
    }
    if (isBigScreen) {
        return basicFontSize + 1;
    }

    return basicFontSize;
};

export {
    responsiveHeight,
    responsiveWidth,
    isAndroid,
    isSmallScreen,
    isNormalScreen,
    isBigScreen,
    isBiggestPhoneScreen,
    normalizedFontSize,
};
