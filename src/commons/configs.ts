import { normalizedFontSize } from "./devices";
import { Colors, Spacings }   from "react-native-ui-lib";
import { PixelRatio }         from "react-native";


export const PRIMARY_COLOR   = "#3D5CFF";
export const SECONDARY_COLOR = "#FFEBF0";
export const TERTIARY_COLOR  = "#EAEAFF";
export const WHITE_COLOR     = "#FFFFFF";
export const BLACK_COLOR     = "#FFFFFF";
export const ORANGE_COLOR    = "#FF6905";
export const GREEN_COLOR     = "#38C875";
export const TEXT1_COLOR     = "#1F1F39";
export const TEXT2_COLOR     = "#858597";
export const TEXT3_COLOR     = "#B8B8D2";
export const TEXT4_COLOR     = "#F4F3FD";
export const TEXT5_COLOR     = "#440687";
export const LIGHT_COLOR     = "#1F1F39";
export const LIGHTER_COLOR   = PRIMARY_COLOR;
export const DARK_COLOR      = "#1F1F39";
export const DARKER_COLOR    = "#1F1F39";


const configColor = {
    // primaryColor: '#3D5CFF',
    // secondaryColor: '#FFEBF0',
    // textColor: '#1F1F39',
    // errorColor: '#E63B2E',
    // successColor: '#ADC76F',
    // warnColor: '#FF963C',
    // textHeading:'#1F1F39',

    light: {
        primaryVOVDiscover: Colors.rgba( 255, 145, 0, 1 ),
        primaryVOVRadio:    Colors.rgba( 78, 15, 255, 1 ),
        primaryVOVNews:     Colors.rgba( 234, 17, 126, 1 ),
        primaryVOVTube:     Colors.rgba( 234, 17, 57, 1 ),
    },
    dark:  {
        primaryVOVDiscover: Colors.orange80,
        primaryVOVRadio:    Colors.blue80,
        primaryVOVNews:     Colors.getColorTint( Colors.rgba( 234, 17, 126, 1 ), 80 ),
        primaryVOVTube:     Colors.red80,
    }
}

const configTypography = {
    sectionTitle: {
        fontSize:   18,
        lineHeight: 24,
        fontFamily: "AvertaStd-Bold",
        marginBottom:      Spacings.s2,
        paddingHorizontal: Spacings.s4,
    },
    bodyTitle:    {
        fontSize:   PixelRatio.roundToNearestPixel( 12 ),
        fontFamily: "AvertaStd-Semibold",
        //color: Colors.white,
    },
    bodyContent:    {
        fontSize:   PixelRatio.roundToNearestPixel( 10 ),
        fontFamily: "AvertaStd-Regular",
    },
    cardBodyHighLight:{
        fontSize:   PixelRatio.roundToNearestPixel( 8 ),
        padding: 2,
        borderRadius: 2,
        fontFamily: "AvertaStd-Semibold",
        backgroundColor:Colors.red10,
        color:Colors.white,
        textTransform:"uppercase"
    },
    
    welcomeText:     {
        fontSize:   normalizedFontSize( 24 ),
        fontWeight: "700",
        fontFamily: "Poppins-SemiBold",
        color:      Colors.white,
    },
    welcomeTextDark: {
        fontSize:   normalizedFontSize( 24 ),
        fontWeight: "700",
        fontFamily: "Poppins-SemiBold",
        color:      Colors.primary,
    },
    welcomeSubText:  {
        fontSize:   normalizedFontSize( 14 ),
        fontWeight: "400",
        fontFamily: "Poppins",
        color:      Colors.white,
    },

    playingTitle:       {
        fontSize:   normalizedFontSize( 18 ),
        fontWeight: "600",
        fontFamily: "Poppins-SemiBold",
        color:      Colors.textDefault,
    },
    playingDescription: {
        fontSize:   normalizedFontSize( 11 ),
        fontWeight: "400",
        fontFamily: "Poppins",
        color:      Colors.textGeneral,
    },


    heading:    {
        fontSize:   18,
        fontWeight: "600",
        fontFamily: "Poppins-SemiBold",
        color:      "#1F1F39",
    },
    heading2:   {
        fontSize:   18,
        fontWeight: "600",
        fontFamily: "Poppins-Medium",
        color:      Colors.textDefault,
    },
    subheading: { fontSize: 28, fontWeight: "500" },
    body:       {
        fontSize:   normalizedFontSize( 14 ),
        fontWeight: "400",
        fontFamily: "Poppins-Regular",
    },
    bodyLight:  {
        fontSize:   normalizedFontSize( 14 ),
        fontWeight: "400",
        fontFamily: "Poppins-Regular",
    },
    body2:      {
        fontSize:   normalizedFontSize( 12 ),
        fontWeight: "400",
        fontFamily: "Poppins-Regular",
        color:      "#B8B8D2",
    },
    chip:       {
        fontSize:   normalizedFontSize( 10 ),
        fontWeight: "400",
        fontFamily: "Poppins-Regular",
        lineHeight: 1.5,
        color:      "#FF6905",
    }
}

const configSpacing = {
    page:       20,
    card:       12,
    gridGutter: 16,
}


export const configTheme = { configColor, configTypography, configSpacing }
