import { Dimensions, PixelRatio } from "react-native";

const { width } = Dimensions.get("window");

export interface IconProps {
    active?: boolean;
}

const numberOfIcons = 4;
const horizontalPadding = 48;
export const DURATION = 450;
export const PADDING = 16;
export const SEGMENT = PixelRatio.roundToNearestPixel(width / numberOfIcons);
export const ICON_SIZE = SEGMENT - horizontalPadding*1.4;

export const Colors = {
    primary: "#0AC66F",
    border: "#616164",
};
